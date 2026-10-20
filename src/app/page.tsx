import { Header } from "@/components/Header";
import { HashScroll } from "@/components/HashScroll";
import { Wordmark } from "@/components/Wordmark";
import { Hero } from "@/components/Hero";
import { System } from "@/components/System";
import { GrowthStack } from "@/components/GrowthStack";
import { CaseStudies } from "@/components/CaseStudies";
import { Method } from "@/components/Method";
import { AboutTeaser } from "@/components/AboutTeaser";
import { Why } from "@/components/Why";
import { Problem } from "@/components/Problem";
import { BrandStatement } from "@/components/BrandStatement";
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
        <Method />
        <AboutTeaser />
        <Why />
        <Problem />
        <BrandStatement />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
