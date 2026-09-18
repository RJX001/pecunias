export function HomeDots() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        backgroundImage:
          "radial-gradient(circle, var(--line-strong) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, rgb(0 0 0 / 0.22) 72vh, rgb(0 0 0 / 0.5) 110vh, rgb(0 0 0 / 0.42) calc(100% - 18vh), transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, rgb(0 0 0 / 0.22) 72vh, rgb(0 0 0 / 0.5) 110vh, rgb(0 0 0 / 0.42) calc(100% - 18vh), transparent 100%)",
      }}
    />
  );
}
