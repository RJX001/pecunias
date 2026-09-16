"use client";

import { FormEvent, useState } from "react";
import { FINAL_CTA } from "@/data/homepage-copy";
import { SERVICE_OPTIONS } from "@/lib/contact-schema";
import { Magnetic } from "./Magnetic";

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
    <section
      id="contact"
      className="section-pad relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, var(--green-soft), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[var(--maxw)] gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <header>
          <h2 className="display max-w-[16ch] text-[clamp(34px,5vw,58px)]">
            {FINAL_CTA.headline}
          </h2>
          <p className="support">{FINAL_CTA.support}</p>
          <p className="mt-8 m-0 text-[18px] font-semibold text-green-text">
            {FINAL_CTA.cta}
          </p>
        </header>

        {status === "success" ? (
          <div className="border border-line bg-bg-raised p-8" role="status">
            <p className="m-0 text-[13px] text-green-text">Received</p>
            <p className="mt-3 m-0 text-[28px] font-bold tracking-[-0.02em]">
              Request received.
            </p>
            <p className="mt-3 m-0 text-[15px] text-fg-dim">{message}</p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="grid gap-5 border border-line bg-bg-raised p-6 sm:p-8"
          >
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

            <div className="field">
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

            <div className="field">
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

            <Magnetic>
              <button
                type="submit"
                className="btn btn-solid disabled:cursor-not-allowed disabled:opacity-60"
                disabled={submitting}
                aria-busy={submitting}
              >
                {submitting ? "Sending" : "Submit request"}
              </button>
            </Magnetic>
            {status === "error" ? (
              <p className="m-0 text-[13px] text-fg" role="alert">
                {message}
              </p>
            ) : null}
          </form>
        )}
      </div>
    </section>
  );
}
