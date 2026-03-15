import { quickbooksRequest } from "../../lib/helpers.js";
import { upsertCogsTransaction } from "../../lib/queries/cogs_transactions/upsert.js";
import { getLastSyncedAt } from "../../lib/queries/provider_sync_state/get-last-synced.js";
import { upsertProviderSyncStateLastSynced } from "../../lib/queries/provider_sync_state/upsert-provider-sync-state-last-synced.js";

export async function syncBills(
  companyId: string, providerId: string, realmId: string, accessToken: string, 
  connectionId: string, startDate: string, endDate: string
) {
  const entityType = "cogs_transactions";
  
  const lastSyncedAt = await getLastSyncedAt(connectionId, entityType);
  
  console.log(`[Bill Sync] Fetching bills for company ${companyId}`);

  if (lastSyncedAt) {
    console.log(`[Bill Sync] Incremental sync from ${lastSyncedAt.toISOString()}`);
  } else {
    console.log(`[Bill Sync] Full sync from ${startDate} to ${endDate}`);
  }
  
  const bills = await fetchBills(realmId, accessToken, lastSyncedAt, startDate, endDate);
  
  console.log(`[Bill Sync] Found ${bills.length} bills`);
  
  for (const bill of bills) {
    const billData = parseBill(bill);
    const lastModifiedAt = bill.MetaData?.LastUpdatedTime || null;
    
    for (const lineItem of billData.lineItems) {
      await upsertCogsTransaction(companyId, {
        providerId,
        transactionId: `${bill.Id}-${lineItem.lineNum}`,
        transactionType: 'Bill',
        transactionNumber: bill.DocNumber || null,
        transactionDate: bill.TxnDate,
        vendorId: bill.VendorRef?.value || null,
        vendorName: bill.VendorRef?.name || null,
        description: lineItem.description || undefined,
        accountId: lineItem.accountId || undefined,
        accountName: lineItem.accountName || undefined,
        amount: lineItem.amount,
        providerLastModifiedAt: lastModifiedAt
      });
    }
  }
  
  await upsertProviderSyncStateLastSynced(connectionId, entityType);
  
  console.log(`[Bill Sync] Processed ${bills.length} bills`);
}

interface ParsedBill {
  lineItems: Array<{
    lineNum: number;
    description: string;
    accountId: string | null;
    accountName: string | null;
    amount: number;
  }>;
}

function parseBill(bill: any): ParsedBill {
  const lineItems: ParsedBill['lineItems'] = [];
  
  const lines = bill.Line || [];
  
  for (const line of lines) {
    if (line.DetailType === 'AccountBasedExpenseLineDetail') {
      const expenseDetail = line.AccountBasedExpenseLineDetail || {};
      const accountRef = expenseDetail.AccountRef || {};
      
      lineItems.push({
        lineNum: line.LineNum || 0,
        description: line.Description || accountRef.name || 'Bill Line Item',
        accountId: accountRef.value || null,
        accountName: accountRef.name || null,
        amount: parseFloat(line.Amount || '0')
      });
    }
    else if (line.DetailType === 'ItemBasedExpenseLineDetail') {
      const itemDetail = line.ItemBasedExpenseLineDetail || {};
      const itemRef = itemDetail.ItemRef || {};
      
      lineItems.push({
        lineNum: line.LineNum || 0,
        description: line.Description || itemRef.name || 'Bill Line Item',
        accountId: itemDetail.AccountRef?.value || null,
        accountName: itemDetail.AccountRef?.name || null,
        amount: parseFloat(line.Amount || '0')
      });
    }
  }
  
  return { lineItems };
}

async function fetchBills(
  realmId: string, accessToken: string, lastSyncedAt: Date | null,
  startDate: string, endDate: string
) {
  let query: string;
  
  if (lastSyncedAt) {
    const lastSyncedISO = lastSyncedAt.toISOString();
    query = `SELECT * FROM Bill WHERE Metadata.LastUpdatedTime > '${lastSyncedISO}' MAXRESULTS 1000`;
  } else {
    query = `SELECT * FROM Bill WHERE TxnDate >= '${startDate}' AND TxnDate <= '${endDate}' MAXRESULTS 1000`;
  }
  
  const encodedQuery = encodeURIComponent(query);
  const path = `query?query=${encodedQuery}`;

  const result = await quickbooksRequest(realmId, accessToken, path);
  return result.QueryResponse?.Bill || [];
}
