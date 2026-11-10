import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/academy.css';
import {
  ACADEMY_PROGRAMMES,
  PRACTICAL_PROJECTS,
  LEARNING_JOURNEY,
  SAMPLE_STUDENTS,
  FAQS
} from './data/academyData';
import { SyllabusDrawer } from './components/SyllabusDrawer';
import { LeadRegistrationModal } from './components/LeadRegistrationModal';
import { LeadAdminDeskModal } from './components/LeadAdminDeskModal';
import { Icon } from '../common/icons';

export const AcademyApp = ({ onNavigateEcosystem }) => {
  const [selectedProgramme, setSelectedProgramme] = useState(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerProgId, setRegisterProgId] = useState('ai-productivity');
  const [isAdminDeskOpen, setIsAdminDeskOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // In-memory candidate leads for demonstration
  const [leads, setLeads] = useState([
    {
      id: 'STU-1042',
      fullName: 'Aarav Mehta',
      email: 'aarav.mehta@university.edu',
      phone: '+91 98200 44120',
      programmeId: 'ai-productivity',
      experienceLevel: 'STUDENT',
      currentRole: 'Final Year B.Com Student',
      learningGoal: 'Automate secondary market research and build custom study assistants.',
      status: 'NEW',
      createdAt: '2026-11-09T10:15:00Z'
    },
    {
      id: 'STU-1043',
      fullName: 'Priyanka Sharma',
      email: 'priyanka@growthagency.in',
      phone: '+91 99301 22840',
      programmeId: 'ai-automation-nocode',
      experienceLevel: 'EARLY_CAREER',
      currentRole: 'Junior Marketing Associate',
      learningGoal: 'Connect Make.com and Airtable to automate inbound lead qualification.',
      status: 'INTERVIEWING',
      createdAt: '2026-11-09T14:30:00Z'
    },
    {
      id: 'STU-1044',
      fullName: 'Daniel Kim',
      email: 'daniel.kim@designco.com',
      phone: '+1 (415) 890-1234',
      programmeId: 'prompt-engineering',
      experienceLevel: 'MID_CAREER',
      currentRole: 'Visual & UI Designer',
      learningGoal: 'Master structured Midjourney prompting and Claude creative workflows.',
      status: 'ENROLLED',
      createdAt: '2026-11-10T09:00:00Z'
    }
  ]);

  const handleApplyClick = (programmeId) => {
    setRegisterProgId(programmeId || 'ai-productivity');
    setSelectedProgramme(null);
    setIsRegisterOpen(true);
  };

  const handleLeadCreated = (newLead) => {
    setLeads((prev) => [newLead, ...prev]);
  };

  const handleUpdateLeadStatus = (leadId, newStatus) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
    );
  };

  const flagshipProgramme = ACADEMY_PROGRAMMES[0];
  const specializedProgrammes = ACADEMY_PROGRAMMES.slice(1);

  return (
    <div className="academy-root">
      {/* Editorial Header */}
      <header className="academy-header">
        <div className="academy-nav-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <Link to="/" className="back-to-ecosystem-pill" title="Return to Ecosystem Hub">
              ← Ecosystem Hub
            </Link>

            <a href="#home" className="academy-brand">
              <div className="academy-brand-symbol">A</div>
              <div className="academy-brand-name">
                Apex <span>Digital Academy</span>
              </div>
            </a>
          </div>

          <nav className="academy-nav-menu">
            <a href="#programmes" className="academy-nav-item">Programmes</a>
            <a href="#projects" className="academy-nav-item">Student Projects</a>
            <a href="#experience" className="academy-nav-item">The Studio Experience</a>
            <a href="#journey" className="academy-nav-item">Methodology</a>
            <a href="#faq" className="academy-nav-item">FAQ</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <button
              onClick={() => setIsAdminDeskOpen(true)}
              className="academy-btn-outline"
              title="Admissions Lead Management"
            >
              <Icon name="terminal" size={14} />
              <span>Admissions Desk ({leads.length})</span>
            </button>

            <button
              onClick={() => handleApplyClick('ai-productivity')}
              className="academy-btn-primary"
            >
              <span>Apply for Cohort</span>
              <Icon name="arrowRight" size={14} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Editorial Asymmetry */}
      <section id="home" className="academy-hero">
        <div className="academy-hero-grid">
          <div>
            <div className="academy-badge-tag">
              <Icon name="sparkles" size={14} color="var(--acad-accent)" />
              <span>Practical AI & Digital Skills Education</span>
            </div>

            <h1 className="academy-hero-heading">
              Practical AI skills for the <em>modern digital career</em>.
            </h1>

            <p className="academy-hero-subtext">
              Project-based, mentor-led programmes designed for students, young professionals, and digital creators. Learn to automate workflows, build real AI tools, and supercharge your analytical output without needing a computer science degree.
            </p>

            <div className="academy-hero-actions">
              <button
                className="academy-btn-primary"
                onClick={() => {
                  const el = document.getElementById('programmes');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Explore 5 Practical Tracks</span>
                <Icon name="arrowRight" size={14} />
              </button>

              <button
                className="academy-btn-outline"
                onClick={() => handleApplyClick('ai-productivity')}
              >
                <span>Register Interest</span>
              </button>
            </div>

            {/* Transparent Educational Trust Markers */}
            <div className="hero-trust-row">
              <div className="trust-pill">
                <strong>100% Project-Based</strong>
                <span>Real portfolio artifacts weekly</span>
              </div>
              <div className="trust-pill">
                <strong>Zero Coding Required</strong>
                <span>Accessible to all disciplines</span>
              </div>
              <div className="trust-pill">
                <strong>Max 25 Learners</strong>
                <span>Intimate live workshops</span>
              </div>
            </div>
          </div>

          {/* Authentic Studio Photography Frame */}
          <div className="academy-hero-imagery">
            <div className="academy-hero-image-card">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
                alt="Students collaborating on digital design and AI projects"
                loading="eager"
              />
              <div className="hero-image-floating-note">
                <div className="note-avatar">
                  <Icon name="bookOpen" size={16} color="var(--acad-accent)" />
                </div>
                <div>
                  <strong>Weekly Practical Sprints</strong>
                  <p>Build working automation engines, prompt pipelines, and custom assistants.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Varied Programmes Catalog */}
      <section id="programmes" className="academy-section">
        <div className="academy-section-header">
          <div>
            <div className="academy-pre-title">Curriculum Tracks</div>
            <h2 className="academy-section-title">Programmes Built for Real Careers</h2>
          </div>
          <p className="academy-section-desc">
            Choose a track tailored to your current role or aspirations. Each cohort pairs step-by-step builds with personalized practitioner feedback.
          </p>
        </div>

        {/* Varied Composition: Featured Flagship Track + Specialized Grid */}
        <div className="programmes-varied-container">
          {/* Flagship Gateway Track: Generative AI & Productivity */}
          <div className="flagship-programme-card">
            <div className="flagship-header">
              <div className="flagship-badge">
                <span>Core Gateway Track</span>
                <span className="flagship-level">{flagshipProgramme.level}</span>
              </div>
              <div className="flagship-meta">
                <span>Duration: <strong>{flagshipProgramme.duration}</strong></span>
                <span>Effort: <strong>{flagshipProgramme.effort}</strong></span>
                <span>Format: <strong>{flagshipProgramme.format}</strong></span>
              </div>
            </div>

            <div className="flagship-body-grid">
              <div>
                <h3 className="flagship-title">{flagshipProgramme.name}</h3>
                <p className="flagship-tagline">{flagshipProgramme.tagline}</p>
                <p className="flagship-overview">{flagshipProgramme.overview}</p>

                <div className="flagship-tools">
                  <span className="tools-lead">Tools Mastered:</span>
                  {flagshipProgramme.toolsLearned.map((tool, idx) => (
                    <span key={idx} className="tool-pill">{tool}</span>
                  ))}
                </div>
              </div>

              {/* Module Timeline Preview */}
              <div className="flagship-modules-preview">
                <div className="modules-preview-title">4-Week Practical Curriculum</div>
                <div className="preview-module-list">
                  {flagshipProgramme.modules.map((m, idx) => (
                    <div key={idx} className="preview-module-item">
                      <span className="mod-week">W{m.week}</span>
                      <div>
                        <strong>{m.title}</strong>
                        <p>{m.topics}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flagship-footer">
              <div className="flagship-capstone-note">
                <strong>Capstone Deliverable:</strong> {flagshipProgramme.capstone}
              </div>
              <div className="flagship-actions">
                <button
                  type="button"
                  className="academy-btn-outline"
                  onClick={() => setSelectedProgramme(flagshipProgramme)}
                >
                  <span>Full Syllabus</span>
                  <Icon name="chevronRight" size={13} />
                </button>
                <button
                  type="button"
                  className="academy-btn-primary"
                  onClick={() => handleApplyClick(flagshipProgramme.id)}
                >
                  <span>Apply for Next Cohort</span>
                  <Icon name="arrowRight" size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* 2-Column Grid of Specialized Tracks */}
          <div className="specialized-programmes-grid">
            {specializedProgrammes.map((prog) => (
              <div key={prog.id} className="specialized-prog-card">
                <div>
                  <div className="prog-card-top">
                    <span className="prog-level-tag">{prog.level}</span>
                    <span className="prog-duration-tag">{prog.duration} • {prog.effort}</span>
                  </div>

                  <h3 className="specialized-title">{prog.name}</h3>
                  <p className="specialized-tagline">{prog.tagline}</p>

                  <div className="specialized-tools-wrap">
                    <span className="tools-lead">Stack:</span>
                    {prog.toolsLearned.map((t, i) => (
                      <span key={i} className="tool-pill-sm">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="specialized-foot">
                  <div className="capstone-brief">
                    <strong>Capstone:</strong> {prog.capstone}
                  </div>
                  <div className="specialized-btns">
                    <button
                      type="button"
                      className="academy-btn-outline sm"
                      onClick={() => setSelectedProgramme(prog)}
                    >
                      <span>Syllabus</span>
                    </button>
                    <button
                      type="button"
                      className="academy-btn-primary sm"
                      onClick={() => handleApplyClick(prog.id)}
                    >
                      <span>Apply</span>
                      <Icon name="arrowRight" size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL PROJECT SHOWCASE */}
      <section id="projects" className="academy-section showcase-bg">
        <div className="academy-section-header">
          <div>
            <div className="academy-pre-title">Student Deliverables</div>
            <h2 className="academy-section-title">Actual Projects You Will Build</h2>
          </div>
          <p className="academy-section-desc">
            Every programme centers on shipping working artifacts you can showcase directly to prospective employers, clients, or team leads.
          </p>
        </div>

        <div className="editorial-showcase-grid">
          {PRACTICAL_PROJECTS.map((proj, idx) => (
            <div key={idx} className="showcase-artifact-card">
              <div className="artifact-header">
                <span className="artifact-programme-pill">{proj.programme}</span>
                <span className="artifact-audience-tag">{proj.audience}</span>
              </div>

              <h3 className="artifact-title">{proj.title}</h3>
              <p className="artifact-desc">{proj.desc}</p>

              <div className="artifact-details-box">
                <div className="artifact-metric">
                  <span className="metric-label">Skills Deployed:</span>
                  <span className="metric-value">{proj.skillsGained}</span>
                </div>
                <div className="artifact-metric">
                  <span className="metric-label">Deliverable Type:</span>
                  <span className="metric-value">Working Production Artifact</span>
                </div>
              </div>

              <div className="artifact-card-foot">
                <span className="artifact-status-indicator">✦ Portfolio Verified</span>
                <button
                  type="button"
                  className="artifact-inspect-link"
                  onClick={() => handleApplyClick('ai-productivity')}
                >
                  Build This in Next Cohort →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISUAL STORYTELLING: The Studio Experience */}
      <section id="experience" className="academy-section studio-experience-section">
        <div className="studio-experience-inner">
          <div className="experience-narrative-grid">
            <div>
              <div className="academy-pre-title">The Studio Experience</div>
              <h2 className="academy-section-title">
                How Learning Actually Happens at Apex
              </h2>
              <p className="experience-body">
                We believe video lectures alone are ineffective for mastering AI. Our pedagogical model is built around deliberate practice, small cohort critiques, and immediate real-world deployment.
              </p>

              <div className="cadence-steps-list">
                <div className="cadence-step-item">
                  <div className="cadence-step-num">01</div>
                  <div>
                    <h4>Interactive Workshop (60 min)</h4>
                    <p>Live, unscripted demonstrations deconstructing prompt schemas, APIs, and workflow logic with practicing engineers.</p>
                  </div>
                </div>

                <div className="cadence-step-item">
                  <div className="cadence-step-num">02</div>
                  <div>
                    <h4>Hands-on Build Sprint (120 min)</h4>
                    <p>Step-by-step lab time building your own version of the weekly tool with instant troubleshooting support in Discord.</p>
                  </div>
                </div>

                <div className="cadence-step-item">
                  <div className="cadence-step-num">03</div>
                  <div>
                    <h4>Peer Review & Practitioner Critique</h4>
                    <p>Constructive feedback on your prompts, edge-case failure modes, and user interface ergonomics.</p>
                  </div>
                </div>

                <div className="cadence-step-item">
                  <div className="cadence-step-num">04</div>
                  <div>
                    <h4>Capstone Packaging</h4>
                    <p>Package the finished project with a clear memo, Loom walkthrough video, and public repository link.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Imagery */}
            <div className="studio-visual-stack">
              <div className="studio-main-photo">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                  alt="Students participating in hands-on design workshop"
                  loading="lazy"
                />
              </div>
              <div className="studio-callout-card">
                <h4>Authentic Mentor Ratio</h4>
                <p>1 mentor for every 8 students ensures your code, prompts, and database logic receive personal line-by-line review.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey Roadmap */}
      <section id="journey" className="academy-section">
        <div className="academy-section-header">
          <div>
            <div className="academy-pre-title">Your Trajectory</div>
            <h2 className="academy-section-title">The Four-Stage Learning Journey</h2>
          </div>
          <p className="academy-section-desc">
            A clear progression guiding you from daily tool efficiency to building autonomous systems.
          </p>
        </div>

        <div className="journey-grid">
          {LEARNING_JOURNEY.map((step, idx) => (
            <div key={idx} className="journey-step-card">
              <div className="journey-num-badge">{step.step}</div>
              <h3 className="journey-phase-title">{step.phase}</h3>
              <p className="journey-detail-text">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Perspectives */}
      <section id="students" className="academy-section showcase-bg">
        <div className="academy-section-header">
          <div>
            <div className="academy-pre-title">Learner Perspectives</div>
            <h2 className="academy-section-title">Sample Student Experiences</h2>
          </div>
          <p className="academy-section-desc">
            Reflections from students and young professionals who applied these practical skills to daily work.
          </p>
        </div>

        <div className="alumni-grid">
          {SAMPLE_STUDENTS.map((student, idx) => (
            <div key={idx} className="alumni-quote-card">
              <p className="alumni-quote-text">"{student.quote}"</p>
              <div className="alumni-author-block">
                <div className="alumni-name">{student.author}</div>
                <div className="alumni-role">{student.role} • {student.company}</div>
                <div className="alumni-track">Track: {student.programme}</div>
                <span className="alumni-sample-pill">{student.note}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADMISSIONS CONVERSION SECTION */}
      <section className="admissions-cohort-section">
        <div className="admissions-cohort-card">
          <div className="cohort-meta-badge">
            <span>Next Cohort Begins: November 24, 2026</span>
            <span className="cohort-seat-pill">18 of 25 Seats Claimed</span>
          </div>
          <h2 className="cohort-heading">
            Invest in real skills that differentiate your career.
          </h2>
          <p className="cohort-sub">
            Learn with a small group of ambitious students, designers, and operators. Hands-on mentorship, zero fabricated placement claims, and lifetime community access.
          </p>
          <div className="cohort-actions-row">
            <button
              type="button"
              className="academy-btn-primary lg"
              onClick={() => handleApplyClick('ai-productivity')}
            >
              <span>Apply for November Cohort</span>
              <Icon name="arrowRight" size={16} />
            </button>
            <button
              type="button"
              className="academy-btn-outline lg"
              onClick={() => setIsAdminDeskOpen(true)}
            >
              <span>Open Admissions Desk ({leads.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Expandable FAQ */}
      <section id="faq" className="academy-section">
        <div className="academy-section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <div className="academy-pre-title">Got Questions?</div>
            <h2 className="academy-section-title">Frequently Asked Questions</h2>
          </div>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="faq-accordion-item">
                <button
                  className="faq-question-btn"
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                >
                  <span>{faq.q}</span>
                  <Icon name={isOpen ? "chevronDown" : "chevronRight"} size={16} color="var(--acad-accent)" />
                </button>
                {isOpen && <div className="faq-answer-pane">{faq.a}</div>}
              </div>
            );
          })}
        </div>
      </section>

      {/* Editorial Footer */}
      <footer className="academy-footer">
        <div className="academy-footer-inner">
          <div className="footer-brand-column">
            <div className="academy-brand" style={{ marginBottom: '1rem' }}>
              <div className="academy-brand-symbol">A</div>
              <div className="academy-brand-name" style={{ color: '#FFFFFF' }}>
                Apex <span style={{ color: 'var(--acad-accent)' }}>Digital Academy</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Empowering students and early-career professionals with practical AI and digital skills. Real projects, live workshops, and hands-on portfolio builds.
            </p>
            <div style={{ marginTop: '1.25rem' }}>
              <Link
                to="/"
                className="ecosystem-portal-link"
                style={{ color: '#E4E4E7' }}
              >
                ✦ View Product Ecosystem Hub
              </Link>
            </div>
          </div>

          <div className="footer-links-column">
            <h5>Programmes</h5>
            {ACADEMY_PROGRAMMES.map((p) => (
              <a
                key={p.id}
                href="#programmes"
                onClick={() => setSelectedProgramme(p)}
              >
                {p.name}
              </a>
            ))}
          </div>

          <div className="footer-links-column">
            <h5>Learning Model</h5>
            <a href="#projects">Student Project Showcase</a>
            <a href="#experience">The Studio Experience</a>
            <a href="#journey">Mentorship Trajectory</a>
            <a href="#faq">Prerequisites Guide</a>
          </div>

          <div className="footer-links-column">
            <h5>Admissions</h5>
            <button
              onClick={() => handleApplyClick('ai-productivity')}
              className="footer-action-link"
            >
              Apply for Next Cohort
            </button>
            <button
              onClick={() => setIsAdminDeskOpen(true)}
              className="footer-action-link"
            >
              Admissions Operations Desk ({leads.length})
            </button>
            <span className="footer-integrity-tag">
              Zero Fabricated Placement Statistics
            </span>
          </div>
        </div>

        <div className="academy-footer-bottom">
          <div>
            © 2026 Apex Digital Academy. All rights reserved.
          </div>
          <div>
            Practical AI Skills Education • Verified Syllabus Curriculum
          </div>
        </div>
      </footer>

      {/* Modals & Drawers */}
      {selectedProgramme && (
        <SyllabusDrawer
          programme={selectedProgramme}
          onClose={() => setSelectedProgramme(null)}
          onApply={(prog) => handleApplyClick(prog.id)}
        />
      )}

      {isRegisterOpen && (
        <LeadRegistrationModal
          initialProgrammeId={registerProgId}
          onClose={() => setIsRegisterOpen(false)}
          onLeadCreated={handleLeadCreated}
        />
      )}

      {isAdminDeskOpen && (
        <LeadAdminDeskModal
          leads={leads}
          onClose={() => setIsAdminDeskOpen(false)}
          onUpdateStatus={handleUpdateLeadStatus}
        />
      )}
    </div>
  );
};
