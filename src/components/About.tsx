import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-[var(--maxw)]">
        <Reveal>
          <p className="kicker">About</p>
          <h2 className="display max-w-[12ch] text-[clamp(34px,5vw,58px)]">
            A growth systems company.
          </h2>
          <p className="support">
            Pecunia is not a marketing agency, a web studio, or an AI shop. The
            product is the connected system — Digital, Acquisition, Automation,
            Commerce, Creative — run as one account.
          </p>
          <p className="support">
            Short, sharp, commercial. Built for operators who are done buying
            services and want the machine that makes growth happen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
