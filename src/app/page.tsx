import { Header } from "@/components/Header";
import { HashScroll } from "@/components/HashScroll";
import { Hero } from "@/components/Hero";
import { HomeDots } from "@/components/HomeDots";
import { System } from "@/components/System";
import { GrowthStack } from "@/components/GrowthStack";
import { Method } from "@/components/Method";
import { AboutTeaser } from "@/components/AboutTeaser";
import { Why } from "@/components/Why";
import { Problem } from "@/components/Problem";
import { BrandStatement } from "@/components/BrandStatement";
import { Philosophy } from "@/components/Philosophy";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HashScroll />
      <Header />
      <main className="relative isolate">
        <HomeDots />
        <Hero />
        <System />
        <GrowthStack />
        <Method />
        <AboutTeaser />
        <Why />
        <Problem />
        <BrandStatement />
        <Philosophy />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
