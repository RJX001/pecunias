import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Premium Website Design",
  "Paid Growth",
  "Organic Growth & Content",
  "AI, Automation & CRM",
  "Search Visibility & SEO",
  "Not sure yet",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  businessName: z.string().trim().max(160).default(""),
  // Trim before z.email(): Zod 4 runs the format check before a later .trim().
  // 254 is the practical maximum length of an email address.
  email: z.string().trim().pipe(z.email().max(254)),
  mobile: z.string().trim().max(40).default(""),
  service: z.enum(SERVICE_OPTIONS),
  details: z.string().trim().max(4000).default(""),
  socialLinks: z.string().trim().max(2000).default(""),
});

export type ContactPayload = z.infer<typeof contactSchema>;
