import { Header } from "@/components/Header";
import { HashScroll } from "@/components/HashScroll";
import { Wordmark } from "@/components/Wordmark";
import { Hero } from "@/components/Hero";
import { System } from "@/components/System";
import { GrowthStack } from "@/components/GrowthStack";
import { CaseStudies } from "@/components/CaseStudies";
import { SearchVisibility } from "@/components/SearchVisibility";
import { Method } from "@/components/Method";
import { AboutTeaser } from "@/components/AboutTeaser";
import { Commitment } from "@/components/Commitment";
import { Why } from "@/components/Why";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HashScroll />
      <Header />
      <main className="relative isolate">
        <Wordmark />
        <Hero />
        <System />
        <GrowthStack />
        <CaseStudies />
        <SearchVisibility />
        <Method />
        <AboutTeaser />
        <Commitment />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
