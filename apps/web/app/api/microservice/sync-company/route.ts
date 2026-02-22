import { accountingQueue } from '@/lib/accounting-queue';

export async function POST(req: Request) {
  const { companyId, provider } = await req.json();

  if (!companyId || !provider) {
    return new Response(JSON.stringify({ error: 'Missing parameters' }), { status: 400 });
  }

  const job = await accountingQueue.add('sync-company', { companyId, provider });
  
  return new Response(JSON.stringify({ message: 'Job queued', jobId: job.id }), { status: 200 });
}
