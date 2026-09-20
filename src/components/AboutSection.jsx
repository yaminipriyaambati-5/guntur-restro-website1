import React from 'react';
import { ChefHat, Sparkles, Utensils, Heart, ShieldCheck } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          {/* Text Content */}
          <div className="about-content-col">
            <span className="section-subtitle">
              <Sparkles size={16} /> Our Culinary Story
            </span>
            <h2 className="section-title">
              Made for the Love of <span className="text-gradient-gold">Great Food</span>
            </h2>
            
            <p className="about-paragraph highlight-para">
              At <strong>{RESTAURANT_CONFIG.name}</strong>, cooking is more than a process—it is a passion rooted in rich culinary traditions and authentic Andhra spice heritage.
            </p>

            <p className="about-paragraph">
              Nestled near Srungavarapukota in Boddavara, we welcome guests, families, and road travelers with open arms and sizzling handis of freshly slow-cooked Dum Biryani. Every dish we serve is prepared from scratch using daily-picked fresh ingredients, hand-ground spices, and traditional coal dum slow cooking techniques.
            </p>

            <p className="about-paragraph">
              Whether you are craving a fiery Guntur Chilli Chicken, a rich creamy Paneer Butter Masala, or our signature aromatic Mutton Dum Biryani, our promise is simple: uncompromising taste, generous portions, and warm, attentive hospitality.
            </p>

            {/* Core Values Bullets */}
            <div className="about-values-grid">
              <div className="value-item">
                <div className="value-icon-box">
                  <ChefHat size={22} />
                </div>
                <div>
                  <h4>Authentic Dum Cooking</h4>
                  <p>Hand-crafted in traditional vessels over low coals for rich aroma.</p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon-box">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4>Daily Fresh Sourcing</h4>
                  <p>Fresh meat cuts, daily dairy, and zero artificial flavor enhancers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid Column */}
          <div className="about-image-col">
            <div className="about-image-stack">
              <div className="about-img-frame primary-frame">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop" 
                  alt="Guntur Restro Kitchen Prep" 
                  className="about-img"
                />
              </div>

              <div className="about-img-frame secondary-frame glass-card">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" 
                  alt="Restaurant Dining Atmosphere" 
                  className="about-img"
                />
              </div>

              {/* FLOATING EXPERIENCE BADGE */}
              <div className="about-floating-badge glass-card">
                <Heart size={28} className="badge-heart-icon" />
                <div>
                  <span className="badge-big-text">100%</span>
                  <span className="badge-sub-text">Passion & Flavor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
