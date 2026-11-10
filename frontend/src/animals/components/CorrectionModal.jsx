import React, { useState } from 'react';
import { Icon } from '../../common/icons';
import { API_ENDPOINTS } from '../../config/api';

export const CorrectionModal = ({ onClose, initialProviderName = '' }) => {
  const [formData, setFormData] = useState({
    providerName: initialProviderName || '',
    correctionType: 'Wrong address',
    correctInformation: '',
    userEmail: '',
    additionalDetails: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null); // { success: true, refCode: '...', message: '...' }
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!formData.providerName.trim()) {
      newErrors.providerName = 'Provider or clinic name is required.';
    }

    if (!formData.correctionType) {
      newErrors.correctionType = 'Please select a correction category.';
    }

    if (!formData.correctInformation.trim()) {
      newErrors.correctInformation = 'Please provide the correct information.';
    } else if (formData.correctInformation.trim().length < 5) {
      newErrors.correctInformation = 'Please describe the accurate details with at least 5 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.userEmail.trim()) {
      newErrors.userEmail = 'Your email address is required so we can verify the update.';
    } else if (!emailRegex.test(formData.userEmail.trim())) {
      newErrors.userEmail = 'Please enter a valid email address (e.g. doctor@example.com).';
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
      const response = await fetch(API_ENDPOINTS.corrections, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          providerName: formData.providerName.trim(),
          correctionType: formData.correctionType,
          correctInformation: formData.correctInformation.trim(),
          userEmail: formData.userEmail.trim(),
          additionalDetails: formData.additionalDetails.trim()
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const errMsg = errorData?.message || `Server responded with error status ${response.status}`;
        throw new Error(errMsg);
      }

      const result = await response.json();
      const savedData = result.data || {};
      setSubmitResult({
        success: true,
        referenceId: savedData.referenceCode || `CORR-${savedData.id || 'SUBMITTED'}`,
        status: savedData.status || 'PENDING_REVIEW',
        message: result.message || 'Correction received for data verification audit.'
      });
    } catch (err) {
      console.error('Correction submission failed:', err);
      setServerError(
        err.message?.includes('Failed to fetch') || err.message?.includes('NetworkError')
          ? 'Unable to connect to verification server. Please ensure the backend is running and reachable.'
          : (err.message || 'Failed to submit correction. Please check your network and try again.')
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      providerName: '',
      correctionType: 'Wrong address',
      correctInformation: '',
      userEmail: '',
      additionalDetails: ''
    });
    setErrors({});
    setSubmitResult(null);
    setServerError('');
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="provider-detail-modal correction-modal-card"
        style={{ maxWidth: '580px', width: '92%' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modal-custom-header">
          <div>
            <span className="section-label" style={{ color: 'var(--fauna-terracotta)' }}>Directory Integrity</span>
            <h3 style={{ fontFamily: 'var(--fauna-serif)', fontSize: '1.45rem', color: 'var(--fauna-forest)', margin: '0.2rem 0 0' }}>
              Submit a Data Correction
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-icon-btn"
            onClick={onClose}
            aria-label="Close correction modal"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.75rem 2rem' }}>
          {submitResult ? (
            <div className="submission-success-view">
              <div className="success-icon-badge">
                <Icon name="check" size={32} color="#FFFFFF" />
              </div>
              <h4 className="success-headline">Correction Submitted for Audit</h4>
              <p className="success-body">
                Thank you for safeguarding clinical accuracy. Your correction request has been logged and assigned to our veterinary verification team.
              </p>

              <div className="reference-ticket-box">
                <div className="ref-ticket-row">
                  <span className="ref-label">Submission Reference ID:</span>
                  <span className="ref-code">{submitResult.referenceId}</span>
                </div>
                <div className="ref-ticket-row">
                  <span className="ref-label">Audit Review Status:</span>
                  <span className="ref-status">{submitResult.status}</span>
                </div>
                <div className="ref-ticket-row">
                  <span className="ref-label">Facility Flagged:</span>
                  <span className="ref-value">{formData.providerName}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.75rem' }}>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handleResetForm}
                >
                  Submit Another
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={onClose}
                >
                  Done
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

              {/* Field 1: Provider / Clinic Name */}
              <div className="form-group">
                <label htmlFor="corr-provider-name">
                  Provider / Clinic Name <span className="req-star">*</span>
                </label>
                <input
                  id="corr-provider-name"
                  type="text"
                  className={`form-input ${errors.providerName ? 'has-error' : ''}`}
                  placeholder="e.g. St. Jude Animal Specialty Hospital"
                  value={formData.providerName}
                  onChange={(e) => handleChange('providerName', e.target.value)}
                />
                {errors.providerName && (
                  <span className="field-error-msg">{errors.providerName}</span>
                )}
              </div>

              {/* Field 2: Type of Correction */}
              <div className="form-group">
                <label htmlFor="corr-type">
                  Type of Correction <span className="req-star">*</span>
                </label>
                <select
                  id="corr-type"
                  className={`form-select ${errors.correctionType ? 'has-error' : ''}`}
                  value={formData.correctionType}
                  onChange={(e) => handleChange('correctionType', e.target.value)}
                >
                  <option value="Wrong address">Wrong address / Relocated facility</option>
                  <option value="Phone number">Phone number / Emergency line inactive</option>
                  <option value="Working hours">Working hours / 24-7 status changed</option>
                  <option value="Services">Services / Doctor specialties inaccurate</option>
                  <option value="Other">Other clinical flag or closure</option>
                </select>
                {errors.correctionType && (
                  <span className="field-error-msg">{errors.correctionType}</span>
                )}
              </div>

              {/* Field 3: Correct Information */}
              <div className="form-group">
                <label htmlFor="corr-info">
                  Correct Information <span className="req-star">*</span>
                </label>
                <textarea
                  id="corr-info"
                  className={`form-textarea ${errors.correctInformation ? 'has-error' : ''}`}
                  style={{ minHeight: '95px' }}
                  placeholder="State the verified new address, updated phone number, or new consultation schedule..."
                  value={formData.correctInformation}
                  onChange={(e) => handleChange('correctInformation', e.target.value)}
                />
                {errors.correctInformation && (
                  <span className="field-error-msg">{errors.correctInformation}</span>
                )}
              </div>

              {/* Field 4: User Email */}
              <div className="form-group">
                <label htmlFor="corr-email">
                  Your Email Address <span className="req-star">*</span>
                </label>
                <input
                  id="corr-email"
                  type="email"
                  className={`form-input ${errors.userEmail ? 'has-error' : ''}`}
                  placeholder="name@example.com (for verification follow-up)"
                  value={formData.userEmail}
                  onChange={(e) => handleChange('userEmail', e.target.value)}
                />
                {errors.userEmail && (
                  <span className="field-error-msg">{errors.userEmail}</span>
                )}
                <span className="field-hint">
                  We use your email exclusively to verify the change against clinical records. Zero marketing spam.
                </span>
              </div>

              {/* Field 5: Additional Details (Optional) */}
              <div className="form-group">
                <label htmlFor="corr-details">
                  Additional Details <span className="optional-label">(Optional)</span>
                </label>
                <textarea
                  id="corr-details"
                  className="form-textarea"
                  style={{ minHeight: '75px' }}
                  placeholder="e.g. Visited in person on Monday, or spoke with head veterinarian Dr. Kulkarni..."
                  value={formData.additionalDetails}
                  onChange={(e) => handleChange('additionalDetails', e.target.value)}
                />
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.75rem', borderTop: '1px solid var(--fauna-border)', paddingTop: '1.25rem' }}>
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
                  style={{ minWidth: '150px', justifyContent: 'center' }}
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Icon name="check" size={14} />
                      <span>Submit Correction</span>
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
