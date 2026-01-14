"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ghostai_demo_banner_hidden";

export default function DemoBanner() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setHidden(window.localStorage.getItem(STORAGE_KEY) === "1");
  }, []);

  const handleHide = () => {
    setHidden(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore storage errors (private mode, blocked, etc.)
    }
  };

  if (hidden) return null;

  return (
    <div className="sticky top-0 z-50 w-full border-b border-red-400/40 bg-red-950/90 px-4 py-3 text-sm text-red-100 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="font-semibold uppercase tracking-wide">
          DEMO CONCEPT: Fictitious business. Placeholder address/phone/testimonials. Built as a speed demo.
        </p>
        <button
          type="button"
          onClick={handleHide}
          aria-label="Hide demo notice"
          className="rounded-full border border-red-200/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-red-100 transition hover:bg-red-200/10"
        >
          Hide
        </button>
      </div>
    </div>
  );
}
