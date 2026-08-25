import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatMonth, formatPct, pctChange } from "@/lib/format";
import {
  categoryTotals,
  dateRange,
  inMonth,
  inYear,
  incomeOf,
  lastNMonths,
  latestMonth,
  latestYear,
  merchantTotals,
  netOf,
  spentOf,
} from "@/lib/mercury/aggregate";
import type { Transaction } from "@/lib/mercury/types";
import { CategoryList } from "./category-list";
import { Money } from "./money";
import { MonthChart } from "./month-chart";
import { TransactionList } from "./tx-list";

function Kpi({
  label,
  value,
  hint,
  tone,
}: {
  label: string;
  value: number;
  hint?: string;
  tone?: "expense" | "income" | "default";
}) {
  return (
    <Card className="rounded-lg">
      <CardContent className="px-4 py-4">
        <p className="text-xs font-medium tracking-wide text-muted uppercase">{label}</p>
        <p className="mt-2">
          <Money value={value} tone={tone ?? "default"} className="text-2xl font-medium" />
        </p>
        {hint ? <p className="mt-1 text-xs text-muted">{hint}</p> : null}
      </CardContent>
    </Card>
  );
}

export function Overview({
  transactions,
  onOpenMonth,
}: {
  transactions: Transaction[];
  onOpenMonth: (month: string) => void;
}) {
  const month = latestMonth(transactions);
  const year = latestYear(transactions);
  const monthTxs = month ? inMonth(transactions, month) : [];
  const yearTxs = year ? inYear(transactions, year) : [];
  const spentMonth = spentOf(monthTxs);
  const incomeMonth = incomeOf(monthTxs);
  const spentYear = spentOf(yearTxs);
  const netYear = netOf(yearTxs);
  const chart = lastNMonths(transactions, 12, month ?? undefined);
  const cats = categoryTotals(monthTxs, "spend").slice(0, 6);
  const merchants = merchantTotals(monthTxs, "spend", 5);
  const recent = [...transactions].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 8);
  const range = dateRange(transactions);
  const prevMonth = chart.length >= 2 ? chart[chart.length - 2] : null;
  const delta = prevMonth ? pctChange(spentMonth, prevMonth.spent) : null;

  return (
    <div className="flex flex-col gap-6">
      <header>
        <p className="text-sm text-muted">
          {range ? `${formatMonth(range.min.slice(0, 7), { short: true })} – ${formatMonth(range.max.slice(0, 7), { short: true })}` : "No activity"}
          {transactions.length ? ` · ${transactions.length} transactions` : ""}
        </p>
        <h1 className="mt-1 font-display text-3xl font-medium tracking-tight md:text-4xl">
          {month ? formatMonth(month) : "Overview"}
        </h1>
        <p className="mt-2 text-sm text-muted">
          {delta === null ? "Monthly and yearly spending from your Mercury export." : (
            <>
              <span className={delta > 0 ? "text-expense" : "text-income"}>{formatPct(delta)}</span>
              {" "}vs the previous month
            </>
          )}
        </p>
      </header>

      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Kpi label={month ? `${formatMonth(month, { short: true })} spent` : "Spent"} value={spentMonth} tone="expense" />
        <Kpi label="Income" value={incomeMonth} tone="income" />
        <Kpi label={year ? `${year} spent` : "Year spent"} value={spentYear} tone="expense" />
        <Kpi label={year ? `${year} net` : "Net"} value={netYear} tone={netYear >= 0 ? "income" : "expense"} />
      </section>

      <section className="grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Spending by month</CardTitle>
            <CardDescription>Last 12 months in the file. Click a bar to open that month.</CardDescription>
          </CardHeader>
          <CardContent>
            <MonthChart data={chart} focusMonth={month ?? undefined} onSelect={onOpenMonth} />
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Where it went</CardTitle>
            <CardDescription>{month ? formatMonth(month) : "This period"}</CardDescription>
          </CardHeader>
          <CardContent>
            <CategoryList rows={cats} />
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
            <CardDescription>Newest first. Recategorize any row.</CardDescription>
          </CardHeader>
          <CardContent>
            <TransactionList txs={recent} empty="Import a Mercury CSV to see activity." />
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Top merchants</CardTitle>
            <CardDescription>Largest outflows this month</CardDescription>
          </CardHeader>
          <CardContent>
            {merchants.length === 0 ? (
              <p className="text-sm text-muted">No merchants yet.</p>
            ) : (
              <ul className="flex flex-col gap-3">
                {merchants.map((m) => (
                  <li key={m.name} className="flex items-baseline justify-between gap-3">
                    <span className="truncate text-sm">{m.name}</span>
                    <Money value={m.total} className="text-sm text-muted" />
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
