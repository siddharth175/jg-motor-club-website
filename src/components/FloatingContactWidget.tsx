"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { MessageSquare, PhoneCall, X, Send } from "lucide-react";
import { GetDirectionsButton } from "@/components/GetDirectionsButton";

export const FloatingContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      
      {/* Expanded Quick Text & WhatsApp Chat Card */}
      {isOpen && (
        <div className="w-80 rounded-2xl bg-[#121218]/95 border border-white/20 shadow-2xl p-5 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300 text-left space-y-4">
          
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Text J & G Motor Club
                </h4>
                <p className="text-[11px] text-slate-400">
                  Fast response • 201 989 6811
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close text widget"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Intro Message Bubble */}
          <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-slate-300 leading-relaxed">
            💬 Need a quick quote or have a question? Tap below to text us directly on <strong className="text-white">WhatsApp</strong> or <strong className="text-white">SMS Text</strong>!
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-1">
            
            {/* WhatsApp Button */}
            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02]"
            >
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.15 4.198 4.286-1.124z" />
                </svg>
                <span>WhatsApp Message</span>
              </div>
              <Send className="w-3.5 h-3.5" />
            </a>

            {/* Direct SMS Text Button */}
            <a
              href={siteConfig.brand.smsUrl}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02]"
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-white" />
                <span>Send SMS Text</span>
              </div>
              <Send className="w-3.5 h-3.5 text-white" />
            </a>

            {/* Direct Phone Call Button */}
            <a
              href={siteConfig.brand.callUrl}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/15 transition-all"
            >
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                <span>Call 201 989 6811</span>
              </div>
            </a>

            {/* Get Directions Button */}
            <GetDirectionsButton variant="card" />
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#25D366] via-emerald-500 to-emerald-600 text-black font-extrabold text-xs uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white/30"
        aria-label="Text us on WhatsApp or SMS"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-black text-black" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping" />
        </div>

        <span className="font-sans font-black tracking-wide text-black drop-shadow-sm">
          Text Us
        </span>

        {/* Floating Tooltip hint */}
        <span className="hidden sm:inline-block text-[10px] bg-black/80 text-white px-2 py-0.5 rounded-full font-mono font-normal">
          201 989 6811
        </span>
      </button>

    </div>
  );
};
