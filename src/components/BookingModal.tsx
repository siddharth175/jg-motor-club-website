"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Car,
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Wrench,
  Check
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

const TIME_SLOTS = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId = "state-inspection",
}) => {
  // Step State: 1 = Date/Time & Repair Option, 2 = Customer Info & Car Plate
  const [step, setStep] = useState(1);

  // Form State
  const [selectedService, setSelectedService] = useState(initialServiceId);
  const [serviceOption, setServiceOption] = useState<"wait" | "dropoff">("wait");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("09:00 AM");

  // Customer Details (Step 2)
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [carLicensePlate, setCarLicensePlate] = useState("");
  const [comments, setComments] = useState("");

  // Submission State
  const [confirmed, setConfirmed] = useState(false);

  // Update initial service when modal opens
  useEffect(() => {
    if (initialServiceId) {
      setSelectedService(initialServiceId);
    }
    // Set default tomorrow date if empty
    if (!appointmentDate) {
      const tmrw = new Date();
      tmrw.setDate(tmrw.getDate() + 1);
      setAppointmentDate(tmrw.toISOString().split("T")[0]);
    }
  }, [initialServiceId, isOpen]);

  if (!isOpen) return null;

  const handleStep1Next = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appointmentDate) {
      alert("Please select an appointment date.");
      return;
    }
    if (!selectedTime) {
      alert("Please select an appointment time slot.");
      return;
    }
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      alert("Please fill in your full name, phone number, and email address.");
      return;
    }
    setConfirmed(true);
  };

  const resetAndClose = () => {
    setConfirmed(false);
    setStep(1);
    onClose();
  };

  const activeServiceObj = siteConfig.allServices.find((s) => s.id === selectedService) || siteConfig.allServices[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-2xl bg-[#121218] border border-white/15 rounded-3xl shadow-2xl overflow-hidden text-slate-200 flex flex-col max-h-[90vh]">
        
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 shrink-0">
          <div>
            <h3 className="text-lg font-black text-white uppercase font-sans tracking-wide">
              Schedule Appointment
            </h3>
            <p className="text-xs text-slate-400">
              {siteConfig.brand.name} • {siteConfig.brand.address} • {siteConfig.brand.phone}
            </p>
          </div>

          <button
            onClick={resetAndClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close appointment modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Service Bar with Quick Change Option */}
        <div className="px-6 py-3 bg-[#181822] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37]">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">
                Selected Service:
              </span>
              <span className="text-xs font-bold text-white">
                {activeServiceObj.title} ({activeServiceObj.subtitle})
              </span>
            </div>
          </div>

          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="px-3 py-1.5 rounded-lg bg-[#0a0a0d] border border-white/20 text-xs font-semibold text-slate-200 focus:border-[#D4AF37] focus:outline-none"
          >
            {siteConfig.allServices.map((s) => (
              <option key={s.id} value={s.id} className="bg-[#121218] text-slate-200">
                Change: {s.title}
              </option>
            ))}
          </select>
        </div>

        {/* Step Progress Indicator (1 - Date & Time, 2 - Your Info) */}
        {!confirmed && (
          <div className="px-6 py-3 bg-[#0a0a0d] border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-4 text-xs font-bold w-full justify-between max-w-sm mx-auto">
              
              {/* Step 1 Indicator */}
              <div className={`flex items-center gap-2 ${step >= 1 ? "text-[#D4AF37]" : "text-slate-500"}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${step >= 1 ? "bg-[#D4AF37] text-black" : "bg-white/10 text-slate-400"}`}>
                  1
                </div>
                <span className="uppercase tracking-wider">Date & Time</span>
              </div>

              <div className={`h-0.5 flex-1 mx-3 ${step >= 2 ? "bg-[#D4AF37]" : "bg-white/10"}`} />

              {/* Step 2 Indicator */}
              <div className={`flex items-center gap-2 ${step >= 2 ? "text-[#D4AF37]" : "text-slate-500"}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${step >= 2 ? "bg-[#D4AF37] text-black" : "bg-white/10 text-slate-400"}`}>
                  2
                </div>
                <span className="uppercase tracking-wider">Your & Car Info</span>
              </div>

            </div>
          </div>
        )}

        {/* Modal Body Container */}
        <div className="p-6 overflow-y-auto flex-1 text-left space-y-6">
          
          {/* ================= STEP 1: DATE, TIME & WAIT/DROP-OFF ================= */}
          {!confirmed && step === 1 && (
            <form onSubmit={handleStep1Next} className="space-y-6">
              
              {/* Question 1: Wait or Drop-Off (Matching Mockup) */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-white font-sans">
                  Do You Wish to Wait During the Repair or Drop Off Your Vehicle?
                </label>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setServiceOption("wait")}
                    className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                      serviceOption === "wait"
                        ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-lg shadow-gold-500/20"
                        : "bg-white/5 text-slate-300 border-white/15 hover:bg-white/10"
                    }`}
                  >
                    I Will Wait For My Vehicle
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceOption("dropoff")}
                    className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                      serviceOption === "dropoff"
                        ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-lg shadow-gold-500/20"
                        : "bg-white/5 text-slate-300 border-white/15 hover:bg-white/10"
                    }`}
                  >
                    I Will Drop Off My Vehicle
                  </button>
                </div>
              </div>

              {/* Question 2: Select Date & Time (Matching Mockup Layout) */}
              <div className="space-y-4 pt-2">
                <label className="block text-sm font-bold text-white font-sans">
                  Select Appointment Date and Time
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
                  
                  {/* Date Input */}
                  <div className="sm:col-span-5 space-y-1.5">
                    <span className="text-xs font-semibold text-slate-400 block">
                      Choose Date
                    </span>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        className="w-full h-12 px-4 rounded-xl bg-[#0a0a0d] border border-white/20 text-sm font-semibold text-white focus:border-[#D4AF37] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Interactive Time Slots Grid (Matching Mockup Time Pills) */}
                  <div className="sm:col-span-7 space-y-1.5">
                    <span className="text-xs font-semibold text-slate-400 block">
                      Available Time Slots
                    </span>

                    <div className="grid grid-cols-3 gap-2">
                      {TIME_SLOTS.map((t) => {
                        const isSelected = selectedTime === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTime(t)}
                            className={`py-2 px-2 text-center rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-md"
                                : "bg-white/5 text-slate-300 border-white/15 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>

              {/* Status Alert Summary */}
              <div className="p-3.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center gap-2.5 text-xs text-[#D4AF37] font-semibold">
                <AlertCircle className="w-4 h-4 shrink-0 text-[#D4AF37]" />
                <span>
                  {serviceOption === "wait" ? "⚠️ I will wait for my vehicle:" : "🚗 I will drop off my vehicle:"} {activeServiceObj.title} on {appointmentDate} at {selectedTime}.
                </span>
              </div>

              {/* Step 1 Footer Navigation */}
              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E4C75E] to-[#C09623] text-black font-extrabold text-xs uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg cursor-pointer"
                >
                  <span>Next: Your Info & Car Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* ================= STEP 2: CUSTOMER INFO, CAR PLATE & COMMENTS ================= */}
          {!confirmed && step === 2 && (
            <form onSubmit={handleFinalSubmit} className="space-y-5">
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white font-sans uppercase">
                  Contact Information & Vehicle Details
                </h4>
                <p className="text-xs text-slate-400">
                  Please provide your contact info and car details or tell us what's the issue with the car.
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full h-11 pl-10 pr-3 rounded-xl bg-[#0a0a0d] border border-white/20 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                      <input
                        type="tel"
                        required
                        placeholder="(201) 555-0123"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full h-11 pl-10 pr-3 rounded-xl bg-[#0a0a0d] border border-white/20 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Address & Car License Plate */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-11 pl-10 pr-3 rounded-xl bg-[#0a0a0d] border border-white/20 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Car License Plate & Model
                    </label>
                    <div className="relative">
                      <Car className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        placeholder="e.g. NJ-ABC1234 / 2021 BMW M3"
                        value={carLicensePlate}
                        onChange={(e) => setCarLicensePlate(e.target.value)}
                        className="w-full h-11 pl-10 pr-3 rounded-xl bg-[#0a0a0d] border border-white/20 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Comments / Issue Description Textarea */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Comments / Tell Us What's The Issue With The Car
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                    <textarea
                      rows={3}
                      placeholder="Describe any symptoms, noises, check engine lights, or special requests..."
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#0a0a0d] border border-white/20 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-all"
                    />
                  </div>
                </div>

              </div>

              {/* Step 2 Footer Navigation */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs uppercase hover:bg-white/20 transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Date & Time</span>
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E4C75E] to-[#C09623] text-black font-black text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-gold-500/20 cursor-pointer"
                >
                  <span>Confirm Appointment</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* ================= STEP 3: CONFIRMATION SUCCESS ================= */}
          {confirmed && (
            <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
              
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-black text-white font-sans uppercase">
                  Appointment Requested!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you <strong className="text-white">{fullName}</strong>. We have received your appointment request for <strong className="text-[#D4AF37]">{activeServiceObj.title}</strong>.
                </p>
              </div>

              {/* Summary Box */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-left max-w-md mx-auto space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Service:</span>
                  <span className="font-bold text-white">{activeServiceObj.title}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Option:</span>
                  <span className="font-bold text-white">{serviceOption === "wait" ? "I Will Wait For My Vehicle" : "I Will Drop Off My Vehicle"}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Date & Time:</span>
                  <span className="font-bold text-[#D4AF37]">{appointmentDate} at {selectedTime}</span>
                </div>
                {carLicensePlate && (
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">License Plate / Vehicle:</span>
                    <span className="font-bold text-white">{carLicensePlate}</span>
                  </div>
                )}
                {comments && (
                  <div>
                    <span className="text-slate-400 block mb-1">Issue / Notes:</span>
                    <p className="text-slate-200 italic bg-black/40 p-2 rounded-lg">{comments}</p>
                  </div>
                )}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${siteConfig.brand.phone.replace(/\s+/g, "")}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-bold text-xs uppercase hover:bg-white/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Call {siteConfig.brand.displayPhone}</span>
                </a>

                <button
                  onClick={resetAndClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E4C75E] to-[#C09623] text-black font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
