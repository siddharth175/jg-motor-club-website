"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Phone, Calendar, Menu, X } from "lucide-react";
import Image from "next/image";
import { GetDirectionsButton } from "@/components/GetDirectionsButton";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onOpenBookingModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  onOpenBookingModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Official Circular Emblem Logo (Large floating badge matching mockup) */}
          <button
            onClick={() => onTabChange("home")}
            className="flex items-center gap-3 group text-left cursor-pointer z-20 relative"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-1 border-2 border-white/40 shadow-2xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shrink-0 translate-y-3">
              <Image
                src={siteConfig.brand.logoUrl}
                alt={siteConfig.brand.name}
                width={96}
                height={96}
                className="object-contain w-full h-full p-0.5"
                priority
              />
            </div>
          </button>

          {/* Center Navigation Links (Matching mockup tabs) */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeTab === link.tabId;

              return (
                <button
                  key={link.name}
                  onClick={() => onTabChange(link.tabId)}
                  className={`relative text-sm font-medium transition-colors py-1 cursor-pointer ${
                    isActive ? "text-white font-semibold" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 to-gold-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Phone, Get Directions & Book Appointment Button */}
          <div className="hidden lg:flex items-center gap-4">
            <GetDirectionsButton variant="header" />

            <a
              href={`tel:${siteConfig.brand.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-sm font-extrabold text-white hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              <span className="text-white font-extrabold tracking-wide">{siteConfig.brand.displayPhone}</span>
            </a>

            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] via-[#E2C358] to-[#C59B27] hover:scale-[1.03] active:scale-[0.97] transition-all shadow-lg shadow-gold-500/20"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <GetDirectionsButton variant="compact" />

            <button
              onClick={onOpenBookingModal}
              className="px-3 py-1.5 rounded-lg bg-gold-500 text-black font-bold text-xs flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F12] border-b border-white/10 px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col gap-3">
            {siteConfig.navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  onTabChange(link.tabId);
                  setMobileMenuOpen(false);
                }}
                className="text-left text-base font-medium text-slate-200 hover:text-gold-400 py-1"
              >
                {link.name}
              </button>
            ))}
          </nav>
          
          <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
            <GetDirectionsButton variant="card" />

            <a
              href={`tel:${siteConfig.brand.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-slate-200 font-mono"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              Call {siteConfig.brand.displayPhone}
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-gold-500 to-gold-400 text-center shadow-lg uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
