"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { GetDirectionsButton } from "@/components/GetDirectionsButton";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceNeeded: siteConfig.allServices[0].title,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact-page" className="py-20 lg:py-24 bg-[#060608] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Page 4 mockup */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#D4AF37]">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-serif uppercase tracking-tight">
            WE&apos;RE HERE TO HELP
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a question or need to schedule a service? Reach out to us — we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Contact Info List matching Page 4 mockup */}
          <div className="lg:col-span-5 space-y-6 bg-[#0e0e12] p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="space-y-5 text-slate-300">
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Phone Number</span>
                  <a
                    href={`tel:${siteConfig.brand.phone.replace(/\s+/g, "")}`}
                    className="text-base font-extrabold text-white font-mono hover:text-[#D4AF37] transition-colors"
                  >
                    {siteConfig.brand.displayPhone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-3 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Email Address</span>
                  <a
                    href={`mailto:${siteConfig.brand.email}`}
                    className="text-sm font-semibold text-white hover:text-[#D4AF37] transition-colors"
                  >
                    {siteConfig.brand.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start justify-between gap-4 pt-3 border-t border-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Shop Location</span>
                    <span className="text-sm font-bold text-white block">{siteConfig.brand.address}</span>
                    <span className="text-xs text-slate-400">{siteConfig.brand.addressSubtitle}</span>
                  </div>
                </div>

                <GetDirectionsButton variant="compact" />
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-3 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Hours of Operation</span>
                  <span className="text-xs text-slate-200 block">{siteConfig.brand.hours}</span>
                  <span className="text-xs text-slate-500">Sunday: Closed</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact & Scheduling Form matching Page 4 mockup */}
          <div className="lg:col-span-7 bg-[#0e0e12] p-8 rounded-3xl border border-white/10 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#16161f] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:border-[#D4AF37] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#16161f] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:border-[#D4AF37] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#16161f] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:border-[#D4AF37] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Service Needed
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#16161f] border border-white/10 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-all"
                  >
                    {siteConfig.allServices.map((s) => (
                      <option key={s.id} value={s.title} className="bg-[#16161f] text-slate-200">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#16161f] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:border-[#D4AF37] focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] via-[#E2C358] to-[#C59B27] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-gold-500/20"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-white font-serif">
                  Message Sent!
                </h4>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Thank you <strong className="text-[#D4AF37]">{formData.fullName}</strong>. We received your message and will contact you shortly at <span className="text-white font-semibold">{formData.phone}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white transition-all"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
