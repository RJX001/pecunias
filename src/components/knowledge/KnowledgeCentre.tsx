"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ALL_TOPICS,
  KNOWLEDGE_CENTRE_CLOSING,
  KNOWLEDGE_CENTRE_DESCRIPTION,
  KNOWLEDGE_CENTRE_EYEBROW,
  KNOWLEDGE_CENTRE_TITLE,
  KNOWLEDGE_CENTRE_TITLE_ACCENT,
  NO_MATCH_MESSAGE,
  guideMatches,
  knowledgeCategories,
  knowledgeGuides,
  relatedService,
} from "@/data/knowledge-centre";
import styles from "./KnowledgeCentre.module.css";

function resultLabel(count: number) {
  return `${count} ${count === 1 ? "guide" : "guides"} available`;
}

export function KnowledgeCentre() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState(ALL_TOPICS);
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(() => new Set());
  const categories = knowledgeCategories();
  const visibleCount = knowledgeGuides.filter((guide) =>
    guideMatches(guide, query, topic),
  ).length;

  const toggleGuide = (id: string) => {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className={`ps-section ${styles.section}`}>
      <div className="ps-inner">
        <nav className={styles.crumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Knowledge Centre</span>
        </nav>

        <header className={styles.hero}>
          <p className={`ps-kicker ${styles.kicker}`}>{KNOWLEDGE_CENTRE_EYEBROW}</p>
          <h1 id="knowledge-heading" className={`ps-h2 ${styles.title}`}>
            {KNOWLEDGE_CENTRE_TITLE}
            <span className={styles.titleLine}>{KNOWLEDGE_CENTRE_TITLE_ACCENT}</span>
          </h1>
          <p className={styles.intro}>{KNOWLEDGE_CENTRE_DESCRIPTION}</p>
        </header>

        <search className={styles.find} aria-label="Find a guide">
          <div className={styles.tools}>
            <label className={styles.label} htmlFor="knowledge-search">
              Search the guides
              <input
                id="knowledge-search"
                className={styles.field}
                type="search"
                value={query}
                placeholder="Try logos, local SEO or automation…"
                autoComplete="off"
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <label className={styles.label} htmlFor="knowledge-topic">
              Browse by topic
              <select
                id="knowledge-topic"
                className={styles.field}
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
              >
                <option value={ALL_TOPICS}>{ALL_TOPICS}</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className={styles.status} role="status" aria-live="polite" aria-atomic="true">
            {resultLabel(visibleCount)}
            {visibleCount === 0 ? (
              <span className={styles.srOnly}>{` ${NO_MATCH_MESSAGE}`}</span>
            ) : null}
          </p>

          <div className={styles.grid}>
            {knowledgeGuides.map((guide, index) => {
              const id = `knowledge-guide-${index + 1}`;
              const panelId = `${id}-panel`;
              const open = openIds.has(id);
              const visible = guideMatches(guide, query, topic);
              const service = relatedService(guide.relatedServiceKey);

              return (
                <article
                  key={guide.title}
                  id={id}
                  className={styles.guide}
                  hidden={!visible}
                >
                  <p className={styles.category}>{guide.category}</p>
                  <h2 className={styles.guideTitle}>{guide.title}</h2>
                  <p className={styles.introduction}>{guide.introduction}</p>
                  <div className={styles.expand}>
                    <button
                      type="button"
                      className={styles.toggle}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => toggleGuide(id)}
                    >
                      <span>
                        {open ? "Hide guide" : "Read guide"}
                        <span className={styles.srOnly}>{`: ${guide.title}`}</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={open ? styles.chevronOpen : styles.chevron}
                      >
                        →
                      </span>
                    </button>
                    <div id={panelId} className={styles.panel} hidden={!open}>
                      {guide.sections.map((section) => (
                        <div key={section.heading}>
                          <h3 className={styles.sectionHeading}>{section.heading}</h3>
                          <p className={styles.sectionBody}>{section.body}</p>
                        </div>
                      ))}
                      <Link className={styles.serviceLink} href={service.href}>
                        {`Explore ${service.name}`}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className={styles.empty} hidden={visibleCount > 0}>
            {NO_MATCH_MESSAGE}
          </p>
        </search>

        <section className={styles.closing} aria-labelledby="knowledge-closing-heading">
          <h2 id="knowledge-closing-heading" className={styles.closingTitle}>
            {KNOWLEDGE_CENTRE_CLOSING.heading}
          </h2>
          <p>{KNOWLEDGE_CENTRE_CLOSING.body}</p>
          <Link className={styles.closingLink} href={KNOWLEDGE_CENTRE_CLOSING.href}>
            {KNOWLEDGE_CENTRE_CLOSING.linkLabel}
            <span aria-hidden="true"> →</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
