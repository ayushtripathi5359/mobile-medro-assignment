import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "Data Science with Specialization",
      rating: 4.8,
      reviews: 6,
      duration: "8 Months",
      img: "/program-thumb.png", // replace with your actual image
    },
    {
      title: "Data Science with Specialization",
      rating: 4.8,
      reviews: 6,
      duration: "8 Months",
      img: "/program-thumb.png",
    },
    {
      title: "Data Science with Specialization",
      rating: 4.8,
      reviews: 6,
      duration: "8 Months",
      img: "/program-thumb.png",
    },
    {
      title: "Data Science with Specialization",
      rating: 4.8,
      reviews: 6,
      duration: "8 Months",
      img: "/program-thumb.png",
    },
    {
      title: "Data Science with Specialization",
      rating: 4.8,
      reviews: 6,
      duration: "8 Months",
      img: "/program-thumb.png",
    },
    {
      title: "Data Science with Specialization",
      rating: 4.8,
      reviews: 6,
      duration: "8 Months",
      img: "/program-thumb.png",
    },
  ];

  return (
    <section className="text-center mt-24">
      <h2 className="text-4xl sm:text-5xl font-semibold mb-3">
        Explore Our <span className="text-[#f7b733]">Programs</span>
      </h2>
      <p className="text-gray-600 mb-12">
        Find the best Program for your Growth and boosts your Confidence 10x!
      </p>

      {/* Program Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto
 mb-12">
        {programs.map((p, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all"
          >
            <img
              src={p.img}
              alt={p.title}
              className="mx-auto mb-4 h-28 object-contain"
            />

            <div className="flex justify-center items-center gap-1 text-sm text-gray-600 mb-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>{p.rating}</span>
              <span>({p.reviews})</span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {p.title}
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Duration: {p.duration}
            </p>

            <div className="flex justify-center gap-3">
              <button className="px-4 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-100">
                Download Brochure
              </button>
              <button className="px-4 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-100">
                View Program
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation + CTA */}
      <div className="flex justify-center items-center gap-6">
        <button className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button className="px-6 py-3 bg-[#f7b733] text-white rounded-full flex items-center gap-2 font-medium hover:bg-[#f4a832] transition-all">
          View All
          <ArrowRight className="w-4 h-4" />
        </button>

        <button className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
