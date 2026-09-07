"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { MapPin, Clock, Users, ShieldCheck } from "lucide-react";

export const InfoBar: React.FC = () => {
  return (
    <div className="bg-[#050507] border-b border-white/10 py-6 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
          
          {/* Block 1: Location */}
          <div className="flex items-center gap-4 px-4 py-2">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-sans">
                {siteConfig.brand.address}
              </h4>
              <p className="text-xs text-slate-400">
                {siteConfig.brand.addressSubtitle}
              </p>
            </div>
          </div>

          {/* Block 2: Operating Hours */}
          <div className="flex items-center gap-4 px-4 py-2 pt-4 sm:pt-2">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-sans">
                {siteConfig.brand.hours}
              </h4>
              <p className="text-xs text-slate-400">
                Sat: 8AM – 4PM
              </p>
            </div>
          </div>

          {/* Block 3: Makes & Models */}
          <div className="flex items-center gap-4 px-4 py-2 pt-4 sm:pt-2">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-sans">
                All Makes & Models
              </h4>
              <p className="text-xs text-slate-400">
                Experienced Technicians
              </p>
            </div>
          </div>

          {/* Block 4: Quality & Pricing */}
          <div className="flex items-center gap-4 px-4 py-2 pt-4 sm:pt-2">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-sans">
                Quality Service
              </h4>
              <p className="text-xs text-slate-400">
                Honest Pricing
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
