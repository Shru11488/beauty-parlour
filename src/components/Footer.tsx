export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Glow Studio</h2>
          <p className="text-gray-400 text-sm">
            Luxury beauty & hair services designed to make you feel confident
            and radiant.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-medium mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">📍 Thane, Mumbai</p>
          <p className="text-gray-400 text-sm">📞 +91 98765 43210</p>
          <p className="text-gray-400 text-sm">✉️ glowstudio@email.com</p>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-medium mb-4">Working Hours</h3>
          <p className="text-gray-400 text-sm">Mon - Sat: 10:00 AM – 8:00 PM</p>
          <p className="text-gray-400 text-sm">Sunday: Closed</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
        © 2026 Glow Studio. All rights reserved.
      </div>
    </footer>
  );
}
