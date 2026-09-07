"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Search } from "lucide-react";
import Image from "next/image";
import { GetDirectionsButton } from "@/components/GetDirectionsButton";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030305] border-t border-white/10 text-slate-400 pt-12 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row matching mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Logo & Brand Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-0.5 border border-gold-400 flex items-center justify-center shadow-md overflow-hidden shrink-0">
                <Image
                  src={siteConfig.brand.logoUrl}
                  alt={siteConfig.brand.name}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <span className="text-base font-black text-white font-serif tracking-tight block">
                  {siteConfig.brand.name}
                </span>
                <span className="text-[11px] text-slate-400 font-semibold">{siteConfig.brand.address}</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400">
              Reliable Service. Stronger Roads.
            </p>
          </div>

          {/* Info Block 1: Location */}
          <div className="lg:col-span-2 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-white font-bold">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{siteConfig.brand.address}</span>
            </div>
            <p className="text-[11px] text-slate-400 pl-6">
              Local. Reliable. Community Driven.
            </p>
            <div className="pl-6 pt-1">
              <GetDirectionsButton variant="compact" />
            </div>
          </div>

          {/* Info Block 2: Operating Hours */}
          <div className="lg:col-span-3 space-y-1 text-xs">
            <div className="flex items-start gap-2 text-white font-bold">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <p>Mon - Fri: 8AM – 6PM</p>
                <p>Sat: 8AM – 4PM</p>
                <p className="text-slate-500 font-normal">Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Info Block 3: Phone & Email */}
          <div className="lg:col-span-2 space-y-2 text-xs">
            <a
              href={`tel:${siteConfig.brand.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-white font-mono font-bold hover:text-[#D4AF37]"
            >
              <Phone className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              <span>{siteConfig.brand.displayPhone}</span>
            </a>

            <a
              href={`mailto:${siteConfig.brand.email}`}
              className="flex items-center gap-2 text-slate-300 hover:text-white"
            >
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[11px]">{siteConfig.brand.email}</span>
            </a>
          </div>

          {/* Info Block 4: Social Links & Right Cursive Accent */}
          <div className="lg:col-span-2 space-y-3 text-right">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                FOLLOW US
              </span>
              <div className="flex items-center justify-end gap-3 text-slate-300">
                <a href="#" className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 hover:text-[#D4AF37] transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 hover:text-[#D4AF37] transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 hover:text-[#D4AF37] transition-colors">
                  <Search className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="font-serif italic text-lg text-slate-200 block">
                Thank you for your support!
              </span>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/5 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} {siteConfig.brand.name} ({siteConfig.brand.address}). All rights reserved.
        </div>

      </div>
    </footer>
  );
};
