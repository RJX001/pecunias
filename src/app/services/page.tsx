import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

const TITLE = "Web, App & Marketing Services · Pecunia Studios";
const DESCRIPTION =
  "Explore six services spanning websites and apps, branding and content, advertising, SEO, AI automation, and EPOS & CRM systems.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    siteName: "Pecunia Studios",
    locale: "en_GB",
    title: TITLE,
    description: DESCRIPTION,
    url: "/services",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
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
