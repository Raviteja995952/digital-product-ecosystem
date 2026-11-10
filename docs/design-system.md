# Redesigned International Design System & Art Direction Guide

## 1. Design Direction & Non-Negotiable Standards

This ecosystem rejects dark developer-dashboard appearances, monospace metadata clutter, and repetitive SaaS boilerplate cards. Instead, each product has its own handcrafted visual identity tailored to its specific audience and domain:

1. **Product 1 (FaunaCare)**: Premium consumer healthcare discovery platform. Warm ivory surfaces, natural botanical greens, authentic compassionate veterinary photography, elegant Fraunces serif headlines, and search-first layout.
2. **Product 2 (Apex Digital Academy)**: Premium international education brand for students and young professionals. Off-white surfaces, vibrant electric cobalt accents, inspiring studio collaboration imagery, and structured course presentation.
3. **Product 3 (FounderForge Studio)**: Professional creative software interface. Crisp light neutral workbench (`#F8F9FA`), subtle borders, large canvas stage with true 4:5 aspect ratio, and functional slide editing controls.

---

## 2. Product-by-Product Visual Tokens

### Product 1: FaunaCare (Practo for Animals)

```css
:root {
  /* Surfaces & Canvas */
  --fauna-ivory: #FDFBF7;           /* Warm Ivory */
  --fauna-surface: #FFFFFF;         /* Cloud White */
  --fauna-surface-alt: #F7F4EC;     /* Natural Linen Tint */
  --fauna-border: #E8E2D2;          /* Subtle Sand Divider */

  /* Palette */
  --fauna-forest: #1B382B;          /* Botanical Forest Green */
  --fauna-forest-hover: #12271E;
  --fauna-sage: #E3EBE4;            /* Soft Sage Tint */
  --fauna-terracotta: #C26D45;      /* Warm Earth Accent */
  --fauna-emergency: #C5221F;       /* Urgent Crimson */
  --fauna-emergency-bg: #FDF2F0;    /* Soft Rose Emergency Tint */

  /* Typography */
  --fauna-serif: 'Fraunces', 'Newsreader', Georgia, serif;
  --fauna-sans: 'Plus Jakarta Sans', sans-serif;
}
```

### Product 2: Apex Digital Academy (AI Education)

```css
:root {
  /* Surfaces */
  --acad-bg: #F9F9FB;               /* Premium Off-White */
  --acad-surface: #FFFFFF;          /* Pure White */
  --acad-surface-alt: #F1F5F9;      /* Cool Slate Tint */
  --acad-border: #E2E8F0;           /* Subtle Gray Divider */

  /* Accents */
  --acad-cobalt: #2563EB;           /* Vibrant International Cobalt */
  --acad-cobalt-hover: #1D4ED8;
  --acad-cobalt-light: #EFF6FF;     /* Soft Blue Tint */
  --acad-emerald: #10B981;          /* Verified Accent */

  /* Text */
  --acad-text: #0F172A;             /* Slate Ink */
  --acad-text-body: #475569;        /* Balanced Body Charcoal */
  --acad-text-muted: #64748B;
}
```

### Product 3: FounderForge Studio (Creator Software)

```css
:root {
  /* Studio Surfaces */
  --std-bg: #F8F9FA;                /* Light Workbench Gray */
  --std-sidebar: #FFFFFF;           /* White Left Nav */
  --std-workbench: #F1F3F5;         /* Neutral Canvas Background */
  --std-panel: #FFFFFF;             /* White Control Surface */
  --std-border: #E2E8F0;            /* Crisp Subtle Divider */

  /* Accents */
  --std-accent: #6366F1;            /* Creative Indigo */
  --std-accent-hover: #4F46E5;
  --std-accent-dim: #EEF2FF;

  /* Typography */
  --std-text: #0F172A;
  --std-text-muted: #64748B;
  --std-serif: 'Fraunces', 'Newsreader', Georgia, serif;
}
```

---

## 3. Global Redesign Checklist Addressed

- [x] Removed dark developer-dashboard appearance across all products.
- [x] Removed dark "Production Monolith" navbar; replaced with a discreet floating pill switcher.
- [x] Removed fake "All Systems Live" and backend status labels.
- [x] Removed terminal code windows and technical badges.
- [x] Replaced senior-engineering messaging with practical AI and digital skills for students and professionals.
- [x] Converted FounderForge Studio to a light, distraction-free creative software workspace.
- [x] Retained 100% of functional capabilities (Search, Filters, Booking, Intake, Generator, Direct PNG Download, Canva Bridge, Spring Boot REST APIs).
