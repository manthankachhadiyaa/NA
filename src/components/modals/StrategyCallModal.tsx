'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface StrategyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StrategyCallModal({ isOpen, onClose }: StrategyCallModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    useCase: 'healthcare_hms',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const inputClasses =
    'w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black/20 transition-all placeholder:text-zinc-400';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-zinc-200 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center mx-auto border border-zinc-200">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-zinc-950">Demo &amp; Sandbox Request Received</h3>
            <p className="text-sm text-zinc-600 max-w-xs mx-auto">
              Thank you, {formData.name || 'there'}. Our systems engineering team will review your operational environment, prepare sandbox credentials, and reach out within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-zinc-800 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="status-badge-pill mb-3">
                <span className="pulse-dot" />
                <span>Interactive Pilot &amp; Live Sandbox</span>
              </div>
              <h3 className="text-2xl font-extrabold text-zinc-950 tracking-tight">
                Request a Live Demo &amp; Sandbox Access
              </h3>
              <p className="text-xs text-zinc-600 mt-1">
                Experience NexAgent's unified core platform in action. Tailored to your exact operational workflows.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-900 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Rajesh Patel / Sarah Chen"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-900 mb-1">
                  Work / Clinical Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@organization.com"
                  className={inputClasses}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-900 mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Hospital / Hotel / Enterprise"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-900 mb-1">
                    Product of Interest
                  </label>
                  <select
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    className={inputClasses}
                  >
                    <option value="healthcare_hms">NexAgent HMS (Hospital Operating System)</option>
                    <option value="hotel_pms">NexAgent Hospitality OS (AI Hotel System)</option>
                    <option value="enterprise_core">Enterprise Core Platform (Unified Solution)</option>
                    <option value="custom">Custom High-Stakes Workflow</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-900 mb-1">
                  Operational Bottlenecks / Environment Details
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Describe your current volume, systems (EMR/PMS/ERP), or automation requirements..."
                  className={inputClasses}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-zinc-800 active:scale-[0.99] disabled:opacity-60 rounded-xl shadow-md transition-all min-h-[48px]"
              >
                <span>{isSubmitting ? 'Configuring Access...' : 'Request Live Demo & Sandbox Access'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
