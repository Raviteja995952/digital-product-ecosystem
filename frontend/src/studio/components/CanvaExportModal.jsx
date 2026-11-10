import React, { useState } from 'react';
import { Icon } from '../../common/icons';

export const CanvaExportModal = ({ project, currentTheme, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [canvaSynced, setCanvaSynced] = useState(false);

  const canvaExportPayload = {
    version: "1.0",
    exportTarget: "CANVA_CONNECT_API",
    deckTitle: project.title,
    dimensions: project.platform === 'LINKEDIN_SQUARE' ? { width: 1080, height: 1080 } : { width: 1080, height: 1350 },
    theme: {
      palette: [currentTheme.bg, currentTheme.text, currentTheme.accent],
      fontPrimary: "Fraunces Serif",
      fontSecondary: "Plus Jakarta Sans"
    },
    slides: project.slides.map((s, idx) => ({
      index: idx + 1,
      tag: s.tag,
      headline: s.headline,
      body: s.bodyText,
      layoutNote: s.visualNote
    }))
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(canvaExportPayload, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateCanvaSync = () => {
    setCanvaSynced(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="generator-modal" style={{ maxWidth: '720px' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--std-border)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--std-accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Publishing & Export
            </div>
            <h3 style={{ fontFamily: 'var(--std-serif)', fontSize: '1.65rem', color: 'var(--std-text)', marginTop: '0.2rem' }}>
              Canva Connect API & Layout Export
            </h3>
          </div>
          <button onClick={onClose} style={{ color: 'var(--std-text-muted)' }}>
            <Icon name="close" size={20} />
          </button>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--std-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            Export your slide structure directly into Canva for further graphic design polish, or copy the formatted JSON payload for custom automation workflows.
          </p>
        </div>

        {canvaSynced ? (
          <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '10px', padding: '1.5rem', textAlign: 'center', marginBottom: '1.5rem' }}>
            <Icon name="check" size={28} color="#10B981" style={{ margin: '0 auto 0.5rem' }} />
            <h4 style={{ color: '#065F46', fontSize: '1.15rem', fontWeight: 700 }}>Canva Project Dispatched</h4>
            <p style={{ color: '#047857', fontSize: '0.85rem', marginTop: '0.25rem' }}>
              Successfully synchronized <strong>{project.slides.length} slides</strong> to Canva Workspace via mock OAuth2 endpoint.
            </p>
          </div>
        ) : (
          <div style={{ background: 'var(--std-workbench)', border: '1px solid var(--std-border)', borderRadius: '10px', padding: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--std-text)', textTransform: 'uppercase' }}>
                Canva Integration Architecture
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981' }}>OAuth2 Ready</span>
            </div>
            <ul style={{ fontSize: '0.85rem', color: 'var(--std-text-muted)', lineHeight: 1.7, paddingLeft: '1.2rem' }}>
              <li><strong>Target Format:</strong> 1080×1350 (4:5 Portrait) for Instagram & LinkedIn</li>
              <li><strong>Field Binding:</strong> Maps headline, description, tags, and color palette tokens</li>
              <li><strong>Export Workflow:</strong> One-click transfer to user's personal Canva design folder</li>
            </ul>
          </div>
        )}

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--std-text)', textTransform: 'uppercase' }}>
              Exportable Carousel JSON Deck
            </label>
            <button
              onClick={handleCopyJson}
              className="studio-btn-secondary"
              style={{ padding: '0.3rem 0.75rem', fontSize: '0.75rem' }}
            >
              <Icon name="copy" size={13} />
              <span>{copied ? 'Copied!' : 'Copy JSON'}</span>
            </button>
          </div>
          <pre style={{ background: '#FFFFFF', border: '1px solid var(--std-border)', borderRadius: '8px', padding: '1rem', maxHeight: '180px', overflowY: 'auto', fontSize: '0.8rem', color: '#334155', lineHeight: 1.5 }}>
            {JSON.stringify(canvaExportPayload, null, 2)}
          </pre>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.85rem' }}>
          <button className="studio-btn-secondary" onClick={onClose}>
            Close
          </button>
          <button className="studio-btn-primary" onClick={handleSimulateCanvaSync}>
            <Icon name="share" size={15} />
            <span>Connect & Dispatch to Canva</span>
          </button>
        </div>
      </div>
    </div>
  );
};
