import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { ABOUT } from "@/data/homepage-copy";

export const metadata: Metadata = {
  title: "About | Pecunia Studios",
  description: ABOUT.subheading,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
