"use client";

import { useEffect, useRef } from "react";
import { approachStages } from "@/data/approach";
import styles from "./service.module.css";

export function ProcessSteps() {
  const firstRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (firstRef.current) firstRef.current.open = true;
  }, []);

  return (
    <div className={styles.process}>
      {approachStages.map((stage, index) => (
        <details key={stage.title} ref={index === 0 ? firstRef : undefined}>
          <summary>{stage.title}</summary>
          {stage.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </details>
      ))}
    </div>
  );
}
