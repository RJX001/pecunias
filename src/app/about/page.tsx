import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const TITLE = "About Our Design & Marketing Team · Pecunia Studios";
const DESCRIPTION =
  "Meet Pecunia Studios and learn how our marketing and technology specialists approach website, app and business growth projects.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    siteName: "Pecunia Studios",
    locale: "en_GB",
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
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
