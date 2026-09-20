import React from 'react';
import { X, Flame, ShoppingBag, CheckCircle } from 'lucide-react';
import './ModalCommon.css';

const ItemDetailModal = ({ isOpen, onClose, dish, onOpenOrderModal }) => {
  if (!isOpen || !dish) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card item-modal-width" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="item-detail-grid">
          <div className="item-detail-img-col">
            <img 
              src={dish.image} 
              alt={dish.name} 
              className="item-modal-img" 
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop';
              }}
            />
            {dish.isSpicy && <span className="item-badge spicy">🌶️ Authentic Guntur Spice</span>}
          </div>

          <div className="item-detail-info-col">
            <div className="item-header-meta">
              <span className={`diet-badge ${dish.isVeg ? 'veg' : 'non-veg'}`}></span>
              <span className="item-cat-tag">{dish.category.toUpperCase()}</span>
            </div>

            <h3 className="item-detail-title">{dish.name}</h3>
            <div className="item-detail-price">₹{dish.price}</div>

            <p className="item-detail-desc">{dish.description}</p>

            <div className="item-features-list">
              <div className="feature-line"><CheckCircle size={16} className="text-gold" /> Cooked Fresh to Order</div>
              <div className="feature-line"><CheckCircle size={16} className="text-gold" /> Authentic Whole Spices & Ghee</div>
              <div className="feature-line"><CheckCircle size={16} className="text-gold" /> Served Hot with Side Condiments</div>
            </div>

            <div className="item-modal-actions">
              <button 
                className="btn btn-primary btn-lg" 
                style={{ width: '100%' }}
                onClick={() => {
                  onClose();
                  onOpenOrderModal(dish);
                }}
              >
                <ShoppingBag size={18} /> Order This Dish (₹{dish.price})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailModal;
