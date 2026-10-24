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
import {
  APPROACH_INTRO,
  APPROACH_SUPPORT,
  type ApproachStage,
} from "@/data/approach";
import { ProcessSteps } from "./service/ProcessSteps";
import { FINAL_CTA } from "@/data/homepage-copy";
import { Breadcrumb } from "./service/Breadcrumb";
import { SERVICE_IMAGES } from "./service/images";
import { ServiceNav } from "./service/ServiceNav";
import { WhatWeDo } from "./WhatWeDo";
import styles from "./service/service.module.css";

function serviceStages(system: GrowthSystem): ApproachStage[] {
  return system.steps.map((step, index) => ({
    title: `${String(index + 1).padStart(2, "0")} — ${step.title}`,
    body: [step.body],
  }));
}

export function ServiceDetail({ system }: { system: GrowthSystem }) {
  const others = growthStack.filter((item) => item.slug !== system.slug);
  const image = system.image ? SERVICE_IMAGES[system.image] : undefined;
  const faqs = getServiceFaqs(system);
  const searchPage = system.slug === "search-visibility";
  const condensedBenefits = system.slug === "digital-ecommerce";
  const stages = serviceStages(system);

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
              {system.references?.map((item) => (
                <p key={`${item.href}-${item.label}`}>
                  {item.before}{" "}
                  <Link href={item.href} className={styles.referenceLink}>
                    {item.label}
                  </Link>
                  {item.after}
                </p>
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
          <div
            className={`${styles.art} ${
              system.graphic === "search" ? styles.artSearch : ""
            }`}
          >
            {system.graphic === "search" ? (
              <div
                className={styles.searchHero}
                role="img"
                aria-label={system.artLabel}
              >
                <span aria-hidden="true">Search visibility</span>
                <strong aria-hidden="true">Search. Find. Connect.</strong>
                <p aria-hidden="true">SEO · Local · AI search</p>
              </div>
            ) : image ? (
              <Image
                src={image.src}
                alt={system.artLabel}
                fill
                priority
                sizes="(max-width: 700px) 440px, 46vw"
                style={{ objectPosition: system.imagePosition }}
              />
            ) : null}
            {system.graphic === "search" ? null : (
              <span className={styles.artCaption}>{system.name}</span>
            )}
          </div>
        </section>

        <section className={styles.section} id="what-we-do">
          <div className={styles.sectionLabel}>
            <span>01</span>
            <h2>What we do</h2>
          </div>
          <WhatWeDo items={system.deliverables} />
        </section>

        {condensedBenefits || system.closing ? (
          <section
            className={`${styles.section} ${
              condensedBenefits ? styles.whyCompact : ""
            }`}
          >
            <div className={styles.sectionLabel}>
              <span>02</span>
              <h2>Why it matters</h2>
            </div>
            {condensedBenefits ? (
              <>
                <p className={styles.objectiveRow}>
                  Clear commercial objectives · Defined KPIs · Transparent
                  reporting
                </p>
                <ul className={styles.benefitLabels}>
                  {system.benefits.map((benefit) => (
                    <li key={benefit.title}>
                      <h3>{benefit.title}</h3>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <p className={styles.impactLine}>{system.closing}</p>
                {searchPage ? null : (
                  <ul className={styles.principles}>
                    {SERVICE_PRINCIPLES.map((principle, index) => (
                      <li key={principle}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <h3>{principle}</h3>
                      </li>
                    ))}
                  </ul>
                )}
                <ul className={styles.benefits}>
                  {system.benefits.map((benefit) => (
                    <li key={benefit.title}>
                      <h3>{benefit.title}</h3>
                      {benefit.body ? <p>{benefit.body}</p> : null}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        ) : null}

        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <span>03</span>
            <h2>The Pecunia Approach</h2>
          </div>
          {searchPage ? null : (
            <>
              <h3 className={styles.processStrap}>{APPROACH_INTRO}</h3>
              <p className={styles.body}>{APPROACH_SUPPORT}</p>
              <ProcessSteps />
              <h3 className={`${styles.processStrap} ${styles.processFollow}`}>
                How this service proceeds
              </h3>
            </>
          )}
          <ProcessSteps stages={stages} />
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
                {faq.link ? (
                  <p>
                    <Link href={faq.link.href}>{faq.link.label}</Link>
                  </p>
                ) : null}
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
