import { Entity } from "../types/index.js";
import { AccountingQueueJob, Queue } from "../types/queues.types.js";

export const ACCOUNTING_QUEUE: Queue = 'accounting-sync';

export const SYNC_COMPANY_JOB: AccountingQueueJob = 'sync-company';
export const SCHEDULED_SYNC_JOB: AccountingQueueJob = 'scheduled-sync';

export const ENTITIES: Entity[] = ["revenue", "cogs", "expenses"];
