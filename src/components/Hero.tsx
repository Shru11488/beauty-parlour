"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center text-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Glow Begins Here
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg mb-6"
        >
          Luxury Beauty & Hair Studio
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-[#D4AF37] px-6 py-3 rounded-full text-black font-medium"
        >
          Book Appointment
        </motion.button>
      </div>
    </section>
  );
}
