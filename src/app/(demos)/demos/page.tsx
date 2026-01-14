import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demo Sites | Ghost AI Systems",
  description: "Concept demos built as speed tests with placeholder content.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function DemosPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-300">
          Demo Directory
        </p>
        <h1 className="text-4xl font-semibold text-white">Demo Sites</h1>
        <p className="max-w-2xl text-sm text-gray-300">
          Concept demos. Placeholder content. Not real businesses.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <Link
          href="/demos/barbershop"
          className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30 hover:bg-white/10"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Barbershop</h2>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-200">
              Demo
            </span>
          </div>
          <p className="mt-3 text-sm text-gray-300">
            Premium grooming concept with a luxury aesthetic and interactive layout.
          </p>
          <p className="mt-4 text-xs text-gray-400">Built in ~13 minutes.</p>
          <div className="mt-6 text-sm font-semibold text-red-200 transition group-hover:text-red-100">
            View demo
          </div>
        </Link>
      </section>
    </div>
  );
}
