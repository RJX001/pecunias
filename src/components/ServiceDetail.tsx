import Image from "next/image";
import Link from "next/link";
import {
  GROWTH_CONTACT,
  GROWTH_STACK_INTRO,
  SERVICE_PRINCIPLES,
  getServiceFaqs,
  growthStack,
  servicePath,
  type GrowthSystem,
} from "@/data/growth-stack";
import { APPROACH_INTRO, APPROACH_SUPPORT } from "@/data/approach";
import { ProcessSteps } from "./service/ProcessSteps";
import { FINAL_CTA } from "@/data/homepage-copy";
import { Breadcrumb } from "./service/Breadcrumb";
import { SERVICE_IMAGES } from "./service/images";
import { ServiceNav } from "./service/ServiceNav";
import { WhatWeDo } from "./WhatWeDo";
import styles from "./service/service.module.css";

export function ServiceDetail({ system }: { system: GrowthSystem }) {
  const others = growthStack.filter((item) => item.slug !== system.slug);
  const image = SERVICE_IMAGES[system.image];
  const faqs = getServiceFaqs(system);

  return (
    <>
      <ServiceNav current={system.slug} />
      <div className={styles.page}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: system.name },
          ]}
        />

        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              {system.number} / Pecunia Studios
            </p>
            <h1 className={styles.title}>{system.name}</h1>
            <p className={styles.strap}>{system.description}</p>
            <div className={styles.body}>
              {system.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className={styles.actions}>
              <a href={FINAL_CTA.href} className={`ps-button ${styles.pill}`}>
                {FINAL_CTA.cta}
              </a>
              <a href="#what-we-do" className={styles.inlineLink}>
                WHAT WE DO ↓
              </a>
            </div>
          </div>
          <div className={styles.art}>
            <Image
              src={image.src}
              alt={system.artLabel}
              fill
              priority
              sizes="(max-width: 700px) 440px, 46vw"
              style={{ objectPosition: system.imagePosition }}
            />
            <span className={styles.artCaption}>{system.name}</span>
          </div>
        </section>

        <section className={styles.section} id="what-we-do">
          <div className={styles.sectionLabel}>
            <span>01</span>
            <h2>What we do</h2>
          </div>
          <WhatWeDo items={system.whatWeDo} />
        </section>

        {system.closing ? (
          <section className={styles.section}>
            <div className={styles.sectionLabel}>
              <span>02</span>
              <h2>Why it matters</h2>
            </div>
            <p className={styles.impactLine}>{system.closing}</p>
            <ul className={styles.principles}>
              {SERVICE_PRINCIPLES.map((principle, index) => (
                <li key={principle}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{principle}</h3>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <span>03</span>
            <h2>The Pecunia Approach</h2>
          </div>
          <h3 className={styles.processStrap}>{APPROACH_INTRO}</h3>
          <p className={styles.body}>{APPROACH_SUPPORT}</p>
          <ProcessSteps />
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <span>04</span>
            <h2>Common questions</h2>
          </div>
          <div className={styles.faq}>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                {faq.answer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </details>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <span>05</span>
            <h2>{GROWTH_STACK_INTRO}</h2>
          </div>
          <ul className={styles.related}>
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={servicePath(item.slug)}>
                  {item.name} <span aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.enquiry}>
          <span className={styles.eyebrow}>Start A Growth Project</span>
          <h2>
            Your business has potential.
            <br />
            Let&apos;s build the system to capture it.
          </h2>
          <p>{GROWTH_CONTACT}</p>
          <a href={FINAL_CTA.href} className={`ps-button ${styles.pill}`}>
            {FINAL_CTA.cta}
          </a>
        </section>
      </div>
    </>
  );
}
