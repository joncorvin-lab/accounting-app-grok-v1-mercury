import { useCallback, useRef, useState } from "react";
import { FileSpreadsheet, Upload } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { buildSampleCsv } from "@/lib/mercury/sample";
import { useLedger } from "@/lib/store";
import { cn } from "@/lib/utils";

function downloadSample() {
  const blob = new Blob([buildSampleCsv()], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "mercury-sample.csv";
  a.click();
  URL.revokeObjectURL(url);
}

export function ImportDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const importCsv = useLedger((s) => s.importCsv);
  const isSample = useLedger((s) => s.isSample);
  const [dragging, setDragging] = useState(false);
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    async (files: FileList | File[]) => {
      const file = files[0];
      if (!file) return;
      if (!/\.(csv|txt)$/i.test(file.name) && file.type && !file.type.includes("csv") && file.type !== "text/plain") {
        toast.error("Please drop a .csv file exported from Mercury.");
        return;
      }
      setBusy(true);
      try {
        const text = await file.text();
        const result = importCsv(text, file.name);
        if (result.added === 0 && result.errors.length) {
          toast.error(result.errors[0] ?? "Could not read that CSV.");
          return;
        }
        if (result.added === 0) {
          toast.message("No new transactions", {
            description: result.skipped ? `${result.skipped} rows skipped or already imported.` : undefined,
          });
        } else {
          toast.success(
            result.replaced ? `Imported ${result.added} transactions` : `Added ${result.added} transactions`,
            {
              description: result.skipped ? `${result.skipped} skipped as duplicates or empty.` : `Detected ${result.format} format.`,
            },
          );
        }
        onOpenChange(false);
      } catch {
        toast.error("Could not read that file.");
      } finally {
        setBusy(false);
      }
    },
    [importCsv, onOpenChange],
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import Mercury CSV</DialogTitle>
          <DialogDescription>
            {isSample
              ? "This will replace the sample ledger with your export. Files stay in this browser."
              : "New rows merge with your ledger. Duplicates are skipped. Nothing is uploaded."}
          </DialogDescription>
        </DialogHeader>

        <button
          type="button"
          disabled={busy}
          onClick={() => inputRef.current?.click()}
          onDragEnter={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            void handleFiles(e.dataTransfer.files);
          }}
          className={cn(
            "mt-4 flex min-h-40 w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed px-4 py-8 text-center transition-colors duration-150",
            dragging ? "border-fg bg-surface-2" : "border-border-strong bg-bg hover:bg-surface-2",
          )}
        >
          <Upload className="size-5 text-muted" />
          <p className="text-sm font-medium">Drop a CSV here, or choose a file</p>
          <p className="text-xs text-muted">Mercury Transactions export, QuickBooks CSV, or Date / Description / Amount</p>
        </button>
        <input
          ref={inputRef}
          type="file"
          accept=".csv,text/csv"
          className="sr-only"
          onChange={(e) => {
            if (e.target.files) void handleFiles(e.target.files);
            e.target.value = "";
          }}
        />

        <ol className="mt-4 space-y-1.5 text-sm text-muted">
          <li>1. In Mercury, open Transactions.</li>
          <li>2. Choose Export all or Export filtered.</li>
          <li>3. Download CSV and drop it above.</li>
        </ol>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-between">
          <Button type="button" variant="ghost" size="sm" onClick={downloadSample}>
            <FileSpreadsheet />
            Download sample CSV
          </Button>
          <Button type="button" variant="secondary" onClick={() => inputRef.current?.click()} disabled={busy}>
            Choose file
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
