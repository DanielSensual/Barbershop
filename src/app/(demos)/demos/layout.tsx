import type { Metadata } from "next";
import DemoBanner from "./DemoBanner";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function DemosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen bg-[#0b0f17] text-white">
      <DemoBanner />
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        {children}
      </div>
    </section>
  );
}
