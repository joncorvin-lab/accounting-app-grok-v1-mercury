import { csvEscape, parseBankCsv } from "./parse";
import type { Transaction } from "./types";

const HEADER =
  "Date (UTC),Description,Amount,Status,Source Account,Bank Description,Reference,Note,Last Four Digits,Name On Card,Category,GL Code,Timestamp,Original Currency";

type Draft = {
  year: number;
  month: number;
  day: number;
  description: string;
  amount: number;
  category: string;
  bank?: string;
  account?: "checking" | "credit";
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function row(d: Draft, index: number): string {
  const date = `${pad(d.month)}-${pad(d.day)}-${d.year}`;
  const status = d.amount < 0 ? "Sent" : "Received";
  const credit = d.account === "credit";
  const account = credit ? "Mercury Credit ••8841" : "Mercury Checking ••2291";
  const bank = d.bank ?? d.description.toUpperCase();
  const lastFour = credit ? "8841" : "";
  const nameOnCard = credit ? "A. Chen" : "";
  const ts = `${d.year}-${pad(d.month)}-${pad(d.day)}T15:04:00Z`;
  const cents = Math.abs(Math.round(d.amount * 100));
  const ref = `mrc_${d.year}${pad(d.month)}${pad(d.day)}_${index}_${cents}`;
  const cells = [
    date,
    d.description,
    d.amount.toFixed(2),
    status,
    account,
    bank,
    ref,
    "",
    lastFour,
    nameOnCard,
    d.category,
    "",
    ts,
    "USD",
  ];
  return cells.map(csvEscape).join(",");
}

function jitter(base: number, month: number, year: number, spread: number) {
  const wave = ((month * 13 + (year - 2025) * 7) % 10) / 10;
  return Math.round((base * (1 + (wave - 0.4) * spread) + Number.EPSILON) * 100) / 100;
}

function drafts(): Draft[] {
  const out: Draft[] = [];
  for (let year = 2025; year <= 2026; year += 1) {
    const lastMonth = year === 2026 ? 8 : 12;
    for (let month = 1; month <= lastMonth; month += 1) {
      const helios = jitter(9200, month, year, 0.35);
      const paloma = jitter(6100, month, year, 0.28);
      const payroll = -(year === 2026 && month >= 4 ? 8100 : 7400);
      const aws = -jitter(512, month, year, 0.45);

      out.push(
        { year, month, day: 2, description: "Helios Media", amount: helios, category: "Revenue", bank: "ACH CREDIT HELIOS MEDIA" },
        { year, month, day: 5, description: "Paloma Co", amount: paloma, category: "Revenue", bank: "ACH CREDIT PALOMA CO" },
        { year, month, day: 6, description: "Gusto Payroll", amount: payroll, category: "Payroll", bank: "GUSTO PAY" },
        { year, month, day: 7, description: "Amazon Web Services", amount: aws, category: "Infrastructure", bank: "AWS" },
        { year, month, day: 8, description: "Google Workspace", amount: -72, category: "Software", bank: "GOOGLE *WORKSPACE" },
        { year, month, day: 9, description: "GitHub", amount: -44, category: "Software", bank: "GITHUB.COM" },
        { year, month, day: 20, description: "Gusto Payroll", amount: payroll, category: "Payroll", bank: "GUSTO PAY" },
        { year, month, day: 24, description: "Mercury", amount: -5, category: "Banking", bank: "MERCURY FEE" },
      );

      if (month % 2 === 0) {
        out.push({ year, month, day: 11, description: "Figma", amount: -15, category: "Software", bank: "FIGMA" });
        out.push({ year, month, day: 12, description: "Vercel", amount: -20, category: "Infrastructure", bank: "VERCEL INC" });
      } else {
        out.push({ year, month, day: 11, description: "Notion", amount: -16, category: "Software", bank: "NOTION LABS" });
        out.push({ year, month, day: 13, description: "Cloudflare", amount: -25, category: "Infrastructure", bank: "CLOUDFLARE" });
      }

      if (month % 3 === 0) {
        out.push({
          year,
          month,
          day: 16,
          description: "The Smith — Team dinner",
          amount: -186.4,
          category: "Meals",
          bank: "TST* THE SMITH",
          account: "credit",
        });
      }

      if (month === 3 || month === 10) {
        out.push({
          year,
          month,
          day: 18,
          description: "Delta Air Lines",
          amount: -428.6,
          category: "Travel",
          bank: "DELTA AIR",
          account: "credit",
        });
        out.push({
          year,
          month,
          day: 19,
          description: "Marriott Hotels",
          amount: -312.18,
          category: "Travel",
          bank: "MARRIOTT",
          account: "credit",
        });
      }
    }
  }

  out.push(
    { year: 2025, month: 1, day: 10, description: "WeWork", amount: -450, category: "Office", bank: "WEWORK" },
    { year: 2025, month: 2, day: 14, description: "Apple", amount: -2499, category: "Office", bank: "APPLE.COM/BILL", account: "credit" },
    { year: 2025, month: 4, day: 3, description: "Hiscox Insurance", amount: -1288, category: "Insurance", bank: "HISCOX INS" },
    { year: 2025, month: 5, day: 21, description: "Mailchimp", amount: -65, category: "Marketing", bank: "MAILCHIMP" },
    { year: 2025, month: 6, day: 8, description: "Config Conference", amount: -899, category: "Travel", bank: "FIGMA CONFIG", account: "credit" },
    { year: 2025, month: 7, day: 15, description: "Ridge Legal", amount: -2400, category: "Professional Services", bank: "RIDGE LEGAL LLP" },
    { year: 2025, month: 9, day: 2, description: "Hiscox Insurance", amount: -1288, category: "Insurance", bank: "HISCOX INS" },
    { year: 2025, month: 11, day: 28, description: "Amazon", amount: -214.55, category: "Office", bank: "AMAZON.COM", account: "credit" },
    { year: 2025, month: 12, day: 12, description: "Northline Studio — bonus", amount: -3600, category: "Payroll", bank: "GUSTO BONUS" },
    { year: 2026, month: 1, day: 6, description: "Adobe", amount: -59.99, category: "Software", bank: "ADOBE" },
    { year: 2026, month: 2, day: 17, description: "Linear", amount: -96, category: "Software", bank: "LINEAR APP" },
    { year: 2026, month: 3, day: 4, description: "Hiscox Insurance", amount: -1340, category: "Insurance", bank: "HISCOX INS" },
    { year: 2026, month: 4, day: 22, description: "Team offsite — Hudson", amount: -1860, category: "Travel", bank: "HUDSON HOUSE", account: "credit" },
    { year: 2026, month: 5, day: 9, description: "Datadog", amount: -78, category: "Infrastructure", bank: "DATADOG" },
    { year: 2026, month: 6, day: 18, description: "Ridge Legal", amount: -1200, category: "Professional Services", bank: "RIDGE LEGAL LLP" },
    { year: 2026, month: 7, day: 7, description: "Apple", amount: -1999, category: "Office", bank: "APPLE.COM/BILL", account: "credit" },
    { year: 2026, month: 8, day: 3, description: "Vercel", amount: -40, category: "Infrastructure", bank: "VERCEL INC" },
  );

  return out;
}

export function buildSampleCsv(): string {
  const lines = [HEADER];
  drafts().forEach((d, i) => lines.push(row(d, i)));
  return `${lines.join("\n")}\n`;
}

let cached: Transaction[] | null = null;

export function sampleTransactions(): Transaction[] {
  if (!cached) {
    cached = parseBankCsv(buildSampleCsv(), "sample").transactions;
  }
  return cached;
}
