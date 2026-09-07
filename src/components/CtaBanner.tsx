"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Calendar, Phone, ArrowRight } from "lucide-react";

interface CtaBannerProps {
  onOpenBookingModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="py-16 bg-[#08080a] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#101016] border border-white/15 p-8 sm:p-10 rounded-3xl shadow-2xl">
          
          <div className="space-y-2 text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-serif uppercase tracking-tight">
              READY TO GET STARTED?
            </h3>
            <p className="text-sm text-slate-300">
              Schedule your appointment today and experience the J &amp; G Motor Club difference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenBookingModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] via-[#E2C358] to-[#C59B27] hover:scale-105 transition-all shadow-lg shadow-gold-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${siteConfig.brand.phone.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-black/40 hover:bg-black/60 border border-white/30 transition-all font-mono hover:border-gold-400"
            >
              <Phone className="w-4 h-4 text-gold-400 fill-gold-400" />
              <span>Call {siteConfig.brand.displayPhone}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
