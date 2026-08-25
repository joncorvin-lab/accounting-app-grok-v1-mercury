import { monthKey, shiftMonth, yearKey } from "../format";
import { isExpense, isIncome, isTransfer } from "./categorize";
import type { Transaction } from "./types";

export function postedTransactions(txs: Transaction[]) {
  return txs.filter((t) => !isTransfer(t.category));
}

export function spentOf(txs: Transaction[]) {
  return txs.reduce((sum, t) => (isExpense(t.amount, t.category) ? sum + Math.abs(t.amount) : sum), 0);
}

export function incomeOf(txs: Transaction[]) {
  return txs.reduce((sum, t) => (isIncome(t.amount, t.category) ? sum + t.amount : sum), 0);
}

export function netOf(txs: Transaction[]) {
  return incomeOf(txs) - spentOf(txs);
}

export function dateRange(txs: Transaction[]) {
  if (txs.length === 0) return null;
  let min = txs[0]!.date;
  let max = txs[0]!.date;
  for (const t of txs) {
    if (t.date < min) min = t.date;
    if (t.date > max) max = t.date;
  }
  return { min, max };
}

export function latestMonth(txs: Transaction[]) {
  const range = dateRange(txs);
  return range ? monthKey(range.max) : null;
}

export function latestYear(txs: Transaction[]) {
  const range = dateRange(txs);
  return range ? yearKey(range.max) : null;
}

export function inMonth(txs: Transaction[], ym: string) {
  return txs.filter((t) => monthKey(t.date) === ym);
}

export function inYear(txs: Transaction[], year: number) {
  return txs.filter((t) => yearKey(t.date) === year);
}

export type MonthBucket = {
  month: string;
  spent: number;
  income: number;
  net: number;
  count: number;
};

export function monthlyBuckets(txs: Transaction[]): MonthBucket[] {
  const map = new Map<string, MonthBucket>();
  for (const t of txs) {
    if (isTransfer(t.category)) continue;
    const month = monthKey(t.date);
    let bucket = map.get(month);
    if (!bucket) {
      bucket = { month, spent: 0, income: 0, net: 0, count: 0 };
      map.set(month, bucket);
    }
    bucket.count += 1;
    if (isExpense(t.amount, t.category)) bucket.spent += Math.abs(t.amount);
    if (isIncome(t.amount, t.category)) bucket.income += t.amount;
    bucket.net = bucket.income - bucket.spent;
  }
  return [...map.values()].sort((a, b) => (a.month < b.month ? -1 : 1));
}

export function fillMonthSpan(buckets: MonthBucket[], from: string, to: string): MonthBucket[] {
  const byMonth = new Map(buckets.map((b) => [b.month, b]));
  const out: MonthBucket[] = [];
  let cursor = from;
  while (cursor <= to) {
    out.push(byMonth.get(cursor) ?? { month: cursor, spent: 0, income: 0, net: 0, count: 0 });
    const next = shiftMonth(cursor, 1);
    if (next === cursor) break;
    cursor = next;
  }
  return out;
}

export function lastNMonths(txs: Transaction[], n: number, endMonth?: string): MonthBucket[] {
  const buckets = monthlyBuckets(txs);
  const end = endMonth ?? latestMonth(txs);
  if (!end) return [];
  const start = shiftMonth(end, -(n - 1));
  return fillMonthSpan(buckets, start, end);
}

export type YearBucket = {
  year: number;
  spent: number;
  income: number;
  net: number;
  count: number;
};

export function yearlyBuckets(txs: Transaction[]): YearBucket[] {
  const map = new Map<number, YearBucket>();
  for (const t of txs) {
    if (isTransfer(t.category)) continue;
    const year = yearKey(t.date);
    let bucket = map.get(year);
    if (!bucket) {
      bucket = { year, spent: 0, income: 0, net: 0, count: 0 };
      map.set(year, bucket);
    }
    bucket.count += 1;
    if (isExpense(t.amount, t.category)) bucket.spent += Math.abs(t.amount);
    if (isIncome(t.amount, t.category)) bucket.income += t.amount;
    bucket.net = bucket.income - bucket.spent;
  }
  return [...map.values()].sort((a, b) => a.year - b.year);
}

export type CategoryTotal = {
  category: string;
  total: number;
  count: number;
  share: number;
};

export function categoryTotals(txs: Transaction[], direction: "spend" | "income"): CategoryTotal[] {
  const map = new Map<string, { total: number; count: number }>();
  for (const t of txs) {
    if (isTransfer(t.category)) continue;
    if (direction === "spend" && !isExpense(t.amount, t.category)) continue;
    if (direction === "income" && !isIncome(t.amount, t.category)) continue;
    const amount = Math.abs(t.amount);
    const prev = map.get(t.category) ?? { total: 0, count: 0 };
    prev.total += amount;
    prev.count += 1;
    map.set(t.category, prev);
  }
  const rows = [...map.entries()].map(([category, v]) => ({
    category,
    total: v.total,
    count: v.count,
    share: 0,
  }));
  const sum = rows.reduce((s, r) => s + r.total, 0);
  for (const row of rows) row.share = sum === 0 ? 0 : row.total / sum;
  rows.sort((a, b) => b.total - a.total);
  return rows;
}

export type MerchantTotal = {
  name: string;
  total: number;
  count: number;
};

export function merchantTotals(txs: Transaction[], direction: "spend" | "income", limit = 8): MerchantTotal[] {
  const map = new Map<string, { total: number; count: number }>();
  for (const t of txs) {
    if (isTransfer(t.category)) continue;
    if (direction === "spend" && !isExpense(t.amount, t.category)) continue;
    if (direction === "income" && !isIncome(t.amount, t.category)) continue;
    const name = t.description.trim() || "Untitled";
    const prev = map.get(name) ?? { total: 0, count: 0 };
    prev.total += Math.abs(t.amount);
    prev.count += 1;
    map.set(name, prev);
  }
  return [...map.entries()]
    .map(([name, v]) => ({ name, total: v.total, count: v.count }))
    .sort((a, b) => b.total - a.total)
    .slice(0, limit);
}

export function availableMonths(txs: Transaction[]) {
  return [...new Set(txs.map((t) => monthKey(t.date)))].sort();
}

export function availableYears(txs: Transaction[]) {
  return [...new Set(txs.map((t) => yearKey(t.date)))].sort((a, b) => a - b);
}
