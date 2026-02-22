import { accountingQueue } from '@/lib/accounting-queue';
import { SYNC_COMPANY_JOB } from '@repo/shared';

export async function POST(req: Request) {
  const { companyId, provider } = await req.json();

  if (!companyId || !provider) {
    return new Response(JSON.stringify({ error: 'Missing parameters' }), { status: 400 });
  }

  const job = await accountingQueue.add(SYNC_COMPANY_JOB, { companyId, provider });
  
  return new Response(JSON.stringify({ message: 'Job queued', jobId: job.id }), { status: 200 });
}
