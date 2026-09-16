import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { System } from "@/components/System";
import { GrowthStack } from "@/components/GrowthStack";
import { Method } from "@/components/Method";
import { Why } from "@/components/Why";
import { Problem } from "@/components/Problem";
import { BrandStatement } from "@/components/BrandStatement";
import { Philosophy } from "@/components/Philosophy";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <System />
        <GrowthStack />
        <Method />
        <Why />
        <Problem />
        <BrandStatement />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
