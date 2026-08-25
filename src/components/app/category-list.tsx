import { formatMoney } from "@/lib/format";
import type { CategoryTotal } from "@/lib/mercury/aggregate";
import { cn } from "@/lib/utils";

export function CategoryList({
  rows,
  empty = "No spending in this period.",
}: {
  rows: CategoryTotal[];
  empty?: string;
}) {
  if (rows.length === 0) {
    return <p className="text-sm text-muted">{empty}</p>;
  }

  const max = rows[0]?.total ?? 1;

  return (
    <ul className="flex flex-col gap-3">
      {rows.map((row) => (
        <li key={row.category}>
          <div className="mb-1.5 flex items-baseline justify-between gap-3">
            <span className="text-sm font-medium">{row.category}</span>
            <span className="font-mono text-sm tabular-nums text-muted">
              {formatMoney(row.total)}
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
            <div
              className={cn("h-full rounded-full bg-fg")}
              style={{ width: `${Math.max(4, (row.total / max) * 100)}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
