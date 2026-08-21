# BUILD-2 Content Audit — Services, Work, About

> Spec: `pecuniastudios-build-spppp.md` §4.3, §4.5, §4.4  
> Scope: read-only audit of existing source; no `.tsx`/`.ts` edits.  
> Audited: `src/components/Services.tsx`, `src/data/services.ts`, `src/components/Work.tsx`, `src/data/work.ts`, `src/components/About.tsx`

**Overall: PASS**

---

## 4.3 Services — Statement of Services

| Item | Expected | Result |
|---|---|---|
| Eyebrow | `Statement of Services` | **PASS** — `Services.tsx` |
| H2 | `Every line item, accounted for.` | **PASS** |
| Subhead | Exact scoped/quoted copy from spec | **PASS** |
| Accordion table header | `Code \| Category \| Description \| (chevron)` | **PASS** |
| Independent expand/collapse | Per-category toggle | **PASS** — `openCodes` Set |
| Chevron rotation | 90° when open | **PASS** |
| `max-height` transition | Present on panel | **PASS** |
| Data source | Typed array/JSON, not hardcoded markup | **PASS** — `@/data/services` |
| Category count | 6 (`WD`, `DM`, `PA`, `MS`, `CS`, `AD`) | **PASS** |
| Item count | 18 total | **PASS** (2+2+4+5+4+1) |

### Category & item copy (exact match vs spec JSON)

| Code | Name / items | Result |
|---|---|---|
| WD | Website Development + WD-01, WD-02 | **PASS** |
| DM | Digital Marketing + DM-01, DM-02 | **PASS** |
| PA | Paid Advertising + PA-01…PA-04 | **PASS** |
| MS | Marketplace & Store Setup + MS-01…MS-05 | **PASS** |
| CS | Creative Services + CS-01…CS-04 | **PASS** |
| AD | App Development + AD-01 | **PASS** |

### Exclusions & pricing (Services)

| Constraint | Result |
|---|---|
| NO WordPress Website Development | **PASS** — absent from `services.ts` |
| NO eBay Marketplace Management | **PASS** — absent from `services.ts` |
| NO public pricing on line items | **PASS** — no prices, tiers, or “from £” |

---

## 4.4 Work — Statement Highlights

| Item | Expected | Result |
|---|---|---|
| Eyebrow | `Statement Highlights` | **PASS** — `Work.tsx` |
| H2 | `Recent account performance.` | **PASS** |
| Case study count | 3 | **PASS** |
| Kindling & Co. | tags `WD · DM`, stat `+140%`, exact description | **PASS** |
| Marrow Studio | tags `MS`, stat `3.2×`, exact description | **PASS** |
| Nightjar App | tags `AD`, stat `12,000`, exact description | **PASS** |
| Placeholder flag | `isPlaceholder: true` (or equivalent) | **PASS** — all three `true` in `work.ts`; UI shows “Illustrative” |

### Exclusions & pricing (Work)

| Constraint | Result |
|---|---|
| NO WordPress / eBay | **PASS** |
| NO public pricing / price lists | **PASS** — stats are case-study metrics only, not service prices |

---

## 4.5 About

| Item | Expected | Result |
|---|---|---|
| Eyebrow | `About` | **PASS** — `About.tsx` |
| H2 | `A studio, not a vendor.` | **PASS** |
| Body ¶1 | Exact “system / converts / managed / forgotten” paragraph | **PASS** |
| Body ¶2 | Exact “extension of your team…” paragraph | **PASS** |
| Stat: Service lines | `6` | **PASS** |
| Stat: Capabilities | `18` | **PASS** |
| Stat: Based in | `United Kingdom` | **PASS** |
| Stat presentation | Mono-styled key/value rows | **PASS** — `font-mono` `<dl>` |

### Exclusions & pricing (About)

| Constraint | Result |
|---|---|
| NO WordPress / eBay | **PASS** |
| NO public pricing | **PASS** |

---

## Cross-cutting constraints (§5)

| Constraint | Result |
|---|---|
| No WordPress / eBay in audited content | **PASS** |
| No public pricing in audited content | **PASS** |

---

## Failures

None.

## Verdict

All audited Services, Work, and About copy and data match build-spppp §4.3–§4.5; exclusions and no-public-pricing hold.
