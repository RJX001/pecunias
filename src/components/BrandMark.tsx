/**
 * Official Pecunia Studios wordmark.
 * Theme-aware via CSS (`text-fg` / currentColor + `--green` centre dot).
 * No bitmap, no background plate.
 */
export function BrandMark() {
  return (
    <span className="whitespace-nowrap text-fg">
      PECUNIA<span className="text-green" aria-hidden="true">·</span>STUDIOS
    </span>
  );
}
