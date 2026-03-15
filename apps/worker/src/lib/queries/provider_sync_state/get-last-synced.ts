import type { PoolClient } from "pg";
import { pool } from "../../db.js";

export async function getLastSyncedAt(
  connectionId: string, entityType: string, client?: PoolClient
): Promise<Date | null> {
  const database = client ?? pool;

  const result = await database.query(
    `SELECT last_synced_at 
     FROM provider_sync_state 
     WHERE connection_id = $1 AND entity_type = $2`,
    [connectionId, entityType]
  );

  if (result.rows.length === 0) {
    return null;
  }

  return result.rows[0].last_synced_at;
}
