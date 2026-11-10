import React, { useState } from 'react';
import { Icon } from '../../common/icons';
import { generateCarouselFromIdea } from '../services/studioEngine';

export const NewCarouselModal = ({ onClose, onCreated }) => {
  const [step, setStep] = useState('FORM'); // 'FORM' | 'GENERATING'
  const [formData, setFormData] = useState({
    rawIdea: '',
    platform: 'LINKEDIN',
    slideCount: 7,
    tone: 'ANALYTICAL',
    authorHandle: '@founder'
  });
  const [activePipelineStage, setActivePipelineStage] = useState(1);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!formData.rawIdea.trim()) return;

    setStep('GENERATING');

    setTimeout(() => setActivePipelineStage(2), 500);
    setTimeout(() => setActivePipelineStage(3), 1000);
    setTimeout(() => setActivePipelineStage(4), 1500);
    setTimeout(() => {
      const newProject = generateCarouselFromIdea(formData);
      onCreated(newProject);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="generator-modal" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--std-border)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--std-accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Carousel Outline Assistant
            </div>
            <h3 style={{ fontFamily: 'var(--std-serif)', fontSize: '1.65rem', color: 'var(--std-text)', marginTop: '0.2rem' }}>
              Create New Social Carousel
            </h3>
          </div>
          <button onClick={onClose} style={{ color: 'var(--std-text-muted)' }} aria-label="Close modal">
            <Icon name="close" size={20} />
          </button>
        </div>

        {step === 'GENERATING' ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '3px solid var(--std-accent)', borderTopColor: 'transparent', margin: '0 auto 1.5rem', animation: 'spin 0.8s linear infinite' }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            
            <h4 style={{ fontFamily: 'var(--std-serif)', fontSize: '1.4rem', color: 'var(--std-text)', marginBottom: '0.5rem' }}>
              Generating Slide-by-Slide Outline...
            </h4>
            <p style={{ color: 'var(--std-text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
              Structuring your topic into hook, context, action steps, and takeaway.
            </p>

            <div className="pipeline-stepper-row">
              <div className={`step-badge ${activePipelineStage >= 1 ? 'active' : ''}`}>
                <span>01</span> Topic Synthesis
              </div>
              <div className={`step-badge ${activePipelineStage >= 2 ? 'active' : ''}`}>
                <span>02</span> Hook Drafting
              </div>
              <div className={`step-badge ${activePipelineStage >= 3 ? 'active' : ''}`}>
                <span>03</span> Slide Breakdown
              </div>
              <div className={`step-badge ${activePipelineStage >= 4 ? 'active' : ''}`}>
                <span>04</span> Visual Notes
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleGenerate}>
            <div className="studio-field-group">
              <label>Enter Your Topic, Experience, or Key Thought *</label>
              <textarea
                required
                className="studio-textarea"
                style={{ minHeight: '110px' }}
                placeholder="e.g. Why customer retention is more important than paid ads for early startups. If your 90-day retention curve isn't flat, spending money on acquisition is pouring water into a leaky bucket..."
                value={formData.rawIdea}
                onChange={(e) => setFormData({ ...formData, rawIdea: e.target.value })}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="studio-field-group">
                <label>Platform Format</label>
                <select
                  className="studio-select"
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                >
                  <option value="LINKEDIN">LinkedIn Document (4:5 Portrait / PDF)</option>
                  <option value="LINKEDIN_SQUARE">LinkedIn Square (1:1 1080×1080)</option>
                  <option value="INSTAGRAM">Instagram Carousel (4:5 1080×1350)</option>
                </select>
              </div>

              <div className="studio-field-group">
                <label>Number of Slides</label>
                <select
                  className="studio-select"
                  value={formData.slideCount}
                  onChange={(e) => setFormData({ ...formData, slideCount: e.target.value })}
                >
                  <option value={5}>5 Slides (Quick, Punchy)</option>
                  <option value={7}>7 Slides (Standard Breakdown)</option>
                  <option value={10}>10 Slides (Deep Dive)</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="studio-field-group">
                <label>Tone of Voice</label>
                <select
                  className="studio-select"
                  value={formData.tone}
                  onChange={(e) => setFormData({ ...formData, tone: e.target.value })}
                >
                  <option value="ANALYTICAL">Analytical & Data-Driven</option>
                  <option value="CONTRARIAN">Contrarian & Thought-Provoking</option>
                  <option value="EDUCATIONAL">Educational & Practical</option>
                  <option value="STORYTELLING">Narrative & Personal</option>
                  <option value="TACTICAL">Tactical / Action-Oriented</option>
                </select>
              </div>

              <div className="studio-field-group">
                <label>Author Watermark</label>
                <input
                  type="text"
                  className="studio-input"
                  placeholder="@yourname"
                  value={formData.authorHandle}
                  onChange={(e) => setFormData({ ...formData, authorHandle: e.target.value })}
                />
              </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end', gap: '0.85rem' }}>
              <button type="button" className="studio-btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="studio-btn-primary">
                <Icon name="sparkles" size={15} />
                <span>Generate Carousel Deck</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
