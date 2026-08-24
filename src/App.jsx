import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ConsultationModal from './components/ConsultationModal';
import { Sparkles, MessageSquare } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'services'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState('');
  const [targetServiceAnchor, setTargetServiceAnchor] = useState(null);

  // Sync with browser back/forward or simple URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'services' || hash.startsWith('service-')) {
        setActivePage('services');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page, anchorId = null) => {
    setActivePage(page);
    if (page === 'services' && anchorId) {
      setTargetServiceAnchor(anchorId);
    } else {
      setTargetServiceAnchor(null);
    }

    if (page === 'home' && anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (!anchorId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (serviceId = '') => {
    setModalService(serviceId);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#040817] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activePage === 'home' ? (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        ) : (
          <ServicesPage
            onOpenConsultation={handleOpenConsultation}
            targetServiceId={targetServiceAnchor}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Floating Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => handleOpenConsultation()}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-glow-cyan hover:shadow-glow-blue transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Book Consultation"
        >
          <Sparkles className="w-4 h-4 text-white animate-pulse" />
          <span className="hidden sm:inline">Book Free Consultation</span>
          <span className="sm:hidden">Consult</span>
        </button>
      </div>

      {/* Booking / Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={modalService}
      />
    </div>
  );
}
