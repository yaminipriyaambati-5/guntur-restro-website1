import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import MenuSection from './components/MenuSection';
import FeaturedDish from './components/FeaturedDish';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import OrderCTA from './components/OrderCTA';
import Footer from './components/Footer';

// Modals
import ReservationModal from './components/Modals/ReservationModal';
import OrderModal from './components/Modals/OrderModal';
import ItemDetailModal from './components/Modals/ItemDetailModal';
import LightboxModal from './components/Modals/LightboxModal';

function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [itemDetailModalOpen, setItemDetailModalOpen] = useState(false);
  const [lightboxModalOpen, setLightboxModalOpen] = useState(false);

  const [selectedDish, setSelectedDish] = useState(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  // Lock body scroll when any modal is active
  useEffect(() => {
    const isAnyOpen = reservationModalOpen || orderModalOpen || itemDetailModalOpen || lightboxModalOpen;
    if (isAnyOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [reservationModalOpen, orderModalOpen, itemDetailModalOpen, lightboxModalOpen]);

  // Actions
  const handleOpenOrderModal = (dish = null) => {
    setSelectedDish(dish);
    setOrderModalOpen(true);
  };

  const handleOpenItemDetail = (dish) => {
    setSelectedDish(dish);
    setItemDetailModalOpen(true);
  };

  const handleOpenLightbox = (imageItem) => {
    setSelectedGalleryItem(imageItem);
    setLightboxModalOpen(true);
  };

  return (
    <div className="app-root">
      {/* Navigation */}
      <Navbar 
        onOpenOrderModal={() => handleOpenOrderModal()}
        onOpenReservationModal={() => setReservationModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenOrderModal={() => handleOpenOrderModal()}
          onOpenReservationModal={() => setReservationModalOpen(true)}
        />
        
        <Highlights />

        <MenuSection 
          onSelectItem={handleOpenItemDetail}
          onOpenOrderModal={handleOpenOrderModal}
        />

        <FeaturedDish 
          onOpenOrderModal={handleOpenOrderModal}
        />

        <AboutSection />

        <WhyChooseUs />

        <GallerySection 
          onOpenLightbox={handleOpenLightbox}
        />

        <ReviewsSection />

        <ContactSection />

        <OrderCTA 
          onOpenOrderModal={() => handleOpenOrderModal()}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ReservationModal 
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />

      <OrderModal 
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        selectedDish={selectedDish}
      />

      <ItemDetailModal 
        isOpen={itemDetailModalOpen}
        onClose={() => setItemDetailModalOpen(false)}
        dish={selectedDish}
        onOpenOrderModal={handleOpenOrderModal}
      />

      <LightboxModal 
        isOpen={lightboxModalOpen}
        onClose={() => setLightboxModalOpen(false)}
        imageItem={selectedGalleryItem}
      />
    </div>
  );
}

export default App;
