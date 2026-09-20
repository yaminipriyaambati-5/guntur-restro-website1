import React, { useState } from 'react';
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from '../data/galleryData';
import { Maximize2, Sparkles } from 'lucide-react';
import './GallerySection.css';

const GallerySection = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredGallery = GALLERY_IMAGES.filter(
    (img) => activeCategory === 'all' || img.category === activeCategory
  );

  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <Sparkles size={16} /> Visual Experience
          </span>
          <h2 className="section-title">
            Our Food & <span className="text-gradient-red">Atmosphere Gallery</span>
          </h2>
          <p className="section-description">
            Take a glimpse into our kitchen prep, aromatic Dum Biryani handis, and warm dining atmosphere.
          </p>
        </div>

        {/* Category Pills */}
        <div className="gallery-categories-pills">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`gallery-cat-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredGallery.map((item) => (
            <div 
              key={item.id} 
              className={`gallery-card ${item.aspect}`}
              onClick={() => onOpenLightbox(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="gallery-img"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop';
                }}
              />
              
              <div className="gallery-overlay">
                <button className="gallery-zoom-btn" aria-label="Zoom image">
                  <Maximize2 size={20} />
                </button>
                <div className="gallery-overlay-text">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
