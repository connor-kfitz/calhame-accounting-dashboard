import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ clerkId: string }> }
) {
  try {
    const { clerkId } = await params;
    const result = await pool.query(
      `SELECT company FROM users WHERE clerk_id = $1`,
      [clerkId]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ company: "" });
    }

    return NextResponse.json({
      company: result.rows[0].company || "" 
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
