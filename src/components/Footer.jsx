import React from 'react';
import { Flame, UtensilsCrossed, MapPin, Phone, Clock, ArrowUp, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="brand-icon-wrap">
                <Flame className="brand-flame-icon" size={24} />
                <UtensilsCrossed className="brand-utensils-icon" size={20} />
              </div>
              <div className="brand-text">
                <span className="brand-title">Guntur <span className="brand-highlight">Restro</span></span>
                <span className="brand-subtitle">Authentic Biryani & Dining</span>
              </div>
            </div>

            <p className="footer-about-text">
              Bringing authentic Andhra flavours, slow-cooked Dum Biryanis, and traditional spice recipes to food lovers near Srungavarapukota & Boddavara.
            </p>

            <div className="footer-social-icons">
              <a href={RESTAURANT_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={RESTAURANT_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href={RESTAURANT_CONFIG.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
              <li><a href="#menu" onClick={(e) => handleNavClick(e, 'menu')}>Interactive Menu</a></li>
              <li><a href="#featured" onClick={(e) => handleNavClick(e, 'featured')}>Signature Biryani</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Our Story</a></li>
              <li><a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Photo Gallery</a></li>
              <li><a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')}>Guest Reviews</a></li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="footer-col">
            <h4 className="footer-heading">Menu Highlights</h4>
            <ul className="footer-links">
              <li><a href="#menu" onClick={(e) => handleNavClick(e, 'menu')}>Special Dum Biryani</a></li>
              <li><a href="#menu" onClick={(e) => handleNavClick(e, 'menu')}>Guntur Chilli Chicken</a></li>
              <li><a href="#menu" onClick={(e) => handleNavClick(e, 'menu')}>Clay Oven Tandoori Tikka</a></li>
              <li><a href="#menu" onClick={(e) => handleNavClick(e, 'menu')}>Paneer Butter Masala</a></li>
              <li><a href="#menu" onClick={(e) => handleNavClick(e, 'menu')}>Fresh Lime & Beverages</a></li>
              <li><a href="#menu" onClick={(e) => handleNavClick(e, 'menu')}>Hot Gulab Jamun & Desserts</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Find Us</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-icon" />
              <span>{RESTAURANT_CONFIG.location.fullAddress}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-icon" />
              <span>{RESTAURANT_CONFIG.contact.phone}</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} className="footer-icon" />
              <span>{RESTAURANT_CONFIG.timing.days}: {RESTAURANT_CONFIG.timing.hours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 Guntur Restro. All rights reserved.
          </p>

          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Scroll back to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
