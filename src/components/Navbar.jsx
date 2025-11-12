import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar({ navItems }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 py-4">
      <div className="max-w-[1400px] mx-auto  flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
  <div className="w-54 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
    <img
      src=" images/logo.png"
      alt="Upskillway Logo"
      className="w-80 h-80 object-contain"
    />
  </div>
</div>


        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="text-[16px] font-medium text-gray-800 hover:text-orange-600 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <button className="px-6 py-2 border-2 text-white border-white rounded-full text-sm font-medium text-gray-900 flex items-center gap-2 hover:bg-black/5 transition">
            Register Now
            <span className="w-8 h-8 bg-white text-white rounded-full flex items-center justify-center">
              <ArrowRight className="w-4 h-4 -rotate-45 text-[#FCB11F]" />
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200 py-4">
          {navItems.map((item, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="block px-6 py-3 text-gray-700 hover:bg-orange-50 hover:text-[#FCB11F] transition"
            >
              {item}
            </a>
          ))}
          <div className="px-6 pt-4">
            <button className="w-full px-6 py-3 bg-[#FCB11F] text-white rounded-full text-sm font-medium hover:bg-orange-600 transition">
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
