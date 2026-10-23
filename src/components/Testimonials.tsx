"use client";
import { useRef, useState, type PointerEvent } from "react";
import { testimonials } from "@/data/testimonials";
import styles from "./Testimonials.module.css";
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const start = useRef<number | null>(null);
  if (!testimonials.length) return null;
  const review = testimonials[index];
  function move(delta: number) {
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length);
  }
  function release(e: PointerEvent) {
    if (start.current === null) return;
    const delta = e.clientX - start.current;
    start.current = null;
    if (Math.abs(delta) > 45) move(delta < 0 ? 1 : -1);
  }
  return (
    <section className={styles.section} aria-labelledby="reviews-heading">
      <h3 id="reviews-heading">What clients say</h3>
      <div
        className={styles.deck}
        onPointerDown={(e) => {
          if (e.button !== 0 || (e.target as Element).closest("a")) return;
          start.current = e.clientX;
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerUp={release}
        onPointerCancel={() => {
          start.current = null;
        }}
      >
        <div className={styles.back} aria-hidden="true" />
        <div className={styles.backTwo} aria-hidden="true" />
        <figure key={index} className={styles.card}>
          <span className={styles.quoteMark} aria-hidden="true">
            “
          </span>
          {typeof review.rating === "number" &&
            review.rating >= 1 &&
            review.rating <= 5 && (
              <span
                className={styles.rating}
                aria-label={`${review.rating} out of 5`}
              >
                {"★".repeat(Math.floor(review.rating))}
              </span>
            )}
          <blockquote>{review.quote}</blockquote>
          <figcaption>
            <span className={styles.avatar} aria-hidden="true">
              {review.name[0]}
            </span>
            <div>
              <strong>{review.name}</strong>
              <span>
                {review.role ? `${review.role} · ` : ""}
                {review.business}
              </span>
              {review.website && (
                <a
                  href={review.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit website ↗
                </a>
              )}
            </div>
          </figcaption>
        </figure>
      </div>
      <div className={styles.controls}>
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <span role="status">
          {index + 1} / {testimonials.length}
        </span>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
      <p>Swipe a card or use the arrows to see more.</p>
    </section>
  );
}
