import { quickbooksRequest } from "../../lib/helpers.js";
import { upsertExpenseTransaction } from "../../lib/queries/expense_transactions/upsert.js";
import { getLastSyncedAt } from "../../lib/queries/provider_sync_state/get-last-synced.js";
import { upsertProviderSyncStateLastSynced } from "../../lib/queries/provider_sync_state/upsert-provider-sync-state-last-synced.js";

const EXPENSE_ENTITY_TYPES = [
  "Purchase"
] as const;

type ExpenseEntityType = typeof EXPENSE_ENTITY_TYPES[number];

export async function syncExpenses(
  companyId: string, providerId: string, realmId: string, accessToken: string, 
  connectionId: string
) {
  const entityType = "expense_transactions";
  
  const lastSyncedAt = await getLastSyncedAt(connectionId, entityType);
  
  console.log(`[Expense Sync] Starting sync for company ${companyId}`);

  if (lastSyncedAt) {
    console.log(`[Expense Sync] Incremental sync from ${lastSyncedAt.toISOString()}`);
  } else {
    console.log(`[Expense Sync] Full sync - fetching ALL historical data`);
  }
  
  let grandTotalTransactions = 0;
  let grandTotalLineItems = 0;

  for (const qbEntityType of EXPENSE_ENTITY_TYPES) {
    try {
      console.log(`\n[Expense Sync] === Syncing ${qbEntityType} transactions ===`);
      
      const { transactionCount, lineItemCount } = await syncExpenseEntityType(
        qbEntityType,
        companyId,
        providerId,
        realmId,
        accessToken,
        lastSyncedAt
      );
      
      grandTotalTransactions += transactionCount;
      grandTotalLineItems += lineItemCount;
      
      console.log(`[Expense Sync] ${qbEntityType} completed: ${transactionCount} transactions, ${lineItemCount} line items`);
    } catch (error) {
      console.error(`[Expense Sync] ERROR syncing ${qbEntityType}:`, error);
      console.error(`[Expense Sync] Continuing with remaining entity types...`);
    }
  }
  
  await upsertProviderSyncStateLastSynced(connectionId, entityType);
  
  console.log(`\n[Expense Sync] === COMPLETE ===`);
  console.log(`[Expense Sync] Total: ${grandTotalTransactions} transactions, ${grandTotalLineItems} line items`);
}

async function syncExpenseEntityType(
  qbEntityType: ExpenseEntityType,
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
    const transactions = await fetchExpenseEntityType(
      qbEntityType,
      realmId,
      accessToken,
      lastSyncedAt,
      startPosition
    );
    
    if (transactions.length === 0) {
      if (pageNumber === 1) {
        console.log(`[Expense Sync] ${qbEntityType} - No transactions found`);
      }
      break;
    }
    
    console.log(`[Expense Sync] ${qbEntityType} - Page ${pageNumber}: Found ${transactions.length} transactions`);
    
    for (const transaction of transactions) {
      try {
        const parsed = parseExpenseTransaction(transaction, qbEntityType);
        const lastModifiedAt = transaction.MetaData?.LastUpdatedTime || null;
        
        if (parsed.lineItems.length === 0) {
          console.warn(
            `[Expense Sync] ${qbEntityType} ${transaction.Id} has no qualifying line items. ` +
            `Total lines: ${transaction.Line?.length || 0}`
          );
        }
        
        const metadata: Record<string, any> = {
          qbEntityType,
        };
        
        if (transaction.PaymentType) {
          metadata.paymentType = transaction.PaymentType;
        }
        if (transaction.PaymentMethodRef) {
          metadata.paymentMethod = transaction.PaymentMethodRef.name;
        }
        if (transaction.CheckNumber) {
          metadata.checkNumber = transaction.CheckNumber;
        }
        if (transaction.Credit != null) {
          metadata.isCredit = transaction.Credit;
        }
        
        for (const lineItem of parsed.lineItems) {
          await upsertExpenseTransaction(companyId, {
            providerId,
            transactionId: `${transaction.Id}-${lineItem.lineNum}`,
            transactionType: qbEntityType,
            transactionNumber: transaction.DocNumber || transaction.CheckNumber || null,
            transactionDate: transaction.TxnDate,
            vendorId: transaction.EntityRef?.value || null,
            vendorName: transaction.EntityRef?.name || null,
            category: lineItem.category || undefined,
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
          `[Expense Sync] ERROR processing ${qbEntityType} ${transaction.Id}:`,
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
      console.log(`[Expense Sync] ${qbEntityType} - Incremental sync returned ${transactions.length} results (max 1000). Some results may be missing if > 1000.`);
      break;
    }
    
    startPosition += 1000;
    pageNumber++;
  }
  
  return { transactionCount, lineItemCount };
}

interface ParsedExpenseTransaction {
  lineItems: Array<{
    lineNum: number;
    description: string;
    category: string | null;
    accountId: string | null;
    accountName: string | null;
    amount: number;
  }>;
}

function parseExpenseTransaction(
  transaction: any,
  entityType: ExpenseEntityType
): ParsedExpenseTransaction {
  const lineItems: ParsedExpenseTransaction['lineItems'] = [];
  
  const lines = transaction.Line || [];
  
  for (const line of lines) {
    if (line.DetailType === "AccountBasedExpenseLineDetail") {
      const expenseDetail = line.AccountBasedExpenseLineDetail || {};
      const accountRef = expenseDetail.AccountRef || {};
      
      lineItems.push({
        lineNum: line.LineNum || 0,
        description: line.Description || accountRef.name || "Expense Line Item",
        category: accountRef.name || null,
        accountId: accountRef.value || null,
        accountName: accountRef.name || null,
        amount: parseFloat(line.Amount || "0")
      });
    } else if (line.DetailType === "ItemBasedExpenseLineDetail") {
      const itemDetail = line.ItemBasedExpenseLineDetail || {};
      const itemRef = itemDetail.ItemRef || {};
      
      lineItems.push({
        lineNum: line.LineNum || 0,
        description: line.Description || itemRef.name || "Expense Line Item",
        category: itemRef.name || null,
        accountId: itemDetail.AccountRef?.value || null,
        accountName: itemDetail.AccountRef?.name || null,
        amount: parseFloat(line.Amount || "0")
      });
    } else if (line.DetailType) {
      console.warn(
        `[Expense Sync] Unsupported DetailType '${line.DetailType}' in ${entityType} ${transaction.Id}, Line ${line.LineNum}`
      );
    }
  }
  
  return { lineItems };
}

async function fetchExpenseEntityType(
  entityType: ExpenseEntityType,
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
    
    console.log(`[Expense Sync] Query: ${query}`);
    
    const encodedQuery = encodeURIComponent(query);
    const path = `query?query=${encodedQuery}`;

    const result = await quickbooksRequest(realmId, accessToken, path);
    
    console.log(`[Expense Sync] Query response keys:`, Object.keys(result.QueryResponse || {}));
    
    return result.QueryResponse?.[entityType] || [];
  } catch (error: any) {
    if (error.status === 400) {
      console.warn(
        `[Expense Sync] ${entityType} query failed with 400 - entity type may not be supported or available in this QuickBooks account. Error: ${error.message}`
      );
      return [];
    }
    throw error;
  }
}
