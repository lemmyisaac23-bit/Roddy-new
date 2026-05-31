import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const TELEGRAM_URL = "https://t.me/Grillhashpowerminesupport";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.094.036.307.02.473-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.461-1.9-.903-1.056-.693-1.653-1.124-2.678-1.801-1.185-.78-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.061 3.345-.48.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

export function TelegramSupportWidget() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={panelRef}
      className="fixed bottom-6 left-6 z-[100] flex flex-col items-start gap-3"
      aria-live="polite"
    >
      <div
        id="telegram-support-panel"
        role="dialog"
        aria-labelledby="telegram-support-title"
        aria-hidden={!open}
        className={cn(
          "w-[min(100vw-3rem,20rem)] origin-bottom-left rounded-2xl border border-slate-200 bg-white p-5 shadow-xl transition-all duration-200",
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#229ED9]/10 text-[#229ED9]">
              <TelegramIcon className="h-5 w-5" />
            </div>
            <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#229ED9]">
              Live support
            </p>
            <h2
              id="telegram-support-title"
              className="mt-1 text-lg font-bold text-slate-900"
            >
              Grillhashpowermine Support
            </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            aria-label="Close support panel"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Chat with our team on Telegram for quick help with mining, deposits, and
          account questions.
        </p>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#229ED9] px-4 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#1a8bc4]"
        >
          <TelegramIcon className="h-4 w-4" />
          Open Telegram
        </a>
        <p className="mt-3 text-center text-xs text-slate-400">@Grillhashpowerminesupport</p>
      </div>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="telegram-support-panel"
        aria-label={open ? "Close Telegram support" : "Open Telegram support"}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#229ED9] focus-visible:ring-offset-2",
          open ? "bg-slate-700 hover:bg-slate-800" : "bg-[#229ED9] hover:bg-[#1a8bc4]"
        )}
      >
        {open ? <X className="h-6 w-6" /> : <TelegramIcon className="h-7 w-7" />}
      </button>
    </div>
  );
}
