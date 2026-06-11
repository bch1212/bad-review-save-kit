# Bad Review Save Kit

A same-day review response and reputation recovery kit for local service businesses with unanswered or tense 1–3 star public reviews.

## Offer

**Value prop:** I rewrite your risky public review replies into calm, professional responses and deliver a 30-day review recovery/request workflow you can paste into Google/Yelp/Facebook today.

**Buyer:** owner-operated local service businesses: auto repair, cleaners, salons/barbers, restaurants/cafes, landscapers, pest control, electricians, plumbers. Excludes medical/legal/financial/regulatory niches.

**Trigger moment:** a recent 1–3 star review is unanswered, the owner reply sounds defensive, or the business has no review recovery/request workflow.

**Price anchor:**
- $199 Custom Save Kit: 10 review responses + private recovery scripts + review request templates.
- $399 Concierge Save Sprint: 20 responses + 30-day workflow + posting checklist.

**Guarantee boundaries:** If the first draft is not usable, one revision is included. No guarantee of review removal, star-rating changes, platform outcomes, or legal/compliance advice.

**Fastest first-dollar path:** Send one free rewritten sample to a prospect with a visible negative review. CTA: “Reply SAVE and I’ll do the first 10 responses + recovery/request templates for $199; pay after I send the draft preview.”

## MVP contents

- `templates/response-template-library.md` — reusable response patterns.
- `templates/review-request-sms-email-pack.md` — 30-day review request/recovery workflow.
- `templates/client-intake.md` — buyer intake form.
- `samples/sample-before-after.md` — anonymized examples.
- `bin/generate_kit.js` — local generator for a prospect-specific kit.
- `reports/generated-sample-kit.md` — verified generated sample output.
- `sales/offer.md` and `gtm/outreach-drafts.md` — sales copy and outreach.
- `public/index.html` — static landing page.

## Verification

```bash
node bin/generate_kit.js samples/sample-input.json reports/generated-sample-kit.md
shasum -a 256 bad-review-save-kit.zip
```

## Non-goals

- No fake reviews, review gating, legal threats, defamation analysis, or platform manipulation.
- No regulated medical/legal/financial advice.
- No paid ads or paid data sources.
