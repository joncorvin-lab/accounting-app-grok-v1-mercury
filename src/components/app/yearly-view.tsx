import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatMoney, formatMonthShort } from "@/lib/format";
import {
  availableYears,
  categoryTotals,
  fillMonthSpan,
  inYear,
  incomeOf,
  monthlyBuckets,
  spentOf,
  yearlyBuckets,
} from "@/lib/mercury/aggregate";
import type { Transaction } from "@/lib/mercury/types";
import { CategoryList } from "./category-list";
import { Money } from "./money";
import { MonthChart } from "./month-chart";

export function YearlyView({
  transactions,
  year,
  onYearChange,
  onOpenMonth,
}: {
  transactions: Transaction[];
  year: number;
  onYearChange: (year: number) => void;
  onOpenMonth: (month: string) => void;
}) {
  const years = availableYears(transactions);
  const min = years[0] ?? year;
  const max = years[years.length - 1] ?? year;
  const txs = inYear(transactions, year);
  const spent = spentOf(txs);
  const income = incomeOf(txs);
  const net = income - spent;
  const months = fillMonthSpan(monthlyBuckets(txs), `${year}-01`, `${year}-12`);
  const cats = categoryTotals(txs, "spend");
  const yearsAll = yearlyBuckets(transactions);
  const prev = yearsAll.find((y) => y.year === year - 1);

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-muted">Yearly spending</p>
          <h1 className="mt-1 font-display text-3xl font-medium tracking-tight">{year}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" disabled={year <= min} onClick={() => onYearChange(year - 1)} aria-label="Previous year">
            <ChevronLeft />
          </Button>
          <Button variant="outline" size="icon" disabled={year >= max} onClick={() => onYearChange(year + 1)} aria-label="Next year">
            <ChevronRight />
          </Button>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Card className="rounded-lg">
          <CardContent className="px-4 py-4">
            <p className="text-xs font-medium tracking-wide text-muted uppercase">Spent</p>
            <Money value={spent} tone="expense" className="mt-2 block text-2xl font-medium" />
            {prev ? (
              <p className="mt-1 text-xs text-muted">{formatMoney(prev.spent)} in {prev.year}</p>
            ) : (
              <p className="mt-1 text-xs text-muted">{txs.length} transactions</p>
            )}
          </CardContent>
        </Card>
        <Card className="rounded-lg">
          <CardContent className="px-4 py-4">
            <p className="text-xs font-medium tracking-wide text-muted uppercase">Income</p>
            <Money value={income} tone="income" className="mt-2 block text-2xl font-medium" />
            <p className="mt-1 text-xs text-muted">Posted inflows</p>
          </CardContent>
        </Card>
        <Card className="rounded-lg">
          <CardContent className="px-4 py-4">
            <p className="text-xs font-medium tracking-wide text-muted uppercase">Net</p>
            <Money value={net} tone={net >= 0 ? "income" : "expense"} className="mt-2 block text-2xl font-medium" />
            <p className="mt-1 text-xs text-muted">
              {spent > 0
                ? `Avg ${formatMoney(spent / Math.max(1, months.filter((m) => m.count > 0).length))} / mo spent`
                : "No outflows"}
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Each month</CardTitle>
            <CardDescription>Click a bar to inspect that month</CardDescription>
          </CardHeader>
          <CardContent>
            <MonthChart data={months} onSelect={onOpenMonth} />
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Categories</CardTitle>
            <CardDescription>Full year outflows</CardDescription>
          </CardHeader>
          <CardContent>
            <CategoryList rows={cats} />
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Month by month</CardTitle>
          <CardDescription>Spend, income, and net for {year}</CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto px-0 pb-0">
          <table className="w-full min-w-[28rem] text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs tracking-wide text-muted uppercase">
                <th className="px-5 py-2 font-medium">Month</th>
                <th className="px-5 py-2 text-right font-medium">Spent</th>
                <th className="px-5 py-2 text-right font-medium">Income</th>
                <th className="px-5 py-2 text-right font-medium">Net</th>
              </tr>
            </thead>
            <tbody>
              {months.map((m) => (
                <tr key={m.month} className="border-b border-border last:border-0">
                  <td className="px-5 py-2.5">
                    <button
                      type="button"
                      className="font-medium hover:underline"
                      onClick={() => onOpenMonth(m.month)}
                    >
                      {formatMonthShort(m.month)}
                    </button>
                  </td>
                  <td className="px-5 py-2.5 text-right font-mono tabular-nums text-expense">{formatMoney(m.spent)}</td>
                  <td className="px-5 py-2.5 text-right font-mono tabular-nums text-income">{formatMoney(m.income)}</td>
                  <td className={`px-5 py-2.5 text-right font-mono tabular-nums ${m.net >= 0 ? "text-income" : "text-expense"}`}>
                    {formatMoney(m.net, { sign: true })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
