import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | PecuniaStudios",
  description:
    "Each engagement is scoped and quoted individually — no line item priced the same twice, because no two businesses are.",
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
