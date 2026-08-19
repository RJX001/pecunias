"use client";

import { FormEvent, useState } from "react";
import { SERVICE_OPTIONS } from "@/lib/contact-schema";

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY_FORM = {
  name: "",
  businessName: "",
  service: "",
  details: "",
};

export function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          businessName: form.businessName,
          service: form.service,
          details: form.details,
        }),
      });

      const data: unknown = await response.json().catch(() => null);
      const errorMessage =
        data &&
        typeof data === "object" &&
        "error" in data &&
        typeof data.error === "string"
          ? data.error
          : "Something went wrong. Please try again.";

      if (!response.ok) {
        setStatus("error");
        setMessage(errorMessage);
        return;
      }

      setStatus("success");
      setForm(EMPTY_FORM);
      setMessage("Request received. We'll come back with a scoped proposal.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  const submitting = status === "submitting";

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="split">
          <header className="stack">
            <p className="eyebrow">New Account Application</p>
            <h2 className="font-display max-w-[12ch] text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.15] tracking-tight text-paper">
              Request a quote.
            </h2>
            <p className="max-w-[36ch] font-sans text-[17px] leading-[1.7] text-stone">
              Tell us what you need and we&apos;ll come back with a scoped
              proposal — no obligation, no public price list to guess from.
            </p>
          </header>

          {status === "success" ? (
            <div
              className="ledger-card grid gap-4"
              role="status"
              aria-live="polite"
            >
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-brass">
                Application posted
              </p>
              <p className="font-display text-2xl font-normal italic text-paper">
                Request received.
              </p>
              <p className="font-sans text-[15px] leading-relaxed text-stone">
                {message}
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="grid gap-0 overflow-hidden border border-line bg-ink-2"
            >
              <div className="grid grid-cols-[auto_1fr] items-baseline gap-4 border-b border-line px-6 py-3">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-brass">
                  APP
                </span>
                <span className="text-right font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
                  New account
                </span>
              </div>

              <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
                <div className="field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={120}
                    disabled={submitting}
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                  />
                </div>

                <div className="field">
                  <label htmlFor="contact-business">Business name</label>
                  <input
                    id="contact-business"
                    name="businessName"
                    type="text"
                    autoComplete="organization"
                    maxLength={160}
                    disabled={submitting}
                    value={form.businessName}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        businessName: event.target.value,
                      }))
                    }
                  />
                </div>

                <div className="field sm:col-span-2">
                  <label htmlFor="contact-service">Service needed</label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    disabled={submitting}
                    value={form.service}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        service: event.target.value,
                      }))
                    }
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field sm:col-span-2">
                  <label htmlFor="contact-details">Project details</label>
                  <textarea
                    id="contact-details"
                    name="details"
                    maxLength={4000}
                    placeholder="What are you trying to achieve?"
                    disabled={submitting}
                    value={form.details}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        details: event.target.value,
                      }))
                    }
                  />
                </div>

                <div className="grid gap-3 sm:col-span-2">
                  <button
                    type="submit"
                    className="btn btn-solid justify-self-start disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={submitting}
                    aria-busy={submitting}
                  >
                    Submit Request
                  </button>
                  {status === "error" ? (
                    <p
                      className="font-mono text-[12px] tracking-wide text-paper"
                      role="alert"
                    >
                      {message}
                    </p>
                  ) : null}
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
