import React, { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import { Menu, X, ArrowRight, Sparkles, ChevronRight, Phone, ExternalLink } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenConsultation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page, anchorId = null) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    
    if (anchorId) {
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => navigateTo('home')} className="focus:outline-none">
            <BrandLogo size="default" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-navy-900/60 border border-slate-800/80 backdrop-blur-md px-3 shadow-inner">
            <button
              onClick={() => navigateTo('home')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activePage === 'home'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-blue'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => navigateTo('services')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activePage === 'services'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-blue'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Services
            </button>

            <button
              onClick={() => navigateTo('home', 'why-automatix')}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            >
              Why Automatix
            </button>

            <button
              onClick={() => navigateTo('home', 'partners')}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            >
              Partners
            </button>

            <button
              onClick={() => navigateTo('home', 'contact')}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenConsultation()}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-xl group bg-gradient-to-br from-cyan-400 via-blue-600 to-electric-600 hover:from-cyan-300 hover:to-blue-500 text-white shadow-glow-blue transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-navy-950 rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white transition-colors" />
                <span>Book a Free Consultation</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenConsultation()}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => navigateTo('home')}
              className={`p-3 rounded-xl text-left text-sm font-semibold flex items-center justify-between ${
                activePage === 'home'
                  ? 'bg-blue-600/30 text-cyan-400 border border-cyan-500/40'
                  : 'bg-navy-900/60 text-slate-200'
              }`}
            >
              <span>Landing Page</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo('services')}
              className={`p-3 rounded-xl text-left text-sm font-semibold flex items-center justify-between ${
                activePage === 'services'
                  ? 'bg-blue-600/30 text-cyan-400 border border-cyan-500/40'
                  : 'bg-navy-900/60 text-slate-200'
              }`}
            >
              <span>Services</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
            <button
              onClick={() => navigateTo('home', 'why-automatix')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800/60"
            >
              Why Automatix
            </button>
            <button
              onClick={() => navigateTo('home', 'partners')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800/60"
            >
              Brands We've Worked With
            </button>
            <button
              onClick={() => navigateTo('home', 'contact')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800/60"
            >
              Contact & Inquiries
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 px-4 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-blue flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book a Free Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
