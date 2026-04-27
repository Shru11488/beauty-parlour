"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <main className="bg-[#F8F5F2] text-[#1A1A1A]">
      {/* Navbar */}
      <Navbar onBook={() => setOpen(true)} />

      {/* Hero */}
      <Hero onBook={() => setOpen(true)} />

      {/* Services (IMPORTANT CHANGE) */}
      <Services
        onBook={(serviceName: string) => {
          setSelectedService(serviceName);
          setOpen(true);
        }}
      />

      <Gallery />
      <Testimonials />

      {/* CTA */}
      <CTA onBook={() => setOpen(true)} />

      <Footer />

      {/* Booking Modal (IMPORTANT CHANGE) */}
      <BookingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        selectedService={selectedService}
      />
    </main>
  );
}
