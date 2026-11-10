import React from 'react';
import { Icon } from '../../common/icons';

export const SyllabusDrawer = ({ programme, onClose, onApply }) => {
  if (!programme) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="academy-modal" style={{ maxWidth: '760px' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--acad-border)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
          <div>
            <span className="programme-level-tag">{programme.level}</span>
            <h2 style={{ fontFamily: 'var(--acad-serif)', fontSize: '2rem', color: 'var(--acad-text)', lineHeight: 1.25 }}>
              {programme.name}
            </h2>
            <p style={{ color: 'var(--acad-text-body)', fontSize: '0.95rem', marginTop: '0.4rem' }}>
              {programme.tagline}
            </p>
          </div>
          <button onClick={onClose} style={{ color: 'var(--acad-text-muted)', padding: '0.25rem' }} aria-label="Close modal">
            <Icon name="close" size={20} />
          </button>
        </div>

        {/* Schedule & Overview Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', background: 'var(--acad-surface-alt)', padding: '1rem 1.25rem', borderRadius: '10px', border: '1px solid var(--acad-border)', marginBottom: '1.75rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--acad-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Duration</span>
            <div style={{ fontWeight: 700, color: 'var(--acad-text)', fontSize: '0.95rem' }}>{programme.duration}</div>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--acad-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Weekly Commitment</span>
            <div style={{ fontWeight: 700, color: 'var(--acad-text)', fontSize: '0.95rem' }}>{programme.effort}</div>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--acad-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Format</span>
            <div style={{ fontWeight: 700, color: 'var(--acad-text)', fontSize: '0.95rem' }}>{programme.format}</div>
          </div>
        </div>

        {/* Overview */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--acad-text-muted)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
            Programme Overview
          </h4>
          <p style={{ fontSize: '0.925rem', lineHeight: 1.6, color: 'var(--acad-text-body)' }}>
            {programme.overview}
          </p>
        </div>

        {/* Tools Learned */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--acad-text-muted)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
            Key Software & AI Tools Mastered
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {programme.toolsLearned.map((tool, idx) => (
              <span key={idx} className="tool-tag" style={{ padding: '0.35rem 0.75rem', fontSize: '0.85rem', background: '#FFFFFF' }}>
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Weekly Modules Breakdown */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--acad-text-muted)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.85rem' }}>
            Weekly Curriculum Sequence
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {programme.modules.map((m, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', border: '1px solid var(--acad-border)', borderRadius: '8px', padding: '1rem 1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--acad-text)' }}>{m.title}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--acad-cobalt)' }}>Week {m.week}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--acad-text-body)', lineHeight: 1.5 }}>
                  {m.topics}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Capstone Brief */}
        <div style={{ background: 'var(--acad-cobalt-light)', border: '1px solid #BFDBFE', padding: '1.25rem', borderRadius: '10px', marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--acad-cobalt)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.35rem' }}>
            Hands-On Capstone Deliverable
          </div>
          <p style={{ fontSize: '0.9rem', color: '#1E3A8A', lineHeight: 1.55 }}>
            {programme.capstone}
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.85rem' }}>
          <button className="academy-btn-outline" onClick={onClose}>
            Close
          </button>
          <button className="academy-btn-primary" onClick={() => onApply(programme)}>
            <span>Register Interest for Next Cohort</span>
            <Icon name="arrowRight" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
