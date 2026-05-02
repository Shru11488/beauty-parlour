import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-20 px-6 md:px-10">
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
          <p className="text-gray-400 text-sm">📍 London, United Kingdom</p>
          <p className="text-gray-400 text-sm">📞 +44 7700 900123</p>
          <p className="text-gray-400 text-sm">✉️ glowstudio@email.com</p>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-medium mb-4">Working Hours</h3>
          <p className="text-gray-400 text-sm">Mon - Sat: 9:00 AM – 7:00 PM</p>
          <p className="text-gray-400 text-sm">Sunday: Closed</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-6 flex items-center justify-between">
        {/* LEFT */}
        <div className="text-gray-500 text-sm">
          © 2026 Glow Studio. All rights reserved.
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5 text-gray-400">
          <a href="#" className="hover:text-white hover:scale-110 transition">
            <FaInstagram size={18} />
          </a>

          <a href="#" className="hover:text-white hover:scale-110 transition">
            <FaFacebookF size={18} />
          </a>

          <a href="#" className="hover:text-white hover:scale-110 transition">
            <FaTwitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
