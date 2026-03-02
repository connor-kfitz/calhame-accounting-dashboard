import { Quarter } from "@repo/shared";

export function getDateRangeFromQuarter(quarter: Quarter, year: number) {
  let startDate: string;
  let endDate: string;
  let monthsInPeriod: number;

  switch (quarter) {
    case "year":
      startDate = `${year}-01-01`;
      endDate = `${year}-12-31`;
      monthsInPeriod = 12;
      break;
    case "q1":
      startDate = `${year}-01-01`;
      endDate = `${year}-03-31`;
      monthsInPeriod = 3;
      break;
    case "q2":
      startDate = `${year}-04-01`;
      endDate = `${year}-06-30`;
      monthsInPeriod = 3;
      break;
    case "q3":
      startDate = `${year}-07-01`;
      endDate = `${year}-09-30`;
      monthsInPeriod = 3;
      break;
    case "q4":
      startDate = `${year}-10-01`;
      endDate = `${year}-12-31`;
      monthsInPeriod = 3;
      break;
  }

  return { startDate, endDate, monthsInPeriod }
}
