import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CATEGORIES, type Transaction } from "@/lib/mercury/types";
import { TransactionList } from "./tx-list";

const PAGE = 40;

export function TransactionsView({ transactions }: { transactions: Transaction[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [direction, setDirection] = useState<"all" | "spend" | "income">("all");
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return transactions.filter((t) => {
      if (category !== "all" && t.category !== category) return false;
      if (direction === "spend" && t.amount >= 0) return false;
      if (direction === "income" && t.amount <= 0) return false;
      if (!q) return true;
      const hay = `${t.description} ${t.bankDescription} ${t.account} ${t.note} ${t.category}`.toLowerCase();
      return hay.includes(q);
    });
  }, [transactions, query, category, direction]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE));
  const safePage = Math.min(page, pages - 1);
  const slice = filtered.slice(safePage * PAGE, safePage * PAGE + PAGE);

  return (
    <div className="flex flex-col gap-6">
      <header>
        <p className="text-sm text-muted">Ledger</p>
        <h1 className="mt-1 font-display text-3xl font-medium tracking-tight">Transactions</h1>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>All activity</CardTitle>
          <CardDescription>
            {filtered.length} of {transactions.length} shown. Search and recategorize in place.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" />
              <Input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(0);
                }}
                placeholder="Search merchants, accounts, notes"
                className="pl-9"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                value={direction}
                onChange={(e) => {
                  setDirection(e.target.value as typeof direction);
                  setPage(0);
                }}
                className="h-11 rounded-md border border-border bg-surface px-3 text-sm text-fg outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
              >
                <option value="all">All types</option>
                <option value="spend">Spending</option>
                <option value="income">Income</option>
              </select>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setPage(0);
                }}
                className="h-11 rounded-md border border-border bg-surface px-3 text-sm text-fg outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
              >
                <option value="all">All categories</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <TransactionList txs={slice} />

          {pages > 1 ? (
            <div className="flex items-center justify-between gap-3 pt-2">
              <p className="text-xs text-muted">
                Page {safePage + 1} of {pages}
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled={safePage === 0} onClick={() => setPage((p) => Math.max(0, p - 1))}>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled={safePage >= pages - 1} onClick={() => setPage((p) => p + 1)}>
                  Next
                </Button>
              </div>
            </div>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
