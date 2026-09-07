"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { X, Calendar, Clock, Car, User, Phone, CheckCircle2, ShieldCheck } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId = "oil-change",
}) => {
  const [selectedService, setSelectedService] = useState(initialServiceId);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00 AM");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !date) {
      alert("Please fill in your name, phone number, and appointment date.");
      return;
    }
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#121216] border border-white/15 rounded-2xl shadow-2xl overflow-hidden text-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-gold-500/20 text-gold-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-serif">
                Book Service Appointment
              </h3>
              <p className="text-xs text-slate-400">
                {siteConfig.brand.name} • {siteConfig.brand.address}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!confirmed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Select Service */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Service Needed
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full h-11 px-3 rounded-xl bg-[#0a0a0d] border border-white/10 text-sm text-slate-100 focus:border-gold-500 focus:outline-none transition-all"
                >
                  {siteConfig.allServices.map((srv) => (
                    <option key={srv.id} value={srv.id} className="bg-[#121216] text-slate-200">
                      {srv.title} ({srv.subtitle})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full h-11 px-3 rounded-xl bg-[#0a0a0d] border border-white/10 text-sm text-slate-100 focus:border-gold-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full h-11 px-3 rounded-xl bg-[#0a0a0d] border border-white/10 text-sm text-slate-100 focus:border-gold-500 focus:outline-none transition-all"
                  >
                    <option>08:30 AM</option>
                    <option>10:00 AM</option>
                    <option>11:30 AM</option>
                    <option>01:30 PM</option>
                    <option>03:00 PM</option>
                    <option>04:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0a0a0d] border border-white/10 text-sm text-slate-100 focus:border-gold-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="201-000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0a0a0d] border border-white/10 text-sm text-slate-100 focus:border-gold-500 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Vehicle Info
                  </label>
                  <div className="relative">
                    <Car className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Ex: 2022 BMW M4"
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0a0a0d] border border-white/10 text-sm text-slate-100 focus:border-gold-500 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-gold-500 via-gold-400 to-amber-400 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-gold-500/20 flex items-center justify-center gap-2 mt-4"
              >
                <Calendar className="w-4 h-4" />
                Confirm Appointment Request
              </button>

              <p className="text-[10px] text-center text-slate-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                {siteConfig.brand.address} • Call {siteConfig.brand.displayPhone}
              </p>
            </form>
          ) : (
            <div className="py-8 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-white font-serif">
                  Appointment Reserved!
                </h4>
                <p className="text-sm text-slate-300 mt-2 max-w-sm mx-auto">
                  Thank you <strong className="text-gold-400">{name}</strong>. Your service appointment for <span className="text-white font-semibold">{vehicle || "your vehicle"}</span> is reserved for <strong className="text-white">{date} at {time}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0a0d] border border-white/10 text-left text-xs space-y-1.5">
                <p className="text-slate-400">Shop Location: <strong className="text-white">{siteConfig.brand.name} ({siteConfig.brand.address})</strong></p>
                <p className="text-slate-400">Direct Phone: <strong className="text-gold-400 font-mono">{siteConfig.brand.displayPhone}</strong></p>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all text-center"
              >
                Done
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
