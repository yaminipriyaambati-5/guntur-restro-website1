import React from 'react';
import { Flame, Leaf, UtensilsCrossed, HeartHandshake } from 'lucide-react';
import './Highlights.css';

const Highlights = () => {
  const highlightsList = [
    {
      id: 1,
      icon: Flame,
      title: "Authentic Taste",
      description: "True Guntur & Andhra spice recipes handcrafted using traditional coal dum techniques."
    },
    {
      id: 2,
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "Hand-selected fresh vegetables, premium meat cuts, and pure whole spices sourced daily."
    },
    {
      id: 3,
      icon: UtensilsCrossed,
      title: "Generous Portions",
      description: "Hearty, satisfying meal portions designed for delightful family dining and celebrations."
    },
    {
      id: 4,
      icon: HeartHandshake,
      title: "Made With Passion",
      description: "Prepared with genuine warmth, care, and traditional Indian hospitality in every dish."
    }
  ];

  return (
    <section className="highlights-section">
      <div className="container">
        <div className="highlights-grid">
          {highlightsList.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="highlight-card glass-card">
                <div className="highlight-icon-wrap">
                  <IconComponent size={28} className="highlight-icon" />
                </div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
