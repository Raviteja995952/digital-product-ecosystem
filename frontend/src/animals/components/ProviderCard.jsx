import React from 'react';
import { Icon } from '../../common/icons';

export const ProviderCard = ({ provider, onViewDetails, onQuickCall }) => {
  return (
    <article className="provider-card">
      <div className="provider-card-photo-col">
        <div className="provider-photo-frame">
          <img
            src={provider.imageUrl}
            alt={`${provider.name} facility`}
            loading="lazy"
          />
          <div className="provider-photo-badges">
            {provider.isEmergency && (
              <span className="badge-emergency-live">
                <Icon name="emergency" size={12} color="#FFFFFF" />
                <span>24/7 Emergency</span>
              </span>
            )}
            {provider.verified && (
              <span className="badge-verified">
                <Icon name="shieldCheck" size={12} color="#FFFFFF" />
                <span>Verified Facility</span>
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="provider-card-content-col">
        <div>
          {/* Header row with Category and Rating */}
          <div className="provider-meta-row">
            <span className="provider-category-tag">{provider.typeName}</span>
            <div className="provider-rating-pill">
              <Icon name="star" size={13} color="#C26D45" />
              <span className="rating-value">{provider.rating.toFixed(1)}</span>
              <span className="rating-count">({provider.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Provider Name */}
          <h3 className="provider-title-text" onClick={() => onViewDetails(provider)}>
            {provider.name}
          </h3>

          {/* Address & Distance */}
          <div className="provider-location-row">
            <Icon name="mapPin" size={14} color="#6B7280" />
            <span className="location-name">{provider.neighborhood}, {provider.city}</span>
            <span className="distance-badge">{provider.distanceKm} km away</span>
          </div>

          {/* Hours & Doctor */}
          <div className="provider-schedule-row">
            <span className="status-indicator-dot" />
            <Icon name="clock" size={13} color="#6B7280" />
            <span className="hours-text">{provider.hours}</span>
          </div>

          <div className="provider-lead-doctor">
            <Icon name="stethoscope" size={13} color="var(--fauna-forest)" />
            <span>{provider.leadDoctor}</span>
          </div>

          {/* Services Badges */}
          <div className="provider-services-list">
            {provider.services.slice(0, 3).map((srv, idx) => (
              <span key={idx} className="clinical-service-pill">{srv}</span>
            ))}
            {provider.services.length > 3 && (
              <span className="clinical-service-pill more-tag">
                +{provider.services.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Card Footer */}
        <div className="provider-card-bottom-bar">
          <div className="provider-pricing-block">
            <span className="pricing-label">Standard Consult</span>
            <span className="pricing-amount">{provider.consultationFee}</span>
          </div>

          <div className="provider-action-group">
            <button
              type="button"
              onClick={() => onQuickCall(provider)}
              className="btn-quick-call"
              title={`Call ${provider.phone}`}
              aria-label={`Call ${provider.name}`}
            >
              <Icon name="phone" size={14} />
              <span>Call</span>
            </button>

            <button
              type="button"
              onClick={() => onViewDetails(provider)}
              className="btn-book-visit"
            >
              <span>View Profile</span>
              <Icon name="arrowRight" size={13} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
