import React from 'react';
import { ChefHat, ShoppingBag, Utensils, Star, Flame, MapPin } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';
import './Hero.css';

const Hero = ({ onOpenOrderModal, onOpenReservationModal }) => {
  const handleScrollToMenu = (e) => {
    e.preventDefault();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      const headerOffset = 80;
      const elementPosition = menuSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Overlay Layer */}
      <div className="hero-bg-media">
        <img 
          src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1920&auto=format&fit=crop" 
          alt="Authentic Guntur Biryani Handi" 
          className="hero-bg-img"
        />
        <div className="hero-overlay-gradient"></div>
        <div className="hero-vignette"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Top Badge */}
          <div className="hero-badge animate-fade-in">
            <Flame className="hero-badge-icon" size={16} />
            <span>{RESTAURANT_CONFIG.highlightsLine}</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title animate-slide-up">
            Authentic Flavours. <br />
            <span className="text-gradient-gold">Unforgettable Moments.</span>
          </h1>

          {/* Supporting Text */}
          <p className="hero-subtitle animate-slide-up">
            {RESTAURANT_CONFIG.subTagline}
          </p>

          {/* Location Quick Tag */}
          <div className="hero-location-pill">
            <MapPin size={14} className="location-pill-icon" />
            <span>Near Srungavarapukota, Boddavara, Andhra Pradesh</span>
          </div>

          {/* Primary Action CTAs */}
          <div className="hero-actions animate-slide-up">
            <button 
              className="btn btn-primary btn-lg hero-btn-order"
              onClick={onOpenOrderModal}
            >
              <ShoppingBag size={20} />
              Order Now
            </button>
            
            <a 
              href="#menu" 
              onClick={handleScrollToMenu}
              className="btn btn-gold btn-lg hero-btn-menu"
            >
              <Utensils size={20} />
              Explore Menu
            </a>

            <button 
              className="btn btn-outline btn-lg hero-btn-reserve"
              onClick={onOpenReservationModal}
            >
              <ChefHat size={20} />
              Book Table
            </button>
          </div>

          {/* Highlights / Rating Pill */}
          <div className="hero-stats-row">
            <div className="hero-stat-item">
              <div className="hero-stat-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="star-filled" />
                ))}
              </div>
              <span className="hero-stat-label">4.8 ★ Rated Biryani</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Authentic Spices</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">Fresh</span>
              <span className="hero-stat-label">Handi Coal Dum</span>
            </div>
          </div>
        </div>

        {/* Floating Dish Showcase Card */}
        <div className="hero-floating-card-wrap">
          <div className="hero-floating-card glass-card">
            <div className="floating-card-image-wrap">
              <img 
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop" 
                alt="Signature Guntur Dum Biryani"
                className="floating-card-img" 
              />
              <span className="floating-badge-spicy">🌶️ Authentic Spice</span>
            </div>
            <div className="floating-card-details">
              <div className="floating-card-header">
                <h3>Special Chicken Biryani</h3>
                <span className="floating-card-price">₹280</span>
              </div>
              <p>Fragrant basmati rice layered with juicy chicken & rich ghee</p>
              <button 
                className="floating-card-btn"
                onClick={onOpenOrderModal}
              >
                Quick Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Curve / Transition */}
      <div className="hero-bottom-fade"></div>
    </section>
  );
};

export default Hero;
