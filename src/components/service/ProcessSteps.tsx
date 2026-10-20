import { approachStages } from "@/data/approach";
import styles from "./service.module.css";

export function ProcessSteps() {
  return (
    <div className={styles.process}>
      {approachStages.map((stage, index) => (
        <details key={stage.title} {...(index === 0 ? { open: true } : {})}>
          <summary>{stage.title}</summary>
          {stage.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </details>
      ))}
    </div>
  );
}
