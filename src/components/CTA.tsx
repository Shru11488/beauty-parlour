"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 text-center bg-[#1A1A1A] text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl mb-4"
      >
        Ready for your transformation?
      </motion.h2>

      <p className="mb-6 text-gray-300">
        Book your appointment today and glow like never before
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="bg-[#D4AF37] px-6 py-3 rounded-full text-black font-medium"
      >
        Book Appointment
      </motion.button>
    </section>
  );
}
