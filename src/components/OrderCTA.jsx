import React from 'react';
import { ShoppingBag, Phone, Flame } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';
import './OrderCTA.css';

const OrderCTA = ({ onOpenOrderModal }) => {
  return (
    <section className="order-cta-section">
      <div className="container">
        <div className="order-cta-card glass-card">
          <div className="cta-bg-glow"></div>
          
          <div className="order-cta-content">
            <div className="cta-flame-badge">
              <Flame size={18} /> Guntur Spice Counter
            </div>
            
            <h2 className="cta-title">
              Craving Something <span className="text-gradient-gold">Delicious?</span>
            </h2>

            <p className="cta-subtitle">
              Bring your appetite. Your favourite Biryani flavours and sizzling starters are just a click away.
            </p>

            <div className="cta-buttons-row">
              <button 
                className="btn btn-primary btn-lg cta-main-btn"
                onClick={onOpenOrderModal}
              >
                <ShoppingBag size={22} />
                Order Now
              </button>

              <a 
                href={`tel:${RESTAURANT_CONFIG.contact.phoneUnformatted}`}
                className="btn btn-outline btn-lg cta-call-btn"
              >
                <Phone size={20} />
                Call Restaurant ({RESTAURANT_CONFIG.contact.phone})
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderCTA;
