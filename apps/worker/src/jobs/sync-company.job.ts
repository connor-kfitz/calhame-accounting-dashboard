import { Job } from 'bullmq';
import { syncQuickBooksCompany } from '../services/quickbooks.service';

interface SyncCompanyJobData {
  companyId: string;
  providerId: string;
}

export async function handleSyncCompany(job: Job<SyncCompanyJobData>) {
  const { companyId, providerId } = job.data;

  console.log(`Processing sync job for ${companyId} via ${providerId}`);

  switch (providerId) {
    case 'quickbooks':
      await syncQuickBooksCompany(companyId);
      break;

    default:
      throw new Error(`Unsupported provider: ${providerId}`);
  }
}
