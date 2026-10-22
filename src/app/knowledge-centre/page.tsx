import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KnowledgeCentre } from "@/components/knowledge/KnowledgeCentre";
import { KNOWLEDGE_CENTRE_DESCRIPTION } from "@/data/knowledge-centre";

const TITLE = "Knowledge Centre | Pecunia Studios";

export const metadata: Metadata = {
  title: TITLE,
  description: KNOWLEDGE_CENTRE_DESCRIPTION,
  alternates: { canonical: "/knowledge-centre" },
  openGraph: {
    type: "website",
    siteName: "Pecunia Studios",
    locale: "en_GB",
    title: TITLE,
    description: KNOWLEDGE_CENTRE_DESCRIPTION,
    url: "/knowledge-centre",
  },
};

export default function KnowledgeCentrePage() {
  return (
    <>
      <Header />
      <main>
        <KnowledgeCentre />
      </main>
      <Footer />
    </>
  );
}
