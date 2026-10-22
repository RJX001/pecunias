/**
 * Header and footer mark: PECUNIA, green dot, STUDIOS.
 * Both words share one size and one weight. The dot stays green.
 */
export function BrandMark() {
  return (
    <span className="inline-flex items-baseline whitespace-nowrap text-[1em] leading-none font-extrabold tracking-[inherit] text-fg">
      <span>PECUNIA</span>
      <span className="text-green" aria-hidden="true">
        ·
      </span>
      <span>STUDIOS</span>
    </span>
  );
}
