"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { ArrowRight } from "lucide-react";

interface GallerySectionProps {
  onTabChange?: (tabId: string) => void;
  fullPage?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onTabChange, fullPage }) => {
  return (
    <section id="gallery" className="py-20 lg:py-24 bg-[#070709] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching mockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#D4AF37] block mb-2">
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif tracking-tight uppercase">
              REAL CARS. REAL RESULTS.
            </h2>
          </div>

          {onTabChange && !fullPage && (
            <button
              onClick={() => onTabChange("gallery")}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-gold-400 transition-colors"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* 6 Photo Grid matching mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.galleryPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden border border-white/15 bg-[#121218] shadow-xl aspect-[4/3]"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4AF37]">
                    {photo.category}
                  </span>
                  <h4 className="text-sm font-bold font-serif">{photo.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
