import { Star, ArrowRight } from "lucide-react";

export default function Testimonialss() {
  const testimonials = [
    {
      name: "Guy Hawkins",
      role: "Creative Director at Amazon",
      text: "As a busy professional, this to-do app is a lifesaver. It effortlessly syncs across all my devices, keeping me on top of my tasks, no matter where I am.",
      rating: 5,
      image: "/images/user1.png",
      type: "tall",
    },
    {
      name: "Divyas",
      role: "Product Designer at Stock",
      text: "As a busy professional, this to-do app is a lifesaver. A true game-changer!",
      rating: 5,
      image: "/images/user2.png",
      type: "small",
    },
    {
      name: "Ronald Richards",
      role: "Product Designer at Stock",
      text: "As a busy professional, this to-do app is a lifesaver. A true game-changer!",
      rating: 5,
      image: "/images/user3.png",
      type: "small",
    },
    {
      name: "Bessie Cooper",
      role: "UX Designer at Tokopedia",
      text: "As a busy professional, this to-do app is a lifesaver. It effortlessly syncs across all my devices, keeping me on top of my tasks, no matter where I am.",
      rating: 5,
      image: "/images/user4.png",
      type: "tall",
    },
    {
      name: "Darrel Steward",
      role: "Senior Manager at Google",
      text: "This app ensures I stay productive, no matter where I am.",
      rating: 5,
      image: "/images/user5.png",
      type: "small",
    },
    {
      name: "Darlene Robertson",
      role: "Product Designer at Stock",
      text: "The customizable views and efficient prioritization keep me on top of my goals.",
      rating: 5,
      image: "/images/user6.png",
      type: "small",
    },
  ];

  // Group columns like your screenshot
  const columns = [];
  let i = 0;

  while (i < testimonials.length) {
    if (testimonials[i].type === "tall") {
      columns.push([testimonials[i]]);
      i++;
    } else {
      columns.push([testimonials[i], testimonials[i + 1]]);
      i += 2;
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="overflow-x-auto scrollbar-hide px-6 pb-8">
        {/* Horizontal Columns */}
        <div className="flex gap-4">
          {columns.map((col, idx) => (
            <div
              key={idx}
              className="min-w-[300px] flex flex-col gap-6 justify-between"
            >
              {col.map((t, cardIndex) => (
                <div
                  key={cardIndex}
                  className="bg-white border border-gray-200 h-full rounded-3xl p-6 shadow-[0_6px_30px_rgba(0,0,0,0.06)]"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.image}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-[#1C1C1C] font-semibold text-[16px] leading-none">
                        {t.name}
                      </h4>
                      <p className="text-gray-500 text-sm mt-1">{t.role}</p>
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-[#3C3C3C] text-[15px] leading-relaxed mb-4">
                    “{t.text}”
                  </p>

                  {/* Stars */}
                  <div className="flex">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 🌟 View More Button */}
      <div className="mt-16 flex justify-center">
        <button
          className="
            relative
            w-[220px] h-[56px]
            bg-[#FFB400]
            text-white font-semibold
            flex items-center justify-center gap-2
            rounded-[40px_5px_40px_5px]
            shadow-[0_8px_16px_rgba(255,180,0,0.4)]
            hover:shadow-[0_10px_20px_rgba(255,180,0,0.5)]
            hover:-translate-y-[2px]
            transition-all duration-300
            after:content-[''] after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-4 after:rounded-full after:bg-[#00B8D91A] after:blur-md after:-z-10
          "
        >
          View More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
