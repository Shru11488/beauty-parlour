"use client";

import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-10 bg-[#F8F5F2]">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
        <p className="text-gray-500 mt-2">
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
