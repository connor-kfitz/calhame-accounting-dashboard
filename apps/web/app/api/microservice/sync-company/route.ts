import { accountingQueue } from '@/lib/accounting-queue';
import { SYNC_COMPANY_JOB } from '@repo/shared';

export async function POST(req: Request) {
  const { companyId, providerId } = await req.json();

  if (!companyId || !providerId) {
    return new Response(JSON.stringify({ error: { message: 'Missing parameters' } }), { status: 400 });
  }

  const job = await accountingQueue.add(SYNC_COMPANY_JOB, { companyId, providerId });
  
  return Response.json(
    { data: { jobId: job.id } },
    { status: 201 }
  );
}
