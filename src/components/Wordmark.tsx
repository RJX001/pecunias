"use client";

import { useState } from "react";
import { CITY_PHOTO, SUNSET_PHOTO, optimisedBackground } from "./hero-images";
import styles from "./Wordmark.module.css";

const LETTERS = ["P", "E", "C", "U", "N", "I", "A"] as const;

const CITY_BACKGROUND = optimisedBackground(CITY_PHOTO, 128);
const SUNSET_BACKGROUND = optimisedBackground(SUNSET_PHOTO, 128);

export function Wordmark() {
  const [pinned, setPinned] = useState<number | null>(null);

  return (
    <div className={styles.wordmark} role="group" aria-label="Pecunia Studios">
      <div className={styles.letters}>
        {LETTERS.map((letter, index) => {
          const isPinned = pinned === index;
          return (
            <button
              key={letter}
              type="button"
              className={styles.letter}
              aria-label={`Reveal photography in letter ${letter}`}
              aria-pressed={isPinned}
              data-pinned={isPinned || undefined}
              style={{
                backgroundImage:
                  index % 2 === 0 ? CITY_BACKGROUND : SUNSET_BACKGROUND,
                backgroundPosition: `50% ${35 + index * 4}%`,
              }}
              onClick={() => setPinned(isPinned ? null : index)}
            >
              {letter}
            </button>
          );
        })}
      </div>
      <span className={styles.studios} aria-hidden="true">
        STUDIOS
      </span>
    </div>
  );
}
