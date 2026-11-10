// ==========================================================================
// FOUNDERFORGE STUDIO: AI CONTENT GENERATION ENGINE & THEMES
// Professional Social Media Carousel Creator for Founders & Creators
// ==========================================================================

export const STUDIO_THEMES = [
  {
    id: 'monochrome',
    name: 'Minimalist Monochrome',
    bg: '#FFFFFF',
    text: '#0F172A',
    subtext: '#475569',
    accent: '#0F172A',
    border: '#E2E8F0',
    badgeBg: '#F1F5F9',
    badgeText: '#0F172A'
  },
  {
    id: 'editorial-paper',
    name: 'Warm Editorial Linen',
    bg: '#FDFBF7',
    text: '#1B382B',
    subtext: '#56665A',
    accent: '#1B382B',
    border: '#E8E2D2',
    badgeBg: '#EFEAE0',
    badgeText: '#1B382B'
  },
  {
    id: 'modern-slate',
    name: 'Modern Slate & Indigo',
    bg: '#F8FAFC',
    text: '#0F172A',
    subtext: '#64748B',
    accent: '#6366F1',
    border: '#CBD5E1',
    badgeBg: '#EEF2FF',
    badgeText: '#4F46E5'
  },
  {
    id: 'warm-terracotta',
    name: 'Soft Cream & Terracotta',
    bg: '#FFFDF9',
    text: '#292524',
    subtext: '#78716C',
    accent: '#C26D45',
    border: '#F5EBE6',
    badgeBg: '#FDF1EB',
    badgeText: '#C26D45'
  },
  {
    id: 'deep-blue',
    name: 'International Klein Blue',
    bg: '#0F172A',
    text: '#FFFFFF',
    subtext: '#94A3B8',
    accent: '#3B82F6',
    border: '#1E293B',
    badgeBg: '#1E3A8A',
    badgeText: '#BFDBFE'
  }
];

export const INITIAL_PROJECTS = [
  {
    id: "proj-101",
    title: "Why Retention Beats New Customer Acquisition",
    platform: "LINKEDIN",
    slideCount: 7,
    tone: "ANALYTICAL",
    themeId: "monochrome",
    authorHandle: "@founder",
    lastEdited: "10 mins ago",
    status: "DRAFT",
    rawIdea: "Founders should focus on user retention and product experience before spending heavily on advertising.",
    slides: [
      {
        slideNumber: 1,
        type: "HOOK",
        tag: "CORE PRINCIPLE",
        headline: "Stop scaling paid marketing until your 90-day retention curve flattens.",
        bodyText: "Most early products don't struggle from lack of traffic. They struggle from an invisible leaky bucket that advertising only accelerates.",
        visualNote: "Clean high-contrast headline, generous whitespace, discreet author watermark in top right."
      },
      {
        slideNumber: 2,
        type: "PROBLEM",
        tag: "THE COST OF CHURN",
        headline: "The Acquisition Trap: Why monthly churn destroys compounding.",
        bodyText: "When monthly churn is 5%, you must replace half your customer base every single year just to stay even. Growth becomes a relentless treadmill.",
        visualNote: "Split comparison highlighting compound churn vs. compounding expansion."
      },
      {
        slideNumber: 3,
        type: "FRAMEWORK",
        tag: "THE GOLDEN RULE",
        headline: "Rule 1: Build for the user's first 7 days, not month 12.",
        bodyText: "Users don't leave after a year; they leave emotionally on day 3 when their setup fails or they can't achieve their primary goal.",
        visualNote: "Three-point horizontal milestone indicators."
      },
      {
        slideNumber: 4,
        type: "ACTION",
        tag: "EXECUTION STEP",
        headline: "Align your pricing with the customer's actual success.",
        bodyText: "Price based on metrics your customers celebrate: files processed, tasks automated, or revenue created. As they win, your contract expands naturally.",
        visualNote: "Comparison card showing shared-outcome pricing."
      },
      {
        slideNumber: 5,
        type: "ACTION",
        tag: "TEAM RHYTHM",
        headline: "Make onboarding velocity your primary product metric.",
        bodyText: "Measure the exact minutes it takes a new user to achieve their first win. Remove every non-essential form field and permission gate.",
        visualNote: "Checklist card showing onboarding friction points to eliminate."
      },
      {
        slideNumber: 6,
        type: "SUMMARY",
        tag: "SUMMARY",
        headline: "The Retention Engine in Three Rules:",
        bodyText: "1. Audit your 90-day cohort plateau before scaling spend.\n2. Tie annual pricing to direct customer value.\n3. Make time-to-first-value your top team metric.",
        visualNote: "Numbered manifesto layout with clear spacing."
      },
      {
        slideNumber: 7,
        type: "CTA",
        tag: "REFLECTION",
        headline: "What metric does your product team prioritize this quarter?",
        bodyText: "Save this carousel for your next product review. Share your thoughts in the comments below.",
        visualNote: "Author handle stamp, bookmark and share reminder."
      }
    ]
  },
  {
    id: "proj-102",
    title: "How to Build a Weekly Creator Routine",
    platform: "INSTAGRAM",
    slideCount: 5,
    tone: "TACTICAL",
    themeId: "warm-terracotta",
    authorHandle: "@creator",
    lastEdited: "1 hour ago",
    status: "READY",
    rawIdea: "A realistic system for founders to publish high-quality content in 2 hours a week.",
    slides: [
      {
        slideNumber: 1,
        type: "HOOK",
        tag: "CREATOR SYSTEM",
        headline: "How to publish weekly carousels in under 2 hours.",
        bodyText: "You don't need a massive team to share thoughtful content. Here is the exact system I use to draft, design, and schedule posts every Sunday.",
        visualNote: "Warm serif headline on soft cream background."
      },
      {
        slideNumber: 2,
        type: "STEP 1",
        tag: "STEP 01",
        headline: "Capture raw thoughts throughout the week.",
        bodyText: "Keep a single note on your phone. Whenever you solve a customer problem or learn an operational lesson, record the raw bullet points immediately.",
        visualNote: "Note-taking icon and quick capture reminder."
      },
      {
        slideNumber: 3,
        type: "STEP 2",
        tag: "STEP 02",
        headline: "Draft with the Hook-Problem-Framework format.",
        bodyText: "Slide 1 is your hook. Slide 2 is the common mistake. Slides 3-4 share your concrete solution. Slide 5 summarizes and asks a question.",
        visualNote: "Visual breakdown of the 5-slide carousel structure."
      },
      {
        slideNumber: 4,
        type: "STEP 3",
        tag: "STEP 03",
        headline: "Keep designs clean, readable, and consistent.",
        bodyText: "Stick to 2 brand colors and readable font sizes. Test that your slides can be read easily on a small smartphone screen.",
        visualNote: "Mobile screen mockup showing generous typography margins."
      },
      {
        slideNumber: 5,
        type: "CTA",
        tag: "CONCLUSION",
        headline: "Consistency beats sporadic perfection every single time.",
        bodyText: "Save this post to plan your next content session. What topics are you planning to share this week?",
        visualNote: "Author tag, swipe indicator, and save prompt."
      }
    ]
  }
];

// ==========================================================================
// CLIENT-SIDE CAROUSEL GENERATION ALGORITHM
// ==========================================================================

export function generateCarouselFromIdea({ rawIdea, platform, slideCount, tone, authorHandle }) {
  const count = parseInt(slideCount, 10) || 7;
  const platformName = platform || "LINKEDIN";
  const userHandle = authorHandle || "@founder";

  const words = rawIdea.trim().split(/\s+/);
  const subject = words.slice(0, 5).join(' ');
  const title = `Guide: ${subject.replace(/[.,]/g, '')}`;

  const generatedSlides = [];

  // Slide 1: Hook
  generatedSlides.push({
    slideNumber: 1,
    type: "HOOK",
    tag: tone.toUpperCase() + " PERSPECTIVE",
    headline: `Why the conventional wisdom on "${subject}" is missing the mark.`,
    bodyText: `Most teams focus on surface-level tactics. Here is what really happens behind ${rawIdea.slice(0, 100)}... and how to approach it differently.`,
    visualNote: "Bold headline, generous whitespace, author stamp in top header."
  });

  // Slide 2: Problem
  generatedSlides.push({
    slideNumber: 2,
    type: "PROBLEM",
    tag: "THE COMMON MISTAKE",
    headline: "The hidden bottleneck most founders overlook.",
    bodyText: "When teams accept default industry habits without testing them first, they spend significant time and energy on initiatives that yield minimal real results.",
    visualNote: "Clear contrast callout emphasizing the core friction point."
  });

  // Slide 3: Framework
  generatedSlides.push({
    slideNumber: 3,
    type: "FRAMEWORK",
    tag: "THE PRINCIPLE",
    headline: "The Core Rule: Focus on the single highest-leverage lever.",
    bodyText: "Rather than trying to optimize everything at once, identify the single metric or customer milestone that creates 80% of the long-term impact.",
    visualNote: "Three-step horizontal framework diagram."
  });

  // Middle Action Slides
  const stepsCount = count - 4;
  for (let i = 1; i <= Math.max(stepsCount, 1); i++) {
    generatedSlides.push({
      slideNumber: generatedSlides.length + 1,
      type: "ACTION",
      tag: `STEP 0${i}`,
      headline: `Step ${i}: Systematize your ${i === 1 ? 'daily baseline and feedback' : i === 2 ? 'decision criteria' : 'distribution engine'}.`,
      bodyText: `Focus on consistent execution. Document clear guidelines, measure weekly results, and iterate based on real feedback.`,
      visualNote: `Pillar ${i} checklist card with tactical action steps.`
    });
  }

  // Summary Slide
  if (generatedSlides.length < count - 1) {
    generatedSlides.push({
      slideNumber: generatedSlides.length + 1,
      type: "SUMMARY",
      tag: "KEY TAKEAWAY",
      headline: "The Action Plan in Three Rules:",
      bodyText: "1. Audit your current process without assumptions.\n2. Fix the primary bottleneck before adding new tools.\n3. Build consistent habits rather than relying on one-off sprints.",
      visualNote: "Clean numbered summary layout with generous line-height."
    });
  }

  // Final CTA Slide
  generatedSlides.push({
    slideNumber: count,
    type: "CTA",
    tag: "CONCLUSION",
    headline: "Great outcomes are built on consistent principles.",
    bodyText: `Save this carousel for your next planning session. How does your team approach this topic? Let's discuss in the comments below.`,
    visualNote: "Author watermark, bookmark icon, and discussion prompt."
  });

  return {
    id: "proj-" + Math.floor(1000 + Math.random() * 9000),
    title: title,
    platform: platformName,
    slideCount: count,
    tone: tone,
    themeId: "monochrome",
    authorHandle: userHandle,
    lastEdited: "Just now",
    status: "DRAFT",
    rawIdea: rawIdea,
    slides: generatedSlides
  };
}
