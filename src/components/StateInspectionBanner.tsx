"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { Clock, ShieldCheck, Calendar, Phone, CheckCircle2, Award, Star, FileCheck } from "lucide-react";

interface StateInspectionBannerProps {
  onOpenBookingModal: (serviceId?: string) => void;
}

export const StateInspectionBanner: React.FC<StateInspectionBannerProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#08080a] via-[#0d0d12] to-[#08080a] border-y border-white/10 relative overflow-hidden">
      
      {/* Background Glow Overlays */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Side-by-Side Dual Badges (CARFAX + NJ MVC Inspection Sticker) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Badge 1: CARFAX 2025 Top-Rated Service Center */}
            <div className="relative group p-4 rounded-2xl bg-[#121218]/90 border border-white/15 shadow-2xl backdrop-blur-md hover:border-gold-500/50 transition-all flex flex-col items-center text-center">
              
              {/* Award Pill */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] via-[#F3E08A] to-[#C59B27] text-black px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1 whitespace-nowrap">
                <Award className="w-3 h-3 fill-black" />
                <span>2025 CARFAX Top Rated</span>
              </div>

              {/* Image Box */}
              <div className="relative w-full h-[220px] sm:h-[250px] rounded-xl overflow-hidden mt-3 bg-black/40 flex items-center justify-center">
                <Image
                  src="/carfax-badge.jpg"
                  alt="CARFAX 2025 Top-Rated Service Center - J & G Motor Club"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Footer */}
              <div className="pt-3 pb-1 space-y-0.5">
                <div className="flex items-center justify-center gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>
                <h4 className="text-sm font-bold text-white font-sans">
                  CARFAX Top-Rated
                </h4>
                <p className="text-[11px] text-slate-400">
                  Verified 5-Star Service Quality
                </p>
              </div>

            </div>

            {/* Badge 2: Official NJ MVC Vehicle Inspection Sticker */}
            <div className="relative group p-4 rounded-2xl bg-[#121218]/90 border border-white/15 shadow-2xl backdrop-blur-md hover:border-gold-500/50 transition-all flex flex-col items-center text-center">
              
              {/* Official Tag */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-black px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1 whitespace-nowrap">
                <FileCheck className="w-3 h-3 fill-black" />
                <span>Official NJ MVC Sticker</span>
              </div>

              {/* Image Box */}
              <div className="relative w-full h-[220px] sm:h-[250px] rounded-xl overflow-hidden mt-3 bg-black/40 flex items-center justify-center">
                <Image
                  src="/nj-inspection-sticker.jpg"
                  alt="NJ MVC Vehicle Inspection Sticker - J & G Motor Club Chatham NJ"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Footer */}
              <div className="pt-3 pb-1 space-y-0.5">
                <div className="flex items-center justify-center gap-1 text-[#D4AF37]">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs font-bold text-[#D4AF37] uppercase">State Authorized</span>
                </div>
                <h4 className="text-sm font-bold text-white font-sans">
                  NJ State Inspection Sticker
                </h4>
                <p className="text-[11px] text-slate-400">
                  Official Emissions & Safety Approval
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: 10-Minute NJ State Inspection Copy & CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Top Pill Header */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-[#D4AF37] text-xs font-extrabold uppercase tracking-widest">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>Drive-In Fast Service</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl font-black text-white font-sans tracking-tight uppercase leading-tight">
                OFFICIAL NJ STATE INSPECTION
                <span className="block text-[#D4AF37]">
                  DONE IN UNDER 10 MINUTES!
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
                Get your official New Jersey vehicle state inspection completed quickly by certified master technicians at J & G Motor Club in Chatham, NJ. No long lines — drive in and get your official NJ MVC sticker in under 10 minutes!
              </p>
            </div>

            {/* 3 Key Feature Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase font-sans">Under 10 Minutes</h3>
                <p className="text-xs text-slate-400">Fast, drive-in inspection process.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase font-sans">NJ State Certified</h3>
                <p className="text-xs text-slate-400">Official MVC emissions & safety check.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase font-sans">All Makes & Models</h3>
                <p className="text-xs text-slate-400">Domestic, import & luxury vehicles.</p>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenBookingModal("state-inspection")}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] via-[#E4C75E] to-[#C09623] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-gold-500/20 cursor-pointer"
              >
                <Calendar className="w-4.5 h-4.5" />
                <span>Book 10-Min Inspection</span>
              </button>

              <a
                href={`tel:${siteConfig.brand.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-extrabold text-white bg-black/60 hover:bg-black/80 border-2 border-white/40 backdrop-blur-md transition-all font-sans hover:border-[#D4AF37] shadow-xl hover:scale-[1.02]"
              >
                <Phone className="w-4.5 h-4.5 text-[#D4AF37] fill-[#D4AF37]" />
                <span className="text-white font-extrabold tracking-wide">Call {siteConfig.brand.displayPhone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
