"use client";

import { services } from "@/data/services";
import { motion } from "framer-motion";
import { useState } from "react";
import ServiceModal from "./ServiceModal";

export default function Services({
  onBook,
}: {
  onBook: (serviceName: string) => void;
}) {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Makeup", "Hair", "Nails", "Skin"];
  return (
    <section id="services" className="py-24 px-6 md:px-10 bg-[#F8F5F2]">
      {/* <div className="w-20 h-[2px] bg-black/20 mx-auto mb-6" /> */}
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="w-20 h-[2px] bg-black/20 mx-auto mb-6" />

        <h2 className="font-serif text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.02em] font-medium">
          Our Services
        </h2>

        <p className="font-sans text-[14px] md:text-[16px] tracking-[0.2em] uppercase text-gray-500 mt-4">
          Premium beauty treatments tailored for you
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              selectedCategory === cat
                ? "bg-[#D4AF37] text-black"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services
          .filter(
            (service) =>
              selectedCategory === "All" ||
              service.category === selectedCategory,
          )
          .map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedService(service)}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{service.category}</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="font-medium text-[#D4AF37]">
                    {service.options?.[0]?.price}
                  </span>

                  <button className="text-sm text-black hover:underline">
                    View →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      {/* MODAL*/}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={() => {
          setSelectedService(null);
          onBook(selectedService?.title || "");
        }}
      />
    </section>
  );
}
