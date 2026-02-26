import { pool } from "@/lib/db";
import { encryptTokenForStorage } from "@/lib/token-crypto";
import type { PoolClient } from "pg";

export async function storeAccountingConnection(
  companyId: string,
  providerName: string,
  accessToken: string,
  refreshToken: string,
  accessTokenExpiresAt: Date,
  refreshTokenExpiresAt: Date,
  client?: PoolClient
) {
  const databbase = client ?? pool;

  const providerResult = await databbase.query(
    `SELECT id FROM accounting_providers WHERE display_name = $1`,
    [providerName]
  );

  if (providerResult.rowCount === 0) {
    throw new Error("Provider not found");
  }
  
  const providerId = providerResult.rows[0].id as string;

  const encryptedAccessToken = encryptTokenForStorage(accessToken);
  const encryptedRefreshToken = encryptTokenForStorage(refreshToken);

  const result = await databbase.query(
    `WITH company AS (
       SELECT id
       FROM companies
       WHERE company_id = $1
     )
     INSERT INTO accounting_connections (
       company_id,
       provider_id,
       access_token,
       refresh_token,
       access_token_expires_at,
       refresh_token_expires_at,
       status,
       created_at,
       updated_at
     )
     SELECT
       company.id,
       $2,
       $3,
       $4,
       $5,
       $6,
       'active',
       NOW(),
       NOW()
     FROM company
     ON CONFLICT (company_id, provider_id)
     DO UPDATE SET
       access_token = EXCLUDED.access_token,
       refresh_token = EXCLUDED.refresh_token,
       access_token_expires_at = EXCLUDED.access_token_expires_at,
       refresh_token_expires_at = EXCLUDED.refresh_token_expires_at,
       status = 'active',
       updated_at = NOW()
     RETURNING *`,
    [companyId, providerId, encryptedAccessToken, encryptedRefreshToken, accessTokenExpiresAt, refreshTokenExpiresAt ]
  );

  if (result.rowCount === 0) {
    throw new Error(
      "Failed to store accounting connection"
    );
  }

  return result.rows[0];
}
