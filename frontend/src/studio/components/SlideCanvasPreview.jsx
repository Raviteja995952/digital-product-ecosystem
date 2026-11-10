import React, { useRef } from 'react';
import { Icon } from '../../common/icons';

const formatNum = (num) => String(num).padStart(2, '0');

export const SlideCanvasPreview = ({
  slide,
  theme,
  platform,
  authorHandle,
  slideIndex,
  totalSlides,
  innerRef,
  onNext,
  onPrev,
  onGoToSlide,
  direction = 'next'
}) => {
  if (!slide) return null;

  const isSquare = platform === 'LINKEDIN_SQUARE';
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    if (e.changedTouches && e.changedTouches.length > 0) {
      const deltaX = touchStartX.current - e.changedTouches[0].clientX;
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;

      // Horizontal swipe threshold >= 40px
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) >= 40) {
        if (deltaX > 0) {
          if (slideIndex + 1 < totalSlides && onNext) onNext();
        } else {
          if (slideIndex > 0 && onPrev) onPrev();
        }
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div
      ref={innerRef}
      className={`slide-canvas-card ${isSquare ? 'square' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        borderColor: theme.border
      }}
    >
      <div
        key={`${slideIndex}-${direction}`}
        className={`slide-animated-viewport slide-animate-${direction}`}
      >
        {/* Realistic Social Header */}
        <div className="slide-top-header">
          <div className="slide-author-profile">
            <div
              className="author-avatar-circle"
              style={{
                backgroundColor: theme.badgeBg,
                color: theme.accent,
                borderColor: theme.border
              }}
            >
              {authorHandle ? authorHandle.replace('@', '').slice(0, 2).toUpperCase() : 'FF'}
            </div>
            <div className="author-name-group">
              <span className="author-handle-text" style={{ color: theme.text }}>
                {authorHandle || '@founder'}
              </span>
              <span className="slide-platform-badge" style={{ color: theme.subtext }}>
                {platform === 'LINKEDIN_SQUARE' ? 'LinkedIn Document' : 'Instagram Carousel'}
              </span>
            </div>
          </div>

          <span
            className="slide-category-pill"
            style={{
              backgroundColor: theme.badgeBg,
              color: theme.badgeText
            }}
          >
            {slide.tag || 'PERSPECTIVE'}
          </span>
        </div>

        {/* Clean Slide Core Content (NO design instructions on canvas!) */}
        <div className="slide-content-center">
          <h2
            className="slide-headline-text"
            style={{ color: theme.text }}
          >
            {slide.headline}
          </h2>

          <p
            className="slide-body-text"
            style={{ color: theme.subtext }}
          >
            {slide.bodyText}
          </p>
        </div>

        {/* Slide Footer */}
        <div
          className="slide-bottom-footer"
          style={{ borderColor: theme.border }}
        >
          <div className="slide-footer-left">
            {slideIndex > 0 ? (
              <button
                type="button"
                className="slide-nav-action-btn slide-prev-action-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev && onPrev();
                }}
                style={{
                  backgroundColor: theme.badgeBg,
                  color: theme.subtext,
                  borderColor: theme.border
                }}
                title="Previous slide (Left Arrow)"
              >
                <Icon name="arrowLeft" size={13} color={theme.subtext} />
                <span>Back</span>
              </button>
            ) : (
              <span
                className="slide-start-pill"
                style={{ color: theme.subtext }}
              >
                Cover
              </span>
            )}

            <div
              className="slide-counter-badge"
              style={{ color: theme.accent }}
            >
              {formatNum(slideIndex + 1)} / {formatNum(totalSlides)}
            </div>
          </div>

          <div className="slide-footer-right">
            {slideIndex + 1 < totalSlides ? (
              <button
                type="button"
                className="slide-nav-action-btn slide-swipe-action-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext && onNext();
                }}
                style={{
                  backgroundColor: theme.badgeBg,
                  color: theme.accent,
                  borderColor: theme.border
                }}
                title="Next slide (Right Arrow or Swipe Left)"
              >
                <span>Swipe</span>
                <Icon name="arrowRight" size={14} color={theme.accent} />
              </button>
            ) : (
              <div className="slide-completion-controls">
                <button
                  type="button"
                  className="slide-nav-action-btn slide-restart-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onGoToSlide && onGoToSlide(0);
                  }}
                  style={{
                    backgroundColor: theme.badgeBg,
                    color: theme.accent,
                    borderColor: theme.border
                  }}
                  title="Return to slide 01"
                >
                  <span>↺ Slide 01</span>
                </button>
                <span
                  className="slide-end-badge"
                  style={{ color: theme.subtext }}
                >
                  End of deck
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
