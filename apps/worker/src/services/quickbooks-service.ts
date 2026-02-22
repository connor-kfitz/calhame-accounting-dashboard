export async function syncQuickBooksCompany(companyId: string) {
  console.log(`Starting QuickBooks sync for company ${companyId}`);

  // TODO:
  // 1. Fetch access token from DB
  // 2. Call QuickBooks API
  // 3. Normalize data
  // 4. Write to Postgres

  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log(`Finished QuickBooks sync for ${companyId}`);
}
