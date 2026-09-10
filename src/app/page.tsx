import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { System } from "@/components/System";
import { Problem } from "@/components/Problem";
import { GrowthStack } from "@/components/GrowthStack";
import { Method } from "@/components/Method";
import { Why } from "@/components/Why";
import { Results } from "@/components/Results";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Philosophy } from "@/components/Philosophy";
import { Contact } from "@/components/Contact";
import { BrandStatement } from "@/components/BrandStatement";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <System />
        <Problem />
        <GrowthStack />
        <Method />
        <Why />
        <Results />
        <Work />
        <About />
        <Philosophy />
        <Contact />
        <BrandStatement />
      </main>
      <Footer />
    </>
  );
}
