import type { GrowthImageKey } from "@/data/growth-stack";

export type ServiceImage = { src: string; width: number; height: number };

export const SERVICE_IMAGES: Record<GrowthImageKey, ServiceImage> = {
  studio: { src: "/images/premium-studio.png", width: 1672, height: 941 },
  city: { src: "/images/city.jpg", width: 540, height: 960 },
  sunset: { src: "/images/sunset.jpg", width: 540, height: 960 },
};
