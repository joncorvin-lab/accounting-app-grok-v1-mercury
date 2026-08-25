import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { formatMoney, formatMonthShort } from "@/lib/format";
import type { MonthBucket } from "@/lib/mercury/aggregate";

type ChartRow = MonthBucket & { label: string };

function ChartTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: ChartRow }[];
}) {
  if (!active || !payload?.[0]) return null;
  const row = payload[0].payload;
  return (
    <div className="rounded-md border border-border bg-surface px-3 py-2 text-xs shadow-[var(--shadow-soft)]">
      <p className="mb-1 font-medium">{formatMonthShort(row.month)} {row.month.slice(0, 4)}</p>
      <p className="font-mono tabular-nums">Spent {formatMoney(row.spent)}</p>
      <p className="font-mono tabular-nums text-income">In {formatMoney(row.income)}</p>
    </div>
  );
}

export function MonthChart({
  data,
  focusMonth,
  onSelect,
}: {
  data: MonthBucket[];
  focusMonth?: string;
  onSelect?: (month: string) => void;
}) {
  const rows: ChartRow[] = data.map((d) => ({
    ...d,
    label: formatMonthShort(d.month),
  }));

  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={rows} margin={{ top: 8, right: 4, left: 4, bottom: 0 }} barCategoryGap="22%">
          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "var(--color-muted)", fontSize: 11, fontFamily: "IBM Plex Sans, sans-serif" }}
            minTickGap={16}
          />
          <Tooltip cursor={{ fill: "var(--color-surface-2)" }} content={<ChartTooltip />} />
          <Bar dataKey="spent" radius={[4, 4, 0, 0]} cursor={onSelect ? "pointer" : "default"}>
            {rows.map((row) => (
              <Cell
                key={row.month}
                fill={row.month === focusMonth ? "var(--color-fg)" : "var(--color-bar)"}
                onClick={() => onSelect?.(row.month)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
