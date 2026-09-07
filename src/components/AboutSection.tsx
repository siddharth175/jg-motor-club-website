"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { ArrowRight, Tag, Cog, Wrench, MapPin, Heart } from "lucide-react";

interface AboutSectionProps {
  onTabChange?: (tabId: string) => void;
  fullPage?: boolean;
}

const VALUE_ICONS: Record<string, React.FC<{ className?: string }>> = {
  Tag: Tag,
  Cog: Cog,
  Wrench: Wrench,
  MapPin: MapPin,
  Heart: Heart,
};

export const AboutSection: React.FC<AboutSectionProps> = ({ onTabChange, fullPage }) => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#08080b] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full Page Header (If on About Tab) */}
        {fullPage && (
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#D4AF37]">
              ABOUT US
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif uppercase tracking-tight">
              {siteConfig.about.pageTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {siteConfig.about.pageDescription}
            </p>
          </div>
        )}

        {/* Section Grid matching mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & Stats */}
          <div className="lg:col-span-7 space-y-6">
            {!fullPage && (
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#D4AF37] block">
                {siteConfig.about.label}
              </span>
            )}

            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif tracking-tight uppercase leading-tight">
              {siteConfig.about.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              {siteConfig.about.description}
            </p>

            {/* 4 Stat Counters Grid (2x2) */}
            <div className="grid grid-cols-2 gap-4 pt-2 max-w-md">
              {siteConfig.about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#121218] border border-white/10 text-center space-y-1 hover:border-gold-500/40 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-black text-[#D4AF37] font-serif">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {onTabChange && !fullPage && (
              <div className="pt-2">
                <button
                  onClick={() => onTabChange("about")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] via-[#E2C358] to-[#C59B27] hover:scale-105 transition-all shadow-lg shadow-gold-500/20"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Real J&G Motor Club Shop Building with Cursive "GOOD CARS GREAT PEOPLE" */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
              <img
                src="/shop-building.jpg"
                alt="J&G Motor Club Shop Building in Chatham NJ"
                className="w-full h-[380px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 right-6 text-right">
                <span className="font-serif italic text-3xl sm:text-4xl text-white font-medium drop-shadow-md block">
                  {siteConfig.about.cursiveOverlay}
                </span>
                <div className="h-0.5 bg-[#D4AF37] rounded-full mt-1 w-36 ml-auto" />
              </div>
            </div>
          </div>

        </div>

        {/* 5 Core Values Cards (Shown on About Page / Tab) */}
        {fullPage && (
          <div className="pt-20 border-t border-white/10 mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white font-serif uppercase">
                Our Core Values
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {siteConfig.about.values.map((val, idx) => {
                const Icon = VALUE_ICONS[val.iconName] || Tag;

                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#121218] border border-white/10 text-center space-y-3 hover:border-gold-500/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-[#D4AF37] flex items-center justify-center mx-auto">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white font-serif">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {val.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
