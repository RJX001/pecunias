import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { ServiceDetail } from "@/components/ServiceDetail";
import { Footer } from "@/components/Footer";
import { getGrowthSystem, growthStack } from "@/data/growth-stack";

export const dynamicParams = false;

export function generateStaticParams() {
  return growthStack.map((system) => ({ slug: system.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const system = getGrowthSystem(slug);
  if (!system) {
    return { title: "Services | Pecunia Studios" };
  }
  return {
    title: `${system.title} | Pecunia Studios`,
    description: system.description,
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const system = getGrowthSystem(slug);
  if (!system) notFound();

  return (
    <>
      <Header />
      <main>
        <ServiceDetail system={system} />
      </main>
      <Footer />
    </>
  );
}
