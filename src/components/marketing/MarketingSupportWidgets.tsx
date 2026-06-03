import { useEffect } from "react";
import { TelegramSupportWidget } from "@/components/TelegramSupportWidget";

const TAWK_EMBED = "https://embed.tawk.to/6a19b261be64d31c34610480/default";

type TawkWindow = Window & {
  Tawk_API?: { hideWidget?: () => void; showWidget?: () => void };
  Tawk_LoadStart?: Date;
};

function TawkChat() {
  useEffect(() => {
    const win = window as TawkWindow;
    win.Tawk_API = win.Tawk_API || {};
    win.Tawk_LoadStart = new Date();

    if (!document.getElementById("tawk-script")) {
      const script = document.createElement("script");
      script.id = "tawk-script";
      script.async = true;
      script.src = TAWK_EMBED;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.body.appendChild(script);
    } else {
      win.Tawk_API?.showWidget?.();
    }

    return () => {
      win.Tawk_API?.hideWidget?.();
    };
  }, []);

  return null;
}

/** Live chat widgets — home page only */
export function MarketingSupportWidgets() {
  return (
    <>
      <TawkChat />
      <TelegramSupportWidget />
    </>
  );
}
