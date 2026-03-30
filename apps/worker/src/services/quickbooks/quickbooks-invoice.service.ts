import { quickbooksRequest } from "../../lib/helpers.js";
import { upsertRevenueTransaction } from "../../lib/queries/revenue_transactions/upsert.js";
import { getLastSyncedAt } from "../../lib/queries/provider_sync_state/get-last-synced.js";
import { upsertProviderSyncStateLastSynced } from "../../lib/queries/provider_sync_state/upsert-provider-sync-state-last-synced.js";

const REVENUE_ENTITY_TYPES = [
  "Invoice",
  "SalesReceipt",
  "CreditMemo",
  "RefundReceipt"
] as const;

type RevenueEntityType = typeof REVENUE_ENTITY_TYPES[number];

export async function syncInvoices(
  companyId: string, providerId: string, realmId: string, accessToken: string, 
  connectionId: string
) {
  const entityType = "revenue_transactions";
  
  const lastSyncedAt = await getLastSyncedAt(connectionId, entityType);
  
  console.log(`[Revenue Sync] Starting sync for company ${companyId}`);

  if (lastSyncedAt) {
    console.log(`[Revenue Sync] Incremental sync from ${lastSyncedAt.toISOString()}`);
  } else {
    console.log(`[Revenue Sync] Full sync - fetching ALL historical data`);
  }
  
  let grandTotalTransactions = 0;
  let grandTotalLineItems = 0;

  for (const qbEntityType of REVENUE_ENTITY_TYPES) {
    try {
      console.log(`\n[Revenue Sync] === Syncing ${qbEntityType} transactions ===`);
      
      const { transactionCount, lineItemCount } = await syncRevenueEntityType(
        qbEntityType,
        companyId,
        providerId,
        realmId,
        accessToken,
        lastSyncedAt
      );
      
      grandTotalTransactions += transactionCount;
      grandTotalLineItems += lineItemCount;
      
      console.log(`[Revenue Sync] ${qbEntityType} completed: ${transactionCount} transactions, ${lineItemCount} line items`);
    } catch (error) {
      console.error(`[Revenue Sync] ERROR syncing ${qbEntityType}:`, error);
      console.error(`[Revenue Sync] Continuing with remaining entity types...`);
    }
  }
  
  await upsertProviderSyncStateLastSynced(connectionId, entityType);
  
  console.log(`\n[Revenue Sync] === COMPLETE ===`);
  console.log(`[Revenue Sync] Total: ${grandTotalTransactions} transactions, ${grandTotalLineItems} line items`);
}

async function syncRevenueEntityType(
  qbEntityType: RevenueEntityType,
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
    const transactions = await fetchRevenueEntityType(
      qbEntityType,
      realmId,
      accessToken,
      lastSyncedAt,
      startPosition
    );
    
    if (transactions.length === 0) {
      if (pageNumber === 1) {
        console.log(`[Revenue Sync] ${qbEntityType} - No transactions found`);
      }
      break;
    }
    
    console.log(`[Revenue Sync] ${qbEntityType} - Page ${pageNumber}: Found ${transactions.length} transactions`);
    
    for (const transaction of transactions) {
      try {
        const parsed = parseRevenueTransaction(transaction, qbEntityType);
        const lastModifiedAt = transaction.MetaData?.LastUpdatedTime || null;
        
        if (parsed.lineItems.length === 0) {
          console.warn(
            `[Revenue Sync] ${qbEntityType} ${transaction.Id} has no qualifying line items. ` +
            `Total lines: ${transaction.Line?.length || 0}`
          );
        }
        
        const metadata: Record<string, any> = {
          qbEntityType,
        };
        
        if (transaction.PaymentMethodRef) {
          metadata.paymentMethod = transaction.PaymentMethodRef.name;
        }
        if (transaction.ShipMethodRef) {
          metadata.shipMethod = transaction.ShipMethodRef.name;
        }
        if (transaction.Balance != null) {
          metadata.balance = transaction.Balance;
        }
        
        for (const lineItem of parsed.lineItems) {
          await upsertRevenueTransaction(companyId, {
            providerId,
            transactionId: `${transaction.Id}-${lineItem.lineNum}`,
            transactionType: qbEntityType,
            transactionNumber: transaction.DocNumber || null,
            transactionDate: transaction.TxnDate,
            customerId: transaction.CustomerRef?.value || null,
            customerName: transaction.CustomerRef?.name || null,
            description: lineItem.description,
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
          `[Revenue Sync] ERROR processing ${qbEntityType} ${transaction.Id}:`,
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
      console.log(`[Revenue Sync] ${qbEntityType} - Incremental sync returned ${transactions.length} results (max 1000). Some results may be missing if > 1000.`);
      break;
    }
    
    startPosition += 1000;
    pageNumber++;
  }
  
  return { transactionCount, lineItemCount };
}

interface ParsedRevenueTransaction {
  lineItems: Array<{
    lineNum: number;
    description: string;
    accountId: string | null;
    accountName: string | null;
    amount: number;
  }>;
}

function parseRevenueTransaction(
  transaction: any,
  entityType: RevenueEntityType
): ParsedRevenueTransaction {
  const lineItems: ParsedRevenueTransaction['lineItems'] = [];
  
  const lines = transaction.Line || [];
  
  for (const line of lines) {
    if (line.DetailType === "SalesItemLineDetail") {
      const salesDetail = line.SalesItemLineDetail || {};
      const itemRef = salesDetail.ItemRef || {};
      
      lineItems.push({
        lineNum: line.LineNum || 0,
        description: line.Description || itemRef.name || "Revenue Line Item",
        accountId: salesDetail.AccountRef?.value || null,
        accountName: salesDetail.AccountRef?.name || null,
        amount: parseFloat(line.Amount || "0")
      });
    } else if (line.DetailType === "GroupLineDetail") {
      // Group lines contain nested line items
      const groupDetail = line.GroupLineDetail || {};
      const groupLines = groupDetail.Line || [];
      
      for (const groupLine of groupLines) {
        if (groupLine.DetailType === "SalesItemLineDetail") {
          const salesDetail = groupLine.SalesItemLineDetail || {};
          const itemRef = salesDetail.ItemRef || {};
          
          lineItems.push({
            lineNum: groupLine.LineNum || 0,
            description: groupLine.Description || itemRef.name || "Revenue Line Item",
            accountId: salesDetail.AccountRef?.value || null,
            accountName: salesDetail.AccountRef?.name || null,
            amount: parseFloat(groupLine.Amount || "0")
          });
        }
      }
    } else if (line.DetailType === "DescriptionOnly") {
      // Skip description-only lines (no financial impact)
      continue;
    } else if (line.DetailType === "SubTotalLineDetail") {
      // Skip subtotal lines (summary, not individual item)
      continue;
    } else if (line.DetailType === "DiscountLineDetail") {
      // Discount lines - could capture these if needed
      const discountDetail = line.DiscountLineDetail || {};
      lineItems.push({
        lineNum: line.LineNum || 0,
        description: line.Description || "Discount",
        accountId: discountDetail.AccountRef?.value || null,
        accountName: discountDetail.AccountRef?.name || null,
        amount: parseFloat(line.Amount || "0")
      });
    } else if (line.DetailType) {
      console.warn(
        `[Revenue Sync] Unsupported DetailType '${line.DetailType}' in ${entityType} ${transaction.Id}, Line ${line.LineNum}`
      );
    }
  }
  
  return { lineItems };
}

async function fetchRevenueEntityType(
  entityType: RevenueEntityType,
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
        `[Revenue Sync] ${entityType} query failed with 400 - entity type may not be supported or available in this QuickBooks account. Error: ${error.message}`
      );
      return [];
    }
    throw error;
  }
}
