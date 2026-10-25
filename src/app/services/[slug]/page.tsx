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

const SERVICES_TITLE = "Web, App & Marketing Services · Pecunia Studios";
const SERVICES_DESCRIPTION =
  "Explore six services spanning websites and apps, branding and content, advertising, SEO, AI automation, and EPOS & CRM systems.";

function routeMetadata(
  title: string,
  description: string,
  path: string,
  image?: string | null,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Pecunia Studios",
      locale: "en_GB",
      title,
      description,
      url: path,
      ...(image ? { images: [image] } : {}),
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const system = getGrowthSystem(slug);
  if (!system) {
    return routeMetadata(SERVICES_TITLE, SERVICES_DESCRIPTION, "/services");
  }
  const image =
    system.image === "studio"
      ? "/images/premium-studio.png"
      : system.image === "city"
        ? "/images/city.jpg"
        : system.image === "sunset"
          ? "/images/sunset.jpg"
          : null;
  return routeMetadata(
    system.seoTitle,
    system.seoDescription,
    `/services/${system.slug}`,
    image,
  );
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
