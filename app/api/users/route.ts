import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function PUT(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { company } = await req.json();

    const result = await pool.query(
      `UPDATE users 
       SET company = $1, 
           updated_at = NOW()
       WHERE clerk_id = $2
       RETURNING *`,
      [company, userId]
    );

    if (result.rows.length === 0) {
      return new NextResponse("User not found", { status: 404 });
    }

    return NextResponse.json({
      success: true,
      user: result.rows[0]
    });
    
  } catch (error) {
    console.error("Error updating profile:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
