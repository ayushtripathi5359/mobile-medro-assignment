import { ArrowRight } from "lucide-react";

export default function RequestCallback() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-12">
        {/* Illustration */}
        <div className="mb-10">
          <img
            src=" images/callback.png"
            alt="Request Callback"
            className="mx-auto w-52 sm:w-64 md:w-72 lg:w-80 mb-6"
          />
        </div>

        {/* Form */}
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left"
        >
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="Your First Name"
              className="w-full bg-[#F7F7F7] rounded-xl px-4 py-3 text-sm sm:text-base 
                         shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Your Last Name"
              className="w-full bg-[#F7F7F7] rounded-xl px-4 py-3 text-sm sm:text-base 
                         shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#F7F7F7] rounded-xl px-4 py-3 text-sm sm:text-base 
                         shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <div className="flex gap-2">
              <div className="px-4 py-3 bg-[#F7F7F7] rounded-xl shadow-sm flex items-center text-sm sm:text-base">
                +91
              </div>
              <input
                type="text"
                placeholder="Your Contact Number"
                className="flex-1 bg-[#F7F7F7] rounded-xl px-4 py-3 text-sm sm:text-base 
                           shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          {/* Year of Graduation + Privacy Notice */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Year of Graduation
            </label>
            <select
              className="w-full bg-[#F7F7F7] rounded-xl px-4 py-3 text-sm sm:text-base 
                         shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option>Select year of graduation</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>Before 2022</option>
            </select>
            <p className="text-xs text-gray-500 mt-3 leading-snug">
              By providing your contact details, you agree to our{" "}
              <span className="text-[#FCB11F] underline cursor-pointer">
                privacy policy
              </span>.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Work Experience
            </label>
            <select
              className="w-full bg-[#F7F7F7] rounded-xl px-4 py-3 text-sm sm:text-base 
                         shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option>Select work experience</option>
              <option>0–1 years</option>
              <option>1–3 years</option>
              <option>3–5 years</option>
              <option>5+ years</option>
            </select>
          </div>

          {/* Spacer for layout alignment */}
          <div></div>

          {/* Select Program */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Program
            </label>
            <select
              className="w-full bg-[#F7F7F7] rounded-xl px-4 py-3 text-sm sm:text-base 
                         shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option>Select Program</option>
              <option>Graphic Design</option>
              <option>Data Science</option>
              <option>Finance & Business</option>
              <option>Marketing</option>
            </select>
          </div>
        </form>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            className="px-8 sm:px-10 py-3 bg-[#FCB11F] text-white rounded-full 
                       font-medium text-sm sm:text-base hover:bg-orange-600 
                       transition-all flex items-center gap-2 shadow-md"
          >
            Request a Callback
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
