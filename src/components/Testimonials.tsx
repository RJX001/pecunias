"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { testimonials } from "@/data/testimonials";
import styles from "./Testimonials.module.css";

const DRAFT_LABEL = "Draft — awaiting client approval";

function initials(name: string) {
  return name
    .replace(/^Mr\s+/, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase())
    .join("")
    .slice(0, 3);
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const start = useRef<{
    x: number;
    y: number;
    pointerId: number;
    locked: boolean;
  } | null>(null);
  const drafts = testimonials.filter((item) => item.approved === false);

  if (process.env.NODE_ENV !== "development" || drafts.length === 0) {
    return null;
  }

  const count = drafts.length;
  const active = drafts[index] ?? drafts[0];

  function move(delta: number) {
    setIndex((current) => (current + delta + count) % count);
  }

  function onControlKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    move(event.key === "ArrowRight" ? 1 : -1);
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;
    if ((event.target as Element).closest("a, button")) return;
    start.current = {
      x: event.clientX,
      y: event.clientY,
      pointerId: event.pointerId,
      locked: false,
    };
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const drag = start.current;
    if (!drag || drag.pointerId !== event.pointerId || drag.locked) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
    if (Math.abs(dx) > Math.abs(dy)) {
      drag.locked = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      return;
    }
    start.current = null;
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    const drag = start.current;
    start.current = null;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
    move(dx < 0 ? 1 : -1);
  }

  return (
    <section className={styles.section} aria-labelledby="draft-feedback-heading">
      <h3 id="draft-feedback-heading">Draft feedback</h3>
      <p className={styles.note}>
        Proposed wording for review. These are not approved client quotes.
      </p>
      <div
        className={styles.deck}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          start.current = null;
        }}
      >
        {[2, 1, 0].map((depth) => {
          const review = drafts[(index + depth) % count];
          const front = depth === 0;
          return (
            <figure
              key={front ? `front-${index}` : `back-${depth}`}
              className={styles.card}
              data-depth={depth}
              inert={front ? undefined : true}
              aria-hidden={front ? undefined : true}
            >
              <p className={styles.draft}>{DRAFT_LABEL}</p>
              <span className={styles.quoteMark} aria-hidden="true">
                “
              </span>
              <blockquote>{review.quote}</blockquote>
              <figcaption>
                <span className={styles.avatar} aria-hidden="true">
                  {initials(review.name)}
                </span>
                <div>
                  <strong className={styles.name}>{review.name}</strong>
                  <span className={styles.business}>{review.business}</span>
                  <a
                    className={styles.site}
                    href={review.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit website
                  </a>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>
      <div className={styles.controls}>
        <button
          type="button"
          onClick={() => move(-1)}
          onKeyDown={onControlKeyDown}
        >
          Previous
        </button>
        <span role="status">
          {index + 1} of {count}
          <span className={styles.srOnly}>
            {`, ${active.name}, ${active.business}. Draft, awaiting client approval. ${active.quote}`}
          </span>
        </span>
        <button type="button" onClick={() => move(1)} onKeyDown={onControlKeyDown}>
          Next
        </button>
      </div>
      <p className={styles.hint}>Swipe the card, or use Previous and Next.</p>
    </section>
  );
}
