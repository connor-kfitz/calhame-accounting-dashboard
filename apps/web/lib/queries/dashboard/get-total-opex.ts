import { pool } from "@/lib/db";
import type { PoolClient } from "pg";

export default async function getTotalOpex(companyId: string, startDate: string, endDate: string, client?: PoolClient) {
  const database = client ?? pool;

  const result = await database.query(`
    SELECT COALESCE(SUM(amount), 0) AS total_opex
    FROM expenses
    WHERE company_id = $1
    AND date BETWEEN $2 AND $3;
  `, [companyId, startDate, endDate]);

  return result.rows[0].total_opex;
}
