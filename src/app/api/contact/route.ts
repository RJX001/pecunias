import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";
import {
  contactSchema,
  type ContactPayload,
} from "@/lib/contact-schema";
import { checkRateLimit } from "@/lib/rate-limit";

const DEFAULT_TO = "hello@pecuniastudios.com";
const DEFAULT_FROM = "PecuniaStudios <hello@pecuniastudios.com>";

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return (
    request.headers.get("x-real-ip") ??
    request.headers.get("cf-connecting-ip") ??
    "unknown"
  );
}

function genericError(status: number, message: string, extra?: HeadersInit) {
  return NextResponse.json({ ok: false, error: message }, { status, headers: extra });
}

function asPlainText(value: string): string {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "");
}

async function persistLead(lead: ContactPayload) {
  // Local/dev fallback. On Vercel the filesystem is ephemeral and only
  // /tmp is writable, so this file will not survive deploys — set Resend
  // for production.
  const dir = process.env.VERCEL
    ? path.join("/tmp", "pecunias-leads")
    : path.join(process.cwd(), "data");
  const file = path.join(dir, "leads.json");
  await mkdir(dir, { recursive: true });

  let existing: unknown[] = [];
  try {
    const raw = await readFile(file, "utf8");
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed)) existing = parsed;
  } catch {
    existing = [];
  }

  existing.push({
    name: lead.name,
    businessName: lead.businessName,
    service: lead.service,
    details: lead.details,
    receivedAt: new Date().toISOString(),
  });

  await writeFile(file, `${JSON.stringify(existing, null, 2)}\n`, "utf8");
}

async function sendResendEmail(lead: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const to = process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_TO;
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM;

  const text = [
    "New account application",
    "",
    `Name: ${asPlainText(lead.name)}`,
    `Business name: ${asPlainText(lead.businessName) || "—"}`,
    `Service needed: ${lead.service}`,
    "",
    "Project details:",
    asPlainText(lead.details),
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: "New quote request",
      text,
    }),
  });

  if (!response.ok) {
    console.error("Resend request failed", response.status);
    throw new Error("email_failed");
  }

  return true;
}

export async function POST(request: NextRequest) {
  const limited = checkRateLimit(clientIp(request));
  if (!limited.ok) {
    return genericError(429, "Too many requests. Please try again later.", {
      "Retry-After": String(limited.retryAfterSeconds),
    });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return genericError(400, "Please check the form and try again.");
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return genericError(400, "Please check the form and try again.");
  }

  const lead = parsed.data;

  try {
    if (process.env.RESEND_API_KEY) {
      await sendResendEmail(lead);
    } else {
      await persistLead(lead);
    }
  } catch {
    return genericError(500, "Something went wrong. Please try again.");
  }

  console.log("Contact lead received");

  return NextResponse.json({ ok: true });
}
