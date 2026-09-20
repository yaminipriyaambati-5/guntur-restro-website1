import React from 'react';
import { Flame, Clock, ShieldCheck, ShoppingBag, Sparkles, CheckCircle2 } from 'lucide-react';
import { FEATURED_DISH } from '../data/menuData';
import './FeaturedDish.css';

const FeaturedDish = ({ onOpenOrderModal }) => {
  return (
    <section id="featured" className="featured-section section-padding">
      <div className="container">
        <div className="featured-card glass-card">
          <div className="featured-grid">
            {/* Image Column */}
            <div className="featured-image-col">
              <div className="featured-image-frame">
                <img 
                  src={FEATURED_DISH.image} 
                  alt={FEATURED_DISH.name} 
                  className="featured-dish-img"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
                <div className="featured-badge-overlay">
                  <Sparkles size={16} /> Signature Masterpiece
                </div>
                <div className="featured-price-tag">
                  ₹{FEATURED_DISH.price}
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="featured-content-col">
              <div className="featured-tag">
                <Flame size={16} className="tag-flame-icon" /> Chef's Special Spotlight
              </div>
              
              <h2 className="featured-title">
                {FEATURED_DISH.name}
              </h2>

              <p className="featured-description">
                {FEATURED_DISH.description}
              </p>

              {/* Dish Metadata Chips */}
              <div className="featured-meta-row">
                <div className="meta-chip">
                  <Clock size={16} className="meta-icon" />
                  <span>Prep: {FEATURED_DISH.prepTime}</span>
                </div>
                <div className="meta-chip">
                  <Flame size={16} className="meta-icon spicy-icon" />
                  <span>Fiery Guntur Chilli</span>
                </div>
                <div className="meta-chip">
                  <ShieldCheck size={16} className="meta-icon" />
                  <span>100% Halal Meat</span>
                </div>
              </div>

              {/* Highlights List */}
              <ul className="featured-highlights-list">
                {FEATURED_DISH.highlights.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Row */}
              <div className="featured-cta-row">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => onOpenOrderModal(FEATURED_DISH)}
                >
                  <ShoppingBag size={20} />
                  Order Signature Biryani Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDish;
