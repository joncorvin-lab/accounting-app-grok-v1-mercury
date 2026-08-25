import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDay } from "@/lib/format";
import { CATEGORIES, type Transaction } from "@/lib/mercury/types";
import { useLedger } from "@/lib/store";
import { Money } from "./money";

function CategoryPicker({ tx }: { tx: Transaction }) {
  const setCategory = useLedger((s) => s.setCategory);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1 px-2 text-muted">
          {tx.category}
          <ChevronDown className="size-3.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-72 overflow-y-auto">
        <DropdownMenuLabel>Category</DropdownMenuLabel>
        {CATEGORIES.map((cat) => (
          <DropdownMenuItem key={cat} onSelect={() => setCategory(tx.id, cat)}>
            {cat}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function TransactionRow({ tx }: { tx: Transaction }) {
  const expense = tx.amount < 0;
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 border-b border-border py-3 last:border-0 md:grid-cols-[6.5rem_1fr_auto_auto] md:gap-4">
      <p className="order-2 text-xs text-muted md:order-1 md:text-sm">{formatDay(tx.date)}</p>
      <div className="order-1 min-w-0 md:order-2">
        <p className="truncate text-sm font-medium">{tx.description}</p>
        <p className="truncate text-xs text-muted">
          {tx.account || tx.bankDescription || tx.status}
        </p>
      </div>
      <div className="order-4 hidden md:order-3 md:block">
        <CategoryPicker tx={tx} />
      </div>
      <div className="order-3 flex flex-col items-end md:order-4">
        <Money value={tx.amount} signed tone={expense ? "expense" : "income"} className="text-sm" />
        <span className="md:hidden">
          <Badge variant="muted">{tx.category}</Badge>
        </span>
      </div>
      <div className="order-5 col-span-2 md:hidden">
        <CategoryPicker tx={tx} />
      </div>
    </div>
  );
}

export function TransactionList({
  txs,
  empty = "No transactions match these filters.",
}: {
  txs: Transaction[];
  empty?: string;
}) {
  if (txs.length === 0) {
    return <p className="py-8 text-center text-sm text-muted">{empty}</p>;
  }
  return (
    <div>
      {txs.map((tx) => (
        <TransactionRow key={tx.id} tx={tx} />
      ))}
    </div>
  );
}
