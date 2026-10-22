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
  const image =
    system.image === "studio"
      ? "/images/premium-studio.png"
      : system.image === "city"
        ? "/images/city.jpg"
        : system.image === "sunset"
          ? "/images/sunset.jpg"
          : null;
  return {
    title: `${system.name} | Pecunia Studios`,
    description,
    alternates: { canonical: `/services/${system.slug}` },
    openGraph: {
      title: `${system.name} | Pecunia Studios`,
      description,
      url: `/services/${system.slug}`,
      ...(image ? { images: [image] } : {}),
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
