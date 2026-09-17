# Manager check — Agent 1 overlay audit

**Canonical spec:** attached `pecuniastudios-update_1__1.md` (through Change #84 + execution contract)  
**Checked:** `docs/overlay-audit.md` against that spec and `docs/manager-checklist.md`  
**Spot-checked in `src/`:** `page.tsx`, `hero-headlines.ts`, `homepage-copy.ts`, `GrowthStack.tsx`, `Contact.tsx`, `About.tsx`, `ServiceDetail.tsx`, `Header.tsx`, `Footer.tsx`, `Method.tsx`, `approach.ts`  
**Manager actions:** docs only. No `src/` edits.

---

## Verdict: **PASS**

**Go / no-go for Agent 2: GO**

The map is a real implementation map (files, owners, remaining work), not a narrative. Later-change-wins are recorded correctly. Inventory matches the live tree, including legacy filenames. Agent 1 did not edit `src/`, did not recommend a rebuild or a second booking/service system, and did not treat superseded colour instructions as current truth.

Agent 2 may start from this audited state. Follow the disjoint file set in overlay-audit §8. Do not “fix” #67 onto `GrowthStack.tsx`.

---

## Inventory completeness

| Required surface | Map | Live check |
|---|---|---|
| Homepage / landing | `src/app/page.tsx` | Confirmed. Sections: Hero → System → GrowthStack → Method → Why → Problem → BrandStatement → Philosophy → Contact. **No About teaser.** |
| Services list + detail | `GrowthStack.tsx`, `/services`, `ServiceDetail.tsx`, `growth-stack.ts` | Confirmed. Four slugs. Homepage list `id="stack"`. |
| About section **and** `/about` | Full page exists; homepage section **missing** | Confirmed. `about/page.tsx` + `About.tsx`. Home control `href="/"`. |
| Approach / Commitment / Standard / Why Pecunia / Final CTA | Mapped with **legacy names** | `Method.tsx` = Approach; `Why.tsx` = Commitment; `Philosophy.tsx` = Standard; `Problem.tsx` = Why Pecunia; `Contact.tsx` = Final CTA. Correct and essential. |
| Header / mobile nav | `Header.tsx` | Confirmed. |
| Footer | `Footer.tsx` | CTA already before Company links. |
| Theme (Light default, Dark retained) | ThemeProvider, ThemeToggle, `globals.css` | Mapped. |
| Hero data + motion | `Hero.tsx` + `hero-headlines.ts` | Confirmed. Motion present; **copy still the old six phrases.** |
| `--green` | `#00C978` both themes | Mapped as source of truth. |
| Booking / form | `NAV_CTA.href` = `/#contact`; `Contact.tsx` + schema + API | Confirmed. Book A Call destination is the in-page contact section, not a new route. |
| Service back + anchors | `ServiceDetail` → `/`; live Services id `stack`; no `#about` on homepage | Confirmed. |
| Duplicate / unused | `services.ts` unused; Work/Results unused | Mapped. Do not revive. |

Required map format is present for **remaining** changes (existing → target → component → files → content → animation → risk → owner). Done items are a status table; that is acceptable.

---

## Later-change-wins (must be recorded)

| Rule | Recorded in Agent 1 map? | Accurate? |
|---|---|---|
| **#79** supersedes #78 green spans (comma + rest) | Yes — top table, Conflicts #6, remaining map | Yes. Explicit `", we'll find/fix/scale it."` |
| **#82** supersedes #81 Standard support | Yes — #81 marked **Do not implement**; #82 BLACK/GREEN/BLACK/GREEN | Yes |
| **#83** supersedes all-green Standard closing | Yes — first sentence normal, second green | Yes. Matches live all-green-when-active defect. |
| **#72** five Title Case hero phrases | Yes — supersedes #5/#41.6/#63/#51 lists; exact five strings; old six to remove | Yes. Live `HERO_HEADLINES` is still the old six. |
| **#75** short homepage About between Approach and Commitment | Yes — insert `AboutTeaser` between Method and Why; full `/about` kept; Home → `/#about` | Yes. Live `page.tsx` has Method then Why (Commitment). |
| **#84** Start A Growth Project → existing Book A Call destination | Yes — `NAV_CTA` / `FINAL_CTA.href` = `/#contact`; homepage CTA is currently a `<p>` | Yes. Confirmed in `Contact.tsx` lines 95–96. |

Also correctly recorded (helpful, not in the six-item list): **#74** over `#61` destination `/` and `#45.2` `← Services`; **#61** keeps visible label `← Home`.

`--green` = `#00C978` is stated. Overlay / no new animation library / no duplicate booking page is stated.

---

## Gaps / notes (not FAIL)

1. **#67 spec vs architecture (FLAG for Agents 2–4, not a map defect).** Spec heading talks about Services / Growth Stack 01–06 with click-through to service pages. Live site: Diagnose–Scale live in `Method.tsx` (Approach) with scroll-active green already; Growth Stack is four service links. Agent 1’s instruction — do **not** put Diagnose–Scale on `GrowthStack.tsx`, do **not** turn Approach stages into service links — is the overlay-safe reading. Agent 2 must not “correct” this.

2. **`id="stack"` → `id="services"`.** Spec/QA use `/#services`. Grep shows `id="stack"` only in `GrowthStack.tsx` (no other `#stack` consumers). Rename is safe. Header Services must stay `/services` (the page). Agent 2: change the id and ServiceDetail `href` only.

3. **`/services` index Home** is still `href="/"` (`Services.tsx`). #74 applies to **every service detail page**. Out of Agent 2’s core #74 scope; Agent 4 should confirm the index Home is acceptable.

4. **Why Pecunia copy case.** #73.5 shows Title Case; live `WHY_PECUNIA.copy` is sentence case. Agent 1 said no content change for #73 (visual boxes only). Correct under “do not improve approved copy” unless a numbered change explicitly rewrites it. Agent 2: do not Title-Case this as a drive-by.

5. **#78 split ownership.** Agent 2 = `homepage-copy.ts` (full stop / structured heading fields). Agent 3 = `BrandStatement.tsx` (colour spans, **#79**). Agent 2 must not colour BrandStatement. Agent 2 **must** add `Serious About Growth.` with the final full stop so Agent 3 is not forced to invent punctuation.

6. **#70 leftovers.** Mobile Number, Social field, `Submit Request`, `type="tel"` already exist. Remaining Agent 2 item: identify Social as optional. Do not add an email field. Do not change the API except keeping social optional (already).

7. **#84 vs Hero CTA.** Map correctly keeps Hero `Make The Move →`. Do not rename it to Start A Growth Project.

8. **Sticky header.** Map notes existing `scroll-padding-top: 88px`. Agent 2 should still verify `#services` / `#about` landings are not hidden under the header after the new ids.

None of these are unsafe “edit the wrong legacy file” advice. The map **prevents** that: Why ≠ Why Pecunia, Problem ≠ Commitment, Philosophy ≠ Growth Philosophy, unused `services.ts`.

---

## Unsafe advice? None material

- Smallest file sets are disjoint for Agents 2 and 3.
- New `AboutTeaser.tsx` is allowed; full `About.tsx` must not be reused on the homepage (`h1` + five paragraphs + Home link).
- Booking source of truth remains header Book A Call → `/#contact`. No new booking route.
- Agent 1 made **no** `src/` edits (primary output is the map).

---

## Agent 2 — authorised work (from the map)

Implement, do not only report:

| Change | Files |
|---|---|
| #72 | `src/data/hero-headlines.ts` only — five Title Case phrases, old six removed, no numerals |
| #74 | `ServiceDetail.tsx` Home → `/#services`; `GrowthStack.tsx` `id="stack"` → `id="services"` |
| #75 | `page.tsx` insert teaser between Method and Why; **new** `AboutTeaser.tsx` `id="about"` short copy only (`ABOUT.copy[0]` + `[1]`); `About.tsx` Home → `/#about` |
| #78 copy | `homepage-copy.ts` heading → `Built For Businesses` / `Serious About Growth.` (full stop). Do not rewrite the three statements |
| #84 | `Contact.tsx`: `Start A Growth Project →` becomes a real link to `NAV_CTA.href` (`/#contact`) |
| #70 leftover | `Contact.tsx`: Social field clearly optional |

**Do not edit (Agent 3):** Header, Hero, Why, Problem, Philosophy, BrandStatement, `globals.css`, API.

After Agent 2: homepage must compile with the About teaser even if BrandStatement / Philosophy are still uncoloured.

---

## FAIL conditions (manager checklist) — none met

- [x] Map exists, names files, remaining-change maps in required format  
- [x] Does not treat #78/#81/all-green closing as current truth  
- [x] Does not prescribe keeping the old six hero phrases or leaving About off the homepage  
- [x] No rebuild / new animation library / duplicate booking or service system  
- [x] No `src/` rewrite  

**PASS. Agent 2: GO.**
