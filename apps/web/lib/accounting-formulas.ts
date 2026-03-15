export function getCogsPercentageOfRevenue(cogs: number, revenue: number): number {
  if (revenue == 0) return 0;
  return parseFloat(((cogs / revenue) * 100).toFixed(2));
}

export function getGrossMarginPercentage(cogs: number, revenue: number): number {
  if (revenue == 0) return 0;
  return parseFloat((((revenue - cogs) / revenue) * 100).toFixed(2));
}

export function formatCurrency(value: number): string {
  return Number(value).toLocaleString();
}

export function formatCurrencySigned(value: number): string {
  const absValue = Math.abs(value);
  return value < 0 ? `-${formatCurrency(absValue)}` : formatCurrency(value);
}

export function getProfit(revenue: number, cogs: number): string {
  const profit = parseFloat((revenue - cogs).toFixed(2));
  return formatCurrency(profit);
}

export function getNetProfitLoss(revenue: number, cogs: number, opex: number): string {
  const net = parseFloat((revenue - cogs - opex).toFixed(2));
  return formatCurrencySigned(net);
}

export function getBurnEfficency(totalOpex: number, totalRevenue: number): string {
  if (totalRevenue == 0) return "";
  const efficiency = totalOpex / totalRevenue;
  if (efficiency <= 0.6) return "Low Burn";
  if (efficiency <= 1) return "Medium Burn";
  return "High Burn";
}

export function getOpexRevenueRatio(totalOpex: number, totalRevenue: number): number {
  if (totalRevenue == 0) return 0;
  return parseFloat(((totalOpex / totalRevenue) * 100).toFixed(2));
}

export function getAverageMonthlyBurn(totalBurn: number, period: number): string {
  const burn = parseFloat((totalBurn / period).toFixed(2));
  return formatCurrency(burn);
}

export function getExpensePercentageOfOpex(expenseAmount: number, totalOpex: number): number {
  if (totalOpex === 0) return 0;
  return parseFloat(((expenseAmount / totalOpex) * 100).toFixed(2));
}
