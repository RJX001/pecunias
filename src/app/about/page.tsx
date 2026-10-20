import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { ABOUT } from "@/data/homepage-copy";

const TITLE = "About | Pecunia Studios";

export const metadata: Metadata = {
  title: TITLE,
  description: ABOUT.subheading,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    siteName: "Pecunia Studios",
    locale: "en_GB",
    title: TITLE,
    description: ABOUT.subheading,
    url: "/about",
  },
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
