import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, User, CheckCircle2, Utensils } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../../config/restaurantConfig';
import './ModalCommon.css';

const ReservationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: '2',
    notes: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!isSuccess ? (
          <>
            <div className="modal-header">
              <div className="modal-icon-badge">
                <Utensils size={22} />
              </div>
              <h3 className="modal-title">Book a Table</h3>
              <p className="modal-subtitle">Reserve a cozy table for family, friends, or celebration at Guntur Restro.</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label><User size={14} /> Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Anand Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label><Phone size={14} /> Contact Phone *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row three-col">
                <div className="form-group">
                  <label><Calendar size={14} /> Date *</label>
                  <input 
                    type="date" 
                    required 
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label><Clock size={14} /> Time *</label>
                  <select 
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="12:00">12:00 PM (Lunch)</option>
                    <option value="13:00">01:00 PM (Lunch)</option>
                    <option value="14:00">02:00 PM (Lunch)</option>
                    <option value="19:00">07:00 PM (Dinner)</option>
                    <option value="20:00">08:00 PM (Dinner)</option>
                    <option value="21:00">09:00 PM (Dinner)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label><Users size={14} /> Guests *</label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8+">8+ Large Family</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Special Requests (Optional)</label>
                <textarea 
                  rows={3} 
                  placeholder="e.g. High chair needed, preferred window table..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <div className="modal-actions">
                <button type="button" className="btn btn-outline" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-gold">
                  Confirm Table Request
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="modal-success-view">
            <CheckCircle2 size={56} className="success-icon-lg" />
            <h3>Reservation Requested!</h3>
            <p>Thank you <strong>{formData.name}</strong>. Your table request for <strong>{formData.guests} guests</strong> on <strong>{formData.date || 'Today'}</strong> at <strong>{formData.time}</strong> has been sent to our service desk.</p>
            <div className="success-info-pill">
              Call Counter: {RESTAURANT_CONFIG.contact.phone}
            </div>
            <button className="btn btn-primary" onClick={handleReset}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationModal;
