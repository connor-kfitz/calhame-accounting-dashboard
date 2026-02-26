import { pool } from "@/lib/db";
import type { PoolClient } from "pg";

export async function storeCompanyMembership(clerkId: string, companyId: string, role: string = "member", client?: PoolClient) {
	const database = client ?? pool;

	const userResult = await database.query(
    `SELECT id FROM users WHERE clerk_id = $1`,
    [clerkId]
  );

	if (userResult.rowCount === 0) {
		throw new Error("User not found");
  }

  const userId = userResult.rows[0].id as string;

	const result = await database.query(
		`INSERT INTO company_memberships (user_id, company_id, role, created_at)
		 VALUES ($1, $2, $3, NOW())
		 ON CONFLICT (user_id, company_id)
		 DO UPDATE SET
			 role = EXCLUDED.role
		 RETURNING *`,
		[userId, companyId, role]
	);

	if (result.rowCount === 0) {
		throw new Error("Failed to store company membership");
	}

	return result.rows[0];
}
