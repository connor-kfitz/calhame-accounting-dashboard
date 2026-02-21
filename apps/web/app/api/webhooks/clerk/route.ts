import { headers } from "next/headers";
import { Webhook } from "svix";
import { NextResponse } from "next/server";
import { WebhookEvent } from "@clerk/nextjs/server";
import { pool } from "@/lib/db";

export async function POST(req: Request) {
  const payload = await req.text();
  const headerPayload = await headers();

  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new NextResponse("Missing Svix headers", { status: 400 });
  }

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return new NextResponse("Invalid signature", { status: 400 });
  }

  if (evt.type === "user.created" || evt.type === "user.updated") {
    const {
      id: clerk_id,
      first_name,
      last_name,
      email_addresses
    } = evt.data;

    const primaryEmail = email_addresses?.[0]?.email_address;

    try {
      const result = await pool.query(
        `INSERT INTO users (clerk_id, first_name, last_name, email, created_at, updated_at)
         VALUES ($1, $2, $3, $4, NOW(), NOW())
         ON CONFLICT (clerk_id)
         DO UPDATE SET
           first_name = EXCLUDED.first_name,
           last_name = EXCLUDED.last_name,
           email = EXCLUDED.email,
           updated_at = NOW()
         RETURNING *`,
        [clerk_id, first_name, last_name, primaryEmail]
      );

      if (result.rowCount === 0) {
        console.error("Failed to upsert user:", { clerk_id, first_name, last_name, primaryEmail });
        return new NextResponse("Database error", { status: 500 });
      }

    } catch (error) {
      console.error("Database error:", error);
      return new NextResponse("Database error", { status: 500 });
    }
  }

  return new NextResponse("User synced", { status: 200 });
}
