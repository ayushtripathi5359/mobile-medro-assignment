import { Briefcase, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="text-center mb-0 px-4 mt-10">
      {/* Tagline Box */}
      <div className="flex justify-center mb-8">
        <div
          className="flex items-center gap-2 border border-black/20 bg-white 
                     rounded-[24px] shadow-sm"
          style={{ padding: "8px 24px" }}
        >
          <Briefcase className="w-5 h-5 text-[#e7b23b]" />
          <span className="text-[15px] font-medium text-gray-800 leading-none">
            India's #1 Project-Based Learning Platform
          </span>
        </div>
      </div>

      {/* Hero Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-center">
        <span
          className="block text-transparent bg-clip-text 
                     bg-gradient-to-b from-[#de9200] to-[#7f5302]"
        >
          Transform Your Career with
        </span>

        <span className="block text-transparent bg-clip-text 
                     bg-gradient-to-b from-[#7a5206] to-[#010100]">Industry-Ready Skills</span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
        Join 15,000+ professionals who've accelerated their careers through our hands-on
        <br className="hidden sm:block" />
        programs and industry connections.
      </p>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button
          className="h-[52px] px-8 bg-[#F4A41C] text-white font-medium 
                     rounded-full flex items-center gap-3 shadow-md 
                     hover:shadow-lg transition-all"
        >
          Explore Our Programs
          <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-white" />
          </span>
        </button>
      </div>
    </div>
  );
}
