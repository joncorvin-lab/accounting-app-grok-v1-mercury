export type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: string;
  account: string;
  bankDescription: string;
  reference: string;
  note: string;
  lastFour: string;
  nameOnCard: string;
  category: string;
  currency: string;
  source: string;
};

export type CsvFormat = "mercury" | "quickbooks" | "generic";

export type ParseResult = {
  transactions: Transaction[];
  skipped: number;
  errors: string[];
  format: CsvFormat;
  headers: string[];
};

export const CATEGORIES = [
  "Revenue",
  "Payroll",
  "Software",
  "Infrastructure",
  "Office",
  "Travel",
  "Meals",
  "Marketing",
  "Professional Services",
  "Insurance",
  "Banking",
  "Transfer",
  "Other",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const POSTED_STATUSES = new Set(["sent", "received", "completed", "posted", "paid"]);
export const IGNORED_STATUSES = new Set(["failed", "cancelled", "canceled", "reversed", "blocked", "declined"]);
