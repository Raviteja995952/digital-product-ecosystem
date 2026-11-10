# REST API Documentation

This backend is structured around three independent enterprise domains exposed through clean, RESTful endpoints under `/api`.

All endpoints adhere to standard HTTP status codes (`200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Error`) and return typed JSON bodies enveloped in `ApiResponse<T>`.

---

## 1. Domain: Animal Care & Discovery (`/api/animals`)

### `GET /api/animals/providers`
Fetch filtered animal care providers with query parameters.

**Query Parameters:**
- `query` (string, optional): Search keyword against name, city, services.
- `service` (string, optional): One of `VET_CLINIC`, `HOSPITAL`, `BOARDING`, `DIAGNOSTICS`, `AMBULANCE`, `NGO`.
- `location` (string, optional): Target city (e.g. `Mumbai`, `Bengaluru`, `Delhi`, `Pune`).
- `emergencyOnly` (boolean, optional): Filter for 24/7 emergency facilities.
- `minRating` (double, optional): Minimum review rating filter (e.g. `4.5`).

**Sample Response (`200 OK`):**
```json
{
  "success": true,
  "message": "Providers retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "St. Jude Veterinary Specialty Hospital",
      "type": "HOSPITAL",
      "city": "Bengaluru",
      "address": "42 Richmond Road, Indiranagar, Bengaluru 560038",
      "phone": "+91 80 4910 8820",
      "emergencyPhone": "+91 80 4910 8899",
      "hours": "24 Hours / 7 Days",
      "rating": 4.9,
      "reviewCount": 384,
      "distance": "1.4 km",
      "isEmergency": true,
      "verified": true,
      "imageUrl": "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80",
      "services": ["Emergency Surgery", "Critical ICU", "Digital X-Ray", "Ultrasound", "In-house Pathology"],
      "about": "Premier tertiary care animal hospital equipped with Level-1 surgical suites, 24/7 veterinary criticalists, and dedicated feline/canine isolation wards."
    }
  ],
  "timestamp": "2026-11-10T06:30:00Z"
}
```

### `GET /api/animals/providers/{id}`
Retrieve a single provider with rich doctor roster, consultation fee schedule, and verified reviews.

### `POST /api/animals/submissions`
Submit a new clinic, rescue NGO, or boarding facility for editorial review and directory inclusion.

**Request Body:**
```json
{
  "businessName": "Aura Veterinary Wellness",
  "providerType": "VET_CLINIC",
  "contactPerson": "Dr. Rohini Mehta",
  "email": "rohini@auravet.in",
  "phone": "+91 98200 11223",
  "city": "Mumbai",
  "address": "12 Bandra West, Pali Hill, Mumbai 400050",
  "operatingHours": "09:00 AM - 08:00 PM",
  "isEmergency": false,
  "licenseNumber": "VCI-MH-2018-8849",
  "servicesOffered": "Vaccination, Dental Scaling, Soft Tissue Surgery",
  "notes": "Independent clinic with private diagnostic suite."
}
```

### `POST /api/animals/corrections`
Community accuracy report for correcting out-of-date timings, phone numbers, or operational statuses.

---

## 2. Domain: AI Education Platform (`/api/academy`)

### `GET /api/academy/programmes`
List the 5 primary specialized executive curricula with module counts, prerequisites, and cohort schedules.

### `POST /api/academy/leads`
Submit student interest or cohort application.

**Request Body:**
```json
{
  "fullName": "Ananya Sharma",
  "email": "ananya.sharma@example.com",
  "phone": "+91 99887 76655",
  "programmeId": "gen-ai-eng",
  "experienceLevel": "MID_LEVEL",
  "currentRole": "Staff Software Engineer",
  "learningGoal": "Architect and deploy production Multi-Agent workflows with LangGraph."
}
```

### `GET /api/academy/leads`
Admin endpoint to inspect, audit, and triage student leads by programme or status.

---

## 3. Domain: AI Content Studio (`/api/studio`)

### `POST /api/studio/generate`
Transforms raw founder thoughts into structured carousel outlines and slide decks.

**Request Body:**
```json
{
  "rawIdea": "Bootstrapped founders should focus on retention economics rather than paid top-of-funnel acquisition.",
  "platform": "LINKEDIN",
  "slideCount": 7,
  "tone": "ANALYTICAL",
  "authorHandle": "@founderlens"
}
```

**Response (`200 OK`):**
```json
{
  "success": true,
  "data": {
    "projectId": "proj-98214",
    "title": "The Retention First Playbook",
    "slides": [
      {
        "slideNumber": 1,
        "type": "HOOK",
        "headline": "Stop buying top-of-funnel traffic until your net dollar retention hits 110%.",
        "bodyText": "Most early SaaS startups bleed capital by scaling acquisition before their core retention loop is sealed. Here is the mathematical reality.",
        "visualNote": "High contrast typography, oversized quote mark, minimal author avatar"
      }
    ]
  }
}
```

### `GET /api/studio/projects`
List stored founder projects, draft carousels, and exported decks.

### `POST /api/studio/export`
Generates Canva-compatible export metadata and JSON packages for external studio publishing.
