import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import './styles/studio.css';
import {
  STUDIO_THEMES,
  INITIAL_PROJECTS
} from './services/studioEngine';
import { SlideCanvasPreview } from './components/SlideCanvasPreview';
import { NewCarouselModal } from './components/NewCarouselModal';
import { CanvaExportModal } from './components/CanvaExportModal';
import { Icon } from '../common/icons';

const formatNum = (num) => String(num).padStart(2, '0');

export const StudioApp = ({ onNavigateEcosystem }) => {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [activeProjectId, setActiveProjectId] = useState(INITIAL_PROJECTS[0].id);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');
  const [currentThemeId, setCurrentThemeId] = useState(INITIAL_PROJECTS[0].themeId);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isCanvaModalOpen, setIsCanvaModalOpen] = useState(false);
  const [isExportingPng, setIsExportingPng] = useState(false);
  const [exportNotice, setExportNotice] = useState('');

  const slideRef = useRef(null);

  // Active Project & Theme
  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];
  const activeTheme = STUDIO_THEMES.find((t) => t.id === currentThemeId) || STUDIO_THEMES[0];
  const activeSlide = activeProject.slides[currentSlideIndex] || activeProject.slides[0];

  // Carousel Navigation Handlers
  const handleNextSlide = () => {
    if (currentSlideIndex < activeProject.slides.length - 1) {
      setSlideDirection('next');
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setSlideDirection('prev');
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const handleGoToSlide = (idx) => {
    if (idx === currentSlideIndex || idx < 0 || idx >= activeProject.slides.length) return;
    setSlideDirection(idx > currentSlideIndex ? 'next' : 'prev');
    setCurrentSlideIndex(idx);
  };

  // Keyboard Navigation: Left & Right arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeTag = document.activeElement ? document.activeElement.tagName : '';
      if (
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(activeTag) ||
        document.activeElement?.isContentEditable
      ) {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, activeProject.slides.length]);

  // Update slide property in place
  const handleUpdateActiveSlide = (field, value) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== activeProject.id) return p;
        const newSlides = [...p.slides];
        newSlides[currentSlideIndex] = {
          ...newSlides[currentSlideIndex],
          [field]: value
        };
        return { ...p, slides: newSlides };
      })
    );
  };

  // Update Project Title
  const handleUpdateTitle = (newTitle) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === activeProject.id ? { ...p, title: newTitle } : p))
    );
  };

  // Update Author Handle
  const handleUpdateAuthorHandle = (newHandle) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === activeProject.id ? { ...p, authorHandle: newHandle } : p))
    );
  };

  // Add new slide
  const handleAddSlide = () => {
    const newSlideNum = activeProject.slides.length + 1;
    const newSlide = {
      slideNumber: newSlideNum,
      type: "TACTICAL",
      tag: `STEP ${formatNum(newSlideNum)}`,
      headline: "Actionable Takeaway or Strategic Rule",
      bodyText: "Describe the key tactical insight or execution recommendation for your audience here.",
      visualNote: "Clean typographic layout with high contrast."
    };
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== activeProject.id) return p;
        return { ...p, slides: [...p.slides, newSlide], slideCount: newSlideNum };
      })
    );
    setSlideDirection('next');
    setCurrentSlideIndex(activeProject.slides.length);
  };

  // Duplicate current slide
  const handleDuplicateSlide = () => {
    const duplicated = {
      ...activeSlide,
      slideNumber: activeProject.slides.length + 1,
      tag: `${activeSlide.tag} (COPY)`
    };
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== activeProject.id) return p;
        const newSlides = [...p.slides];
        newSlides.splice(currentSlideIndex + 1, 0, duplicated);
        return { ...p, slides: newSlides, slideCount: newSlides.length };
      })
    );
    setSlideDirection('next');
    setCurrentSlideIndex((prev) => prev + 1);
  };

  // Delete current slide
  const handleDeleteSlide = () => {
    if (activeProject.slides.length <= 1) return;
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== activeProject.id) return p;
        const newSlides = p.slides.filter((_, idx) => idx !== currentSlideIndex);
        return { ...p, slides: newSlides, slideCount: newSlides.length };
      })
    );
    setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
  };

  // Direct High-Resolution PNG Export using html2canvas
  const handleExportPng = async () => {
    if (!slideRef.current) return;
    try {
      setIsExportingPng(true);
      setExportNotice('Rendering high-res slide...');

      const canvas = await html2canvas(slideRef.current, {
        scale: 2, // 2x retina output
        useCORS: true,
        backgroundColor: null
      });

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${activeProject.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-slide-${formatNum(currentSlideIndex + 1)}.png`;
      link.href = dataUrl;
      link.click();

      setExportNotice('Slide downloaded as high-res PNG!');
      setTimeout(() => setExportNotice(''), 3000);
    } catch (err) {
      console.error('PNG export failed', err);
      setExportNotice('Export error. Please check browser canvas permissions.');
    } finally {
      setIsExportingPng(false);
    }
  };

  return (
    <div className="studio-root">
      {/* Light Workspace Top Bar */}
      <header className="studio-top-bar">
        <div className="studio-brand-group">
          <Link to="/" className="back-to-ecosystem-pill" title="Return to Ecosystem Hub">
            ← Hub
          </Link>
          <div className="studio-logo-mark">FF</div>
          <div>
            <input
              type="text"
              className="studio-project-title-input"
              value={activeProject.title}
              onChange={(e) => handleUpdateTitle(e.target.value)}
              title="Click to rename deck"
            />
          </div>
          <span className="studio-platform-pill">
            {activeProject.platform === 'LINKEDIN_SQUARE' ? 'LinkedIn 1:1' : 'Instagram 4:5'}
          </span>
        </div>

        <div className="studio-top-actions">
          {exportNotice && (
            <span style={{ fontSize: '0.825rem', fontWeight: 600, color: '#10B981', marginRight: '0.5rem' }}>
              {exportNotice}
            </span>
          )}

          <button
            onClick={() => setIsCanvaModalOpen(true)}
            className="studio-btn-secondary"
            title="Export to Canva Connect API"
          >
            <Icon name="share" size={14} />
            <span>Canva Bridge</span>
          </button>

          <button
            onClick={handleExportPng}
            disabled={isExportingPng}
            className="studio-btn-primary"
            title="Download active slide as high-resolution PNG"
          >
            <Icon name="download" size={14} />
            <span>{isExportingPng ? 'Rendering...' : 'Download Slide PNG'}</span>
          </button>

          <button
            onClick={() => setIsNewModalOpen(true)}
            className="studio-btn-primary"
            style={{ background: '#0F172A' }}
          >
            <Icon name="plus" size={14} />
            <span>New Deck</span>
          </button>
        </div>
      </header>

      {/* Three-Column Creative Workspace */}
      <div className="studio-workspace-body">
        {/* Left Sidebar: Projects & History */}
        <aside className="studio-sidebar">
          <div>
            <div className="sidebar-nav-heading">Creative Workspace</div>
            <div className="sidebar-menu-list">
              <div className="sidebar-menu-item active">
                <Icon name="carousel" size={15} color="var(--std-accent)" />
                <span>Active Carousel Stage</span>
              </div>
              <div
                className="sidebar-menu-item"
                onClick={() => setIsNewModalOpen(true)}
              >
                <Icon name="sparkles" size={15} />
                <span>AI Carousel Generator</span>
              </div>
              <div
                className="sidebar-menu-item"
                onClick={() => setIsCanvaModalOpen(true)}
              >
                <Icon name="share" size={15} />
                <span>Canva Export Bridge</span>
              </div>
            </div>

            <div className="sidebar-nav-heading">Decks ({projects.length})</div>
            <div className="projects-history-list">
              {projects.map((proj) => {
                const isActive = proj.id === activeProject.id;
                return (
                  <div
                    key={proj.id}
                    className={`project-history-item ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setActiveProjectId(proj.id);
                      setCurrentSlideIndex(0);
                      setSlideDirection('next');
                      setCurrentThemeId(proj.themeId || 'monochrome');
                    }}
                  >
                    <div className="project-item-title">{proj.title}</div>
                    <div className="project-item-meta">
                      <span>{proj.slides.length} slides</span>
                      <span>{proj.platform === 'LINKEDIN_SQUARE' ? 'LinkedIn' : 'Instagram'}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            {/* Author Watermark Handle */}
            <div className="sidebar-handle-card">
              <span className="handle-label">Author Stamp</span>
              <input
                type="text"
                className="studio-input"
                style={{ marginTop: '0.35rem', padding: '0.45rem 0.65rem', fontSize: '0.85rem' }}
                value={activeProject.authorHandle || '@founder'}
                onChange={(e) => handleUpdateAuthorHandle(e.target.value)}
              />
            </div>

            <div style={{ marginTop: '1.25rem', padding: '0 0.5rem' }}>
              <Link
                to="/"
                className="ecosystem-portal-link"
                style={{ color: '#64748B' }}
              >
                ✦ Product Ecosystem Hub
              </Link>
            </div>
          </div>
        </aside>

        {/* Center Canvas Stage */}
        <main className="studio-canvas-stage">
          <div className="canvas-toolbar">
            <span className="canvas-aspect-badge">
              {activeProject.platform === 'LINKEDIN_SQUARE' ? '1:1 Square (1080×1080 px)' : '4:5 Portrait Document (1080×1350 px)'}
            </span>

            <div className="canvas-toolbar-controls">
              <span className="keyboard-nav-hint">
                Keys: <kbd>←</kbd> <kbd>→</kbd>
              </span>

              <button
                className="studio-btn-secondary"
                style={{ padding: '0.35rem 0.65rem' }}
                disabled={currentSlideIndex === 0}
                onClick={handlePrevSlide}
                title="Previous slide (Left Arrow)"
              >
                <Icon name="arrowLeft" size={13} />
              </button>

              <span className="canvas-slide-indicator">
                Slide {formatNum(currentSlideIndex + 1)} of {formatNum(activeProject.slides.length)}
              </span>

              <button
                className="studio-btn-secondary"
                style={{ padding: '0.35rem 0.65rem' }}
                disabled={currentSlideIndex === activeProject.slides.length - 1}
                onClick={handleNextSlide}
                title="Next slide (Right Arrow)"
              >
                <Icon name="arrowRight" size={13} />
              </button>
            </div>
          </div>

          {/* Active Rendered Slide Card with Flanking Controls */}
          <div className="canvas-stage-wrapper">
            <button
              type="button"
              className="canvas-floating-arrow prev"
              disabled={currentSlideIndex === 0}
              onClick={handlePrevSlide}
              title="Previous slide (Left Arrow)"
              aria-label="Previous slide"
            >
              <Icon name="arrowLeft" size={18} />
            </button>

            <SlideCanvasPreview
              innerRef={slideRef}
              slide={activeSlide}
              theme={activeTheme}
              platform={activeProject.platform}
              authorHandle={activeProject.authorHandle}
              slideIndex={currentSlideIndex}
              totalSlides={activeProject.slides.length}
              onNext={handleNextSlide}
              onPrev={handlePrevSlide}
              onGoToSlide={handleGoToSlide}
              direction={slideDirection}
            />

            <button
              type="button"
              className="canvas-floating-arrow next"
              disabled={currentSlideIndex === activeProject.slides.length - 1}
              onClick={handleNextSlide}
              title="Next slide (Right Arrow)"
              aria-label="Next slide"
            >
              <Icon name="arrowRight" size={18} />
            </button>
          </div>

          {/* Filmstrip Slide Thumbnail Rail */}
          <div className="slide-thumbnails-rail">
            {activeProject.slides.map((s, idx) => {
              const isSelected = idx === currentSlideIndex;
              return (
                <div
                  key={idx}
                  className={`thumbnail-pill ${isSelected ? 'active' : ''}`}
                  onClick={() => handleGoToSlide(idx)}
                  role="button"
                  tabIndex={0}
                  title={`Open slide ${formatNum(idx + 1)}`}
                >
                  <span className="thumbnail-num">{formatNum(idx + 1)}</span>
                  <span className="thumbnail-type">{s.type.slice(0, 4)}</span>
                </div>
              );
            })}

            <button
              onClick={handleAddSlide}
              className="thumbnail-pill"
              style={{ borderStyle: 'dashed' }}
              title="Add new slide to end of deck"
            >
              <Icon name="plus" size={15} />
            </button>
          </div>
        </main>

        {/* Right Inspector: Professional Creative Software Editing Hierarchy */}
        <aside className="studio-inspector">
          {/* Section 1: Active Slide Copy */}
          <div className="inspector-section">
            <div className="inspector-title">
              <Icon name="edit" size={14} />
              <span>Slide {formatNum(currentSlideIndex + 1)} Copy</span>
            </div>

            <div className="studio-field-group">
              <label>Header Tag</label>
              <input
                type="text"
                className="studio-input"
                value={activeSlide?.tag || ''}
                onChange={(e) => handleUpdateActiveSlide('tag', e.target.value)}
                placeholder="e.g. PRINCIPLE 01, TACTIC, STEP"
              />
            </div>

            <div className="studio-field-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label>Main Headline</label>
                <span className="field-count">{(activeSlide?.headline || '').length} chars</span>
              </div>
              <textarea
                className="studio-textarea"
                style={{ minHeight: '85px', fontSize: '0.9rem' }}
                value={activeSlide?.headline || ''}
                onChange={(e) => handleUpdateActiveSlide('headline', e.target.value)}
                placeholder="Write a clear, impactful insight..."
              />
            </div>

            <div className="studio-field-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label>Body Description</label>
                <span className="field-count">{(activeSlide?.bodyText || '').split(/\s+/).filter(Boolean).length} words</span>
              </div>
              <textarea
                className="studio-textarea"
                style={{ minHeight: '110px', fontSize: '0.85rem' }}
                value={activeSlide?.bodyText || ''}
                onChange={(e) => handleUpdateActiveSlide('bodyText', e.target.value)}
                placeholder="Expand on the execution detail or tactical takeaway..."
              />
            </div>
          </div>

          {/* Section 2: AI Visual Direction (Creator's Eyes Only - Not on Slide!) */}
          {activeSlide?.visualNote && (
            <div className="inspector-section">
              <div className="inspector-title">
                <Icon name="sparkles" size={14} />
                <span>AI Design Direction</span>
              </div>
              <div className="ai-guidance-card">
                <strong>Creative Suggestion:</strong>
                <p>{activeSlide.visualNote}</p>
              </div>
            </div>
          )}

          {/* Section 3: Visual Theme Palette */}
          <div className="inspector-section">
            <div className="inspector-title">
              <Icon name="palette" size={14} />
              <span>Visual Theme</span>
            </div>
            <div className="theme-selector-grid">
              {STUDIO_THEMES.map((theme) => {
                const isActive = theme.id === currentThemeId;
                return (
                  <button
                    key={theme.id}
                    className={`theme-button ${isActive ? 'active' : ''}`}
                    onClick={() => setCurrentThemeId(theme.id)}
                  >
                    <span className="theme-swatch" style={{ background: theme.bg, borderColor: theme.border }} />
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {theme.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 4: Slide Operations */}
          <div className="inspector-section">
            <div className="inspector-title">
              <Icon name="layers" size={14} />
              <span>Slide Operations</span>
            </div>

            <div className="slide-ops-grid">
              <button
                type="button"
                className="studio-btn-secondary"
                onClick={handleDuplicateSlide}
                title="Duplicate this slide"
              >
                <Icon name="copy" size={13} />
                <span>Duplicate</span>
              </button>

              <button
                type="button"
                className="studio-btn-secondary"
                onClick={handleDeleteSlide}
                disabled={activeProject.slides.length <= 1}
                style={{ color: '#EF4444' }}
                title="Delete this slide"
              >
                <Icon name="close" size={13} />
                <span>Delete</span>
              </button>
            </div>
          </div>

          {/* Raw Topic Reference */}
          <div className="inspector-section">
            <div className="inspector-title">
              <Icon name="info" size={14} />
              <span>Source Topic Idea</span>
            </div>
            <p className="source-idea-box">
              "{activeProject.rawIdea}"
            </p>
          </div>
        </aside>
      </div>

      {/* Modals */}
      {isNewModalOpen && (
        <NewCarouselModal
          onClose={() => setIsNewModalOpen(false)}
          onCreated={(newProj) => {
            setProjects((prev) => [newProj, ...prev]);
            setActiveProjectId(newProj.id);
            setCurrentSlideIndex(0);
            setSlideDirection('next');
            setCurrentThemeId(newProj.themeId || 'monochrome');
          }}
        />
      )}

      {isCanvaModalOpen && (
        <CanvaExportModal
          project={activeProject}
          currentTheme={activeTheme}
          onClose={() => setIsCanvaModalOpen(false)}
        />
      )}
    </div>
  );
};
