"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  Droplets,
  CircleDot,
  Cog,
  Disc,
  Zap,
  Snowflake,
  Activity,
  CheckCircle,
  Wrench,
  ShieldCheck,
} from "lucide-react";

interface ServicesPageSectionProps {
  onOpenBookingModal: (serviceId?: string) => void;
}

const ALL_ICONS: Record<string, React.FC<{ className?: string }>> = {
  OilCan: Droplets,
  CircleDot: CircleDot,
  Cog: Cog,
  Disc: Disc,
  Zap: Zap,
  Snowflake: Snowflake,
  Activity: Activity,
  CheckCircle: CheckCircle,
  Wrench: Wrench,
  ShieldCheck: ShieldCheck,
};

export const ServicesPageSection: React.FC<ServicesPageSectionProps> = ({
  onOpenBookingModal,
}) => {
  return (
    <section id="services-page" className="py-20 lg:py-24 bg-[#08080b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Page 2 mockup */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#D4AF37]">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-serif uppercase tracking-tight">
            COMPLETE AUTO CARE YOU CAN TRUST
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From routine maintenance to complex repairs, we provide professional service for all makes and models.
          </p>
        </div>

        {/* 10 Detailed Service Grid Cards matching Page 2 mockup */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {siteConfig.allServices.map((srv) => {
            const Icon = ALL_ICONS[srv.iconName] || Wrench;

            return (
              <button
                key={srv.id}
                onClick={() => onOpenBookingModal(srv.id)}
                className="p-6 rounded-2xl bg-[#121218] border border-white/10 text-center space-y-4 hover:border-gold-500/40 hover:bg-[#161620] transition-all flex flex-col justify-between group shadow-xl cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white group-hover:text-[#D4AF37] group-hover:scale-110 transition-all flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white font-serif group-hover:text-[#D4AF37] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {srv.subtitle}
                    </p>
                  </div>
                </div>

                <div className="text-[11px] text-[#D4AF37] font-semibold pt-2 border-t border-white/5">
                  Book Service →
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
