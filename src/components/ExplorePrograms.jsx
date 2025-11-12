import { ArrowRight, Star } from "lucide-react";

export default function ExplorePrograms() {
  const programs = [
    {
      title: "Data Science with Specialization",
      rating: 4.8,
      reviews: 6,
      duration: "8 Months",
      image: " images/data-science.png", // replace with actual path
    },
    {
      title: "Data Science with Specialization",
      rating: 4.8,
      reviews: 6,
      duration: "8 Months",
      image: " images/data-science.png",
    },
    {
      title: "Data Science with Specialization",
      rating: 4.8,
      reviews: 6,
      duration: "8 Months",
      image: " images/data-science.png",
    },
    {
      title: "Data Science with Specialization",
      rating: 4.8,
      reviews: 6,
      duration: "8 Months",
      image: " images/data-science.png",
    },
    {
      title: "Data Science with Specialization",
      rating: 4.8,
      reviews: 6,
      duration: "8 Months",
      image: " images/data-science.png",
    },
    {
      title: "Data Science with Specialization",
      rating: 4.8,
      reviews: 6,
      duration: "8 Months",
      image: " images/data-science.png",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-gray-900 mb-3">
          Explore Our <span className="text-[#FDB11F]">Programs</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Find the best Program for your Growth and boost your Confidence 10x!
        </p>

        {/* Program Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-6 text-left flex flex-col items-center"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-40 object-contain mb-4"
              />
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-gray-700 font-medium">
                  {program.rating} ({program.reviews})
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 text-base mb-1 text-center">
                {program.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Duration: {program.duration}
              </p>
              <div className="flex items-center justify-center gap-3 w-full">
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-all">
                  Download Brochure
                </button>
                <button className="px-4 py-2 border border-[#FCB11F] text-[#FCB11F] rounded-full text-sm font-medium hover:bg-orange-50 transition-all">
                  View Program
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination + View All */}
        <div className="flex items-center justify-around gap-6 mt-10">

  {/* Left Arrow */}
  <button className="w-[52px] h-[40px] flex items-center justify-center 
                     border border-[#e6e6e6] rounded-full text-black
                     hover:bg-gray-50 transition">
    <ArrowRight className="w-5 h-5 rotate-180" />
  </button>

  {/* View All Button */}
  <button className="flex items-center gap-3 h-[48px] px-6 
                     border border-[#f6c46b] rounded-full font-semibold 
                     text-black bg-white hover:shadow-md transition">

    View All

    <span className="w-8 h-8 bg-[#f6c46b] rounded-full flex items-center justify-center">
      <ArrowRight className="w-4 h-4 text-white" />
    </span>
  </button>

  {/* Right Arrow */}
  <button className="w-[52px] h-[40px] flex items-center justify-center 
                     border border-[#e6e6e6] rounded-full text-black
                     hover:bg-gray-50 transition">
    <ArrowRight className="w-5 h-5" />
  </button>

</div>

      </div>
    </section>
  );
}
