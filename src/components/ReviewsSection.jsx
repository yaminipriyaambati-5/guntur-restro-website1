import React from 'react';
import { Star, MessageSquareQuote, Sparkles, Info, ThumbsUp } from 'lucide-react';
import { REVIEWS_LIST, REVIEWS_STATS } from '../data/reviewsData';
import './ReviewsSection.css';

const ReviewsSection = () => {
  return (
    <section id="reviews" className="reviews-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <Sparkles size={16} /> Guest Experiences
          </span>
          <h2 className="section-title">
            What Our <span className="text-gradient-gold">Guests Say</span>
          </h2>
          <p className="section-description">
            Read initial guest feedback and dining reviews celebrating our authentic Biryani, spicy chicken starters, and hospitality.
          </p>
        </div>

        {/* Rating Overview Stats Banner */}
        <div className="reviews-stats-banner glass-card">
          <div className="stat-box">
            <div className="stat-big-num">{REVIEWS_STATS.averageRating}</div>
            <div className="stat-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="star-filled" />
              ))}
            </div>
            <span className="stat-label">Average Guest Rating</span>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-box">
            <div className="stat-big-num">{REVIEWS_STATS.totalReviews}</div>
            <span className="stat-label">Local & Traveler Reviews</span>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-box">
            <div className="stat-big-num">{REVIEWS_STATS.recommendationPercentage}</div>
            <span className="stat-label">Recommend Biryani Handis</span>
          </div>
        </div>

        {/* Notice Badge */}
        <div className="reviews-sample-notice">
          <Info size={14} />
          <span>{REVIEWS_STATS.noticeLabel}</span>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {REVIEWS_LIST.map((rev) => (
            <div key={rev.id} className="review-card glass-card">
              <div className="review-card-header">
                <MessageSquareQuote size={32} className="quote-icon" />
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < Math.floor(rev.rating) ? 'star-filled' : 'star-empty'} 
                    />
                  ))}
                </div>
              </div>

              <p className="review-comment">"{rev.comment}"</p>

              <div className="review-dish-tag">
                <ThumbsUp size={14} className="thumb-icon" /> Loved: <span>{rev.dish}</span>
              </div>

              <div className="review-author-row">
                <div className="author-avatar">
                  {rev.name.charAt(0)}
                </div>
                <div className="author-info">
                  <div className="author-name-row">
                    <h4>{rev.name}</h4>
                    <span className="sample-badge">Sample Review</span>
                  </div>
                  <p className="author-role">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
