import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Barbershop Demo | Ghost AI Systems",
  description: "Barbershop concept demo with placeholder content.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function BarbershopDemoPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-300">
          Demo Site
        </p>
        <h1 className="text-4xl font-semibold text-white">Barbershop Demo</h1>
        <p className="max-w-2xl text-sm text-gray-300">
          This is a demo concept site for a fictitious barbershop. All addresses, phone numbers,
          testimonials, and booking details are placeholders.
        </p>
        <div className="rounded-xl border border-red-400/30 bg-red-950/60 p-4 text-sm text-red-100">
          Sample testimonials (demo content) and business details are intentionally fake.
        </div>
      </header>

      <div className="flex items-center gap-4 text-sm">
        <Link
          href="https://barbershop-two-chi.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="text-red-200 underline-offset-4 hover:underline"
        >
          Open in new tab
        </Link>
        <span className="text-xs text-gray-500">External demo render</span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-xl">
        <iframe
          title="Barbershop demo preview"
          src="https://barbershop-two-chi.vercel.app"
          className="h-[75vh] min-h-[720px] w-full"
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </div>
    </div>
  );
}
