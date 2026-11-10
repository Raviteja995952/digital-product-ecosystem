import React, { useState } from 'react';
import { Icon } from '../../common/icons';
import { API_ENDPOINTS } from '../../config/api';

const AVAILABLE_SERVICES = [
  'General Consultations',
  'Emergency ICU',
  'Soft-Tissue Surgery',
  'Orthopedic Surgery',
  'Ultrasonography',
  'Digital X-Ray',
  'Dental Scaling',
  'Vaccination & Microchip',
  'Feline-Only Ward',
  'Pet Boarding & Foster',
  'Mobile Ambulance Transport',
  'Pathology Blood Panels'
];

const CATEGORIES = [
  'Veterinary Clinic',
  'Animal Hospital',
  'Pet Boarding',
  'Diagnostics',
  'Ambulance',
  'NGO'
];

export const BusinessSubmissionModal = ({ onClose, onSubmitted }) => {
  const [formData, setFormData] = useState({
    practiceName: '',
    contactPerson: '',
    businessCategory: 'Veterinary Clinic',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    city: 'Bengaluru',
    pinCode: '',
    services: ['General Consultations', 'Vaccination & Microchip'],
    openingHours: '09:00 AM – 08:00 PM',
    websiteUrl: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [serverError, setServerError] = useState('');

  const toggleService = (srv) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      const updated = exists ? prev.services.filter((s) => s !== srv) : [...prev.services, srv];
      return { ...prev, services: updated };
    });
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.practiceName.trim()) {
      newErrors.practiceName = 'Practice or hospital name is required.';
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Owner or contact person name is required.';
    }

    if (!formData.businessCategory) {
      newErrors.businessCategory = 'Please select a valid business category.';
    }

    const phoneDigits = formData.phoneNumber.replace(/\D/g, '');
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required.';
    } else if (phoneDigits.length < 8) {
      newErrors.phoneNumber = 'Please enter a valid phone number with area/mobile code.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email address is required.';
    } else if (!emailRegex.test(formData.emailAddress.trim())) {
      newErrors.emailAddress = 'Please enter a valid email address.';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Complete physical facility address is required.';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required.';
    }

    if (!formData.pinCode.trim()) {
      newErrors.pinCode = 'Postal PIN code is required.';
    }

    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one clinical service offered.';
    }

    if (!formData.openingHours.trim()) {
      newErrors.openingHours = 'Operating or consultation hours are required.';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please provide a short business description.';
    } else if (formData.description.trim().length < 15) {
      newErrors.description = 'Please provide at least 15 characters describing clinical specialties.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (serverError) setServerError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError('');

    try {
      const response = await fetch(API_ENDPOINTS.practices, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          practiceName: formData.practiceName.trim(),
          contactPerson: formData.contactPerson.trim(),
          businessCategory: formData.businessCategory,
          phoneNumber: formData.phoneNumber.trim(),
          emailAddress: formData.emailAddress.trim(),
          address: formData.address.trim(),
          city: formData.city.trim(),
          pinCode: formData.pinCode.trim(),
          services: formData.services,
          openingHours: formData.openingHours.trim(),
          websiteUrl: formData.websiteUrl.trim(),
          description: formData.description.trim()
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.message || `Server responded with status ${response.status}`);
      }

      const result = await response.json();
      const saved = result.data || {};

      setSubmitResult({
        success: true,
        referenceId: saved.referenceCode || `PRAC-${saved.id || 'NEW'}`,
        status: saved.auditStatus || 'PENDING_REVIEW',
        practiceName: saved.practiceName || formData.practiceName
      });

      if (onSubmitted) onSubmitted(saved);
    } catch (err) {
      console.error('Practice registration failed:', err);
      setServerError(
        err.message?.includes('Failed to fetch') || err.message?.includes('NetworkError')
          ? 'Unable to connect to registration server. Please ensure the backend is running and reachable.'
          : (err.message || 'Failed to submit practice registration. Please try again.')
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="provider-detail-modal practice-modal-card"
        style={{ maxWidth: '720px', width: '94%', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-custom-header">
          <div>
            <span className="section-label" style={{ color: 'var(--fauna-forest)' }}>Clinical Directory Intake</span>
            <h3 style={{ fontFamily: 'var(--fauna-serif)', fontSize: '1.45rem', color: 'var(--fauna-forest)', margin: '0.2rem 0 0' }}>
              List Your Animal Healthcare Practice
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-icon-btn"
            onClick={onClose}
            aria-label="Close practice registration modal"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        {/* Body Content */}
        <div style={{ padding: '2rem', overflowY: 'auto', flex: 1 }}>
          {submitResult ? (
            <div className="submission-success-view">
              <div className="success-icon-badge">
                <Icon name="shieldCheck" size={32} color="#FFFFFF" />
              </div>
              <h4 className="success-headline">Registration Queued for Audit</h4>
              <p className="success-body">
                Thank you for applying to list <strong>{submitResult.practiceName}</strong> on FaunaCare. To protect animal guardians, new practices are never published instantly.
              </p>

              <div className="reference-ticket-box">
                <div className="ref-ticket-row">
                  <span className="ref-label">Registration Reference ID:</span>
                  <span className="ref-code">{submitResult.referenceId}</span>
                </div>
                <div className="ref-ticket-row">
                  <span className="ref-label">Audit Review Status:</span>
                  <span className="ref-status">{submitResult.status}</span>
                </div>
                <div className="ref-ticket-row">
                  <span className="ref-label">Verification SLA:</span>
                  <span className="ref-value">24–48 Business Hours</span>
                </div>
              </div>

              <div style={{ background: 'var(--fauna-surface-alt)', border: '1px solid var(--fauna-border)', borderRadius: '10px', padding: '1rem', marginTop: '1.25rem', textAlign: 'left', fontSize: '0.825rem', color: 'var(--fauna-text-muted)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--fauna-forest)', display: 'block', marginBottom: '3px' }}>
                  What happens next?
                </strong>
                Our clinical auditing team will review your state veterinary council licensure and call your facility to confirm operating hours and emergency ambulance readiness.
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.75rem' }}>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={onClose}
                  style={{ minWidth: '140px' }}
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {serverError && (
                <div className="form-server-error-banner" role="alert">
                  <Icon name="emergency" size={16} />
                  <span>{serverError}</span>
                </div>
              )}

              {/* Section 1: Practice Identity */}
              <div className="form-section-header">
                <span className="form-section-num">01</span>
                <span>Facility Identity & Leadership</span>
              </div>

              <div className="form-grid-2col">
                <div className="form-group">
                  <label htmlFor="prac-name">
                    Practice / Hospital Name <span className="req-star">*</span>
                  </label>
                  <input
                    id="prac-name"
                    type="text"
                    className={`form-input ${errors.practiceName ? 'has-error' : ''}`}
                    placeholder="e.g. Cedar Grove Animal Hospital"
                    value={formData.practiceName}
                    onChange={(e) => handleChange('practiceName', e.target.value)}
                  />
                  {errors.practiceName && (
                    <span className="field-error-msg">{errors.practiceName}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="prac-owner">
                    Owner / Contact Person <span className="req-star">*</span>
                  </label>
                  <input
                    id="prac-owner"
                    type="text"
                    className={`form-input ${errors.contactPerson ? 'has-error' : ''}`}
                    placeholder="e.g. Dr. Shalini Roy, BVSc"
                    value={formData.contactPerson}
                    onChange={(e) => handleChange('contactPerson', e.target.value)}
                  />
                  {errors.contactPerson && (
                    <span className="field-error-msg">{errors.contactPerson}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="prac-category">
                  Business Category <span className="req-star">*</span>
                </label>
                <select
                  id="prac-category"
                  className={`form-select ${errors.businessCategory ? 'has-error' : ''}`}
                  value={formData.businessCategory}
                  onChange={(e) => handleChange('businessCategory', e.target.value)}
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.businessCategory && (
                  <span className="field-error-msg">{errors.businessCategory}</span>
                )}
              </div>

              {/* Section 2: Contact & Address */}
              <div className="form-section-header" style={{ marginTop: '1.75rem' }}>
                <span className="form-section-num">02</span>
                <span>Contact Details & Location</span>
              </div>

              <div className="form-grid-2col">
                <div className="form-group">
                  <label htmlFor="prac-phone">
                    Phone Number <span className="req-star">*</span>
                  </label>
                  <input
                    id="prac-phone"
                    type="tel"
                    className={`form-input ${errors.phoneNumber ? 'has-error' : ''}`}
                    placeholder="e.g. +91 80 2553 4410"
                    value={formData.phoneNumber}
                    onChange={(e) => handleChange('phoneNumber', e.target.value)}
                  />
                  {errors.phoneNumber && (
                    <span className="field-error-msg">{errors.phoneNumber}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="prac-email">
                    Email Address <span className="req-star">*</span>
                  </label>
                  <input
                    id="prac-email"
                    type="email"
                    className={`form-input ${errors.emailAddress ? 'has-error' : ''}`}
                    placeholder="e.g. contact@cedargrovevet.com"
                    value={formData.emailAddress}
                    onChange={(e) => handleChange('emailAddress', e.target.value)}
                  />
                  {errors.emailAddress && (
                    <span className="field-error-msg">{errors.emailAddress}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="prac-address">
                  Complete Address <span className="req-star">*</span>
                </label>
                <input
                  id="prac-address"
                  type="text"
                  className={`form-input ${errors.address ? 'has-error' : ''}`}
                  placeholder="Street, suite, building, landmark"
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                />
                {errors.address && (
                  <span className="field-error-msg">{errors.address}</span>
                )}
              </div>

              <div className="form-grid-2col">
                <div className="form-group">
                  <label htmlFor="prac-city">
                    City <span className="req-star">*</span>
                  </label>
                  <input
                    id="prac-city"
                    type="text"
                    className={`form-input ${errors.city ? 'has-error' : ''}`}
                    placeholder="e.g. Bengaluru"
                    value={formData.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                  />
                  {errors.city && (
                    <span className="field-error-msg">{errors.city}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="prac-pin">
                    PIN Code <span className="req-star">*</span>
                  </label>
                  <input
                    id="prac-pin"
                    type="text"
                    className={`form-input ${errors.pinCode ? 'has-error' : ''}`}
                    placeholder="e.g. 560034"
                    value={formData.pinCode}
                    onChange={(e) => handleChange('pinCode', e.target.value)}
                  />
                  {errors.pinCode && (
                    <span className="field-error-msg">{errors.pinCode}</span>
                  )}
                </div>
              </div>

              {/* Section 3: Operations & Services */}
              <div className="form-section-header" style={{ marginTop: '1.75rem' }}>
                <span className="form-section-num">03</span>
                <span>Clinical Operations & Specialties</span>
              </div>

              {/* Services Multi-Select */}
              <div className="form-group">
                <label>
                  Services Offered (Select all that apply) <span className="req-star">*</span>
                </label>
                <div className="services-multi-select-grid">
                  {AVAILABLE_SERVICES.map((srv) => {
                    const isChecked = formData.services.includes(srv);
                    return (
                      <button
                        key={srv}
                        type="button"
                        className={`service-select-pill ${isChecked ? 'selected' : ''}`}
                        onClick={() => toggleService(srv)}
                      >
                        <span className="pill-check-icon">{isChecked ? '✓' : '+'}</span>
                        <span>{srv}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.services && (
                  <span className="field-error-msg">{errors.services}</span>
                )}
              </div>

              <div className="form-grid-2col">
                <div className="form-group">
                  <label htmlFor="prac-hours">
                    Opening Hours <span className="req-star">*</span>
                  </label>
                  <input
                    id="prac-hours"
                    type="text"
                    className={`form-input ${errors.openingHours ? 'has-error' : ''}`}
                    placeholder="e.g. 24 Hours / 7 Days or 08:30 AM - 08:30 PM"
                    value={formData.openingHours}
                    onChange={(e) => handleChange('openingHours', e.target.value)}
                  />
                  {errors.openingHours && (
                    <span className="field-error-msg">{errors.openingHours}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="prac-website">
                    Website URL <span className="optional-label">(Optional)</span>
                  </label>
                  <input
                    id="prac-website"
                    type="url"
                    className="form-input"
                    placeholder="https://examplevet.com"
                    value={formData.websiteUrl}
                    onChange={(e) => handleChange('websiteUrl', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="prac-desc">
                  Short Business Description <span className="req-star">*</span>
                </label>
                <textarea
                  id="prac-desc"
                  className={`form-textarea ${errors.description ? 'has-error' : ''}`}
                  style={{ minHeight: '90px' }}
                  placeholder="Describe your facility, special surgical equipment, resident doctor team, and philosophy of care..."
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                />
                {errors.description && (
                  <span className="field-error-msg">{errors.description}</span>
                )}
              </div>

              {/* Submit Buttons */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '2rem', borderTop: '1px solid var(--fauna-border)', paddingTop: '1.25rem' }}>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                  style={{ minWidth: '170px', justifyContent: 'center' }}
                >
                  {isSubmitting ? (
                    <span>Registering Practice...</span>
                  ) : (
                    <>
                      <Icon name="plus" size={14} />
                      <span>Submit for Verification</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
