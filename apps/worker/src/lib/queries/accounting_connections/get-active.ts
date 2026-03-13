import { pool } from "../../db.js";

export async function getActiveAccountingConnections() {
  const result = await pool.query(`
    SELECT 
      ac.id as connection_id,
      c.id as company_id,
      c.provider_id
    FROM accounting_connections ac
    JOIN companies c ON c.id = ac.company_id
    WHERE ac.status = 'active'
      AND ac.access_token IS NOT NULL
  `);
  
  return result.rows;
}
