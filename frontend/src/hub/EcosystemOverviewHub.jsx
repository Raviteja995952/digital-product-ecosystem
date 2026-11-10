import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../common/icons';

export const EcosystemOverviewHub = () => {
  const location = useLocation();

  return (
    <div className="ecosystem-hub-root">
      {/* Persistent Professional Top Navigation on Ecosystem Hub */}
      <header className="ecosystem-hub-header">
        <div className="ecosystem-nav-inner">
          <Link to="/" className="ecosystem-brand-group">
            <div className="ecosystem-hub-logo">AGY</div>
            <div className="ecosystem-hub-brand-text">
              Product Ecosystem
              <span>Enterprise Digital Suite</span>
            </div>
          </Link>

          {/* Persistent Application Switcher */}
          <nav className="ecosystem-top-nav-links" aria-label="Ecosystem Applications">
            <Link
              to="/"
              className={`ecosystem-nav-pill ${location.pathname === '/' ? 'active' : ''}`}
            >
              <span>Overview & Hub</span>
            </Link>

            <Link
              to="/animals"
              className={`ecosystem-nav-pill ${location.pathname === '/animals' ? 'active' : ''}`}
            >
              <span className="app-dot animals" />
              <span>FaunaCare</span>
            </Link>

            <Link
              to="/academy"
              className={`ecosystem-nav-pill ${location.pathname === '/academy' ? 'active' : ''}`}
            >
              <span className="app-dot academy" />
              <span>Apex AI Academy</span>
            </Link>

            <Link
              to="/studio"
              className={`ecosystem-nav-pill ${location.pathname === '/studio' ? 'active' : ''}`}
            >
              <span className="app-dot studio" />
              <span>FounderForge Studio</span>
            </Link>
          </nav>

          <div className="ecosystem-nav-meta">
            <span className="ecosystem-live-badge">3 Products Active</span>
          </div>
        </div>
      </header>

      {/* Hub Hero Content */}
      <main className="ecosystem-hub-body">
        <div className="hub-container">
          <div className="hub-hero-intro">
            <div className="hub-badge-tag">
              <span>Architectural Overview</span>
            </div>
            <h1 className="hub-hero-title">
              Three distinct digital products. Designed at agency quality.
            </h1>
            <p className="hub-hero-desc">
              Explore the three independent platforms in this ecosystem. Each product features bespoke visual direction, custom semantic CSS, authentic photography, and dedicated Java Spring Boot APIs.
            </p>
          </div>

          {/* Launch Cards Grid */}
          <div className="hub-products-grid">
            {/* Product 1: FaunaCare */}
            <div className="hub-card animals-theme">
              <div className="hub-card-media">
                <img
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=900&q=80"
                  alt="FaunaCare veterinary examination"
                />
                <div className="hub-media-overlay animals">
                  <span className="hub-tag">Product 01</span>
                </div>
              </div>

              <div className="hub-card-content">
                <div>
                  <div className="hub-category-label animals">Consumer Healthcare Marketplace</div>
                  <h2 className="hub-product-name">FaunaCare — Practo for Animals</h2>
                  <p className="hub-product-summary">
                    A trusted discovery platform for veterinary hospitals, clinics, pet boarding, and animal ambulances with warm ivory and forest-green aesthetics, search console, and verified licensure.
                  </p>

                  <div className="hub-features-list">
                    <span>✓ Interactive Search Console</span>
                    <span>✓ Verified Provider Directory</span>
                    <span>✓ Submit Listing Correction</span>
                    <span>✓ List Practice Intake</span>
                    <span>✓ 24/7 Clinical Emergency Triage</span>
                  </div>
                </div>

                <div className="hub-card-foot">
                  <Link to="/animals" className="btn-hub-launch animals">
                    <span>Open FaunaCare Homepage</span>
                    <Icon name="arrowRight" size={15} color="#FFFFFF" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 2: Apex AI Academy */}
            <div className="hub-card academy-theme">
              <div className="hub-card-media">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                  alt="Apex Academy students collaborating"
                />
                <div className="hub-media-overlay academy">
                  <span className="hub-tag">Product 02</span>
                </div>
              </div>

              <div className="hub-card-content">
                <div>
                  <div className="hub-category-label academy">Practical Digital Skills Education</div>
                  <h2 className="hub-product-name">Apex Digital Academy</h2>
                  <p className="hub-product-summary">
                    A practical AI education brand for students and young professionals. Features an intellectual studio aesthetic, varied programme catalog, real student project showcase, and admissions portal.
                  </p>

                  <div className="hub-features-list">
                    <span>✓ 5 Practical Career Tracks</span>
                    <span>✓ Flagship Gateway Curriculum</span>
                    <span>✓ Student Artifact Showcase</span>
                    <span>✓ The Studio Experience Cadence</span>
                    <span>✓ Admissions Desk Operations</span>
                  </div>
                </div>

                <div className="hub-card-foot">
                  <Link to="/academy" className="btn-hub-launch academy">
                    <span>Open Apex Academy</span>
                    <Icon name="arrowRight" size={15} color="#FFFFFF" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 3: FounderForge Studio */}
            <div className="hub-card studio-theme">
              <div className="hub-card-media">
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80"
                  alt="FounderForge creative software workspace"
                />
                <div className="hub-media-overlay studio">
                  <span className="hub-tag">Product 03</span>
                </div>
              </div>

              <div className="hub-card-content">
                <div>
                  <div className="hub-category-label studio">Creative Publishing Software</div>
                  <h2 className="hub-product-name">FounderForge Studio</h2>
                  <p className="hub-product-summary">
                    An expansive carousel workspace for founders to create, edit, and publish social media carousels. Features smooth slide transitions, theme customizer, high-res PNG export, and Canva bridge.
                  </p>

                  <div className="hub-features-list">
                    <span>✓ Large Carousel Canvas Stage</span>
                    <span>✓ Smooth Horizontal Navigation</span>
                    <span>✓ Real-time Inspector Two-Way Sync</span>
                    <span>✓ High-Resolution PNG Export</span>
                    <span>✓ Canva Connect Bridge</span>
                  </div>
                </div>

                <div className="hub-card-foot">
                  <Link to="/studio" className="btn-hub-launch studio">
                    <span>Open FounderForge Studio</span>
                    <Icon name="arrowRight" size={15} color="#FFFFFF" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Hub Footer */}
      <footer className="ecosystem-hub-footer">
        <div className="hub-container">
          <div className="hub-footer-inner">
            <div>
              <strong>Digital Product Ecosystem</strong> • React.js • Regular CSS • Spring Boot • MySQL
            </div>
            <div>
              All routes active: <code>/animals</code> • <code>/academy</code> • <code>/studio</code>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

