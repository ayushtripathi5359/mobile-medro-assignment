import { CheckCircle2, ArrowRight } from "lucide-react";

export default function BusinessSection() {
  const stats = [
    { value: "100+", label: "Enterprise Partners" },
    { value: "25,000+ hrs", label: "Live Hours Delivered" },
    { value: "10,000+", label: "Employees Upskilled" },
  ];

  const features = [
    "Customized Learning Solutions",
    "Learn from Subject Matter Experts",
    "Enterprise Reporting",
    "Job-Ready employees post-training",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto
 px-6 border border-orange-200 rounded-3xl shadow-sm p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1">
          <p className="uppercase text-red-500 font-semibold text-3xl mb-2 tracking-wide">
            Enterprises
          </p>

          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Upskillway For{" "}
            <span className="bg-gradient-to-r from-purple-500 to-orange-400 text-white px-3 py-1 rounded-md">
              Business
            </span>
          </h2>

          <ul className="space-y-3 mb-8">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-base">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl py-5 shadow-sm text-center"
              >
                <div className="text-xl font-semibold text-gray-900">
                  {s.value}
                </div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-2 bg-[#FCB11F] hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all">
            Explore Our Solutions
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src=" images/business.png" // replace with your actual image path
            alt="Business Meeting"
            className="rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
