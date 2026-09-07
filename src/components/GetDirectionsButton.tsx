"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin, Navigation, ExternalLink, X } from "lucide-react";

interface GetDirectionsButtonProps {
  variant?: "header" | "hero" | "compact" | "card";
  position?: "up" | "down";
  className?: string;
}

export const GetDirectionsButton: React.FC<GetDirectionsButtonProps> = ({
  variant = "hero",
  position,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Address query for maps
  const addressQuery = encodeURIComponent("J&G Motor Club, Chatham, NJ");
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`;
  const appleMapsUrl = `https://maps.apple.com/?daddr=${addressQuery}`;

  // Determine popover position ('up' or 'down')
  const popoverPosition = position || (variant === "header" ? "down" : "up");

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Styling options based on variant
  const getButtonStyles = () => {
    switch (variant) {
      case "header":
        return "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-200 bg-white/5 border border-white/15 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-white/10 transition-all cursor-pointer shadow-sm";
      case "compact":
        return "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 hover:bg-[#D4AF37]/20 transition-all cursor-pointer";
      case "card":
        return "w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:bg-white/10 transition-all cursor-pointer";
      case "hero":
      default:
        return "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-200 bg-black/60 hover:bg-black/90 border border-white/30 hover:border-[#D4AF37] hover:text-white transition-all shadow-lg hover:scale-[1.02] cursor-pointer";
    }
  };

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${getButtonStyles()} group`}
        aria-label="Get directions to J&G Motor Club"
      >
        <span className="relative flex items-center justify-center">
          <MapPin className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
        </span>
        <span className="font-extrabold tracking-wide">Get Directions</span>
        <Navigation className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#D4AF37] transition-colors" />
      </button>

      {/* Popover Options Modal / Menu */}
      {isOpen && (
        <div
          className={`absolute ${
            popoverPosition === "up"
              ? "bottom-full mb-2 slide-in-from-bottom-2"
              : "top-full mt-2 slide-in-from-top-2"
          } left-0 sm:left-auto sm:right-0 w-72 rounded-2xl bg-[#0f0f14]/98 border border-white/20 shadow-2xl p-4 backdrop-blur-xl z-[100] animate-in fade-in duration-200 text-left`}
        >
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white uppercase tracking-wider font-sans">
                  Choose Map App
                </h4>
                <p className="text-[10px] text-slate-400">
                  Chatham, NJ • J&G Motor Club
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close directions menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Map Options */}
          <div className="space-y-2">
            
            {/* Google Maps Option */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 text-white transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Google Maps</span>
                  <span className="text-[10px] text-slate-400 block">Open live turn-by-turn navigation</span>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </a>

            {/* Apple Maps Option */}
            <a
              href={appleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/50 text-white transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.07c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.6.7-1.13 1.83-.99 2.94 1.07.08 2.15-.54 2.8-1.34z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Apple Maps</span>
                  <span className="text-[10px] text-slate-400 block">Open in Apple Maps app</span>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            </a>

          </div>

          <div className="mt-3 pt-2 border-t border-white/10 text-center">
            <span className="text-[10px] text-slate-400">
              📍 Chatham, NJ — Open Mon–Sat
            </span>
          </div>

        </div>
      )}
    </div>
  );
};
