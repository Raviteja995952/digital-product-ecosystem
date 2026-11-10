import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './styles/animals.css';
import {
  SERVICE_CATEGORIES,
  CITIES,
  DEMO_PROVIDERS,
  EMERGENCY_PROTOCOLS
} from './data/providersData';
import { ProviderCard } from './components/ProviderCard';
import { ProviderDetailModal } from './components/ProviderDetailModal';
import { BusinessSubmissionModal } from './components/BusinessSubmissionModal';
import { CorrectionModal } from './components/CorrectionModal';
import { EmergencySOSModal } from './components/EmergencySOSModal';
import { Icon } from '../common/icons';

export const AnimalsApp = ({ onNavigateEcosystem }) => {
  // Filter States
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [emergencyOnly, setEmergencyOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('rating'); // 'rating' | 'distance' | 'reviews'

  // Life Stages Tab State for Editorial Guide
  const [activeLifeStage, setActiveLifeStage] = useState('PUPPY_KITTEN');

  // Modals
  const [activeProviderDetail, setActiveProviderDetail] = useState(null);
  const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);
  const [isCorrectionModalOpen, setIsCorrectionModalOpen] = useState(false);
  const [emergencyModalTarget, setEmergencyModalTarget] = useState(null);

  // Filtered & Sorted Providers
  const filteredProviders = useMemo(() => {
    return DEMO_PROVIDERS.filter((provider) => {
      if (selectedCity !== 'All Cities' && provider.city.toLowerCase() !== selectedCity.toLowerCase()) {
        return false;
      }
      if (selectedCategory !== 'ALL' && provider.type !== selectedCategory) {
        return false;
      }
      if (emergencyOnly && !provider.isEmergency) {
        return false;
      }
      if (minRating > 0 && provider.rating < minRating) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = provider.name.toLowerCase().includes(q);
        const matchesArea = provider.neighborhood.toLowerCase().includes(q) || provider.address.toLowerCase().includes(q);
        const matchesServices = provider.services.some((s) => s.toLowerCase().includes(q));
        const matchesDoctor = provider.leadDoctor.toLowerCase().includes(q);
        if (!matchesName && !matchesArea && !matchesServices && !matchesDoctor) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'distance') return a.distanceKm - b.distanceKm;
      if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
      return 0;
    });
  }, [selectedCity, selectedCategory, searchQuery, emergencyOnly, minRating, sortBy]);

  const handleCategoryClick = (catId) => {
    setSelectedCategory((prev) => (prev === catId ? 'ALL' : catId));
    const dir = document.getElementById('directory');
    if (dir) dir.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTriggerSearch = () => {
    const dir = document.getElementById('directory');
    if (dir) dir.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="animals-root">
      {/* Editorial Consumer Header */}
      <header className="animals-header">
        <div className="animals-nav-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <Link to="/" className="back-to-ecosystem-pill" title="Return to Ecosystem Overview">
              ← Ecosystem Hub
            </Link>

            <a href="#home" className="animals-brand">
              <div className="animals-brand-mark">
                <Icon name="paw" size={20} color="#FFFFFF" />
              </div>
              <div className="animals-brand-title">
                FaunaCare
                <span className="animals-brand-subtitle">Animal Healthcare</span>
              </div>
            </a>
          </div>

          <nav className="animals-nav-links">
            <a href="#directory" className="animals-nav-link">Find Care</a>
            <a href="#disciplines" className="animals-nav-link">Specialties</a>
            <a href="#standards" className="animals-nav-link">Clinical Standards</a>
            <a href="#emergency" className="animals-nav-link emergency-link">
              <Icon name="emergency" size={14} />
              <span>24/7 Emergency</span>
            </a>
          </nav>

          <div className="animals-nav-actions">
            <button
              onClick={() => setIsCorrectionModalOpen(true)}
              className="btn-secondary"
              title="Report an outdated contact, address or timing"
            >
              <Icon name="edit" size={13} />
              <span>Submit Correction</span>
            </button>

            <button
              onClick={() => setIsBusinessModalOpen(true)}
              className="btn-primary"
            >
              <Icon name="plus" size={13} />
              <span>List Practice</span>
            </button>
          </div>
        </div>
      </header>

      {/* Search-First Editorial Hero Section */}
      <section id="home" className="animals-hero">
        <div className="animals-hero-layout">
          <div className="animals-hero-copy">
            <div className="animals-hero-badge">
              <Icon name="shieldCheck" size={15} color="var(--fauna-forest)" />
              <span>Curated Veterinary & Emergency Discovery</span>
            </div>

            <h1 className="animals-hero-title">
              Find trusted veterinary care for the <em>animals who depend on you</em>.
            </h1>

            <p className="animals-hero-desc">
              Connect with audited veterinary hospitals, surgical centers, emergency clinics, diagnostics labs, and animal ambulances across your city. Verified licensing, transparent pricing, and zero sponsored rankings.
            </p>

            {/* Elevated, Commanding Search Console */}
            <div className="animals-search-console">
              <div className="search-console-grid">
                <div className="search-field location">
                  <label>
                    <Icon name="mapPin" size={12} color="var(--fauna-terracotta)" />
                    <span>City / Region</span>
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    {CITIES.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div className="search-field query">
                  <label>
                    <Icon name="search" size={12} color="var(--fauna-forest)" />
                    <span>Clinic, Doctor, or Treatment</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vaccination, fracture surgery, ultrasound, feline care..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleTriggerSearch()}
                  />
                </div>

                <div className="search-field category">
                  <label>
                    <Icon name="filter" size={12} color="var(--fauna-forest)" />
                    <span>Care Type</span>
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="ALL">All Care Categories</option>
                    {SERVICE_CATEGORIES.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div className="search-submit-col">
                  <button
                    className="btn-search-execute"
                    onClick={handleTriggerSearch}
                    title="Search facilities"
                  >
                    <Icon name="search" size={16} />
                    <span>Search</span>
                  </button>
                </div>
              </div>

              {/* Quick Filter Chips */}
              <div className="search-quick-triage-row">
                <span className="triage-prefix">Instant Filter:</span>
                <button
                  type="button"
                  className={`quick-triage-pill ${emergencyOnly ? 'active' : ''}`}
                  onClick={() => {
                    setEmergencyOnly(!emergencyOnly);
                    handleTriggerSearch();
                  }}
                >
                  <Icon name="emergency" size={13} />
                  <span>24/7 Emergency Care</span>
                </button>
                <button
                  type="button"
                  className={`quick-triage-pill ${selectedCategory === 'VET_CLINIC' ? 'active' : ''}`}
                  onClick={() => handleCategoryClick('VET_CLINIC')}
                >
                  <Icon name="stethoscope" size={13} />
                  <span>Veterinary Clinics</span>
                </button>
                <button
                  type="button"
                  className={`quick-triage-pill ${selectedCategory === 'HOSPITAL' ? 'active' : ''}`}
                  onClick={() => handleCategoryClick('HOSPITAL')}
                >
                  <Icon name="building" size={13} />
                  <span>Animal Hospitals</span>
                </button>
                <button
                  type="button"
                  className={`quick-triage-pill ${selectedCategory === 'AMBULANCE' ? 'active' : ''}`}
                  onClick={() => handleCategoryClick('AMBULANCE')}
                >
                  <Icon name="ambulance" size={13} />
                  <span>Ambulance Dispatch</span>
                </button>
              </div>
            </div>
          </div>

          {/* Authentic Warm Photography Column */}
          <div className="animals-hero-visual">
            <div className="hero-photography-card">
              <img
                src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1400&q=80"
                alt="Compassionate veterinarian gently examining golden retriever"
                loading="eager"
              />
              <div className="hero-photo-caption">
                <div className="caption-avatar">
                  <Icon name="shieldCheck" size={16} color="var(--fauna-forest)" />
                </div>
                <div>
                  <strong>Audited Clinical Licensure</strong>
                  <p>Every facility verified for surgical hygiene, sterile recovery, and transparent pricing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Varied Service Disciplines Catalog */}
      <section id="disciplines" className="service-discovery-section">
        <div className="section-editorial-header">
          <div>
            <div className="section-label">Medical Disciplines</div>
            <h2 className="section-title">Specialized Care for Every Need</h2>
          </div>
          <p className="section-desc">
            Explore audited providers across primary care, multi-specialty trauma, overnight recuperation, and community animal ambulances.
          </p>
        </div>

        {/* Varied Composition: Featured Highlight + Catalog Cards */}
        <div className="disciplines-composite-grid">
          {/* Featured Discipline Card: 24/7 Trauma & Emergency */}
          <div className="discipline-hero-card" onClick={() => handleCategoryClick('HOSPITAL')}>
            <div className="hero-card-tag">High-Acuity Specialty</div>
            <h3 className="hero-card-title">Emergency Trauma & Multi-Specialty Surgery</h3>
            <p className="hero-card-desc">
              Dedicated veterinary operating theaters equipped with digital fluoroscopy, blood transfusion banks, feline isolation wards, and 24-hour critical care teams.
            </p>
            <div className="hero-card-meta">
              <span>38 Verified Hospitals • 24/7 On-Call Triage</span>
              <span className="hero-card-link">Explore Hospitals →</span>
            </div>
          </div>

          {/* Grid of Other Disciplines */}
          <div className="disciplines-subgrid">
            {SERVICE_CATEGORIES.filter(c => c.id !== 'HOSPITAL').map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  className={`discipline-item-card ${isActive ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(cat.id)}
                >
                  <div className="discipline-icon-box">
                    <Icon name={cat.icon} size={20} />
                  </div>
                  <div>
                    <h4 className="discipline-name">{cat.name}</h4>
                    <p className="discipline-tagline">{cat.tagline}</p>
                  </div>
                  <div className="discipline-foot">
                    <span className="discipline-count">{cat.count}</span>
                    <span className="discipline-arrow">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Primary Directory Section */}
      <section id="directory" className="providers-directory-section">
        <div className="section-editorial-header">
          <div>
            <div className="section-label">Audited Listings</div>
            <h2 className="section-title">Healthcare Providers Near You</h2>
          </div>
          <div className="directory-count-indicator">
            Showing <strong>{filteredProviders.length}</strong> facilities
            {selectedCity !== 'All Cities' && ` in ${selectedCity}`}
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="filter-toolbar">
          <div className="filter-chips-row">
            <span className="filter-lead-label">Filter By:</span>

            <button
              className={`filter-chip ${emergencyOnly ? 'active' : ''}`}
              onClick={() => setEmergencyOnly(!emergencyOnly)}
            >
              <Icon name="emergency" size={13} />
              <span>24/7 Emergency Only</span>
            </button>

            <button
              className={`filter-chip ${minRating === 4.8 ? 'active' : ''}`}
              onClick={() => setMinRating(minRating === 4.8 ? 0 : 4.8)}
            >
              <Icon name="star" size={13} />
              <span>Top Rated (4.8+)</span>
            </button>

            {selectedCategory !== 'ALL' && (
              <button
                className="filter-chip active"
                onClick={() => setSelectedCategory('ALL')}
              >
                <span>Category: {selectedCategory}</span>
                <span style={{ marginLeft: '4px' }}>✕</span>
              </button>
            )}

            {(emergencyOnly || minRating > 0 || selectedCategory !== 'ALL' || searchQuery) && (
              <button
                className="filter-chip reset"
                onClick={() => {
                  setSelectedCity('All Cities');
                  setSelectedCategory('ALL');
                  setSearchQuery('');
                  setEmergencyOnly(false);
                  setMinRating(0);
                }}
              >
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          <div className="sort-by-wrapper">
            <span className="sort-label">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="form-select-sort"
            >
              <option value="rating">Highest Rated</option>
              <option value="distance">Nearest Distance</option>
              <option value="reviews">Most Reviewed</option>
            </select>
          </div>
        </div>

        {/* Providers Grid */}
        {filteredProviders.length === 0 ? (
          <div className="no-providers-box">
            <Icon name="search" size={40} color="var(--fauna-text-faint)" />
            <h3>No Facilities Match Your Criteria</h3>
            <p>
              Try broadening your location filter, clearing the 24/7 emergency toggle, or clearing search keywords.
            </p>
            <button
              className="btn-secondary"
              onClick={() => {
                setSelectedCity('All Cities');
                setSelectedCategory('ALL');
                setSearchQuery('');
                setEmergencyOnly(false);
                setMinRating(0);
              }}
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="providers-grid">
            {filteredProviders.map((provider) => (
              <ProviderCard
                key={provider.id}
                provider={provider}
                onViewDetails={(prov) => setActiveProviderDetail(prov)}
                onQuickCall={(prov) => setEmergencyModalTarget(prov)}
              />
            ))}
          </div>
        )}
      </section>

      {/* EDITORIAL STORYTELLING SECTION: The Clinical Standard of Animal Compassion */}
      <section id="standards" className="editorial-storytelling-section">
        <div className="storytelling-container">
          <div className="storytelling-grid">
            <div className="storytelling-imagery-col">
              <div className="storytelling-image-card">
                <img
                  src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern sterile veterinary surgical theater"
                  loading="lazy"
                />
                <div className="storytelling-image-overlay">
                  <p className="overlay-quote">
                    "Veterinary medicine requires the same diagnostic rigor, surgical sterile technique, and compassionate communication as human healthcare."
                  </p>
                  <span className="overlay-speaker">
                    — Dr. Anirudh Kulkarni, MVSc (Surgery & Radiology)
                  </span>
                </div>
              </div>
            </div>

            <div className="storytelling-narrative-col">
              <div className="section-label">Editorial Pledge</div>
              <h2 className="storytelling-title">
                The Clinical Standard of Animal Healthcare
              </h2>
              <p className="storytelling-body">
                We founded FaunaCare after observing how difficult it is for pet guardians to find reliable, verified clinical information during acute illness. Every listing on our discovery platform is audited against four non-negotiable quality benchmarks:
              </p>

              <div className="clinical-pillars-list">
                <div className="pillar-item">
                  <div className="pillar-bullet">01</div>
                  <div>
                    <h4>Mandatory Licensing Verification</h4>
                    <p>Every lead surgeon and clinician holds verified state veterinary council registration.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-bullet">02</div>
                  <div>
                    <h4>Sterilization & Monitoring Standards</h4>
                    <p>Hospitals must maintain certified autoclave sterilization and active pulse-oximetry monitoring.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-bullet">03</div>
                  <div>
                    <h4>Transparent Fee Estimates</h4>
                    <p>Consultations and surgical diagnostics are quoted upfront before intervention.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-bullet">04</div>
                  <div>
                    <h4>Zero Paid Placement</h4>
                    <p>Search results are ordered strictly by clinical capability, proximity, and authentic client reviews.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL GUIDE: Preventive Care Across Life Stages */}
      <section className="life-stages-section">
        <div className="section-editorial-header">
          <div>
            <div className="section-label">Pet Guardian Clinical Guide</div>
            <h2 className="section-title">Preventive Care Across Life Stages</h2>
          </div>
          <p className="section-desc">
            Essential veterinary milestones recommended by companion animal clinicians.
          </p>
        </div>

        <div className="life-stages-tabs">
          <button
            type="button"
            className={`life-stage-tab ${activeLifeStage === 'PUPPY_KITTEN' ? 'active' : ''}`}
            onClick={() => setActiveLifeStage('PUPPY_KITTEN')}
          >
            🐾 Puppy & Kitten (0 – 1 Year)
          </button>
          <button
            type="button"
            className={`life-stage-tab ${activeLifeStage === 'ADULT' ? 'active' : ''}`}
            onClick={() => setActiveLifeStage('ADULT')}
          >
            🐕 Adult Companions (1 – 7 Years)
          </button>
          <button
            type="button"
            className={`life-stage-tab ${activeLifeStage === 'SENIOR' ? 'active' : ''}`}
            onClick={() => setActiveLifeStage('SENIOR')}
          >
            🦮 Senior Care (7+ Years)
          </button>
        </div>

        <div className="life-stage-content-card">
          {activeLifeStage === 'PUPPY_KITTEN' && (
            <div className="stage-milestone-grid">
              <div className="milestone-card">
                <span className="milestone-week">Weeks 6 – 8</span>
                <h4>Core DHPP & FVRCP Vaccines</h4>
                <p>Initial immunization series against parvovirus, distemper, herpesvirus, and calicivirus.</p>
              </div>
              <div className="milestone-card">
                <span className="milestone-week">Months 3 – 4</span>
                <h4>Rabies & Microchip Registration</h4>
                <p>Legally mandated rabies vaccine paired with 15-digit ISO standard microchip implantation.</p>
              </div>
              <div className="milestone-card">
                <span className="milestone-week">Months 6 – 8</span>
                <h4>Neutering & Dental Examination</h4>
                <p>Preventive surgical sterilization and assessment of deciduous teeth occlusion.</p>
              </div>
            </div>
          )}

          {activeLifeStage === 'ADULT' && (
            <div className="stage-milestone-grid">
              <div className="milestone-card">
                <span className="milestone-week">Every 12 Months</span>
                <h4>Annual Wellness & Titers</h4>
                <p>Complete physical examination, annual booster shots, and baseline fecal analysis.</p>
              </div>
              <div className="milestone-card">
                <span className="milestone-week">Every 6 Months</span>
                <h4>Dental Scaling & Polishing</h4>
                <p>Preventive ultrasonic scaling to halt periodontal disease before it damages kidneys.</p>
              </div>
              <div className="milestone-card">
                <span className="milestone-week">Monthly</span>
                <h4>Parasite & Heartworm Prevention</h4>
                <p>Topical or oral broad-spectrum prevention against ticks, fleas, and mosquito-borne heartworm.</p>
              </div>
            </div>
          )}

          {activeLifeStage === 'SENIOR' && (
            <div className="stage-milestone-grid">
              <div className="milestone-card">
                <span className="milestone-week">Bi-Annually (6 Mo)</span>
                <h4>Senior Geriatric Blood Panel</h4>
                <p>Complete blood count (CBC), kidney biochemistry (BUN/Creatinine), and liver enzyme screening.</p>
              </div>
              <div className="milestone-card">
                <span className="milestone-week">As Indicated</span>
                <h4>Mobility & Arthritis Assessment</h4>
                <p>Digital orthopaedic radiography, joint supplements (glucosamine/omega-3s), and low-impact therapy.</p>
              </div>
              <div className="milestone-card">
                <span className="milestone-week">Annual</span>
                <h4>Cardiac & Thyroid Function</h4>
                <p>Electrocardiogram (ECG) and serum T4 testing to detect early congestive cardiomyopathy.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 24/7 Emergency Care Section */}
      <section id="emergency" className="emergency-sos-section">
        <div className="emergency-container">
          <div className="emergency-header">
            <div>
              <div className="emergency-badge">
                <Icon name="emergency" size={14} />
                <span>24/7 Emergency Care Dispatch</span>
              </div>
              <h2 className="emergency-title">
                Urgent Veterinary Triage & Ambulances
              </h2>
            </div>
            <p className="emergency-desc">
              When trauma, poisoning, or acute pain strikes your pet, immediate veterinary guidance saves lives. Follow the clinical steps below or request on-call ambulance dispatch.
            </p>
          </div>

          {/* Clinical Protocol Cards */}
          <div className="emergency-triage-grid">
            {EMERGENCY_PROTOCOLS.map((protocol, idx) => (
              <div key={idx} className="triage-card">
                <div className="triage-urgency-tag">{protocol.urgency}</div>
                <h3 className="triage-condition">{protocol.condition}</h3>
                <p className="triage-symptoms">
                  <strong>Signs:</strong> {protocol.symptoms}
                </p>
                <div className="triage-first-step">
                  <strong>Immediate Action:</strong> {protocol.firstAction}
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Action Bar */}
          <div className="emergency-action-bar">
            <div className="emergency-hotline-meta">
              <h4>Need immediate emergency assistance?</h4>
              <p>On-call veterinarians can direct you to the nearest open surgical clinic with an available bed.</p>
            </div>
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <button
                className="btn-emergency"
                onClick={() => setEmergencyModalTarget(DEMO_PROVIDERS[0])}
              >
                <Icon name="phone" size={16} />
                <span>Call Emergency Hotline</span>
              </button>
              <button
                className="btn-secondary"
                style={{ borderColor: '#C5221F', color: '#C5221F' }}
                onClick={() => setEmergencyModalTarget(DEMO_PROVIDERS[2])}
              >
                <Icon name="ambulance" size={16} />
                <span>Request Ambulance Dispatch</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Provider Dual CTA Section */}
      <section className="animals-cta-section">
        <div className="animals-cta-container">
          <div className="animals-cta-card provider-card-cta">
            <div className="cta-icon-badge forest">
              <Icon name="plus" size={20} color="#FFFFFF" />
            </div>
            <div className="cta-content">
              <span className="cta-eyebrow">For Clinics & Animal Hospitals</span>
              <h3 className="cta-title">List Your Veterinary Practice</h3>
              <p className="cta-desc">
                Register your clinic, pet boarding facility, diagnostics center, or ambulance service. All submissions undergo clinical license verification before publication.
              </p>
              <button
                onClick={() => setIsBusinessModalOpen(true)}
                className="btn-primary"
                style={{ alignSelf: 'flex-start' }}
              >
                <span>Register Practice Profile</span>
                <Icon name="arrowRight" size={14} />
              </button>
            </div>
          </div>

          <div className="animals-cta-card community-card-cta">
            <div className="cta-icon-badge terracotta">
              <Icon name="edit" size={20} color="#FFFFFF" />
            </div>
            <div className="cta-content">
              <span className="cta-eyebrow">Community Quality & Accuracy</span>
              <h3 className="cta-title">Notice an Outdated Detail?</h3>
              <p className="cta-desc">
                Help fellow pet guardians by reporting incorrect phone numbers, moved addresses, or updated clinical emergency hours for any listing in the directory.
              </p>
              <button
                onClick={() => setIsCorrectionModalOpen(true)}
                className="btn-secondary"
                style={{ alignSelf: 'flex-start' }}
              >
                <span>Submit a Correction</span>
                <Icon name="arrowRight" size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Consumer Footer */}
      <footer className="animals-footer">
        <div className="footer-inner">
          <div className="footer-col-brand">
            <div className="animals-brand">
              <div className="animals-brand-mark">
                <Icon name="paw" size={18} color="#FFFFFF" />
              </div>
              <div className="animals-brand-title">
                FaunaCare
                <span className="animals-brand-subtitle">Animal Healthcare</span>
              </div>
            </div>
            <p>
              A discovery platform connecting animal guardians with verified veterinary clinics, 24/7 animal hospitals, pet boarding, and emergency ambulances.
            </p>
            <div style={{ marginTop: '1.25rem' }}>
              <Link
                to="/"
                className="ecosystem-portal-link"
              >
                ✦ View Product Ecosystem Hub
              </Link>
            </div>
          </div>

          <div className="footer-col">
            <h5>Find Care</h5>
            <ul className="footer-links-list">
              <li><a href="#directory" onClick={() => handleCategoryClick('VET_CLINIC')}>Veterinary Clinics</a></li>
              <li><a href="#directory" onClick={() => handleCategoryClick('HOSPITAL')}>Animal Hospitals</a></li>
              <li><a href="#directory" onClick={() => handleCategoryClick('BOARDING')}>Pet Boarding & Foster</a></li>
              <li><a href="#directory" onClick={() => handleCategoryClick('DIAGNOSTICS')}>Diagnostics & Imaging</a></li>
              <li><a href="#emergency">Emergency Ambulances</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>For Providers</h5>
            <ul className="footer-links-list">
              <li><a href="#list" onClick={(e) => { e.preventDefault(); setIsBusinessModalOpen(true); }}>List Your Practice</a></li>
              <li><a href="#audit" onClick={(e) => { e.preventDefault(); setIsCorrectionModalOpen(true); }}>Submit a Correction</a></li>
              <li><a href="#standards">Licensure Standards</a></li>
              <li><a href="#emergency">Ambulance Network</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Quality & Safety</h5>
            <ul className="footer-links-list">
              <li><a href="#standards">Hygiene Audits</a></li>
              <li><a href="#standards">Low-Stress Handling</a></li>
              <li><a href="#standards">Pricing Transparency</a></li>
              <li><a href="#standards">Community Reports</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>
            © 2026 FaunaCare Animal Healthcare Directory. All rights reserved.
          </div>
          <div>
            Audited Directory Information • Sample Demonstration Data
          </div>
        </div>
      </footer>

      {/* Modals */}
      {activeProviderDetail && (
        <ProviderDetailModal
          provider={activeProviderDetail}
          onClose={() => setActiveProviderDetail(null)}
          onEmergencyCall={(prov) => {
            setActiveProviderDetail(null);
            setEmergencyModalTarget(prov);
          }}
        />
      )}

      {isBusinessModalOpen && (
        <BusinessSubmissionModal
          onClose={() => setIsBusinessModalOpen(false)}
          onSubmitted={(data) => {
            console.log('Business registered:', data);
          }}
        />
      )}

      {isCorrectionModalOpen && (
        <CorrectionModal
          onClose={() => setIsCorrectionModalOpen(false)}
        />
      )}

      {emergencyModalTarget && (
        <EmergencySOSModal
          provider={emergencyModalTarget === true ? null : emergencyModalTarget}
          onClose={() => setEmergencyModalTarget(null)}
        />
      )}
    </div>
  );
};
