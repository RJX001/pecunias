import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Premium Website and App",
  "Bespoke Branding & Creative Content",
  "Strategic Advertising & Campaigns",
  "SEO & AI Search Visibility",
  "Intelligent AI & Business Automation",
  "Tailored EPOS & CRM Systems",
  "Not sure yet",
] as const;

type ServiceOption = (typeof SERVICE_OPTIONS)[number];

/** Older enquiry labels, rewritten to the current option before enum validation. */
const LEGACY_SERVICE_LABELS: Record<string, ServiceOption> = {
  "Premium Website Design": "Premium Website and App",
  "Premium Websites & Apps": "Premium Website and App",
  "Website & App Design": "Premium Website and App",
  "Website Development": "Premium Website and App",
  "Marketplace & Store Setup": "Premium Website and App",
  "Organic Growth & Content": "Bespoke Branding & Creative Content",
  "Branding & Content Creation": "Bespoke Branding & Creative Content",
  "Creative Services": "Bespoke Branding & Creative Content",
  "Paid Growth": "Strategic Advertising & Campaigns",
  "Paid Advertising & Campaigns": "Strategic Advertising & Campaigns",
  "Paid Advertising": "Strategic Advertising & Campaigns",
  "Digital Marketing": "Strategic Advertising & Campaigns",
  "Search Visibility & SEO": "SEO & AI Search Visibility",
  "SEO & AI Search Visibility": "SEO & AI Search Visibility",
  "AI, Automation & CRM": "Intelligent AI & Business Automation",
  "AI & Business Automation": "Intelligent AI & Business Automation",
  "App Development": "Intelligent AI & Business Automation",
  "EPOS & CRM Systems": "Tailored EPOS & CRM Systems",
  "Not sure yet": "Not sure yet",
};

function canonicalServiceLabel(value: string): string {
  return Object.hasOwn(LEGACY_SERVICE_LABELS, value)
    ? LEGACY_SERVICE_LABELS[value]
    : value;
}

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  businessName: z.string().trim().max(160).default(""),
  // Trim before z.email(): Zod 4 runs the format check before a later .trim().
  // 254 is the practical maximum length of an email address.
  email: z.string().trim().pipe(z.email().max(254)),
  mobile: z.string().trim().max(40).default(""),
  // Map stored labels before the enum. The parsed value is the current label.
  service: z
    .string()
    .trim()
    .transform(canonicalServiceLabel)
    .pipe(z.enum(SERVICE_OPTIONS)),
  details: z.string().trim().max(4000).default(""),
  socialLinks: z.string().trim().max(2000).default(""),
});

export type ContactPayload = z.infer<typeof contactSchema>;
