# Live Systeme.io pages: restyle notes

These files restyle the funnel pages Roni built natively in Systeme.io (Nov 2026). Each `.css` file is pasted into that page's head code; it restyles the native elements by their stable IDs and never touches forms, the payment box, products or redirects. Text changes are made in the Systeme.io editor. If an element is deleted and re-added in the editor it gets a new ID, so re-check the selectors after big edits.

## Templates order page: `go.ayaugc.com/template-9399dc90`

**Head code:** `templates-order.css`

**Text changes in the editor**

| Element | Now | Change to |
|---|---|---|
| Top headline (`text-c7ac9a3a`) | Everything I Wish I Had When I Started as a UGC Creator | Everything I wish I had when I started as a UGC creator |
| Left headline (`headline-6009b718`) | The **exact** templates I use with real brands, done for you! | The exact templates I use with real brands, done for you. |
| Payment button | Click here to validate | Get the templates |
| Legal line under the form (`text-7f672d0b`) | Privacy policy \| Legal \| Terms & Conditions, all linking to `#` | Privacy policy → `https://www.ayaugc.com/privacy` · Refunds → `https://www.ayaugc.com/refunds` · Terms → `https://www.ayaugc.com/terms` |
| Page title (page settings / SEO) | Habit tracker | UGC starter templates · AED 79 · AYA UGC |
| Product description (price plan) | templates | Contract, portfolio, rate card and pitch templates (optional) |

**Not fixable with CSS:** the "UGC Starter Pack" cover image is in the old olive colour. Re-export it in brand colours (Beige background, Pine band, Work Sans and Instrument Serif) and swap the image.

## Templates thank-you page: `go.ayaugc.com/thank-you--112b9c49`

**Head code:** `templates-thank-you.css` (it also hides the stock envelope icon)

**Text changes in the editor**

| Element | Now | Change to |
|---|---|---|
| Headline (`text-49e4afb8`) | Congratulations, your templates should be in your inbox, but before you leave... | Your templates are on their way. |
| Body (`text-7772eea1`) | Make sure you check your email ... the freebie ... kindly email us at contact@ayaugc.com | Check your inbox for the download link. It can take a couple of minutes, so look in Promotions or Junk too. Nothing there? Email me at contact@ayaugc.com. |
| Panel title (`text-053f2310`) | How about a 15 day challenge where I'll be personally guiding you to start your UGC journey? | Ready to put them to work? |
| Panel text (`text-d70490fb`) | Yes, that right! Become a UGC creator in just 15 days! ... special price as an early-bird | The 15-Day UGC Creator Challenge starts 7 December 2026: one lesson a day by email, a WhatsApp community and a 1:1 check-in with me. Join the waitlist to hear first when doors open. |
| Button (`button-c504deaa`) | Join The Waitlist → `https://www.ayaugc.com/waitlist` | Join the waitlist → the live waitlist page on `go.ayaugc.com` |
| Page title | Opt-in thank you page | Thank you · AYA UGC |

The old panel text promised "a special price as an early-bird"; that is not confirmed, so the new text leaves it out.

## Waitlist page: `go.ayaugc.com/waitlist`

**Head code:** `waitlist-head.html` (labels above the two fields, Work Sans in the fields, Beige card headline, footer styles). **Footer code:** `waitlist-footer.html` (the "skills program, not an income guarantee" line and a Pine footer with Privacy, Terms, Refunds and © 2026 AYA UGC). Text edits made in the editor (Nov 2026): sentence-case headline, list heading and button; start date and format added to the card text; "WhatsApp".

## Free guide page: `go.ayaugc.com/ugc-guide`

**Head code:** a one-rule `<style>` that makes the bulleted-list ticks Pine (`[id^="bulletlist-"] i { color: #2F5F4E }`).

## Menus

The header menus on the guide, guide thank-you and waitlist thank-you pages end with "© 2026 AYA UGC" (menu item 4).
