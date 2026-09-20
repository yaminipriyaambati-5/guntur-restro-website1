import React, { useState } from 'react';
import { Search, Flame, Sparkles, AlertCircle, ShoppingBag, Info } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';
import './MenuSection.css';

const MenuSection = ({ onSelectItem, onOpenOrderModal }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all', 'veg', 'nonveg'
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering Logic
  const filteredItems = MENU_ITEMS.filter((item) => {
    // Category match
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;

    // Dietary match
    let dietaryMatch = true;
    if (dietaryFilter === 'veg') dietaryMatch = item.isVeg === true;
    if (dietaryFilter === 'nonveg') dietaryMatch = item.isVeg === false;

    // Search match
    const query = searchQuery.toLowerCase().trim();
    const searchMatch = !query || 
      item.name.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query);

    return categoryMatch && dietaryMatch && searchMatch;
  });

  return (
    <section id="menu" className="menu-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <Sparkles size={16} /> Flavorful Selection
          </span>
          <h2 className="section-title">
            Our Delicious <span className="text-gradient-red">Restaurant Menu</span>
          </h2>
          <p className="section-description">
            Explore authentic Andhra Biryanis, sizzling clay tandoori starters, rich curries, and cooling desserts prepared with traditional spice blends.
          </p>
        </div>

        {/* Controls Container (Categories, Diet Toggle, Search) */}
        <div className="menu-controls-wrap">
          {/* Categories Pill Nav */}
          <div className="menu-categories-scroll">
            <div className="menu-categories-pills" role="tablist">
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`menu-cat-pill ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Bar (Search & Diet Toggles) */}
          <div className="menu-filter-bar">
            {/* Search Input */}
            <div className="menu-search-wrap">
              <Search className="search-icon" size={18} />
              <input 
                type="text" 
                placeholder="Search dishes (e.g. Biryani, Paneer, Tikka)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="menu-search-input"
              />
              {searchQuery && (
                <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
                  &times;
                </button>
              )}
            </div>

            {/* Diet Filter Buttons */}
            <div className="menu-diet-toggles">
              <button 
                className={`diet-toggle-btn ${dietaryFilter === 'all' ? 'active' : ''}`}
                onClick={() => setDietaryFilter('all')}
              >
                All
              </button>
              <button 
                className={`diet-toggle-btn veg ${dietaryFilter === 'veg' ? 'active' : ''}`}
                onClick={() => setDietaryFilter('veg')}
              >
                <span className="diet-badge veg" style={{ marginRight: '6px' }}></span> Pure Veg
              </button>
              <button 
                className={`diet-toggle-btn nonveg ${dietaryFilter === 'nonveg' ? 'active' : ''}`}
                onClick={() => setDietaryFilter('nonveg')}
              >
                <span className="diet-badge non-veg" style={{ marginRight: '6px' }}></span> Non-Veg
              </button>
            </div>
          </div>
        </div>

        {/* Sample Prices Disclaimer Banner */}
        <div className="menu-disclaimer-banner">
          <Info size={16} className="disclaimer-icon" />
          <span>{RESTAURANT_CONFIG.disclaimers.samplePricesNotice}</span>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="menu-items-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-card glass-card">
                {/* Image Wrap */}
                <div className="menu-card-img-wrap" onClick={() => onSelectItem(item)}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="menu-card-img"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                  
                  {/* Badges Over Image */}
                  <div className="card-top-badges">
                    <span className={`diet-badge ${item.isVeg ? 'veg' : 'non-veg'}`} title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"}></span>
                    {item.isPopular && (
                      <span className="badge-popular">⭐ Popular</span>
                    )}
                  </div>

                  {item.isSpicy && (
                    <span className="badge-spicy" title="Guntur Chilli Spicy">🌶️ Spicy</span>
                  )}
                </div>

                {/* Content */}
                <div className="menu-card-body">
                  <div className="menu-card-title-row">
                    <h3 className="menu-card-title" onClick={() => onSelectItem(item)}>{item.name}</h3>
                    <span className="menu-card-price">₹{item.price}</span>
                  </div>

                  <p className="menu-card-desc">{item.description}</p>

                  <div className="menu-card-footer">
                    <button 
                      className="btn-text-details"
                      onClick={() => onSelectItem(item)}
                    >
                      View Details
                    </button>
                    <button 
                      className="btn btn-primary btn-sm btn-card-order"
                      onClick={() => onOpenOrderModal(item)}
                    >
                      <ShoppingBag size={14} />
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="menu-empty-state glass-card">
            <AlertCircle size={48} className="empty-icon" />
            <h3>No Dishes Found</h3>
            <p>We couldn't find any dishes matching your current filter criteria or search phrase.</p>
            <button 
              className="btn btn-gold btn-sm"
              style={{ marginTop: '1rem' }}
              onClick={() => {
                setActiveCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
