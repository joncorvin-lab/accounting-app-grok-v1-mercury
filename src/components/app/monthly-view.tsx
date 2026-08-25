import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatMonth, formatPct, pctChange, shiftMonth } from "@/lib/format";
import {
  availableMonths,
  categoryTotals,
  inMonth,
  incomeOf,
  lastNMonths,
  latestMonth,
  spentOf,
} from "@/lib/mercury/aggregate";
import type { Transaction } from "@/lib/mercury/types";
import { CategoryList } from "./category-list";
import { Money } from "./money";
import { MonthChart } from "./month-chart";
import { TransactionList } from "./tx-list";

export function MonthlyView({
  transactions,
  month,
  onMonthChange,
}: {
  transactions: Transaction[];
  month: string;
  onMonthChange: (month: string) => void;
}) {
  const months = availableMonths(transactions);
  const min = months[0];
  const max = months[months.length - 1] ?? latestMonth(transactions) ?? month;
  const txs = inMonth(transactions, month);
  const spent = spentOf(txs);
  const income = incomeOf(txs);
  const prevKey = shiftMonth(month, -1);
  const prevSpent = spentOf(inMonth(transactions, prevKey));
  const delta = pctChange(spent, prevSpent);
  const cats = categoryTotals(txs, "spend");
  const chart = lastNMonths(transactions, 12, max);

  const canPrev = min ? month > min : false;
  const canNext = max ? month < max : false;

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-muted">Monthly spending</p>
          <h1 className="mt-1 font-display text-3xl font-medium tracking-tight">{formatMonth(month)}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" disabled={!canPrev} onClick={() => onMonthChange(shiftMonth(month, -1))} aria-label="Previous month">
            <ChevronLeft />
          </Button>
          <Button variant="outline" size="icon" disabled={!canNext} onClick={() => onMonthChange(shiftMonth(month, 1))} aria-label="Next month">
            <ChevronRight />
          </Button>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Card className="rounded-lg">
          <CardContent className="px-4 py-4">
            <p className="text-xs font-medium tracking-wide text-muted uppercase">Spent</p>
            <Money value={spent} tone="expense" className="mt-2 block text-2xl font-medium" />
            {delta !== null ? (
              <p className={`mt-1 text-xs ${delta > 0 ? "text-expense" : "text-income"}`}>
                {formatPct(delta)} vs {formatMonth(prevKey, { short: true })}
              </p>
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
            <Money value={income - spent} tone={income - spent >= 0 ? "income" : "expense"} className="mt-2 block text-2xl font-medium" />
            <p className="mt-1 text-xs text-muted">Income minus spend</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Year context</CardTitle>
            <CardDescription>Select another month from the chart</CardDescription>
          </CardHeader>
          <CardContent>
            <MonthChart data={chart} focusMonth={month} onSelect={onMonthChange} />
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Categories</CardTitle>
            <CardDescription>Outflows this month</CardDescription>
          </CardHeader>
          <CardContent>
            <CategoryList rows={cats} />
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
          <CardDescription>{txs.length} in {formatMonth(month)}</CardDescription>
        </CardHeader>
        <CardContent>
          <TransactionList txs={txs} empty="Nothing posted this month." />
        </CardContent>
      </Card>
    </div>
  );
}
