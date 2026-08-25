import { create } from "zustand";
import { persist } from "zustand/middleware";
import { parseBankCsv } from "./mercury/parse";
import { sampleTransactions } from "./mercury/sample";
import type { ParseResult, Transaction } from "./mercury/types";

export type ImportNotice = {
  filename: string;
  added: number;
  skipped: number;
  format: ParseResult["format"];
  errors: string[];
  replaced: boolean;
};

type LedgerState = {
  transactions: Transaction[];
  isSample: boolean;
  importMeta: { filename: string; at: number } | null;
  importCsv: (text: string, filename: string, mode?: "merge" | "replace") => ImportNotice;
  loadSample: () => void;
  clearAll: () => void;
  setCategory: (id: string, category: string) => void;
};

function mergeTransactions(existing: Transaction[], incoming: Transaction[]) {
  const map = new Map(existing.map((t) => [t.id, t]));
  let added = 0;
  let skipped = 0;
  for (const tx of incoming) {
    const prev = map.get(tx.id);
    if (prev) {
      skipped += 1;
      continue;
    }
    map.set(tx.id, tx);
    added += 1;
  }
  const transactions = [...map.values()].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return { transactions, added, skipped };
}

export const useLedger = create<LedgerState>()(
  persist(
    (set, get) => ({
      transactions: sampleTransactions(),
      isSample: true,
      importMeta: null,
      importCsv: (text, filename, mode) => {
        const parsed = parseBankCsv(text, filename);
        const replace = mode === "replace" || get().isSample;
        const merged = replace
          ? { transactions: parsed.transactions, added: parsed.transactions.length, skipped: 0 }
          : mergeTransactions(get().transactions, parsed.transactions);

        set({
          transactions: merged.transactions,
          isSample: false,
          importMeta: { filename, at: Date.now() },
        });

        return {
          filename,
          added: merged.added,
          skipped: merged.skipped + parsed.skipped,
          format: parsed.format,
          errors: parsed.errors,
          replaced: replace,
        };
      },
      loadSample: () =>
        set({
          transactions: sampleTransactions(),
          isSample: true,
          importMeta: null,
        }),
      clearAll: () =>
        set({
          transactions: [],
          isSample: false,
          importMeta: null,
        }),
      setCategory: (id, category) =>
        set({
          transactions: get().transactions.map((t) => (t.id === id ? { ...t, category } : t)),
        }),
    }),
    {
      name: "tally-mercury-v1",
      version: 1,
      skipHydration: true,
      partialize: (s) => ({
        transactions: s.transactions,
        isSample: s.isSample,
        importMeta: s.importMeta,
      }),
    },
  ),
);
