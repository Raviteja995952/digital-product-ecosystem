// ==========================================================================
// APEX DIGITAL ACADEMY: CURRICULUM FOR STUDENTS & YOUNG PROFESSIONALS
// Practical AI & Digital Skills Education (Zero Fabricated Statistics)
// ==========================================================================

export const ACADEMY_PROGRAMMES = [
  {
    id: "ai-productivity",
    name: "Applied Generative AI & Digital Productivity",
    duration: "4 Weeks",
    effort: "4-5 hrs / week",
    format: "Hands-on Workshops + Live Mentorship",
    level: "Beginner to Intermediate",
    tagline: "Automate daily research, synthesis, and writing to save 10+ hours every week.",
    accentColor: "#2563EB",
    overview: "Designed for students and early-career professionals looking to master generative AI tools in their daily work, academic research, and creative projects.",
    toolsLearned: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Notion AI", "Perplexity", "NotebookLM"],
    modules: [
      {
        week: "01",
        title: "Effective Thinking with Foundation Models",
        topics: "Deconstructing prompt patterns, context window management, and eliminating AI hallucinations."
      },
      {
        week: "02",
        title: "Academic & Market Research Acceleration",
        topics: "Using Perplexity and NotebookLM to synthesize 100+ page reports and research papers into clear memos."
      },
      {
        week: "03",
        title: "Content Creation & Professional Communication",
        topics: "Drafting high-converting emails, executive summaries, presentations, and social articles."
      },
      {
        week: "04",
        title: "Building Your Personal AI Second Brain",
        topics: "Organizing your notes, project knowledge, and custom GPT assistants for recurring tasks."
      }
    ],
    capstone: "A personalized AI Operating System tailored to your job or studies, complete with custom assistants and prompt libraries.",
    outcome: "Save 10+ hours weekly and deliver higher quality analysis in class or at work."
  },
  {
    id: "ai-automation-nocode",
    name: "No-Code AI Automation & Workflow Design",
    duration: "6 Weeks",
    effort: "5-6 hrs / week",
    format: "Project Labs + Step-by-Step Builds",
    level: "Intermediate",
    tagline: "Connect apps and AI to build automated bots, lead processors, and smart databases without coding.",
    accentColor: "#10B981",
    overview: "Learn to build autonomous business workflows that automatically read incoming emails, enrich data, draft replies, and update spreadsheets.",
    toolsLearned: ["Make.com", "Zapier Central", "Airtable AI", "OpenAI API", "Slack API"],
    modules: [
      {
        week: "01 - 02",
        title: "Visual Logic & API Fundamentals",
        topics: "Understanding webhooks, data structures, conditional branching, and connecting web apps visually."
      },
      {
        week: "03 - 04",
        title: "Automating Email & Document Processing",
        topics: "Parsing customer inquiries, extracting PDF invoice details, and routing tasks to the right person."
      },
      {
        week: "05 - 06",
        title: "Deploying Full Autonomous Workflows",
        topics: "Error handling, human-in-the-loop notifications in Slack, and scheduled background tasks."
      }
    ],
    capstone: "An automated end-to-end customer onboarding and triage assistant running live on Make.com and Airtable.",
    outcome: "Deliver automation solutions for internships, client freelance gigs, or your current team."
  },
  {
    id: "prompt-engineering",
    name: "Applied Prompt Engineering & Creative AI",
    duration: "5 Weeks",
    effort: "5 hrs / week",
    format: "Creative Sprints & Peer Reviews",
    level: "Beginner to Intermediate",
    tagline: "Master structured instructions, few-shot prompting, and generative visual storytelling.",
    accentColor: "#F59E0B",
    overview: "Go beyond casual chat to construct robust, reliable prompt chains for marketing campaigns, educational content, and digital media production.",
    toolsLearned: ["Claude Projects", "Midjourney v6", "Runway Gen-3", "OpenAI Playground", "Cursor AI"],
    modules: [
      {
        week: "01",
        title: "System Instructions & Role Framing",
        topics: "Defining rigid persona constraints, input delimiters, and consistent JSON output schemas."
      },
      {
        week: "02",
        title: "Few-Shot Examples & Reasoning Chains",
        topics: "Chain-of-thought prompting, self-consistency evaluation, and reducing ambiguity."
      },
      {
        week: "03",
        title: "Multimodal AI & Visual Direction",
        topics: "Crafting precise Midjourney prompts for editorial design, product renders, and UI mockups."
      },
      {
        week: "04 - 05",
        title: "Campaign Production Sprint",
        topics: "Generating complete multimedia storyboards and copy packages for a modern brand launch."
      }
    ],
    capstone: "A comprehensive brand launch package featuring AI-generated visual identity, copy deck, and video concepts.",
    outcome: "A stand-out creative portfolio piece showcasing practical prompt craft and art direction."
  },
  {
    id: "practical-web-ai",
    name: "Building Real-World AI Web Applications",
    duration: "8 Weeks",
    effort: "6-8 hrs / week",
    format: "Code Labs + Weekly Mentorship",
    level: "Intermediate (Basic HTML/JS)",
    tagline: "Build and deploy working, interactive AI apps with modern React frontends and cloud backends.",
    accentColor: "#6366F1",
    overview: "For students and junior developers who want to ship real web applications powered by generative AI—complete with streaming chat, document upload, and clean UI.",
    toolsLearned: ["React.js", "Next.js", "OpenAI API", "Tailwind/CSS", "Supabase", "Vercel"],
    modules: [
      {
        week: "01 - 02",
        title: "Modern React & API Consumption",
        topics: "State management, fetch/async patterns, component architecture, and UI responsiveness."
      },
      {
        week: "03 - 04",
        title: "Streaming AI Chat & Token Rendering",
        topics: "Handling streaming responses, markdown rendering, and persistent chat message histories."
      },
      {
        week: "05 - 06",
        title: "Document Q&A & Semantic Search",
        topics: "Allowing users to upload PDFs and ask questions using basic vector search and embedding APIs."
      },
      {
        week: "07 - 08",
        title: "Production Deployment & Polish",
        topics: "Deploying to Vercel, setting up rate limits, custom domains, and portfolio presentation."
      }
    ],
    capstone: "A live, publicly deployed AI web application (such as an intelligent study companion or resume feedback tool).",
    outcome: "A functional, deployed web app link on your resume and GitHub to prove real technical ability."
  },
  {
    id: "ai-business-ops",
    name: "AI for Modern Business & Marketing Operations",
    duration: "4 Weeks",
    effort: "4 hrs / week",
    format: "Case Studies & Live Strategy Sessions",
    level: "Beginner to Intermediate",
    tagline: "Use AI to conduct deep competitive research, automate campaign assets, and scale marketing.",
    accentColor: "#EC4899",
    overview: "Tailored for marketing students, business analysts, and startup operators who want to use AI to 5x their research, strategy memos, and content production.",
    toolsLearned: ["Claude 3.5", "HubSpot AI", "Canva Magic Studio", "Clay.com", "Google Gemini"],
    modules: [
      {
        week: "01",
        title: "AI-Powered Market & Competitor Intelligence",
        topics: "Scraping public trends, analyzing competitor positioning, and synthesizing SWOT matrices."
      },
      {
        week: "02",
        title: "Lead Generation & Outreach Personalization",
        topics: "Using Clay and AI to research prospective clients and draft relevant, personalized messages."
      },
      {
        week: "03",
        title: "Multi-Channel Content Engines",
        topics: "Transforming a single podcast or article into 10 multi-format social posts and newsletters."
      },
      {
        week: "04",
        title: "Measuring ROI & Enterprise Ethics",
        topics: "Evaluating time saved, privacy considerations, copyright guidelines, and ethical disclosure."
      }
    ],
    capstone: "A full AI Marketing Strategy & Operations Playbook for a growth-stage company or startup.",
    outcome: "A practical business skillset ready to apply immediately in marketing, sales, or product roles."
  }
];

export const PRACTICAL_PROJECTS = [
  {
    title: "AI Study & Exam Prep Companion",
    programme: "Applied Generative AI",
    desc: "A personalized study assistant that converts lecture notes and textbook PDFs into interactive flashcards, practice quizzes, and concept explanations.",
    skillsGained: "Document synthesis, custom GPT configuration, conceptual breakdown",
    audience: "Students & University Learners"
  },
  {
    title: "Automated Job Application & Resume Tailor",
    programme: "No-Code AI Automation",
    desc: "An automated workflow that scans job descriptions, highlights missing keywords on your resume, and drafts tailored cover letters in Google Docs.",
    skillsGained: "Airtable, Make.com, OpenAI API parsing",
    audience: "Early-Career Job Seekers"
  },
  {
    title: "Interactive Pitch Deck Storyboarder",
    programme: "Applied Prompt Engineering",
    desc: "A visual prompt pipeline generating branded slide illustrations, investor summaries, and customer persona profiles for early-stage startup founders.",
    skillsGained: "Multimodal prompting, Midjourney v6, Claude Projects",
    audience: "Designers & Aspiring Founders"
  }
];

export const LEARNING_JOURNEY = [
  {
    step: "01",
    phase: "Hands-on Fundamentals",
    detail: "Master the real mechanics of foundation models through practical, jargon-free exercises."
  },
  {
    step: "02",
    phase: "Weekly Practical Sprints",
    detail: "Build real tools each week: research synthesis engines, automated bots, and prompt packages."
  },
  {
    step: "03",
    phase: "Mentored Capstone Build",
    detail: "Create a substantial, real-world project that directly addresses a problem in your work or study."
  },
  {
    step: "04",
    phase: "Portfolio & Presentation",
    detail: "Receive personalized feedback from mentors and package your project for your resume and LinkedIn."
  }
];

export const SAMPLE_STUDENTS = [
  {
    quote: "I was overwhelmed by all the AI tools launching every week. This programme cut through the noise and taught me how to actually automate my weekly market research.",
    author: "Rhea Sen",
    role: "Associate Product Manager",
    company: "Fintech Startup",
    programme: "Applied Generative AI & Digital Productivity",
    note: "Sample Student Experience"
  },
  {
    quote: "Built an automated lead routing workflow during week 3 that my internship team ended up adopting for their actual inbound pipeline.",
    author: "Aditya Nair",
    role: "Final Year B.Tech Student",
    company: "University Engineering",
    programme: "No-Code AI Automation & Workflow Design",
    note: "Sample Student Experience"
  },
  {
    quote: "As a junior designer, learning how to pair Claude's structural thinking with Midjourney gave me a massive edge in client presentations.",
    author: "Simran Kapoor",
    role: "Junior Visual Designer",
    company: "Digital Design Agency",
    programme: "Applied Prompt Engineering & Creative AI",
    note: "Sample Student Experience"
  }
];

export const FAQS = [
  {
    q: "Do I need a computer science degree or coding background to join?",
    a: "No! Most of our programmes are built specifically for students, product managers, designers, and business professionals. Tracks like Generative AI Productivity and No-Code Automation require zero coding. For our Web AI track, only basic familiarity with HTML/JavaScript is needed."
  },
  {
    q: "How many hours per week do I need to commit?",
    a: "Our programmes are designed to fit alongside full-time studies or jobs, requiring typically 4 to 6 hours per week including live workshops and hands-on project work."
  },
  {
    q: "Will I build real projects for my portfolio?",
    a: "Yes. Every single week involves building functional deliverables. You will graduate with a live capstone project you can share on your resume, LinkedIn, or GitHub."
  },
  {
    q: "How do the cohort sessions and mentorship work?",
    a: "You join live interactive workshops led by industry practitioners, supplemented by asynchronous office hours, step-by-step video tutorials, and dedicated Slack/Discord community channels."
  }
];
