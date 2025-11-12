import { ArrowUp, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] text-white px-4 pt-24 pb-10 rounded-t-[50px] overflow-hidden">
      {/* Outer Glow for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent pointer-events-none"></div>

      {/* Main Wrapper */}
      <div className="relative max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 px-6 lg:px-12">
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between">
          {/* Top: Logo + Links */}
          <div className="flex flex-col gap-12">
            {/* Logo */}
            <div className="flex items-center gap-3">
             <div className="w-30 h-30 rounded-xl bg-transparent flex items-center justify-center ">
  <img
    src=" images/logo2.png" // 🔹 apna PNG path yahan daal do
    alt="icon"
    className="w-30 object-contain"
  />
</div>
            </div>

            {/* Link Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
              <div>
                <h4 className="text-gray-300 font-semibold mb-3 tracking-wide">
                  Explore
                </h4>
                <ul className="space-y-2 text-gray-400 hover:[&>li]:text-white transition-all">
                  <li>What We Offer</li>
                  <li>Case Studies</li>
                  <li>Blog & Insights</li>
                  <li>Resources</li>
                  <li>FAQs</li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-300 font-semibold mb-3 tracking-wide">
                  Company
                </h4>
                <ul className="space-y-2 text-gray-400 hover:[&>li]:text-white transition-all">
                  <li>Home</li>
                  <li>About</li>
                  <li>Service</li>
                  <li>Testimonials</li>
                  <li>Pricing</li>
                  <li>Career</li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-300 font-semibold mb-3 tracking-wide">
                  Legal
                </h4>
                <ul className="space-y-2 text-gray-400 hover:[&>li]:text-white transition-all">
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                  <li>Disclaimer</li>
                  <li>Copyright</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <button className="flex items-center gap-2 text-gray-300 hover:text-white transition mt-10 group">
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative bg-gradient-to-br from-[#121212] to-[#0C0C0C] rounded-[45px] p-10 border border-[#1f1f1f] shadow-xl shadow-black/20">
          {/* Tag */}
          <span className="text-xs font-medium text-gray-400 bg-[#222] px-3 py-1 rounded-full">
            Demo
          </span>

          <h3 className="text-4xl font-semibold mt-5 mb-6 leading-tight">
            Request a <span >Demo</span>
          </h3>

          {/* Email Input */}
          <div className="flex items-center bg-[#1b1b1b] rounded-full overflow-hidden max-w-md border border-[#2a2a2a] focus-within:border-[#FCB11F] transition">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-5 py-3 text-sm text-gray-300 focus:outline-none placeholder-gray-500"
            />
            <button className="bg-[#FCB11F] px-6 py-3 text-sm rounded-full flex items-center gap-2 hover:bg-orange-600 transition">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Accent Light Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FCB11F]/20 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#FCB11F]/10 blur-2xl rounded-full pointer-events-none"></div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full border-t border-[#1b1b1b] my-10"></div>

      {/* Bottom Credits */}
      <div className="max-w-[1400px] mx-auto px-6 text-center text-gray-500 text-sm">
        <p>
          Design by{" "}
          <span className="text-[#FCB11F] font-semibold hover:underline cursor-pointer">
            Medro
          </span>{" "}
          ❤️
        </p>
      </div>

      {/* Floating Socials */}
      <div className="absolute top-7 right-10 flex gap-4 z-20">
        {["x", "facebook", "instagram", "linkedin"].map((icon, i) => (
          <div
            key={i}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 bg-[#151515] text-gray-300 hover:text-white hover:border-[#FCB11F] transition"
          >
            {icon === "x"
              ? "✕"
              : icon === "facebook"
              ? "📘"
              : icon === "instagram"
              ? "📸"
              : "🔗"}
          </div>
        ))}
      </div>
    </footer>
  );
}
