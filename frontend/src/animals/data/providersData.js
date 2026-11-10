// ==========================================================================
// FAUNACARE: CURATED ANIMAL HEALTHCARE PROVIDERS (DEMONSTRATION DATA)
// Clearly labelled demonstration data representing verified clinical facilities
// ==========================================================================

export const SERVICE_CATEGORIES = [
  {
    id: 'VET_CLINIC',
    name: 'Veterinary Clinics',
    tagline: 'Primary clinical consultations & preventive care',
    count: '142 Verified',
    icon: 'stethoscope',
    highlight: 'Walk-ins & scheduled general practice'
  },
  {
    id: 'HOSPITAL',
    name: 'Animal Hospitals',
    tagline: 'Multi-specialty surgical & 24/7 ICU facilities',
    count: '38 Facilities',
    icon: 'building',
    highlight: 'Advanced soft-tissue & orthopedic surgery'
  },
  {
    id: 'BOARDING',
    name: 'Pet Boarding & Foster',
    tagline: 'Supervised recuperative stays & holiday kennels',
    count: '64 Sanctuaries',
    icon: 'paw',
    highlight: 'Medically monitored boarding'
  },
  {
    id: 'DIAGNOSTICS',
    name: 'Diagnostics & Imaging',
    tagline: 'In-house digital X-ray, ultrasound & pathology',
    count: '29 Laboratories',
    icon: 'filter',
    highlight: 'Rapid blood work & histopathology'
  },
  {
    id: 'AMBULANCE',
    name: 'Animal Ambulances',
    tagline: 'Critical patient transport with onboard oxygen',
    count: '19 Units',
    icon: 'ambulance',
    highlight: 'Emergency roadside rescue dispatch'
  },
  {
    id: 'NGO',
    name: 'Rescue NGOs & Sanctuaries',
    tagline: 'Community animal rescue, ABC & rehabilitation',
    count: '53 Trusts',
    icon: 'shieldCheck',
    highlight: 'Charitable trauma recovery & adoption'
  }
];

export const CITIES = [
  'All Cities',
  'Bengaluru',
  'Mumbai',
  'Delhi NCR',
  'Pune',
  'Hyderabad'
];

export const DEMO_PROVIDERS = [
  {
    id: 1,
    name: "St. Jude Animal Specialty Hospital & Trauma Center",
    type: "HOSPITAL",
    typeName: "Animal Hospital",
    city: "Bengaluru",
    neighborhood: "Indiranagar",
    address: "42 Richmond Road, Indiranagar, Bengaluru 560038",
    phone: "+91 80 4910 8820",
    emergencyPhone: "+91 80 4910 8899",
    hours: "24 Hours / 7 Days",
    isOpenNow: true,
    isEmergency: true,
    rating: 4.9,
    reviewCount: 428,
    distanceKm: 1.4,
    verified: true,
    licenseId: "VCI-KA-2016-0914",
    leadDoctor: "Dr. Anirudh Kulkarni, MVSc (Surgery & Radiology)",
    consultationFee: "₹850",
    emergencyFee: "₹1,500",
    imageUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80",
    services: ["24/7 Critical ICU", "Emergency Trauma Surgery", "Color Doppler Ultrasound", "Digital X-Ray", "Feline Isolation Ward"],
    about: "A NABH-accredited tertiary veterinary hospital equipped with high-field digital radiology, dedicated surgical oxygen lines, and round-the-clock criticalists on duty.",
    reviews: [
      {
        author: "Meera Subramaniam",
        patient: "Cooper (Golden Retriever, 4y)",
        rating: 5,
        date: "3 days ago",
        comment: "Brought Cooper in at 2 AM after acute gastric distress. The emergency trauma team stabilized him in under 15 minutes. Exceptional clinical calm."
      },
      {
        author: "Rahul Varma",
        patient: "Milo (Persian Cat, 2y)",
        rating: 5,
        date: "2 weeks ago",
        comment: "Dr. Kulkarni performed laparoscopic surgery with zero post-op complications. Very clear discharge instructions and follow-up."
      }
    ]
  },
  {
    id: 2,
    name: "Olive Green Veterinary Clinic & Wellness Studio",
    type: "VET_CLINIC",
    typeName: "Veterinary Clinic",
    city: "Bengaluru",
    neighborhood: "Koramangala 4th Block",
    address: "18 100-Feet Road, Koramangala, Bengaluru 560034",
    phone: "+91 80 2553 4410",
    emergencyPhone: "+91 98450 33210",
    hours: "08:30 AM - 08:30 PM",
    isOpenNow: true,
    isEmergency: false,
    rating: 4.8,
    reviewCount: 312,
    distanceKm: 2.8,
    verified: true,
    licenseId: "VCI-KA-2019-1142",
    leadDoctor: "Dr. Shalini Roy, BVSc & AH, Certified Feline Practitioner",
    consultationFee: "₹650",
    emergencyFee: "N/A",
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80",
    services: ["Preventive Geriatric Care", "Dental Scaling", "Feline Medicine", "Routine Vaccinations", "Nutritional Counseling"],
    about: "An editorial-grade neighborhood clinic designed intentionally without stark stainless steel smells, creating a low-stress environment for timid pets.",
    reviews: [
      {
        author: "Tanvi Saxena",
        patient: "Luna & Zoe (Rescue Indies)",
        rating: 5,
        date: "1 week ago",
        comment: "The most thoughtful clinic experience. They don't rush through consultations and examine the pet gently on soft mats."
      }
    ]
  },
  {
    id: 3,
    name: "Apex Animal Mobile Critical Ambulance Care",
    type: "AMBULANCE",
    typeName: "Animal Ambulance",
    city: "Bengaluru",
    neighborhood: "City-wide Central Dispatch",
    address: "Central Fleet Depot, MG Road, Bengaluru 560001",
    phone: "+91 80 4000 9911",
    emergencyPhone: "+91 80 4000 9911",
    hours: "24 Hours / 7 Days",
    isOpenNow: true,
    isEmergency: true,
    rating: 4.9,
    reviewCount: 189,
    distanceKm: 0.8,
    verified: true,
    licenseId: "VCI-KA-2021-AMB08",
    leadDoctor: "Paramedic Dispatch Lead: Vikramaditya Rao",
    consultationFee: "Base Dispatch ₹1,200",
    emergencyFee: "Included in dispatch",
    imageUrl: "https://images.unsplash.com/photo-1587764379873-97837921fd44?auto=format&fit=crop&w=1200&q=80",
    services: ["Mobile Oxygen Therapy", "Spinal Stretcher Transport", "Vital Sign Telemetry", "Accident Site Triage", "Hospital Transfer"],
    about: "Specially retrofitted veterinary ambulances carrying pediatric-to-giant breed stretchers, continuous flow oxygen, and certified veterinary paramedics.",
    reviews: [
      {
        author: "Karthik Nambiar",
        patient: "Street rescue dog (Fracture case)",
        rating: 5,
        date: "5 days ago",
        comment: "Arrived at Domlur flyover within 18 minutes of calling. Handled the injured dog with utmost gentleness and transferred directly to ICU."
      }
    ]
  },
  {
    id: 4,
    name: "Sanctuary Haven Animal Boarding & Hydrotherapy",
    type: "BOARDING",
    typeName: "Pet Boarding",
    city: "Bengaluru",
    neighborhood: "Sarjapur Road",
    address: "Green Meadows Estate, Sarjapur, Bengaluru 560035",
    phone: "+91 80 6712 5590",
    emergencyPhone: "+91 99002 88410",
    hours: "07:00 AM - 07:00 PM",
    isOpenNow: true,
    isEmergency: false,
    rating: 4.7,
    reviewCount: 156,
    distanceKm: 6.2,
    verified: true,
    licenseId: "AWBI-REC-2020-044",
    leadDoctor: "Resident Vet: Dr. Pradeep Nair",
    consultationFee: "Daily Stay ₹1,100",
    emergencyFee: "On-call veterinary cover",
    imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80",
    services: ["Supervised Canine Hydro-pool", "Private Feline Suites", "Geriatric Mobility Care", "Medication Management", "Webcam Access"],
    about: "A two-acre green rehabilitation sanctuary providing climate-controlled suites, grass agility paddocks, and full-time veterinary surveillance.",
    reviews: [
      {
        author: "Pooja Hegde",
        patient: "Rusty (Labrador, 8y)",
        rating: 5,
        date: "3 weeks ago",
        comment: "Rusty has severe hip dysplasia and requires daily meds. The hydrotherapy sessions gave him visible relief. Daily video updates were reassuring."
      }
    ]
  },
  {
    id: 5,
    name: "Precision BioVet Diagnostics & Imaging Laboratory",
    type: "DIAGNOSTICS",
    typeName: "Diagnostics & Imaging",
    city: "Mumbai",
    neighborhood: "Bandra West",
    address: "74 Hill Road, Bandra West, Mumbai 400050",
    phone: "+91 22 2640 1820",
    emergencyPhone: "+91 22 2640 1825",
    hours: "07:30 AM - 09:30 PM",
    isOpenNow: true,
    isEmergency: true,
    rating: 4.9,
    reviewCount: 247,
    distanceKm: 3.5,
    verified: true,
    licenseId: "VCI-MH-2017-D09",
    leadDoctor: "Dr. Farzana Merchant, MVSc (Veterinary Pathology)",
    consultationFee: "CBC & Chemistry Panel ₹1,400",
    emergencyFee: "STAT Turnaround ₹500",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    services: ["Same-Day Blood Biochemistry", "Digital High-Res Ultrasound", "Fine Needle Aspiration", "Tick Fever PCR Panel", "Electrolyte Panel"],
    about: "Reference-tier laboratory serving over 60 veterinary clinics across western Mumbai with automated hematology analyzers and certified veterinary pathologists.",
    reviews: [
      {
        author: "Devendra Patel",
        patient: "Bella (Beagle, 3y)",
        rating: 5,
        date: "1 month ago",
        comment: "Accurate tick fever PCR panel delivered within 4 hours, which helped our doctor start targeted antibiotic therapy without delay."
      }
    ]
  },
  {
    id: 6,
    name: "Karuna Compassion Animal Rescue & ABC Trust",
    type: "NGO",
    typeName: "Rescue NGO",
    city: "Mumbai",
    neighborhood: "Andheri East",
    address: "Sector 4, Marol Industrial Area, Andheri East, Mumbai 400059",
    phone: "+91 22 2838 7720",
    emergencyPhone: "+91 98201 44550",
    hours: "24 Hours / 7 Days",
    isOpenNow: true,
    isEmergency: true,
    rating: 4.8,
    reviewCount: 512,
    distanceKm: 4.1,
    verified: true,
    licenseId: "AWBI-NGO-2014-998",
    leadDoctor: "Chief Veterinary Officer: Dr. Suresh Kamat",
    consultationFee: "Subsidized / Free for Community Animals",
    emergencyFee: "Donation Driven",
    imageUrl: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80",
    services: ["Community Dog Sterilization (ABC)", "Trauma Ward for Strays", "Rabies Vaccination Drives", "Adoption Counseling", "Cruelty Intervention"],
    about: "A registered animal welfare trust operating a 120-bed recovery shelter, dedicated stray animal ambulance, and high-volume humane sterilization unit.",
    reviews: [
      {
        author: "Smita Deshmukh",
        patient: "Community stray cat",
        rating: 5,
        date: "2 weeks ago",
        comment: "Helped treat an injured community cat with a deep wound. The caretakers are deeply devoted and compassionate."
      }
    ]
  },
  {
    id: 7,
    name: "Paws & Whiskers Advanced Feline & Canine Clinic",
    type: "VET_CLINIC",
    typeName: "Veterinary Clinic",
    city: "Delhi NCR",
    neighborhood: "South Extension II",
    address: "E-14 South Extension Part II, New Delhi 110049",
    phone: "+91 11 4164 8830",
    emergencyPhone: "+91 98110 55667",
    hours: "09:00 AM - 08:00 PM",
    isOpenNow: true,
    isEmergency: false,
    rating: 4.7,
    reviewCount: 289,
    distanceKm: 2.1,
    verified: true,
    licenseId: "VCI-DL-2015-3819",
    leadDoctor: "Dr. Radhika Grover, BVSc & AH, MVSc (Internal Medicine)",
    consultationFee: "₹750",
    emergencyFee: "N/A",
    imageUrl: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80",
    services: ["Internal Medicine", "Ophthalmology Assessment", "Vaccination Schedules", "Microchipping", "Microscopic Dermatology"],
    about: "Renowned south Delhi clinical practice known for thorough diagnostic investigations, gentle feline-friendly handling, and detailed owner counseling.",
    reviews: [
      {
        author: "Aman Chopra",
        patient: "Bruno (German Shepherd, 5y)",
        rating: 5,
        date: "1 week ago",
        comment: "Dr. Grover resolved Bruno's chronic skin allergy after 3 other clinics couldn't pinpoint the allergen. Remarkable doctor."
      }
    ]
  },
  {
    id: 8,
    name: "Capital Veterinary Emergency & Critical Care Center",
    type: "HOSPITAL",
    typeName: "Animal Hospital",
    city: "Delhi NCR",
    neighborhood: "Vasant Kunj",
    address: "Institutional Area, Pocket 6, Vasant Kunj, New Delhi 110070",
    phone: "+91 11 4987 1100",
    emergencyPhone: "+91 11 4987 1199",
    hours: "24 Hours / 7 Days",
    isOpenNow: true,
    isEmergency: true,
    rating: 4.9,
    reviewCount: 472,
    distanceKm: 3.9,
    verified: true,
    licenseId: "VCI-DL-2018-0042",
    leadDoctor: "Dr. Harpreet Singh, MVSc (Veterinary Surgery)",
    consultationFee: "₹900",
    emergencyFee: "₹1,800",
    imageUrl: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1200&q=80",
    services: ["Emergency Triage", "Orthopedic Fracture Plating", "Blood Transfusion Bank", "Ventilator Support", "Oncology Chemotherapy"],
    about: "High-acuity animal hospital with 24-hour board-certified surgeons, an active canine blood donor registry, and modern anesthesia workstations.",
    reviews: [
      {
        author: "Kavita Sethi",
        patient: "Simba (Shih Tzu, 1y)",
        rating: 5,
        date: "4 days ago",
        comment: "Simba swallowed a small stone and developed intestinal blockage. The team performed endoscopy promptly without needing invasive surgery."
      }
    ]
  }
];

export const EMERGENCY_PROTOCOLS = [
  {
    condition: "Heatstroke & Hyperthermia",
    symptoms: "Excessive panting, bright red tongue, stumbling, vomiting, unresponsiveness.",
    firstAction: "Move immediately to shaded/air-conditioned room. Apply cool (not ice-cold) tap water to paws and groin. Never force-feed water.",
    urgency: "CRITICAL (Immediate Transport Needed)"
  },
  {
    condition: "Acute Toxic Ingestion",
    symptoms: "Ingestion of dark chocolate, lilies, xylitol/sweeteners, rat poison, grapes, human medications.",
    firstAction: "Bring packaging/leaf sample to clinic. Do NOT induce vomiting with salt (salt causes fatal cerebral edema). Call triage immediately.",
    urgency: "CRITICAL (Within 30-60 Minutes)"
  },
  {
    condition: "Vehicular Trauma / Fall",
    symptoms: "Pale gums, rapid shallow breathing, bleeding, inability to bear weight.",
    firstAction: "Gently slide onto a flat blanket or board to immobilize spine. Cover with light cloth to prevent shock. Transport without bending spine.",
    urgency: "IMMEDIATE CODE-RED"
  },
  {
    condition: "Gastric Dilatation-Volvulus (Bloat)",
    symptoms: "Swollen hard abdomen, unproductive retching, pacing, severe restlessness.",
    firstAction: "Every minute counts. Do not press abdomen. Rush directly to surgical facility with 24/7 operating theater.",
    urgency: "LIFE-THREATENING EMERGENCY"
  }
];
