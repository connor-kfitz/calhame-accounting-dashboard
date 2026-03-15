import { pool } from "@/lib/db";
import type { PoolClient } from "pg";

export default async function getCompanyById(companyId: string, client?: PoolClient) {
  const database = client ?? pool;

  const result = await database.query(`
    SELECT
      c.id AS "companyId",
      c.name AS "companyName",
      ap.display_name AS "providerName"
    FROM companies c
    LEFT JOIN accounting_providers ap
      ON ap.id = c.provider_id
    WHERE c.id = $1
  `, [companyId]);

  return result.rows[0];
}
