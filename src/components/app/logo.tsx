import { cn } from "@/lib/utils";

export function TallyMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("text-fg", className)} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square">
        <path d="M5.5 4.5v15" />
        <path d="M9.5 4.5v15" />
        <path d="M13.5 4.5v15" />
        <path d="M17.5 4.5v15" />
        <path d="M4 16.5 L20 7.5" />
      </g>
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-fg">
        <TallyMark className="size-5 text-primary-fg" />
      </span>
      <span className="font-display text-xl leading-none font-medium tracking-tight">Tally</span>
    </span>
  );
}
