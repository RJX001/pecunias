import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Stack | Pecunia Studios",
  description:
    "Digital, Acquisition, Automation, Commerce and Creative — one connected growth system.",
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
