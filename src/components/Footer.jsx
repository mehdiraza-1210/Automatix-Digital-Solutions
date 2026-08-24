import React from 'react';
import BrandLogo from './BrandLogo';
import { Mail, Phone, MapPin, Globe, ArrowUp, Shield } from 'lucide-react';

export default function Footer({ onNavigate, onOpenConsultation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="default" />
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Complete Business Automation, Simplified. We engineer bespoke workflows, local HRMS/ERP systems, and high-ROI advertising funnels for modern enterprises.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-navy-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-navy-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-navy-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-navy-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4 tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'why-automatix')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Why Automatix
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'partners')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Partner Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'contact')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Get In Touch
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4 tracking-wider uppercase">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('services', 'website-design')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-left"
                >
                  Website Design & Dev
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'business-automation')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-left"
                >
                  Business Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'ai-integrations')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-left"
                >
                  A.I. Business Integrations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'social-media-management')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-left"
                >
                  Social Media Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'hrms-erp-custom')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-left"
                >
                  HRMS, ERP & Custom Software
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4 tracking-wider uppercase">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <a href="mailto:contact@automatixdigital.com" className="hover:text-white transition-colors">
                  contact@automatixdigital.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <a href="tel:+18005502886" className="hover:text-white transition-colors">
                  +1 (800) 550-AUTO
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>Global Remote & Local On-Premise Support</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenConsultation()}
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/25 transition-all text-center"
                >
                  Schedule Free Audit
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 Automatix Digital Solutions. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security & Compliance</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-navy-900 border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-cyan-400 transition-colors ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
