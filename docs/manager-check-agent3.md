# Manager check — Agent 3 visual / motion / theme

**Canonical spec:** attached `pecuniastudios-update_1__1.md` (through Change #84)  
**Map:** `docs/overlay-audit.md` §8 Agent 3 file set  
**Checked:** working tree `src/` (read only). No `src/` edits this pass.

---

## Verdict: **PASS**

**Go / no-go for Agent 4: GO**

Agent 3 implemented the authorised visual/motion/theme file set. Later-change-wins (#79, #82, #83) are in the markup. Agent 2 routes and #72 phrases were not reverted. Footer.tsx was correctly left alone; `.btn-green { color: #000000 }` covers #68 / #70.9 / #71.

---

## Required checks

### #71 — Header Book A Call, hero kicker, toggle

| Required | Result |
|---|---|
| Header (desktop + mobile) Book A Call `btn-green` | Confirmed (`Header.tsx` 76, 130). No `btn-solid` on those CTAs. |
| Wording still `Book A Call` via `NAV_CTA` | Yes |
| Standalone “Pecunia Studios” kicker removed | `Hero.tsx` no longer imports or renders `HERO_IDENTITY`. Starts at `HERO_LEAD_IN`. |
| Hero rotation / timing kept | Hold 4500 / exit 400 / gap 150 / enter 500 still present |
| Toggle destination label | `Dark` in Light, `Light` in Dark (`uppercase` → DARK / LIGHT) |
| Toggle contrast | `border-fg text-fg` (Light `--fg` = ink `#181410`; Dark `--fg` = cream paper). Not muted `text-stone`. |

**PASS** (Agent 4 should still click the toggle in both themes).

### #73 — Why Pecunia chips permanently visible (`Problem.tsx`)

| Required | Result |
|---|---|
| No `opacity: 0` / merge / timeout / IO gating chips | Confirmed — no matches |
| PECUNIA mark + chips in DOM immediately | Static layout; server component |
| Green treatment `var(--green)` | `border-green` / `text-green` / `bg-green-soft` |
| Copy unchanged; first statement still green | `WHY_PECUNIA.copy[0]` still `text-green` |

**PASS**

### #76 / #77 — Commitment (`Why.tsx`)

| Required | Result |
|---|---|
| 01–10 scroll-active green, one at a time | `activeItem` + IO pattern (same family as Method) |
| Down and up | Viewport scoring; no one-way lock |
| Colour only (no size/weight reflow on items) | `transition-[color] duration-300`; `motion-reduce:duration-0` |
| Hero rotation untouched | Hero still independent |
| #77 first sentence normal | `closingInk` in `.support` |
| #77 `We find out why. Then we fix it.` entire phrase green | `CLOSING_GREEN` + `text-green` |
| Same type size as Commitment statement | `text-[22px] font-bold … md:text-[26px]` matches statement |

**PASS**

### #78 / #79 — BrandStatement

| Required | Result |
|---|---|
| `Built For Businesses` normal | `headingInk` |
| `Serious About Growth.` entire line + full stop green | `headingGreen` + `text-green` |
| #79 comma **+ rest** green | `splitAtComma`: `green = statement.slice(index)` from the comma |
| Before comma ink | `ink = statement.slice(0, index)` |
| Statements not rewritten | Same `BUILT_FOR.statements` strings |

**PASS** — #79 wins over #78’s narrower “we'll find it.”-only span.

### #80 / #82 / #83 — Philosophy (NOT #81)

| Change | Markup |
|---|---|
| **#80** | `"If we can't measure it,"` ink (comma stays with ink); `"we can't improve it."` green |
| **#82** | `SUPPORT_GREEN = [false, true, false, true]` → BLACK / GREEN / BLACK / GREEN |
| **#81 not used** | Would have been `[false, true, true, false]` |
| **#83** | `"Because growth isn't a feeling."` ink; `"It's a system of decisions."` green |

**PASS**

Note for Agent 4: Standard spans stay `text-fg-faint` until the existing one-shot IO reveal (`seen[]`). Overlay audit allowed keeping that reveal **provided** blocks are not a single colour. When revealed, the splits match #80/#82/#83. Reduced-motion sets `seen` immediately.

### `.btn-green` colour `#000000`

```css
.btn-green {
  background: var(--green);
  color: #000000;
  border-color: var(--green);
}
```

Hover also `color: #000000`. `--green` remains `#00C978` in Light and Dark. Covers footer compact CTA without editing `Footer.tsx`.

**PASS**

---

## Agent 2 work not reverted

| Agent 2 item | Still true? |
|---|---|
| #72 five Title Case headlines | Yes |
| `page.tsx` Method → AboutTeaser → Why | Yes |
| About Home `/#about` | Yes |
| ServiceDetail `/#services` | Yes |
| GrowthStack `id="services"` | Yes |
| Contact CTA `<a href={NAV_CTA.href}>` | Yes |
| `BUILT_FOR.headingInk` / `headingGreen` | Yes |

Agent 3 did not edit `page.tsx`, `hero-headlines.ts`, About*, `ServiceDetail`, `GrowthStack`, `Contact.tsx`, or API (those remain Agent 2 diffs only). `Method.tsx` untouched (#67 already on Approach).

---

## File set compliance

Edited as authorised: `Header.tsx`, `ThemeToggle.tsx`, `Hero.tsx`, `Problem.tsx`, `Why.tsx`, `BrandStatement.tsx`, `Philosophy.tsx`, `globals.css`.  
`Footer.tsx` not required. No new animation library.

---

## Notes for Agent 4 (not FAIL)

- Manually scroll Commitment 01→10 and back; Growth Stack service clicks still work; Approach #67 still independent.
- Confirm Standard colours after the reveal (and with reduced-motion).
- Confirm #79 wrapping on mobile (comma stays in the green span).
- Confirm Light/Dark toggle contrast and green Book A Call in both themes.
- Confirm Why Pecunia chips visible on first paint (desktop cluster + mobile wrap).
- Do not revert Agent 2 routes or #72 phrases when fixing anything.

---

## FAIL conditions — none met

- [x] #71 green Book A Call, no hero kicker, toggle uses `fg` not stone  
- [x] #73 chips permanently visible  
- [x] #76/#77 Commitment scroll-green + closing split/size  
- [x] #78/#79 heading + comma-inclusive green  
- [x] #80/#82/#83 Philosophy, not #81  
- [x] `.btn-green { color: #000000 }`  
- [x] Agent 2 work intact  

**PASS. Agent 4: GO.**
