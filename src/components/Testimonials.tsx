"use client";

import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-10 bg-[#F8F5F2]">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="w-20 h-[2px] bg-black/20 mx-auto mb-6" />

        <h2 className="font-serif text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.02em] font-medium">
          What Our Clients Say
        </h2>

        <p className="font-sans text-[14px] md:text-[16px] tracking-[0.2em] uppercase text-gray-500 mt-4">
          Real experiences from our happy clients
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <p className="text-gray-600 text-sm">“{t.review}”</p>

            <div className="mt-4">
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-xs text-gray-400">{t.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
