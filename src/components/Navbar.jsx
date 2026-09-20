import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Phone, Menu as MenuIcon, X, Flame } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';
import './Navbar.css';

const Navbar = ({ onOpenOrderModal, onOpenReservationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for highlight
      const sections = ['home', 'menu', 'featured', 'about', 'why-us', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="navbar-brand">
          <div className="brand-icon-wrap">
            <Flame className="brand-flame-icon" size={24} />
            <UtensilsCrossed className="brand-utensils-icon" size={20} />
          </div>
          <div className="brand-text">
            <span className="brand-title">Guntur <span className="brand-highlight">Restro</span></span>
            <span className="brand-subtitle">Authentic Biryani & Dining</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="navbar-desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <button 
            className="btn btn-outline btn-sm nav-reserve-btn"
            onClick={onOpenReservationModal}
          >
            Book Table
          </button>
          <button 
            className="btn btn-primary btn-sm nav-order-btn"
            onClick={onOpenOrderModal}
          >
            Order Now
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="brand-text">
            <span className="brand-title">Guntur <span className="brand-highlight">Restro</span></span>
          </div>
          <button 
            className="mobile-drawer-close" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="mobile-drawer-body">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`mobile-nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-cta">
            <button 
              className="btn btn-gold btn-lg"
              style={{ width: '100%', marginBottom: '0.75rem' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
            >
              Order Now
            </button>
            <button 
              className="btn btn-outline btn-lg"
              style={{ width: '100%' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservationModal();
              }}
            >
              Reserve a Table
            </button>
            <div className="mobile-contact-info">
              <p><Phone size={14} style={{ display: 'inline', marginRight: '6px' }} /> {RESTAURANT_CONFIG.contact.phone}</p>
              <p>{RESTAURANT_CONFIG.location.addressLine1}, {RESTAURANT_CONFIG.location.addressLine2}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
