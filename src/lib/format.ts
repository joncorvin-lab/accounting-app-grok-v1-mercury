const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const moneyCompact = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1,
});

export function formatMoney(n: number, opts?: { sign?: boolean; compact?: boolean }) {
  const abs = Math.abs(n);
  const formatted = (opts?.compact ? moneyCompact : money).format(abs);
  if (opts?.sign) {
    if (n < 0) return `−${formatted}`;
    if (n > 0) return `+${formatted}`;
  }
  return formatted;
}

export function formatMonth(ym: string, opts?: { short?: boolean }) {
  const [y, m] = ym.split("-").map(Number);
  if (!y || !m) return ym;
  return new Date(y, m - 1, 1).toLocaleString("en-US", {
    month: opts?.short ? "short" : "long",
    year: "numeric",
  });
}

export function formatMonthShort(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  if (!y || !m) return ym;
  return new Date(y, m - 1, 1).toLocaleString("en-US", { month: "short" });
}

export function formatDay(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return new Date(y, m - 1, d).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function monthKey(isoDate: string) {
  return isoDate.slice(0, 7);
}

export function yearKey(isoDate: string) {
  return Number(isoDate.slice(0, 4));
}

export function shiftMonth(ym: string, delta: number) {
  const [y, m] = ym.split("-").map(Number);
  const date = new Date(y, m - 1 + delta, 1);
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  return `${date.getFullYear()}-${mm}`;
}

export function pctChange(current: number, previous: number) {
  if (previous === 0) return null;
  return (current - previous) / Math.abs(previous);
}

export function formatPct(n: number) {
  const pct = Math.abs(n) * 100;
  const body = pct >= 10 ? pct.toFixed(0) : pct.toFixed(1);
  if (n > 0) return `+${body}%`;
  if (n < 0) return `−${body}%`;
  return "0%";
}
