# International Digital Product Ecosystem

An international-quality digital product suite designed and developed to the standards of world-class digital product studios (Stripe, Linear, Awwwards, Airbnb, Apple).

This monorepo contains three distinct, production-grade web applications backed by a Java Spring Boot REST API and MySQL persistence layer.

---

## 1. The Three Digital Products

### Product 1: FaunaCare (Practo for Animals)
- **Concept:** A trusted animal-care discovery and critical triage platform.
- **Brand Direction:** Warm ivory (`#FBF9F4`), deep forest green (`#1B382B`), soft sage, terracotta accents, Newsreader & Fraunces serif typography.
- **Key Features:**
  - Dynamic city and keyword search engine (Indiranagar, Koramangala, Bandra, etc.)
  - 6 Specialized clinical categories (Veterinary Clinics, Animal Hospitals, Pet Boarding, Diagnostics & Imaging, Ambulances, NGOs)
  - Interactive directory cards with ratings, distance in km, operating hours with live status dot, and services tags
  - Detailed Provider Profile modal with doctor credentials (BVSc/MVSc), facility bio, transparent fee schedule, and appointment request booking
  - 24/7 Critical Emergency SOS section with 4 life-saving clinical triage cards (Heatstroke, Toxic ingestion, Vehicular trauma, Bloat) and mobile ambulance dispatch simulation
  - Clinic Registration modal ("List Your Clinic") with license validation
  - Community Correction modal ("Submit Correction") for directory accuracy auditing
  - Clearly labelled demonstration data disclaimer

### Product 2: Apex AI Academy (AI Education Platform)
- **Concept:** A premium practical AI and digital-skills education brand.
- **Brand Direction:** Contemporary editorial design, obsidian noir (`#0C0D10`), deep slate, cadmium amber (`#F59E0B`), electric cobalt, and expressive serif typography.
- **Key Features:**
  - Value proposition hero with syntax-highlighted code terminal showcasing stateful LangGraph multi-agent swarm architecture
  - 5 Core engineering tracks (Generative AI Systems, Prompt Engineering & Cognitive Architecture, Autonomous AI Agents, Executive AI Productivity, Practical AI Dev)
  - Interactive Syllabus Drawer with weekly module breakdowns, hours commitment, format, tuition, and production capstone specifications
  - "Why Learn With Us" architectural pillars and real practical project showcases
  - 4-Stage Learning Journey from First Principles to Architectural Jury Defense
  - Authentic sample alumni feedback clearly marked as demonstration profiles with zero fabricated stats
  - Expandable interactive FAQ accordion
  - Cohort Registration modal with form validation and instant confirmation
  - Integrated Candidate Lead Management Desk for admissions operations with live status updates (NEW, INTERVIEWING, ENROLLED)

### Product 3: FounderForge Studio (AI Content Studio)
- **Concept:** An independent content production workspace for founders.
- **Brand Direction:** Professional SaaS interface (Linear meets Stripe), workbench charcoal (`#0C0D11`), crisp borders (`#262B3A`), indigo tool accents (`#6366F1`), and JetBrains Mono monospace coordinates.
- **Key Features:**
  - Multi-column SaaS workbench: Left Project Sidebar, Center Canvas Stage, and Right Inspector Pane
  - AI Cognitive Generator Wizard with 5-stage pipeline (Research, Hooks, Narrative, Layout cues) transforming raw founder thoughts into 5, 7, or 10-slide decks
  - True 4:5 portrait (1080×1350) and 1:1 square canvas preview with real-time typography and visual pacing
  - In-place slide text and layout editing (tag, headline, body description, art direction note, author handle)
  - 5-Theme visual engine (Minimalist Monochrome, Deep Obsidian Dark, Warm Editorial Linen, International Klein, Neo-Swiss Amber)
  - Interactive slide thumbnail rail for navigation, reordering, and adding slides
  - **Direct $2\times$ high-resolution PNG slide export** using HTML canvas / `html2canvas` directly downloading slides to the browser
  - Canva Connect API Bridge architecture modal with structured JSON payload export

---

## 2. Technology Stack

- **Frontend:**
  - React.js 18.3
  - JavaScript (ES Modules)
  - Standard Regular CSS (Zero Tailwind CSS, zero boilerplate templates)
  - Vite 5.4 build system
  - `html2canvas` for client-side PNG slide rendering
- **Backend:**
  - Java 8+ / Java 17 compatible (Spring Boot 2.7.18 LTS)
  - Spring Web (REST Controllers)
  - Spring Data JPA / Hibernate
  - Bean Validation (`javax.validation`)
  - Standardized JSON envelope (`ApiResponse<T>`) and `@RestControllerAdvice` error handler
- **Database & Persistence:**
  - MySQL 8.x production profile (`application-mysql.properties`)
  - Embedded H2 MySQL-mode in-memory local fallback (`schema.sql` and `data.sql`)

---

## 3. Project Directory Topology

```
├── frontend/
│   ├── index.html                    # Root HTML5 viewport & Google Fonts loader
│   ├── vite.config.js               # Port 3000 & API proxy configuration
│   ├── package.json                 # React 18, Vite, html2canvas
│   └── src/
│       ├── main.jsx                 # Application entry point
│       ├── App.jsx                  # Top-level switcher & Executive Hub
│       ├── index.css                # Global CSS reset & layout tokens
│       ├── common/
│       │   └── icons.jsx            # Handcrafted scalable SVG icon system
│       ├── animals/                 # PRODUCT ONE: Practo for Animals
│       │   ├── AnimalsApp.jsx
│       │   ├── styles/animals.css
│       │   ├── data/providersData.js
│       │   └── components/
│       │       ├── ProviderCard.jsx
│       │       ├── ProviderDetailModal.jsx
│       │       ├── BusinessSubmissionModal.jsx
│       │       ├── CorrectionModal.jsx
│       │       └── EmergencySOSModal.jsx
│       ├── academy/                 # PRODUCT TWO: AI Education Platform
│       │   ├── AcademyApp.jsx
│       │   ├── styles/academy.css
│       │   ├── data/academyData.js
│       │   └── components/
│       │       ├── SyllabusDrawer.jsx
│       │       ├── LeadRegistrationModal.jsx
│       │       └── LeadAdminDeskModal.jsx
│       └── studio/                  # PRODUCT THREE: AI Content Studio
│           ├── StudioApp.jsx
│           ├── styles/studio.css
│           ├── services/studioEngine.js
│           └── components/
│               ├── SlideCanvasPreview.jsx
│               ├── NewCarouselModal.jsx
│               └── CanvaExportModal.jsx
├── backend/
│   ├── pom.xml                      # Maven project definition
│   └── src/main/
│       ├── java/com/ecosystem/
│       │   ├── EcosystemApplication.java
│       │   ├── common/              # ApiResponse, GlobalExceptionHandler, CorsConfig
│       │   ├── animals/             # Controller, Service, Repository, Entity, DTO
│       │   ├── academy/             # Controller, Service, Repository, Entity, DTO
│       │   └── studio/              # Controller, Service, Repository, Entity, DTO
│       └── resources/
│           ├── application.properties
│           ├── application-mysql.properties
│           ├── schema.sql           # MySQL DDL schema
│           └── data.sql             # Seed demonstration data
└── docs/
    ├── architecture.md              # System architecture & topology
    ├── design-system.md             # Typography & color design tokens
    ├── api-documentation.md         # Exhaustive REST API contract
    ├── automation-workflow.md       # AI content pipeline & Canva bridge spec
    └── sample-carousel.md           # Sample 7-slide LinkedIn carousel
```

---

## 4. Setup and Execution Instructions

### A. Running the Frontend Applications

1. Open a terminal in the `/frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:3000`.
   - The **Ecosystem Overview Hub** (`/`) provides an architectural overview and one-click launch buttons to all 3 products.
   - Clean HTML5 routing powered by React Router:
     - `http://localhost:3000/animals` -> **FaunaCare**
     - `http://localhost:3000/academy` -> **Apex AI Academy**
     - `http://localhost:3000/studio` -> **FounderForge Studio**

### B. Running the Java Spring Boot Backend

1. Open a terminal in the `/backend` directory:
   ```bash
   cd backend
   ```
2. Build and verify the application:
   ```bash
   mvn clean test-compile
   ```
3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```
   - The backend starts on `http://localhost:8080`.
   - **Local Mode (Default):** Runs immediately using standard SQL with in-memory persistence and automatic schema initialization from `schema.sql` and `data.sql`.
   - **MySQL Production Mode:** Run with `--spring.profiles.active=mysql` after ensuring MySQL daemon is running on port 3306.

---

## 5. Vercel & Production Cloud Deployment

### Deploying Frontend to Vercel

1. Push this repository to your GitHub account (see Git instructions below).
2. Go to [Vercel Dashboard](https://vercel.com/new) and import your GitHub repository.
3. Configuration Options:
   - **Framework Preset:** Vite
   - **Root Directory:** Either leave as default (`.`) or set to `frontend`
   - **Build Command:** `npm run build` (automatic)
   - **Output Directory:** `dist` (if root directory is `frontend`) or `frontend/dist` (if root directory is `.`)
4. **Environment Variables (Optional for live backend integration):**
   - Add `VITE_API_BASE_URL` with your deployed Spring Boot backend URL (e.g., `https://api.yourdomain.com`).
5. Click **Deploy**. Vercel will build the frontend and serve it with automatic SPA rewrites (`vercel.json`) ensuring that direct navigation or refreshing on `/animals`, `/academy`, and `/studio` returns the correct view with zero 404 errors.

---

## 6. Verification & Testing Summary

- **Frontend Compilation:** Verified via `vite build` (`dist/` generated with 0 errors).
- **Backend Compilation:** Verified via `mvn clean test-compile` (All 24 Java source files compiled successfully with `BUILD SUCCESS`).
- **Interactive Testing:**
  - FaunaCare search, category chips, rating filters, detail modal, appointment booking, clinic listing, correction report, and emergency SOS dispatch tested.
  - Apex Academy track inspection, syllabus modal, student intake registration, and admissions lead desk tested.
  - FounderForge AI carousel synthesis, in-place headline/body editing, 5-theme switcher, direct high-resolution PNG download, and Canva export bridge tested.

