import { quickbooksRequest } from "../../lib/helpers.js";
import { upsertCogsTransaction } from "../../lib/queries/cogs_transactions/upsert.js";
import { getLastSyncedAt } from "../../lib/queries/provider_sync_state/get-last-synced.js";
import { upsertProviderSyncStateLastSynced } from "../../lib/queries/provider_sync_state/upsert-provider-sync-state-last-synced.js";

const COGS_ENTITY_TYPES = [
  "Bill",
  "VendorCredit"
] as const;

type CogsEntityType = typeof COGS_ENTITY_TYPES[number];


export async function syncBills(
  companyId: string, providerId: string, realmId: string, accessToken: string, 
  connectionId: string
) {
  const entityType = "cogs_transactions";
  
  const lastSyncedAt = await getLastSyncedAt(connectionId, entityType);
  
  console.log(`[COGS Sync] Starting sync for company ${companyId}`);

  if (lastSyncedAt) {
    console.log(`[COGS Sync] Incremental sync from ${lastSyncedAt.toISOString()}`);
  } else {
    console.log(`[COGS Sync] Full sync - fetching ALL historical data`);
  }
  
  let grandTotalTransactions = 0;
  let grandTotalLineItems = 0;

  for (const qbEntityType of COGS_ENTITY_TYPES) {
    try {
      console.log(`\n[COGS Sync] === Syncing ${qbEntityType} transactions ===`);
      
      const { transactionCount, lineItemCount } = await syncCogsEntityType(
        qbEntityType,
        companyId,
        providerId,
        realmId,
        accessToken,
        lastSyncedAt
      );
      
      grandTotalTransactions += transactionCount;
      grandTotalLineItems += lineItemCount;
      
      console.log(`[COGS Sync] ${qbEntityType} completed: ${transactionCount} transactions, ${lineItemCount} line items`);
    } catch (error) {
      console.error(`[COGS Sync] ERROR syncing ${qbEntityType}:`, error);
      console.error(`[COGS Sync] Continuing with remaining entity types...`);
    }
  }
  
  await upsertProviderSyncStateLastSynced(connectionId, entityType);
  
  console.log(`\n[COGS Sync] === COMPLETE ===`);
  console.log(`[COGS Sync] Total: ${grandTotalTransactions} transactions, ${grandTotalLineItems} line items`);
}

async function syncCogsEntityType(
  qbEntityType: CogsEntityType,
  companyId: string,
  providerId: string,
  realmId: string,
  accessToken: string,
  lastSyncedAt: Date | null
): Promise<{ transactionCount: number; lineItemCount: number }> {
  let startPosition = 1;
  let transactionCount = 0;
  let lineItemCount = 0;
  let pageNumber = 1;
  
  while (true) {
    const transactions = await fetchCogsEntityType(
      qbEntityType,
      realmId,
      accessToken,
      lastSyncedAt,
      startPosition
    );
    
    if (transactions.length === 0) {
      if (pageNumber === 1) {
        console.log(`[COGS Sync] ${qbEntityType} - No transactions found`);
      }
      break;
    }
    
    console.log(`[COGS Sync] ${qbEntityType} - Page ${pageNumber}: Found ${transactions.length} transactions`);
    
    for (const transaction of transactions) {
      try {
        const parsed = parseCogsTransaction(transaction, qbEntityType);
        const lastModifiedAt = transaction.MetaData?.LastUpdatedTime || null;
        
        if (parsed.lineItems.length === 0) {
          console.warn(
            `[COGS Sync] ${qbEntityType} ${transaction.Id} has no qualifying line items. ` +
            `Total lines: ${transaction.Line?.length || 0}`
          );
        }
        
        const metadata: Record<string, any> = {
          qbEntityType,
        };
        
        if (transaction.DueDate) {
          metadata.dueDate = transaction.DueDate;
        }
        if (transaction.Balance != null) {
          metadata.balance = transaction.Balance;
        }
        if (transaction.PaymentMethodRef) {
          metadata.paymentMethod = transaction.PaymentMethodRef.name;
        }
        
        for (const lineItem of parsed.lineItems) {
          await upsertCogsTransaction(companyId, {
            providerId,
            transactionId: `${transaction.Id}-${lineItem.lineNum}`,
            transactionType: qbEntityType,
            transactionNumber: transaction.DocNumber || null,
            transactionDate: transaction.TxnDate,
            vendorId: transaction.VendorRef?.value || null,
            vendorName: transaction.VendorRef?.name || null,
            description: lineItem.description || undefined,
            accountId: lineItem.accountId || undefined,
            accountName: lineItem.accountName || undefined,
            amount: lineItem.amount,
            providerMetadata: metadata,
            providerLastModifiedAt: lastModifiedAt
          });
          
          lineItemCount++;
        }
        
        transactionCount++;
      } catch (error) {
        console.error(
          `[COGS Sync] ERROR processing ${qbEntityType} ${transaction.Id}:`,
          error
        );
      }
    }
    
    if (transactions.length < 1000) {
      break;
    }
    
    // Only paginate for full syncs (no lastSyncedAt)
    // Incremental syncs return all matching results in one query
    if (lastSyncedAt) {
      console.log(`[COGS Sync] ${qbEntityType} - Incremental sync returned ${transactions.length} results (max 1000). Some results may be missing if > 1000.`);
      break;
    }
    
    startPosition += 1000;
    pageNumber++;
  }
  
  return { transactionCount, lineItemCount };
}

interface ParsedCogsTransaction {
  lineItems: Array<{
    lineNum: number;
    description: string;
    accountId: string | null;
    accountName: string | null;
    amount: number;
  }>;
}

function parseCogsTransaction(
  transaction: any,
  entityType: CogsEntityType
): ParsedCogsTransaction {
  const lineItems: ParsedCogsTransaction['lineItems'] = [];
  
  const lines = transaction.Line || [];
  
  for (const line of lines) {
    if (line.DetailType === "AccountBasedExpenseLineDetail") {
      const expenseDetail = line.AccountBasedExpenseLineDetail || {};
      const accountRef = expenseDetail.AccountRef || {};
      
      lineItems.push({
        lineNum: line.LineNum || 0,
        description: line.Description || accountRef.name || "COGS Line Item",
        accountId: accountRef.value || null,
        accountName: accountRef.name || null,
        amount: parseFloat(line.Amount || "0")
      });
    } else if (line.DetailType === "ItemBasedExpenseLineDetail") {
      const itemDetail = line.ItemBasedExpenseLineDetail || {};
      const itemRef = itemDetail.ItemRef || {};
      
      lineItems.push({
        lineNum: line.LineNum || 0,
        description: line.Description || itemRef.name || "COGS Line Item",
        accountId: itemDetail.AccountRef?.value || null,
        accountName: itemDetail.AccountRef?.name || null,
        amount: parseFloat(line.Amount || "0")
      });
    } else if (line.DetailType) {
      console.warn(
        `[COGS Sync] Unsupported DetailType '${line.DetailType}' in ${entityType} ${transaction.Id}, Line ${line.LineNum}`
      );
    }
  }
  
  return { lineItems };
}

async function fetchCogsEntityType(
  entityType: CogsEntityType,
  realmId: string,
  accessToken: string,
  lastSyncedAt: Date | null,
  startPosition: number = 1
): Promise<any[]> {
  try {
    let query: string;
    
    if (lastSyncedAt) {
      const lastSyncedISO = lastSyncedAt.toISOString();
      query = `SELECT * FROM ${entityType} WHERE Metadata.LastUpdatedTime > '${lastSyncedISO}' MAXRESULTS 1000`;
    } else {
      query = `SELECT * FROM ${entityType} ORDERBY Id MAXRESULTS 1000 STARTPOSITION ${startPosition}`;
    }
    
    const encodedQuery = encodeURIComponent(query);
    const path = `query?query=${encodedQuery}`;

    const result = await quickbooksRequest(realmId, accessToken, path);
    return result.QueryResponse?.[entityType] || [];
  } catch (error: any) {
    if (error.status === 400) {
      console.warn(
        `[COGS Sync] ${entityType} query failed with 400 - entity type may not be supported or available in this QuickBooks account. Error: ${error.message}`
      );
      return [];
    }
    throw error;
  }
}
