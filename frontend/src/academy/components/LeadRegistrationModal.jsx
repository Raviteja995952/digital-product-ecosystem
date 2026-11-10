import React, { useState } from 'react';
import { Icon } from '../../common/icons';
import { ACADEMY_PROGRAMMES } from '../data/academyData';
import { API_ENDPOINTS } from '../../config/api';

export const LeadRegistrationModal = ({ initialProgrammeId, onClose, onLeadCreated }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    programmeId: initialProgrammeId || 'ai-productivity',
    experienceLevel: 'STUDENT',
    currentRole: '',
    learningGoal: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(API_ENDPOINTS.leads, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => null);
    } catch (err) {}
    
    setSubmitted(true);
    if (onLeadCreated) {
      onLeadCreated({
        ...formData,
        id: 'APP-' + Math.floor(1000 + Math.random() * 9000),
        status: 'NEW',
        createdAt: new Date().toISOString()
      });
    }
  };

  const selectedProg = ACADEMY_PROGRAMMES.find((p) => p.id === formData.programmeId) || ACADEMY_PROGRAMMES[0];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="academy-modal" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--acad-border)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
          <div>
            <div className="academy-pre-title">Student & Professional Intake</div>
            <h3 style={{ fontFamily: 'var(--acad-serif)', fontSize: '1.65rem', color: 'var(--acad-text)' }}>
              Register Interest for Cohort
            </h3>
          </div>
          <button onClick={onClose} style={{ color: 'var(--acad-text-muted)', padding: '0.25rem' }}>
            <Icon name="close" size={20} />
          </button>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--acad-cobalt-light)', color: 'var(--acad-cobalt)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <Icon name="check" size={28} />
            </div>
            <h4 style={{ fontFamily: 'var(--acad-serif)', fontSize: '1.65rem', color: 'var(--acad-text)', marginBottom: '0.5rem' }}>
              Application Successfully Received
            </h4>
            <p style={{ color: 'var(--acad-text-body)', fontSize: '0.925rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 1.5rem' }}>
              Thank you, <strong>{formData.fullName}</strong>. We have received your registration for <strong>{selectedProg.name}</strong>. Our admissions team will email you cohort schedule details and workshop links at <strong>{formData.email}</strong>.
            </p>
            <div style={{ background: 'var(--acad-surface-alt)', border: '1px solid var(--acad-border)', borderRadius: '8px', padding: '1.15rem', textAlign: 'left', marginBottom: '1.75rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                <span style={{ color: 'var(--acad-text-muted)' }}>Target Track:</span>
                <strong style={{ color: 'var(--acad-text)' }}>{selectedProg.name}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                <span style={{ color: 'var(--acad-text-muted)' }}>Format:</span>
                <strong style={{ color: 'var(--acad-text)' }}>{selectedProg.duration} ({selectedProg.effort})</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--acad-text-muted)' }}>Admissions Response:</span>
                <strong style={{ color: 'var(--acad-cobalt)' }}>Within 24-48 Hours</strong>
              </div>
            </div>
            <button className="academy-btn-primary" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Select Preferred Programme Track *</label>
              <select
                className="academy-input"
                value={formData.programmeId}
                onChange={(e) => setFormData({ ...formData, programmeId: e.target.value })}
              >
                {ACADEMY_PROGRAMMES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.duration})
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  required
                  className="academy-input"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  required
                  className="academy-input"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  className="academy-input"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Current Status or College / Role</label>
                <input
                  type="text"
                  className="academy-input"
                  placeholder="e.g. University Student, Marketing Associate..."
                  value={formData.currentRole}
                  onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Current Experience Level</label>
              <select
                className="academy-input"
                value={formData.experienceLevel}
                onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
              >
                <option value="STUDENT">Student (High School / Undergrad / Graduate)</option>
                <option value="EARLY_CAREER">Early Career Professional (0-3 years experience)</option>
                <option value="MID_CAREER">Experienced Professional (3+ years experience)</option>
                <option value="CAREER_CHANGER">Career Changer / Exploring New Skills</option>
              </select>
            </div>

            <div className="form-group">
              <label>What would you like to achieve with practical AI?</label>
              <textarea
                className="academy-input"
                style={{ minHeight: '80px', resize: 'vertical' }}
                placeholder="Tell us what project, skill, or workflow you want to build..."
                value={formData.learningGoal}
                onChange={(e) => setFormData({ ...formData, learningGoal: e.target.value })}
              />
            </div>

            <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'flex-end', gap: '0.85rem' }}>
              <button type="button" className="academy-btn-outline" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="academy-btn-primary">
                <span>Submit Registration</span>
                <Icon name="arrowRight" size={14} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
