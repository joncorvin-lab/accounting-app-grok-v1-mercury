import { formatMoney } from "@/lib/format";
import { cn } from "@/lib/utils";

export function Money({
  value,
  signed = false,
  compact = false,
  tone = "default",
  className,
}: {
  value: number;
  signed?: boolean;
  compact?: boolean;
  tone?: "default" | "expense" | "income" | "auto";
  className?: string;
}) {
  const resolved =
    tone === "auto" ? (value < 0 ? "expense" : value > 0 ? "income" : "default") : tone;
  return (
    <span
      className={cn(
        "font-mono tabular-nums tracking-tight",
        resolved === "expense" && "text-expense",
        resolved === "income" && "text-income",
        className,
      )}
    >
      {formatMoney(value, { sign: signed, compact })}
    </span>
  );
}
