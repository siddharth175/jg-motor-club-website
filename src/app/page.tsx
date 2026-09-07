"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { ServicesPageSection } from "@/components/ServicesPageSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContactSection } from "@/components/ContactSection";
import { CtaBanner } from "@/components/CtaBanner";
import { InfoBar } from "@/components/InfoBar";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { StateInspectionBanner } from "@/components/StateInspectionBanner";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>("state-inspection");
  const [isServicePreselected, setIsServicePreselected] = useState<boolean>(false);

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
      setIsServicePreselected(true);
    } else {
      setSelectedServiceId("state-inspection");
      setIsServicePreselected(false);
    }
    setBookingModalOpen(true);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-slate-100 font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Top Header Bar with Multi-Page Navigation */}
      <Header
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onOpenBookingModal={() => handleOpenBooking()}
      />

      <main>
        {/* HOME TAB (Full Homepage Layout from Page 1 Mockup) */}
        {activeTab === "home" && (
          <>
            <Hero onOpenBookingModal={() => handleOpenBooking()} />
            <ServicesSection onOpenBookingModal={(srvId) => handleOpenBooking(srvId)} />
            <InfoBar />
            <StateInspectionBanner onOpenBookingModal={(srvId) => handleOpenBooking(srvId)} />
            <AboutSection onTabChange={handleTabChange} />
            <GallerySection onTabChange={handleTabChange} />
            <ReviewsSection />
            <CtaBanner onOpenBookingModal={() => handleOpenBooking()} />
          </>
        )}

        {/* SERVICES TAB (Services Page Layout from Page 2 Mockup) */}
        {activeTab === "services" && (
          <>
            <ServicesPageSection onOpenBookingModal={(srvId) => handleOpenBooking(srvId)} />
            <CtaBanner onOpenBookingModal={() => handleOpenBooking()} />
          </>
        )}

        {/* ABOUT TAB (About Us Page Layout from Page 3 Mockup) */}
        {activeTab === "about" && (
          <>
            <AboutSection fullPage />
            <CtaBanner onOpenBookingModal={() => handleOpenBooking()} />
          </>
        )}

        {/* GALLERY TAB */}
        {activeTab === "gallery" && (
          <>
            <GallerySection fullPage />
            <CtaBanner onOpenBookingModal={() => handleOpenBooking()} />
          </>
        )}

        {/* REVIEWS TAB */}
        {activeTab === "reviews" && (
          <>
            <ReviewsSection />
            <CtaBanner onOpenBookingModal={() => handleOpenBooking()} />
          </>
        )}

        {/* CONTACT TAB (Contact Page Layout from Page 4 Mockup) */}
        {activeTab === "contact" && (
          <>
            <ContactSection />
          </>
        )}
      </main>

      {/* Footer Bar */}
      <Footer />

      {/* Interactive Appointment Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={selectedServiceId}
        isServicePreselected={isServicePreselected}
      />

      {/* Floating Text & WhatsApp Messaging Widget */}
      <FloatingContactWidget />
    </div>
  );
}
