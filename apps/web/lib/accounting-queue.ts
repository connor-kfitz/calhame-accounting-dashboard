import { ACCOUNTING_QUEUE } from '@repo/shared';
import { Queue } from 'bullmq';

if (!process.env.REDIS_URL) throw new Error('REDIS_URL not defined');

export const accountingQueue = new Queue(ACCOUNTING_QUEUE, {
  connection: { 
    url: process.env.REDIS_URL,
    enableReadyCheck: false
  }
});
