import React, { useState } from 'react';
import { X, Check, ArrowRight, Sparkles, Send, PhoneCall, Mail, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ConsultationModal({ isOpen, onClose, defaultService = "" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService || 'business-automation',
    timeline: 'Within 2-4 weeks',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-navy-900 border border-cyan-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Direct Engineering Consultation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              Book Your Free Consultation
            </h3>
            <p className="text-slate-300 text-sm mb-6">
              Let's analyze your current workflows and design a custom automation and growth blueprint for your business.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Work Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Acme Corp"
                    className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Primary Solution Needed <span className="text-cyan-400">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  >
                    <option value="business-automation">Business Automation & Workflows</option>
                    <option value="digital-management">Digital Ecosystem Management</option>
                    <option value="digital-marketing">Digital Marketing & SEO</option>
                    <option value="google-meta-ads">Google & Meta Performance Ads</option>
                    <option value="hrms-erp">Custom Local HRMS / ERP System</option>
                    <option value="full-stack">Full Digital Transformation Suite</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Expected Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  >
                    <option value="Immediately">Immediate (Next 7 days)</option>
                    <option value="Within 2-4 weeks">Within 2-4 weeks</option>
                    <option value="Next Quarter">Next quarter / Planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Brief Project Overview / Current Bottleneck
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what manual workflows or growth goals you want to tackle..."
                  className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-electric-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-glow-blue flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-glow-cyan active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 animate-spin" /> Scheduling Session...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" /> Confirm Free Consultation
                    </span>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-cyan-400" /> NDA & 100% Confidential
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-cyan-400" /> Response within 4 business hours
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 mx-auto mb-4 shadow-glow-cyan">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Consultation Request Received!
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
              Thank you, <strong className="text-cyan-400">{formData.name}</strong>. Our senior technical consultant will review your request and reach out within 4 business hours with your preliminary automation roadmap.
            </p>

            <div className="p-4 rounded-xl bg-navy-950/80 border border-slate-800 max-w-md mx-auto text-left mb-6 text-xs text-slate-300 space-y-2">
              <p><strong className="text-white">Selected Focus:</strong> {formData.service}</p>
              <p><strong className="text-white">Email:</strong> {formData.email}</p>
              <p><strong className="text-white">Direct Dispatch Line:</strong> +1 (800) 550-AUTO / contact@automatixdigital.com</p>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors"
            >
              Back to Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
