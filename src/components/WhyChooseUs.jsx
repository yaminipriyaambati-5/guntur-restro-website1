import React from 'react';
import { Leaf, Flame, Sparkles, HeartHandshake } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "We pick fresh vegetables, herbs, and top-tier meats daily to ensure pure taste and nutrition."
    },
    {
      id: 2,
      icon: Flame,
      title: "Authentic Flavours",
      description: "Our secret spice blends stay true to traditional Guntur recipes without artificial shortcuts."
    },
    {
      id: 3,
      icon: Sparkles,
      title: "Quality You Can Taste",
      description: "From slow-steamed coal dum rice to hot ghee finishes, perfection is present in every mouthful."
    },
    {
      id: 4,
      icon: HeartHandshake,
      title: "Warm Hospitality",
      description: "Friendly service and a hygienic, comfortable dining space for families, friends, and travelers."
    }
  ];

  return (
    <section id="why-us" className="why-us-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">
            <Sparkles size={16} /> Our Commitment
          </span>
          <h2 className="section-title">
            Why Food Lovers Choose <span className="text-gradient-gold">Guntur Restro</span>
          </h2>
          <p className="section-description">
            We are dedicated to delivering unforgettable dining experiences through uncompromising food standards and genuine warmth.
          </p>
        </div>

        <div className="why-us-grid">
          {reasons.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.id} className="why-us-card glass-card">
                <div className="why-us-icon-wrapper">
                  <IconComp size={32} className="why-us-icon" />
                </div>
                <h3 className="why-us-title">{item.title}</h3>
                <p className="why-us-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
