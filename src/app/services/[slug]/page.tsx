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
  const description = `${system.description} ${system.body[0]}`;
  return {
    title: `${system.name} | Pecunia Studios`,
    description,
    alternates: { canonical: `/services/${system.slug}` },
    openGraph: {
      title: `${system.name} | Pecunia Studios`,
      description,
      url: `/services/${system.slug}`,
      images: [`/images/${system.image === "studio" ? "premium-studio.png" : system.image === "city" ? "city.jpg" : "sunset.jpg"}`],
    },
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
