import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { GROWTH_STACK_HEADING, GROWTH_STACK_INTRO } from "@/data/growth-stack";

export const metadata: Metadata = {
  title: `${GROWTH_STACK_HEADING} | Pecunia Studios`,
  description: GROWTH_STACK_INTRO,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${GROWTH_STACK_HEADING} | Pecunia Studios`,
    description: GROWTH_STACK_INTRO,
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </>
  );
}
