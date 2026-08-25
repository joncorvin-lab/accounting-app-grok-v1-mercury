import {
  IGNORED_STATUSES,
  type CsvFormat,
  type ParseResult,
  type Transaction,
} from "./types";
import { categorizeTransaction } from "./categorize";

function csvEscapeNeeds(value: string) {
  return /[",\n\r]/.test(value);
}

export function csvEscape(value: string) {
  if (!csvEscapeNeeds(value)) return value;
  return `"${value.replaceAll('"', '""')}"`;
}

function parseDelimited(text: string, delimiter: string): string[][] {
  const input = text.replace(/^\uFEFF/, "");
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let i = 0;
  let inQuotes = false;

  while (i < input.length) {
    const c = input[i]!;
    if (inQuotes) {
      if (c === '"') {
        if (input[i + 1] === '"') {
          cell += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      cell += c;
      i += 1;
      continue;
    }
    if (c === '"') {
      inQuotes = true;
      i += 1;
      continue;
    }
    if (c === delimiter) {
      row.push(cell);
      cell = "";
      i += 1;
      continue;
    }
    if (c === "\n" || c === "\r") {
      if (c === "\r" && input[i + 1] === "\n") i += 1;
      row.push(cell);
      cell = "";
      if (row.some((x) => x.trim() !== "")) rows.push(row);
      row = [];
      i += 1;
      continue;
    }
    cell += c;
    i += 1;
  }
  row.push(cell);
  if (row.some((x) => x.trim() !== "")) rows.push(row);
  return rows;
}

function parseGrid(text: string): string[][] {
  const comma = parseDelimited(text, ",");
  const commaCols = comma[0]?.length ?? 0;
  if (commaCols >= 3) return comma;
  const tab = parseDelimited(text, "\t");
  if ((tab[0]?.length ?? 0) > commaCols) return tab;
  const semi = parseDelimited(text, ";");
  if ((semi[0]?.length ?? 0) > commaCols) return semi;
  return comma;
}

function normHeader(h: string) {
  return h.trim().toLowerCase().replace(/\s+/g, " ");
}

function findCol(headers: string[], exact: string[], includes: string[] = []): number {
  const n = headers.map(normHeader);
  for (const key of exact) {
    const i = n.indexOf(key);
    if (i >= 0) return i;
  }
  for (const key of includes) {
    const i = n.findIndex((h) => h.includes(key));
    if (i >= 0) return i;
  }
  return -1;
}

function cell(row: string[], index: number) {
  if (index < 0) return "";
  return (row[index] ?? "").trim();
}

export function parseAmount(raw: string): number | null {
  const t = raw.trim();
  if (!t) return null;
  const parenNeg = /^\(.*\)$/.test(t);
  const cleaned = t.replace(/[$,\s]/g, "").replace(/[()]/g, "");
  if (!cleaned || cleaned === "-" || cleaned === "+") return null;
  const n = Number(cleaned);
  if (!Number.isFinite(n)) return null;
  return parenNeg ? -Math.abs(n) : n;
}

export function parseDate(raw: string): string | null {
  const t = raw.trim();
  if (!t) return null;

  const iso = t.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;

  const us = t.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
  if (us) {
    const mm = us[1]!.padStart(2, "0");
    const dd = us[2]!.padStart(2, "0");
    const yyyy = us[3]!;
    const month = Number(mm);
    const day = Number(dd);
    if (month < 1 || month > 12 || day < 1 || day > 31) return null;
    return `${yyyy}-${mm}-${dd}`;
  }

  const ts = Date.parse(t);
  if (!Number.isNaN(ts)) {
    const d = new Date(ts);
    const yyyy = d.getUTCFullYear();
    const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(d.getUTCDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }
  return null;
}

function detectFormat(headers: string[]): CsvFormat {
  const n = headers.map(normHeader);
  const joined = n.join(" | ");
  if (
    joined.includes("bank description") ||
    joined.includes("source account") ||
    joined.includes("date (utc)") ||
    joined.includes("name on card")
  ) {
    return "mercury";
  }
  if (joined.includes("transaction type") && joined.includes("name") && joined.includes("memo")) {
    return "quickbooks";
  }
  return "generic";
}

function fingerprint(parts: string[]) {
  return parts
    .map((p) => p.trim().toLowerCase())
    .join("|")
    .replace(/\s+/g, " ");
}

export function parseBankCsv(text: string, source = "import"): ParseResult {
  const errors: string[] = [];
  const grid = parseGrid(text);
  if (grid.length < 2) {
    return {
      transactions: [],
      skipped: 0,
      errors: ["No data rows found. Export a CSV from Mercury Transactions."],
      format: "generic",
      headers: grid[0] ?? [],
    };
  }

  const headers = grid[0]!;
  const format = detectFormat(headers);

  const dateCol = findCol(headers, ["date (utc)", "date", "transaction date", "posted date", "posting date"], ["date"]);
  const tsCol = findCol(headers, ["timestamp", "posted at", "created at"]);
  const descCol = findCol(headers, ["description", "name", "payee", "memo"], ["description"]);
  const bankDescCol = findCol(headers, ["bank description"]);
  const amountCol = findCol(headers, ["amount", "amount (usd)", "total"], ["amount"]);
  const debitCol = findCol(headers, ["debit", "withdrawal"]);
  const creditCol = findCol(headers, ["credit", "deposit"]);
  const statusCol = findCol(headers, ["status"]);
  const accountCol = findCol(headers, ["source account", "account", "account name"]);
  const refCol = findCol(headers, ["reference", "ref", "num", "transaction id"]);
  const noteCol = findCol(headers, ["note", "notes", "memo"]);
  const lastFourCol = findCol(headers, ["last four digits", "last 4", "card last 4"]);
  const nameCol = findCol(headers, ["name on card"]);
  const categoryCol = findCol(headers, ["category"]);
  const currencyCol = findCol(headers, ["original currency", "currency"]);

  if (dateCol < 0 && tsCol < 0) {
    errors.push("Could not find a Date column.");
  }
  if (amountCol < 0 && debitCol < 0 && creditCol < 0) {
    errors.push("Could not find an Amount column.");
  }
  if (descCol < 0 && bankDescCol < 0) {
    errors.push("Could not find a Description column.");
  }

  const transactions: Transaction[] = [];
  let skipped = 0;
  const seen = new Set<string>();

  for (let r = 1; r < grid.length; r += 1) {
    const row = grid[r]!;
    const status = cell(row, statusCol);
    if (status && IGNORED_STATUSES.has(status.toLowerCase())) {
      skipped += 1;
      continue;
    }

    const date = parseDate(cell(row, dateCol)) ?? parseDate(cell(row, tsCol));
    if (!date) {
      skipped += 1;
      continue;
    }

    let amount: number | null = null;
    if (amountCol >= 0) amount = parseAmount(cell(row, amountCol));
    if (amount === null && (debitCol >= 0 || creditCol >= 0)) {
      const debit = parseAmount(cell(row, debitCol)) ?? 0;
      const credit = parseAmount(cell(row, creditCol)) ?? 0;
      amount = credit - debit;
    }
    if (amount === null || amount === 0) {
      skipped += 1;
      continue;
    }

    const description = cell(row, descCol) || cell(row, bankDescCol) || "Untitled";
    const bankDescription = cell(row, bankDescCol);
    const account = cell(row, accountCol);
    const reference = cell(row, refCol);
    const note = cell(row, noteCol);
    const lastFour = cell(row, lastFourCol);
    const nameOnCard = cell(row, nameCol);
    const currency = cell(row, currencyCol) || "USD";
    const rawCategory = cell(row, categoryCol);

    const idBase = fingerprint([date, amount.toFixed(2), description, reference, account, bankDescription]);
    let id = idBase;
    let n = 2;
    while (seen.has(id)) {
      id = `${idBase}#${n}`;
      n += 1;
    }
    seen.add(id);

    const category = categorizeTransaction({
      description,
      bankDescription,
      amount,
      mercuryCategory: rawCategory,
    });

    transactions.push({
      id,
      date,
      description,
      amount,
      status: status || (amount < 0 ? "Sent" : "Received"),
      account,
      bankDescription,
      reference,
      note,
      lastFour,
      nameOnCard,
      category,
      currency,
      source,
    });
  }

  if (transactions.length === 0 && errors.length === 0) {
    errors.push("No usable transactions in this file.");
  }

  transactions.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  return { transactions, skipped, errors, format, headers };
}
