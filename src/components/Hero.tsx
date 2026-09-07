"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Calendar, Phone, ArrowRight } from "lucide-react";
import { GetDirectionsButton } from "@/components/GetDirectionsButton";

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="home" className="relative min-h-[620px] lg:min-h-[720px] bg-[#08080a] overflow-hidden flex items-center">
      
      {/* High-Resolution Background Mockup Image (Garage + BMW) */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.brand.heroBgUrl}
          alt="J&G Motor Club Garage"
          className="w-full h-full object-cover object-[72%_center] lg:object-[68%_center]"
        />
        
        {/* Soft left gradient fade to keep text readable while keeping the BMW car crisp and bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a]/85 via-[#08080a]/30 to-transparent w-full md:w-[45%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-black/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Content matching mockup */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Tagline: DRIVEN BY TRUST */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.3em] text-[#D4AF37] block">
                {siteConfig.hero.topTagline}
              </span>
            </div>

            {/* Main Title: J & G MOTOR CLUB */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] font-sans uppercase">
                {siteConfig.hero.titleLine1}
                <span className="block font-black text-white">
                  {siteConfig.hero.titleLine2}
                </span>
              </h1>
            </div>

            {/* Subtitle: PREMIUM AUTO CARE IN CHATHAM, NJ */}
            <div className="pt-1">
              <h2 className="text-sm sm:text-base font-bold tracking-[0.15em] text-[#D4AF37] uppercase font-sans">
                {siteConfig.hero.subtitle}
              </h2>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-lg font-sans">
              Expert service. Honest pricing.
              <span className="block">Keeping you on the road.</span>
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              
              {/* Primary: Book Appointment -> */}
              <button
                onClick={onOpenBookingModal}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] via-[#E4C75E] to-[#C09623] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-gold-500/20 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{siteConfig.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary: Call 201 989 6811 */}
              <a
                href={`tel:${siteConfig.brand.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-xs font-extrabold text-white bg-black/60 hover:bg-black/80 border border-white/40 backdrop-blur-md transition-all font-sans hover:border-[#D4AF37] shadow-xl hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                <span className="text-white font-extrabold tracking-wide">Call {siteConfig.brand.displayPhone}</span>
              </a>

              {/* Get Directions Button */}
              <GetDirectionsButton variant="hero" />

            </div>

          </div>

          {/* Right Cursive Overlay: "More Than a Garage" */}
          <div className="lg:col-span-5 relative hidden lg:flex items-end justify-end h-[400px]">
            <div className="text-right pb-6 pr-4">
              <span className="font-serif italic text-4xl lg:text-5xl text-white font-medium drop-shadow-lg block tracking-wide">
                {siteConfig.hero.cursiveOverlay}
              </span>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-amber-500 rounded-full mt-1 w-48 ml-auto" />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
