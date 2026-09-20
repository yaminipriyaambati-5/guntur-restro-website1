import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, ExternalLink, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <Sparkles size={16} /> Location & Inquiry
          </span>
          <h2 className="section-title">
            Visit Us or <span className="text-gradient-gold">Get in Touch</span>
          </h2>
          <p className="section-description">
            Located conveniently near Srungavarapukota in Boddavara. Drop by for a delicious Biryani meal or reach out to us for bulk catering orders.
          </p>
        </div>

        <div className="contact-grid">
          {/* Information & Map Card */}
          <div className="contact-info-col">
            <div className="contact-card glass-card">
              <h3 className="contact-card-title">{RESTAURANT_CONFIG.name}</h3>

              {/* Detail Items */}
              <div className="contact-detail-item">
                <div className="contact-icon-wrap">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4>Location Address</h4>
                  <p>{RESTAURANT_CONFIG.location.fullAddress}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-wrap">
                  <Clock size={22} />
                </div>
                <div>
                  <h4>Business Hours</h4>
                  <p>{RESTAURANT_CONFIG.timing.days}: {RESTAURANT_CONFIG.timing.hours}</p>
                  <span className="status-badge-open">{RESTAURANT_CONFIG.timing.statusBadge}</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-wrap">
                  <Phone size={22} />
                </div>
                <div>
                  <h4>Contact Counter</h4>
                  <p>{RESTAURANT_CONFIG.contact.phone}</p>
                  <span className="sub-note">Available for Takeaway & Table Booking</span>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="contact-actions-row">
                <a 
                  href={`tel:${RESTAURANT_CONFIG.contact.phoneUnformatted}`} 
                  className="btn btn-primary btn-sm"
                >
                  <Phone size={16} /> Call Restaurant
                </a>
                
                <a 
                  href={RESTAURANT_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-sm"
                >
                  <Navigation size={16} /> Get Directions
                  <ExternalLink size={12} style={{ marginLeft: '2px' }} />
                </a>
              </div>
            </div>

            {/* Embedded Visual Map Card */}
            <div className="contact-map-card glass-card">
              <div className="map-placeholder-bg">
                <div className="map-pin-pulse">
                  <MapPin size={32} className="map-pin-icon" />
                </div>
                <div className="map-text">
                  <h4>Guntur Restro Location</h4>
                  <p>Mulaboddavaram, Srungavarapukota Road</p>
                  <a 
                    href={RESTAURANT_CONFIG.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm map-open-btn"
                  >
                    Open Google Maps <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              <h3>Send Us a Message</h3>
              <p>Have a question about party catering, secret spice ingredients, or group dining?</p>

              {submitted ? (
                <div className="contact-success-state">
                  <CheckCircle2 size={48} className="success-icon" />
                  <h4>Message Received!</h4>
                  <p>Thank you for reaching out to Guntur Restro. Our team will contact you shortly on <strong>{formData.phone}</strong>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Full Name *</label>
                    <input 
                      id="contact-name"
                      type="text" 
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number *</label>
                    <input 
                      id="contact-phone"
                      type="tel" 
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Message or Special Request</label>
                    <textarea 
                      id="contact-message"
                      rows={4}
                      placeholder="e.g. Inquiry regarding party order for 15 people..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-gold btn-lg submit-btn">
                    <Send size={18} /> Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
