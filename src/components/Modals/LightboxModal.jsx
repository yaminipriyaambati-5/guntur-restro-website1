import React from 'react';
import { X } from 'lucide-react';
import './ModalCommon.css';

const LightboxModal = ({ isOpen, onClose, imageItem }) => {
  if (!isOpen || !imageItem) return null;

  return (
    <div className="modal-backdrop lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn lightbox-close" onClick={onClose} aria-label="Close modal">
          <X size={26} />
        </button>
        <img 
          src={imageItem.image} 
          alt={imageItem.title} 
          className="lightbox-img" 
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop';
          }}
        />
        <div className="lightbox-caption glass-card">
          <h4>{imageItem.title}</h4>
          <p>{imageItem.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default LightboxModal;
