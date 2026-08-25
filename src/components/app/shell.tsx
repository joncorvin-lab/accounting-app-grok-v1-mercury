import { useEffect, useMemo, useState } from "react";
import {
  Calendar,
  CalendarRange,
  LayoutDashboard,
  List,
  MoreHorizontal,
  Upload,
} from "lucide-react";
import { toast } from "sonner";
import { Wordmark } from "@/components/app/logo";
import { ImportDialog } from "@/components/app/import-dialog";
import { MonthlyView } from "@/components/app/monthly-view";
import { Overview } from "@/components/app/overview";
import { TransactionsView } from "@/components/app/transactions-view";
import { YearlyView } from "@/components/app/yearly-view";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { latestMonth, latestYear } from "@/lib/mercury/aggregate";
import { buildSampleCsv } from "@/lib/mercury/sample";
import { useLedger } from "@/lib/store";
import { cn } from "@/lib/utils";

export type AppView = "overview" | "transactions" | "monthly" | "yearly";

const NAV: { id: AppView; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "transactions", label: "Activity", icon: List },
  { id: "monthly", label: "Monthly", icon: Calendar },
  { id: "yearly", label: "Yearly", icon: CalendarRange },
];

function downloadSample() {
  const blob = new Blob([buildSampleCsv()], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "mercury-sample.csv";
  a.click();
  URL.revokeObjectURL(url);
}

export function AppShell() {
  const transactions = useLedger((s) => s.transactions);
  const isSample = useLedger((s) => s.isSample);
  const loadSample = useLedger((s) => s.loadSample);
  const clearAll = useLedger((s) => s.clearAll);
  const [view, setView] = useState<AppView>("overview");
  const [importOpen, setImportOpen] = useState(false);
  const fallbackMonth = useMemo(() => latestMonth(transactions) ?? "2026-08", [transactions]);
  const fallbackYear = useMemo(() => latestYear(transactions) ?? 2026, [transactions]);
  const [month, setMonth] = useState(fallbackMonth);
  const [year, setYear] = useState(fallbackYear);

  useEffect(() => {
    void useLedger.persist.rehydrate();
  }, []);

  const latestM = latestMonth(transactions);
  const latestY = latestYear(transactions);

  useEffect(() => {
    if (latestM) setMonth(latestM);
    if (latestY) setYear(latestY);
  }, [latestM, latestY]);

  const openMonth = (next: string) => {
    setMonth(next);
    setYear(Number(next.slice(0, 4)));
    setView("monthly");
  };

  const sampleAction = () => {
    loadSample();
    toast.success("Loaded sample Mercury activity");
  };

  const clearAction = () => {
    clearAll();
    toast.message("Ledger cleared");
  };

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-56 flex-col border-r border-border bg-surface md:flex">
        <div className="px-5 py-6">
          <Wordmark />
          <p className="mt-3 text-xs leading-relaxed text-muted">Mercury spending, kept on this device.</p>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3">
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = view === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setView(item.id)}
                className={cn(
                  "flex h-11 items-center gap-2.5 rounded-md px-3 text-sm font-medium transition-colors duration-150",
                  active ? "bg-primary text-primary-fg" : "text-muted hover:bg-surface-2 hover:text-fg",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="flex flex-col gap-1 p-3">
          <Button className="w-full" onClick={() => setImportOpen(true)}>
            <Upload />
            Import CSV
          </Button>
          <OverflowMenu
            isSample={isSample}
            hasData={transactions.length > 0}
            onSample={sampleAction}
            onClear={clearAction}
            align="start"
            label="Ledger options"
          />
        </div>
      </aside>

      <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-border bg-bg/90 px-4 py-3 backdrop-blur-sm md:hidden">
        <Wordmark />
        <div className="flex items-center gap-1">
          <Button size="sm" onClick={() => setImportOpen(true)}>
            Import
          </Button>
          <OverflowMenu
            isSample={isSample}
            hasData={transactions.length > 0}
            onSample={sampleAction}
            onClear={clearAction}
          />
        </div>
      </header>

      <main className="md:pl-56">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pt-4 pb-28 md:px-8 md:pt-8 md:pb-12">
          {isSample && transactions.length > 0 ? (
            <div className="flex flex-col gap-2 rounded-lg border border-border bg-surface px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted">
                Sample Mercury workspace. Import your CSV to replace it — files never leave this browser.
              </p>
              <Button size="sm" variant="outline" onClick={() => setImportOpen(true)}>
                Import CSV
              </Button>
            </div>
          ) : null}

          {transactions.length === 0 ? (
            <EmptyLedger onImport={() => setImportOpen(true)} onSample={loadSample} />
          ) : view === "overview" ? (
            <Overview transactions={transactions} onOpenMonth={openMonth} />
          ) : view === "transactions" ? (
            <TransactionsView transactions={transactions} />
          ) : view === "monthly" ? (
            <MonthlyView
              transactions={transactions}
              month={month}
              onMonthChange={(m) => {
                setMonth(m);
                setYear(Number(m.slice(0, 4)));
              }}
            />
          ) : (
            <YearlyView
              transactions={transactions}
              year={year}
              onYearChange={setYear}
              onOpenMonth={openMonth}
            />
          )}
        </div>
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm md:hidden">
        <div className="grid grid-cols-4">
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = view === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setView(item.id)}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center gap-1 text-[11px] font-medium",
                  active ? "text-fg" : "text-muted",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      <ImportDialog open={importOpen} onOpenChange={setImportOpen} />
    </div>
  );
}

function OverflowMenu({
  isSample,
  hasData,
  onSample,
  onClear,
  align = "end",
  label,
}: {
  isSample: boolean;
  hasData: boolean;
  onSample: () => void;
  onClear: () => void;
  align?: "start" | "end";
  label?: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {label ? (
          <Button variant="ghost" className="w-full justify-start text-muted">
            <MoreHorizontal />
            {label}
          </Button>
        ) : (
          <Button variant="ghost" size="icon-sm" aria-label="More">
            <MoreHorizontal />
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        <DropdownMenuItem onSelect={downloadSample}>Download sample CSV</DropdownMenuItem>
        {!isSample ? <DropdownMenuItem onSelect={onSample}>Load sample data</DropdownMenuItem> : null}
        {hasData ? <DropdownMenuSeparator /> : null}
        {hasData ? (
          <DropdownMenuItem className="text-expense" onSelect={onClear}>
            Clear ledger
          </DropdownMenuItem>
        ) : null}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function EmptyLedger({ onImport, onSample }: { onImport: () => void; onSample: () => void }) {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-start gap-4 py-10">
      <h1 className="font-display text-3xl font-medium tracking-tight">Start with a Mercury export</h1>
      <p className="text-sm leading-relaxed text-muted">
        Drop a CSV from Mercury Transactions to see monthly and yearly spending, categories, and a full ledger. Everything stays in this browser.
      </p>
      <div className="flex flex-wrap gap-2">
        <Button onClick={onImport}>
          <Upload />
          Import CSV
        </Button>
        <Button variant="outline" onClick={onSample}>
          Load sample data
        </Button>
      </div>
    </div>
  );
}
