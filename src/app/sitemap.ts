import type { MetadataRoute } from "next";
import { growthStack, servicePath } from "@/data/growth-stack";

const SITE_URL = "https://www.pecuniastudios.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    ...growthStack.map((system) => ({
      url: `${SITE_URL}${servicePath(system.slug)}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
