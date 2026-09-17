# Manager check — Agent 2 content / structure / routing

**Canonical spec:** attached `pecuniastudios-update_1__1.md` (through Change #84)  
**Map:** `docs/overlay-audit.md` §8 Agent 2 file set  
**Checked:** working tree `src/` (read only). No `src/` edits this pass.

---

## Verdict: **PASS**

**Go / no-go for Agent 3: GO**

Agent 2 implemented the authorised content, section order, and routing. Agent 3 files were not touched. Homepage still compiles with the About teaser while BrandStatement / Philosophy remain uncoloured.

---

## Required checks

### #72 — Five Title Case headlines (`src/data/hero-headlines.ts`)

| Required | Result |
|---|---|
| Turning Your Ambition Into Income. | Present, position 1 |
| Being A Brand People Want To Buy From. | Present, position 2 (`A` capitalised) |
| Creating Financial Freedom. | Present, position 3 |
| Building A 7-Figure Business. | Present, position 4 |
| Making Your Business Work For You. | Present, position 5 |
| Old six phrases removed | Yes |
| No numerals in live strings | Yes |
| `Make The Move →` unchanged | Yes |

**PASS**

### #75 — Homepage About + `/about` return

| Required | Result |
|---|---|
| `page.tsx` order Method → AboutTeaser → Why | Confirmed |
| New `AboutTeaser.tsx` with `id="about"` | Confirmed |
| Heading `About Pecunia Studios` | From `ABOUT.heading` |
| Eyebrow `Built in 2026. Built for what's next.` | From `ABOUT.subheading` |
| Short copy only (`ABOUT.copy[0]` + `[1]`) | `slice(0, 2)` — full page copy[2–4] not dumped |
| CTA `About Us →` → `/about` | Confirmed |
| `/about` Home → `/#about` | `About.tsx` `href="/#about"` |
| `← Home` label retained | Yes |

**PASS**

### #74 — Service Home → Services section

| Required | Result |
|---|---|
| `ServiceDetail.tsx` Home `href="/#services"` | Confirmed |
| Label still `← Home` | Confirmed |
| `GrowthStack.tsx` `id="services"` (was `stack`) | Confirmed; id-only change |

**PASS**

### #84 — Start A Growth Project is a real link

| Required | Result |
|---|---|
| Control is `<a>`, not `<p>` | Confirmed |
| `href={NAV_CTA.href}` → `/#contact` | Same as header Book A Call |
| Wording still `Start A Growth Project →` | Via `FINAL_CTA.cta` |
| No new booking page | Yes |

**PASS**

### #78 copy prep (for Agent 3)

`homepage-copy.ts` `BUILT_FOR`:

- `headingInk`: `Built For Businesses`
- `headingGreen`: `Serious About Growth.` (full stop)
- combined `heading` kept so `BrandStatement.tsx` still compiles
- three statements unchanged (colour is Agent 3 / #79)

**PASS**

### #70 leftover

Social label is now `Social Media / Website Links (optional)`. No email field added. API untouched.

---

## Agent 3 files — must not have been edited

| File | In Agent 2 diff? |
|---|---|
| `Header.tsx` | No |
| `theme/ThemeToggle.tsx` | No |
| `Hero.tsx` | No |
| `Problem.tsx` | No |
| `Why.tsx` | No |
| `BrandStatement.tsx` | No |
| `Philosophy.tsx` | No |
| `globals.css` | No |
| `Footer.tsx` | No |
| `api/contact` | No |

Working tree `src/` changes are exactly the Agent 2 set plus new `AboutTeaser.tsx`.

---

## Notes for Agent 3 (not FAIL)

- `BrandStatement` still renders the single `BUILT_FOR.heading` string. Use `headingInk` / `headingGreen` for #78 colour and apply **#79** comma-inclusive spans on the three statements.
- Hero still shows `HERO_IDENTITY` (“Pecunia Studios”) — #71, Agent 3.
- Header Book A Call still `btn-solid` — #71, Agent 3.
- Do not revert Agent 2 routes (`/#services`, `/#about`) or the five #72 phrases.
- Do not put Diagnose–Scale highlighting on `GrowthStack.tsx` (#67 lives on Approach / `Method.tsx`).

---

## FAIL conditions — none met

- [x] #72 five headlines, old six gone  
- [x] #75 order + short teaser + About Home `/#about`  
- [x] #74 ServiceDetail `/#services` + GrowthStack `id="services"`  
- [x] #84 real link to `/#contact`  
- [x] Agent 3 files untouched  

**PASS. Agent 3: GO.**
