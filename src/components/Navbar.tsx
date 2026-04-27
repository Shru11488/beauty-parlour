"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-wide">Glow Studio</h1>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* CTA */}
        <button className="bg-[#D4AF37] text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition">
          Book Now
        </button>
      </div>
    </nav>
  );
}
