"use client";

import { Fragment, useState } from "react";
import { CITY_PHOTO, SUNSET_PHOTO, optimisedBackground } from "./hero-images";
import styles from "./Wordmark.module.css";

const WORDS = [
  { word: "PECUNIA", letters: ["P", "E", "C", "U", "N", "I", "A"] },
  { word: "STUDIOS", letters: ["S", "T", "U", "D", "I", "O", "S"] },
] as const;

const CITY_BACKGROUND = optimisedBackground(CITY_PHOTO, 192);
const SUNSET_BACKGROUND = optimisedBackground(SUNSET_PHOTO, 192);

/** Same seven-step city/sunset cycle as the approved wordmark. */
const PHOTO_CYCLE = [
  CITY_BACKGROUND,
  SUNSET_BACKGROUND,
  CITY_BACKGROUND,
  SUNSET_BACKGROUND,
  CITY_BACKGROUND,
  SUNSET_BACKGROUND,
  CITY_BACKGROUND,
] as const;

export function Wordmark() {
  const [pinned, setPinned] = useState<string | null>(null);

  return (
    <div className={styles.frame}>
      <div className={styles.wordmark} role="group" aria-label="Pecunia Studios">
        {WORDS.map((entry, wordIndex) => (
          <Fragment key={entry.word}>
          {wordIndex > 0 && <span className={styles.dot} aria-hidden="true" />}
          <div className={styles.word}>
            {entry.letters.map((letter, letterIndex) => {
              const id = `${entry.word}-${letterIndex}`;
              const cycleIndex = wordIndex * entry.letters.length + letterIndex;
              const isPinned = pinned === id;
              return (
                <button
                  key={id}
                  type="button"
                  className={styles.letter}
                  aria-label={`Reveal city imagery in ${entry.word}, letter ${letterIndex + 1} ${letter}`}
                  aria-pressed={isPinned}
                  data-pinned={isPinned ? "" : undefined}
                  style={{
                    backgroundImage: PHOTO_CYCLE[cycleIndex % PHOTO_CYCLE.length],
                    backgroundPosition: `50% ${35 + (cycleIndex % 7) * 4}%`,
                  }}
                  onClick={() => setPinned(isPinned ? null : id)}
                >
                  {letter}
                </button>
              );
            })}
          </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
