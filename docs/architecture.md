# Enterprise Product Ecosystem Architecture

## 1. Executive Summary

This monorepo hosts an international-quality, three-product digital ecosystem built to the visual, operational, and architectural standards of leading digital product studios (Stripe, Linear, Awwwards, Airbnb, Apple).

The ecosystem comprises three cohesive yet distinct platforms:
1. **Practo for Animals (`/frontend/animals`)**: An editorial, high-trust discovery platform connecting pet owners and rescue caregivers with certified veterinary clinics, animal hospitals, 24/7 emergency trauma centers, diagnostics, pet boarding, and animal rescue NGOs.
2. **AI Education Platform (`/frontend/academy`)**: A high-end practical AI and digital-skills academy presenting executive and technical curricula, interactive project showcases, cohort registration, and enterprise lead management.
3. **AI Content Studio (`/frontend/studio`)**: A dedicated content production workspace empowering founders to convert raw thoughts into multi-slide, publication-ready LinkedIn and Instagram carousels with automated copywriting, editorial art direction, visual theme engines, and direct PNG rendering.

Backed by a production-grade **Java Spring Boot** application with **MySQL** storage, unified RESTful API design, and strict separation of concerns across presentation, service, repository, and entity layers.

---

## 2. Global Architecture Diagram

```
+---------------------------------------------------------------------------------------+
|                                    CLIENT BROWSER                                     |
|                                                                                       |
|  +---------------------------+  +---------------------------+  +-------------------+  |
|  |    Practo for Animals     |  |    AI Education Academy   |  | AI Content Studio |  |
|  |     (/animals route)      |  |     (/academy route)      |  |  (/studio route)  |  |
|  |                           |  |                           |  |                   |  |
|  | - Location Search Engine  |  | - Curriculum Engine       |  | - Idea Ingestion  |  |
|  | - Provider Directory      |  | - Project Showcase Lab    |  | - AI Workflow     |  |
|  | - Emergency SOS Triage    |  | - Cohort Registration     |  | - Canvas Editor   |  |
|  | - Business Claim & Audit  |  | - Admin Lead Desk         |  | - PNG Slide Engine|  |
|  +-------------+-------------+  +-------------+-------------+  +---------+---------+  |
|                |                              |                          |            |
|                +------------------------------+--------------------------+            |
|                                               |                                       |
|                                     HTTP / REST API Client                            |
+-----------------------------------------------+---------------------------------------+
                                                |
                                                v
+---------------------------------------------------------------------------------------+
|                             SPRING BOOT APPLICATION (PORT 8080)                       |
|                                                                                       |
|  [ SECURITY & CORS FILTERS ] -> [ REQUEST LOGGING & METRICS ]                         |
|                                                                                       |
|  +--------------------+  +-----------------------+  +------------------------------+  |
|  | Animal Controller  |  |  Academy Controller   |  |   Studio Content Controller  |  |
|  | - /api/animals/*   |  |  - /api/academy/*     |  |   - /api/studio/*            |  |
|  +---------+----------+  +-----------+-----------+  +--------------+---------------+  |
|            |                         |                             |                  |
|  +---------v----------+  +-----------v-----------+  +--------------v---------------+  |
|  |   Animal Service   |  |    Academy Service    |  |     Studio AI Service        |  |
|  | - Geo-Filtering    |  | - Lead Ingestion      |  | - Multi-Stage Generation     |  |
|  | - Verification     |  | - Capacity Counters   |  | - Slide Composition Engine  |  |
|  | - Correction Queue |  | - Pipeline Validation |  | - Export Layout Compiler     |  |
|  +---------+----------+  +-----------+-----------+  +--------------+---------------+  |
|            |                         |                             |                  |
|  +---------v----------+  +-----------v-----------+  +--------------v---------------+  |
|  | Animal Repositories|  | Academy Repositories  |  | Studio Content Repositories  |  |
|  | (Spring Data JPA)  |  |  (Spring Data JPA)    |  |     (Spring Data JPA)        |  |
|  +---------+----------+  +-----------+-----------+  +--------------+---------------+  |
|            |                         |                             |                  |
+------------+-------------------------+-----------------------------+------------------+
                                       |
                                       v
+---------------------------------------------------------------------------------------+
|                                PERSISTENCE LAYER (MySQL)                              |
|                                                                                       |
|  Tables:                                                                              |
|  - `animal_providers`, `provider_services`, `provider_reviews`                        |
|  - `business_submissions`, `listing_corrections`                                      |
|  - `academy_programmes`, `student_leads`                                              |
|  - `studio_projects`, `carousel_slides`                                               |
+---------------------------------------------------------------------------------------+
```

---

## 3. Modular Monolith Directory Topology

```
├── frontend/
│   ├── index.html                    # Root HTML5 viewport & Google Fonts loader
│   ├── vite.config.js               # Multi-app and SPA proxy configuration
│   ├── package.json                 # React 18, Vite dependencies (zero CSS frameworks)
│   ├── src/
│   │   ├── main.jsx                 # Global app mount & ecosystem navigation router
│   │   ├── App.jsx                  # Top-level switcher & route director
│   │   ├── common/                  # Shared UI primitives, layout headers & toasts
│   │   │   ├── icons/               # Handcrafted, scalable SVG icon definitions
│   │   │   ├── Navigation.jsx       # Ecosystem switcher and top-level badge
│   │   │   └── Toast.jsx            # Feedback notification toaster
│   │   ├── animals/                 # PRODUCT 1: Practo for Animals
│   │   │   ├── styles/              # Editorial typography & forest-ivory palette CSS
│   │   │   ├── components/          # SearchBar, ProviderCard, EmergencyDrawer, Modal
│   │   │   ├── data/                # Seed sample providers & taxonomy
│   │   │   └── AnimalsApp.jsx       # Complete standalone application page
│   │   ├── academy/                 # PRODUCT 2: AI Education Platform
│   │   │   ├── styles/              # Contemporary editorial typography & obsidian CSS
│   │   │   ├── components/          # ProgrammeGrid, SyllabusDrawer, LeadForm, Showcase
│   │   │   ├── data/                # Detailed 5-programme curriculum specs
│   │   │   └── AcademyApp.jsx       # Complete standalone application page
│   │   └── studio/                  # PRODUCT 3: AI Content Studio
│   │       ├── styles/              # Linear-grade SaaS workspace & canvas styling CSS
│   │       ├── components/          # Sidebar, SlidePreview, SlideControls, ThemePicker
│   │       ├── services/            # Content generation algorithms & PNG renderer
│   │       └── StudioApp.jsx        # Complete standalone SaaS studio application
├── backend/
│   ├── pom.xml                      # Maven project definition (Spring Boot 2.7.x / Java 8+)
│   └── src/
│       ├── main/
│       │   ├── java/com/ecosystem/
│       │   │   ├── EcosystemApplication.java
│       │   │   ├── common/           # ApiResponse, GlobalExceptionHandler, CorsConfig
│       │   │   ├── animals/          # Controller, Service, Repository, Entity, DTO
│       │   │   ├── academy/          # Controller, Service, Repository, Entity, DTO
│       │   │   └── studio/           # Controller, Service, Repository, Entity, DTO
│       │   └── resources/
│       │       ├── application.properties
│       │       ├── schema.sql        # Production MySQL DDL schema
│       │       └── data.sql          # Seed dataset matching client demonstration
└── docs/
    ├── architecture.md              # System design & interaction topology
    ├── design-system.md             # Art direction, typography & color tokens
    ├── api-documentation.md         # Exhaustive REST API contract & curl specs
    └── automation-workflow.md       # AI content creation pipeline & Canva roadmap
```

---

## 4. Architectural Principles

1. **Strict Zero-Tailwind & Zero-Template Policy**:
   All user interfaces are styled with semantic, regular CSS using CSS Custom Properties (`var(--...)`), modular class naming, and strict mathematical spacing grids (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`).
2. **Layered Separation in Backend**:
   Incoming HTTP requests terminate at `@RestController` layers, validate via Bean Validation (`@Valid`), execute in isolated `@Service` transactional boundaries, and interact through typed `@Repository` Spring Data interfaces.
3. **Dual Persistence Strategy**:
   The backend uses JPA/Hibernate configured with standard SQL dialects compatible with MySQL 8.x in production and embedded zero-friction in-memory H2 mode during development so reviewers can run the application immediately without local database daemon setup.
