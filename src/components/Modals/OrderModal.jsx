import React, { useState } from 'react';
import { X, ShoppingBag, Phone, MessageCircle, Info, CheckCircle2, ArrowRight } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../../config/restaurantConfig';
import './ModalCommon.css';

const OrderModal = ({ isOpen, onClose, selectedDish }) => {
  const [orderType, setOrderType] = useState('takeaway'); // 'takeaway' or 'delivery'
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const dishName = selectedDish ? selectedDish.name : 'Special Dum Biryani & Starters';
  const dishPrice = selectedDish ? selectedDish.price : 280;
  const totalPrice = dishPrice * quantity;

  const handlePhoneCall = () => {
    window.location.href = `tel:${RESTAURANT_CONFIG.contact.phoneUnformatted}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Guntur Restro, I would like to place an order:\n- Item: ${dishName}\n- Quantity: ${quantity}\n- Total: ₹${totalPrice}\n- Name: ${customerName || 'Guest'}\n- Phone: ${customerPhone || 'N/A'}`
    );
    window.open(`https://wa.me/${RESTAURANT_CONFIG.contact.whatsapp}?text=${text}`, '_blank');
  };

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="modal-header">
              <div className="modal-icon-badge badge-red">
                <ShoppingBag size={22} />
              </div>
              <h3 className="modal-title">Place Your Order</h3>
              <p className="modal-subtitle">
                {selectedDish ? `Ordering: ${selectedDish.name}` : 'Fresh Biryani & Andhra Delicacies'}
              </p>
            </div>

            {/* Dish Preview Pill */}
            {selectedDish && (
              <div className="modal-dish-preview glass-card">
                <img src={selectedDish.image} alt={selectedDish.name} className="preview-img" />
                <div className="preview-details">
                  <h4>{selectedDish.name}</h4>
                  <p>₹{selectedDish.price} per portion</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            )}

            {/* Notice Banner */}
            <div className="modal-notice-box">
              <Info size={16} className="notice-icon" />
              <span>{RESTAURANT_CONFIG.disclaimers.onlineOrderNotice}</span>
            </div>

            <form onSubmit={handleQuickSubmit} className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Vikram"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                  />
                </div>
              </div>

              {/* Order Options Buttons */}
              <div className="order-options-stack">
                <button 
                  type="button" 
                  className="order-option-btn whatsapp-option"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle size={20} />
                  <span>Order via WhatsApp Direct</span>
                  <ArrowRight size={16} />
                </button>

                <button 
                  type="button" 
                  className="order-option-btn phone-option"
                  onClick={handlePhoneCall}
                >
                  <Phone size={20} />
                  <span>Call Restaurant Counter ({RESTAURANT_CONFIG.contact.phone})</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="modal-actions" style={{ marginTop: '1.25rem' }}>
                <button type="submit" className="btn btn-gold" style={{ width: '100%' }}>
                  Submit Order Request (Total: ₹{totalPrice})
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="modal-success-view">
            <CheckCircle2 size={56} className="success-icon-lg" />
            <h3>Order Received!</h3>
            <p>Your order for <strong>{quantity}x {dishName}</strong> (Total: ₹{totalPrice}) has been dispatched to Guntur Restro kitchen counter.</p>
            <div className="success-info-pill">
              Status: Fresh Prep Initiated
            </div>
            <button className="btn btn-primary" onClick={onClose}>
              Close & Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderModal;
