"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Wrench, CircleDot, Cog, Disc, Zap, Snowflake } from "lucide-react";

interface ServicesSectionProps {
  onOpenBookingModal: (serviceId?: string) => void;
}

const CrossedWrenchesIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    <path d="m9.3 14.7-6.9 6.9" />
  </svg>
);

const BrakeRotorIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" />
    <path d="M12 3v2" /><path d="M12 19v2" /><path d="M3 12h2" /><path d="M19 12h2" />
    <path d="M5.6 5.6l1.4 1.4" /><path d="M17 17l1.4 1.4" /><path d="M5.6 18.4l1.4-1.4" /><path d="M17 7l1.4-1.4" />
  </svg>
);

const EngineBlockIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="8" width="14" height="10" rx="2" />
    <path d="M9 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
    <path d="M3 11h2" /><path d="M19 11h2" />
    <path d="M3 15h2" /><path d="M19 15h2" />
    <circle cx="12" cy="13" r="2" />
  </svg>
);

const TireWheelIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" strokeDasharray="3 2" />
    <path d="M12 3v5" /><path d="M12 16v5" /><path d="M3 12h5" /><path d="M16 12h5" />
  </svg>
);

const BatteryPowerIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="18" height="13" rx="2" />
    <path d="M7 6V4" /><path d="M17 6V4" />
    <path d="M13 9.5l-2.5 4h3l-1.5 4" />
  </svg>
);

const AcSnowflakeIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
  </svg>
);

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Wrench: CrossedWrenchesIcon,
  CircleDot: TireWheelIcon,
  Cog: EngineBlockIcon,
  Disc: BrakeRotorIcon,
  Zap: BatteryPowerIcon,
  Snowflake: AcSnowflakeIcon,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="services" className="bg-[#0b0b0e] border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {siteConfig.quickServices.map((srv) => {
            const Icon = ICON_MAP[srv.iconName] || Wrench;

            return (
              <button
                key={srv.id}
                onClick={() => onOpenBookingModal(srv.id)}
                className="p-6 sm:p-8 text-center group hover:bg-white/[0.04] transition-all flex flex-col items-center justify-center space-y-3 cursor-pointer"
              >
                {/* White Clean Icon */}
                <div className="w-10 h-10 text-white group-hover:text-gold-400 group-hover:scale-110 transition-all flex items-center justify-center">
                  <Icon className="w-8 h-8 stroke-[1.8]" />
                </div>

                {/* Service Title */}
                <div>
                  <h3 className="text-base font-bold text-white font-sans group-hover:text-gold-400 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-sans">
                    {srv.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
