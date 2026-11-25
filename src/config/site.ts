// Every fact Aya still needs to confirm is kept here in [brackets]. Pages read from this file, never hard-code these values.
export type ChallengeStatus = "waitlist" | "early-bird" | "open" | "closed";

export type Testimonial = { quote: string; name: string; city: string };

/**
 * Where the Systeme.io funnels live: their own subdomain, go.ayaugc.com (moved from the old Systeme.io site on
 * www.ayaugc.com, which is now this website). The page paths stayed the same.
 */
const systeme = "https://go.ayaugc.com";

export const site = {
  name: "AYA UGC", // in sentences; the logo is aya.ugc
  owner: "Aya Karroum",
  location: "Dubai, UAE",
  domain: "https://www.ayaugc.com",
  email: "contact@ayaugc.com",
  instagram: { handle: "@aya.ugc", url: "https://www.instagram.com/aya.ugc" },
  // Aya's Amazon wishlist, linked as "Shop equipment must-haves" on the old Systeme.io home page.
  equipmentUrl: "https://www.amazon.ae/hz/wishlist/ls/39UW0OLXZ1250",
  brandsCount: "250+", // must match Instagram (confirmed 25 Nov 2026)
  sinceYear: "[year]",
  replyTime: "2 working days",
  // Aya's portrait (4:5, window light), a path under public/ such as "photos/aya-portrait.jpg". Shows a grey placeholder card until then.
  portraitPhoto: "media/photos/aya-portrait.jpg",

  challenge: {
    name: "The 15-Day UGC Creator Challenge",
    short: "15-Day Challenge",
    tagline: "From first deal to fully booked",
    // Drives every challenge CTA on the site (see src/config/challenge.ts).
    status: "waitlist" as ChallengeStatus,
    // Not shown on the site while pricing is being decided; keep it here for when it returns.
    price: "[challenge price]",
    earlyBirdPrice: "[AED early-bird price]",
    priceAnnounceDate: "[price announcement date]",
    earlyBirdEnds: "[early-bird end date]",
    startDate: "7 December 2026",
    closeDate: "[doors-close date]",
    portfolioVideos: "At least 3",
    // Two 1:1 sessions with Aya during the 15 days (one to set goals, one to map what's next), booked through a link.
    checkInBooking: "You'll get a booking link when you register.",
    language: "The lessons will be in English. You can request Arabic ebooks if you prefer.",
    graduatePerk: "Strong graduates get priority consideration for upcoming AYA UGC brand campaigns [Aya to confirm wording]",
    checkoutUrl: "[Systeme.io checkout URL]",
    // Live Systeme.io waitlist page: a sign-up form ("Join the waitlist & save") that moves people to the next funnel step.
    waitlistUrl: `${systeme}/waitlist`,
  },
  studio: {
    categories: "[Beauty, skincare, food, home, fashion, tech]",
    turnaround: "3 to 6 days",
    revisions: "[one]",
    languages: "English and Levantine (Lebanese) Arabic",
    budgetBands: ["Under AED 500", "AED 500 to 1,000", "AED 1,000 to 2,000", "Above AED 2,000"],
    // Real, consented brand reviews (quote, name, role and brand). The reviews section on /brands stays hidden while this is empty.
    reviews: [] as { quote: string; name: string; role: string }[],
    samplePlaceholder: "[Category · format]",
  },
  templates: {
    name: "UGC starter templates",
    price: "AED 79",
    // Live Systeme.io order page: "Templates", AED 79, one-off payment.
    checkoutUrl: `${systeme}/template`,
    formats: "[File formats, e.g. Canva links and editable PDF.]",
    editAnswer: "Yes, they're editable. Make them your own.",
  },
  guide: { name: "The beginner's guide to UGC", optInUrl: `${systeme}/ugc-guide` },

  // Draft legal text: Aya reviews it before launch.
  legal: {
    updated: "[date]",
    whatsappVisibility: "visible to the community admins and other members [confirm]",
    challengeRefund: "[Refund window and conditions, e.g. full refund up to day [x] if you've completed the first tasks.]",
    templatesRefund: "[Refund terms for digital downloads.]",
  },

  // Copy Aya writes in her own words.
  story: {
    // Shown as "Meet Aya" on Home and "I teach what I do every week" on the challenge page.
    short: "I left my full-time job two years ago to do this for real, and it's been the best decision I've made. I've since worked with over 250 brands. I'm not teaching from a course I took once; I'm still in it every week, filming, editing, pitching. So everything here is just what's actually working for me right now.",
    about: [
      "I started making UGC content without really planning to. I filmed a simple video for a product I was already using, just to see what would happen. It did better than anything I'd ever posted for myself. That was enough to make me take it seriously, and two years ago I left my full-time job to do this properly.",
      "For a while I took whatever rate a brand offered, because I didn't know what else to ask for. Once I actually worked out the time behind one video (the concept, the filming, the editing, the back-and-forth), I realized I was being paid for a fraction of the work. That's when I built my own pricing, usage terms and contracts, instead of using whatever the brand sent over.",
      "[Paragraph 3: what a working week looks like now.]",
    ],
  },

  // Real, consented quotes only (first name and city). Sections that show them stay hidden while this is empty.
  testimonials: [] as Testimonial[],
};

export const nav = [
  { label: "For brands", to: "/brands" },
  { label: "15-Day Challenge", to: "/challenge" },
  { label: "Free guide", to: "/free-guide" },
  { label: "Templates", to: "/templates" },
  { label: "About", to: "/about" },
];
