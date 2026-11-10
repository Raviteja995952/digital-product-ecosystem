import React, { useState } from 'react';
import { Icon } from '../../common/icons';

export const ProviderDetailModal = ({ provider, onClose, onEmergencyCall }) => {
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    petName: '',
    species: 'Dog',
    ownerName: '',
    phone: '',
    preferredDate: '',
    reason: ''
  });

  if (!provider) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="provider-detail-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-hero-banner">
          <img src={provider.imageUrl} alt={provider.name} />
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="modal-body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span className="provider-type-tag">{provider.typeName}</span>
                <span style={{ fontSize: '0.75rem', color: '#8A968D' }}>• License: {provider.licenseId}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--fauna-serif)', fontSize: '2rem', color: 'var(--fauna-forest)', lineHeight: 1.2 }}>
                {provider.name}
              </h2>
              <p style={{ color: 'var(--fauna-text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                {provider.address}
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div className="provider-rating-badge" style={{ fontSize: '0.9rem', padding: '0.35rem 0.75rem' }}>
                <Icon name="star" size={16} color="#C26D45" />
                <span>{provider.rating.toFixed(1)}</span>
                <span style={{ color: '#8A968D', fontWeight: 400 }}>({provider.reviewCount} verified reviews)</span>
              </div>
              <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#1B382B', fontWeight: 600 }}>
                {provider.hours}
              </div>
            </div>
          </div>

          <div className="modal-grid-two-col">
            <div>
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fauna-forest)', marginBottom: '0.5rem' }}>
                  Clinical Leadership & Background
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--fauna-text)', fontWeight: 600, marginBottom: '0.4rem' }}>
                  {provider.leadDoctor}
                </p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--fauna-text-muted)' }}>
                  {provider.about}
                </p>
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fauna-forest)', marginBottom: '0.75rem' }}>
                  Clinical Capabilities & Equipment
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {provider.services.map((srv, idx) => (
                    <span key={idx} className="service-tag" style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}>
                      <Icon name="check" size={12} color="var(--fauna-forest)" style={{ display: 'inline', marginRight: '4px' }} />
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fauna-forest)', marginBottom: '1rem' }}>
                  Verified Patient Reviews
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {provider.reviews.map((rev, idx) => (
                    <div key={idx} style={{ background: 'var(--fauna-surface-alt)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--fauna-border)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--fauna-forest)' }}>{rev.author}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--fauna-text-faint)' }}>{rev.date}</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--fauna-terracotta)', fontWeight: 600, marginBottom: '0.4rem' }}>
                        Patient: {rev.patient}
                      </div>
                      <p style={{ fontSize: '0.825rem', color: 'var(--fauna-text-muted)', lineHeight: 1.5 }}>
                        "{rev.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Fee Schedule & Appointment Booking */}
            <div>
              <div style={{ background: 'var(--fauna-sage-tint)', border: '1px solid var(--fauna-border)', borderRadius: '8px', padding: '1.25rem', marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fauna-forest)', marginBottom: '0.85rem' }}>
                  Transparent Fee Schedule
                </h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--fauna-text-muted)' }}>General Consultation:</span>
                  <strong style={{ color: 'var(--fauna-forest)' }}>{provider.consultationFee}</strong>
                </div>
                {provider.isEmergency && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--fauna-emergency)' }}>Emergency Trauma Triage:</span>
                    <strong style={{ color: 'var(--fauna-emergency)' }}>{provider.emergencyFee}</strong>
                  </div>
                )}
                <div style={{ borderTop: '1px solid var(--fauna-border)', paddingTop: '0.75rem', marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                  <a href={`tel:${provider.phone}`} className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                    <Icon name="phone" size={14} />
                    <span>Call Clinic</span>
                  </a>
                  {provider.isEmergency && (
                    <button onClick={() => onEmergencyCall(provider)} className="btn-emergency" style={{ flex: 1, justifyContent: 'center' }}>
                      <Icon name="emergency" size={14} />
                      <span>24/7 SOS</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Inquiry Form */}
              <div style={{ background: '#FFFFFF', border: '1px solid var(--fauna-border)', borderRadius: '8px', padding: '1.25rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--fauna-forest)', marginBottom: '0.35rem' }}>
                  Request Consultation Slot
                </h4>
                <p style={{ fontSize: '0.775rem', color: 'var(--fauna-text-muted)', marginBottom: '1rem' }}>
                  The clinic coordinator will confirm your appointment via SMS/WhatsApp.
                </p>

                {inquirySent ? (
                  <div style={{ background: 'var(--fauna-sage-tint)', border: '1px solid var(--fauna-forest)', padding: '1.25rem', borderRadius: '6px', textAlign: 'center' }}>
                    <Icon name="check" size={24} color="var(--fauna-forest)" style={{ margin: '0 auto 0.5rem' }} />
                    <h5 style={{ color: 'var(--fauna-forest)', fontWeight: 600, fontSize: '0.95rem' }}>Appointment Request Received</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--fauna-text-muted)', marginTop: '0.25rem' }}>
                      Token #VET-{Math.floor(1000 + Math.random() * 9000)} generated. The veterinary desk has been notified.
                    </p>
                    <button onClick={() => setInquirySent(false)} className="btn-secondary" style={{ marginTop: '0.75rem', fontSize: '0.75rem' }}>
                      Book Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Pet Name & Species</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="e.g. Leo (Golden Retriever)"
                        value={formData.petName}
                        onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Guardian Name</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="Your full name"
                        value={formData.ownerName}
                        onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Contact Phone Number</label>
                      <input
                        type="tel"
                        required
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Chief Clinical Concern</label>
                      <textarea
                        className="form-textarea"
                        placeholder="Describe symptoms, duration, or routine checkup requirement..."
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      />
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Submit Appointment Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
