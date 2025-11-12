import { ArrowRight } from "lucide-react";

export default function DiscoverCertification() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div
        className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 
                   gap-12 items-center px-5 sm:px-8 lg:px-12"
      >
        {/* ---------------- LEFT CONTENT ---------------- */}
        <div className="text-center md:text-left">
          <span
            className="inline-block px-4 py-1 text-sm border border-gray-300 
                       rounded-full text-gray-700 mb-4"
          >
            Certifications
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            Discover
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FCB11F] leading-tight mb-6">
            Certification
          </h2>

          <p
            className="text-gray-600 mb-8 leading-relaxed 
                       text-sm sm:text-base lg:text-lg max-w-xl mx-auto md:mx-0"
          >
            Turn your interest into expertise with our industry-recognized
            certification courses. Whether you’re a beginner or a working
            professional, these programs are designed to help you build
            job-ready skills and get certified by trusted institutions.
          </p>

          <h3 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg">
            What you’ll gain:
          </h3>

          <ul
            className="text-gray-700 space-y-2 mb-8 text-sm sm:text-base 
                       md:ml-6 lg:ml-8 text-left"
          >
            <li>● Globally recognized certificates from Upskillway & partners</li>
            <li>● Hands-on training with real-world projects</li>
            <li>● Expert mentorship to guide your learning</li>
            <li>● Career-focused skills that employers value</li>
          </ul>

          <div className="flex justify-center md:justify-start">
            <button
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 
                         rounded-full font-medium text-gray-800 hover:bg-gray-50 
                         transition-all"
            >
              Explore certificate programs
              <span
                className="w-6 h-6 bg-black text-white rounded-full flex 
                           items-center justify-center"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>

        {/* ---------------- RIGHT VIDEO ---------------- */}
        <div className="flex justify-center md:justify-end">
          <div
            className="w-full max-w-[480px] sm:max-w-[520px] md:max-w-[580px] 
                       lg:max-w-[640px] xl:max-w-[700px]"
          >
            <video
              src="/videos/kid-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
