"use client";

import { FormEvent, useEffect, useRef, useState, type ReactNode } from "react";
import { FINAL_CTA } from "@/data/homepage-copy";
import { SERVICE_OPTIONS } from "@/lib/contact-schema";
import { Magnetic } from "./Magnetic";
import { Testimonials } from "./Testimonials";
import styles from "./Contact.module.css";

type Status = "idle" | "submitting" | "success" | "error";

type ContactFormState = {
  name: string;
  businessName: string;
  email: string;
  mobile: string;
  service: string;
  details: string;
  socialLinks: string;
};

const EMPTY_FORM: ContactFormState = {
  name: "",
  businessName: "",
  email: "",
  mobile: "",
  service: "",
  details: "",
  socialLinks: "",
};

const FINAL_CTA_SPLIT = FINAL_CTA.headline.indexOf(". ");
const FINAL_CTA_INK = FINAL_CTA.headline.slice(0, FINAL_CTA_SPLIT + 1);
const FINAL_CTA_GREEN = FINAL_CTA.headline.slice(FINAL_CTA_SPLIT + 2);
const FORM_PROMPT = "Start A Growth Project";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

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
          email: form.email,
          mobile: form.mobile,
          service: form.service,
          details: form.details,
          socialLinks: form.socialLinks,
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
    <section id="contact" className="section-pad">
      <div className="mx-auto grid max-w-[var(--maxw)] gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <header>
          <h2 className="display max-w-[16ch] text-[clamp(34px,5vw,58px)]">
            {FINAL_CTA_INK}{" "}
            <span className="text-green">{FINAL_CTA_GREEN}</span>
          </h2>
          <p className="support">{FINAL_CTA.support}</p>
          <Testimonials />
        </header>

        <div className="grid min-w-0 gap-5">
          <div className="flex flex-col items-center gap-1 text-center">
            <p
              id="contact-form-title"
              className="m-0 text-[20px] font-extrabold tracking-[-0.02em] text-green md:text-[22px]"
            >
              {FORM_PROMPT}
            </p>
            <svg
              className="block shrink-0 text-green"
              width="12"
              height="48"
              viewBox="0 0 12 48"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 1.5V38.5M1.75 34 6 46.5 10.25 34"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {status === "success" ? (
            <div
              ref={successRef}
              className={styles.success}
              role="status"
              tabIndex={-1}
            >
              <p className={styles.kicker}>Received</p>
              <p className={styles.title}>Request received.</p>
              <p className={styles.body}>{message}</p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className={styles.form}
              aria-labelledby="contact-form-title"
              aria-describedby={status === "error" ? "contact-error" : undefined}
            >
              <div className={styles.row}>
                <Field id="contact-name" label="Your name">
                  <input
                    id="contact-name"
                    className={styles.control}
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={120}
                    placeholder="Alex Johnson"
                    disabled={submitting}
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                  />
                </Field>
                <Field id="contact-business" label="Business name">
                  <input
                    id="contact-business"
                    className={styles.control}
                    name="businessName"
                    type="text"
                    autoComplete="organization"
                    maxLength={160}
                    placeholder="Your Brand Ltd"
                    disabled={submitting}
                    value={form.businessName}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        businessName: event.target.value,
                      }))
                    }
                  />
                </Field>
              </div>

              <div className={styles.row}>
                <Field id="contact-email" label="Email">
                  <input
                    id="contact-email"
                    className={styles.control}
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    required
                    maxLength={254}
                    placeholder="hello@yourbrand.com"
                    disabled={submitting}
                    value={form.email}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                  />
                </Field>
                <Field id="contact-phone" label="Phone">
                  <input
                    id="contact-phone"
                    className={styles.control}
                    name="mobile"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={40}
                    placeholder="+44 7000 000000"
                    disabled={submitting}
                    value={form.mobile}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        mobile: event.target.value,
                      }))
                    }
                  />
                </Field>
              </div>

              <Field id="contact-social" label="Website or Instagram">
                <input
                  id="contact-social"
                  className={styles.control}
                  name="socialLinks"
                  type="text"
                  inputMode="url"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  maxLength={2000}
                  placeholder="yoursite.com or @handle"
                  disabled={submitting}
                  value={form.socialLinks}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      socialLinks: event.target.value,
                    }))
                  }
                />
              </Field>

              <Field id="contact-service" label="What do you need?">
                <div className={styles.selectWrap}>
                  <select
                    id="contact-service"
                    className={`${styles.control} ${styles.select}`}
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
                      Select service
                    </option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <svg
                    className={styles.chevron}
                    viewBox="0 0 12 8"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1.25 6 6.25 11 1.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Field>

              <Field id="contact-details" label="Tell us more">
                <textarea
                  id="contact-details"
                  className={`${styles.control} ${styles.textarea}`}
                  name="details"
                  rows={4}
                  maxLength={4000}
                  placeholder="Describe your project, goals or anything else..."
                  disabled={submitting}
                  value={form.details}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      details: event.target.value,
                    }))
                  }
                />
              </Field>

              <div className={styles.actions}>
                <Magnetic>
                  <button
                    type="submit"
                    className={`btn btn-green disabled:cursor-not-allowed disabled:opacity-60 ${styles.submit}`}
                    disabled={submitting}
                    aria-busy={submitting}
                  >
                    {submitting ? "Sending" : "Submit Request"}
                  </button>
                </Magnetic>
                {status === "error" ? (
                  <p className={styles.error} id="contact-error" role="alert">
                    {message}
                  </p>
                ) : null}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
