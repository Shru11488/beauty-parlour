"use client";

import { services } from "@/data/services";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-10 bg-[#F8F5F2]">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
        <p className="text-gray-500 mt-2">
          Premium beauty treatments tailored for you
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold">{service.title}</h3>

              <p className="text-sm text-gray-500 mt-1">{service.desc}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="font-medium text-[#D4AF37]">
                  {service.price}
                </span>

                <button className="text-sm text-black hover:underline">
                  Book →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
