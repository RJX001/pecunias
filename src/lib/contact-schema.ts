import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Website Development",
  "Digital Marketing",
  "Paid Advertising",
  "Marketplace & Store Setup",
  "Creative Services",
  "App Development",
  "Not sure yet",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  businessName: z.string().trim().max(160).default(""),
  service: z.enum(SERVICE_OPTIONS),
  details: z.string().trim().max(4000).default(""),
});

export type ContactPayload = z.infer<typeof contactSchema>;
