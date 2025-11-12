import { Star } from "lucide-react";
import { Layers, Brain, BadgeCheck } from "lucide-react";

export default function CertificatePrograms() {
  const programs = [
    {
      title: "The Complete Graphic Design for Beginners",
      instructor: "Wilson",
      rating: 4.5,
      category: "Design",
      priceOld: "₹20,000",
      price: "₹0",
      tag: "Beginner",
      type: "Crush Course",
      image: "/images/course.jpg",
    },
    {
      title: "The Complete Graphic Design for Beginners",
      instructor: "Wilson",
      rating: 4.5,
      category: "Design",
      priceOld: "₹20,000",
      price: "₹0",
      tag: "Beginner",
      type: "Crush Course",
      image: "/images/course.jpg",
    },
    {
      title: "Learning JavaScript With Imagination",
      instructor: "Warren",
      rating: 4.6,
      category: "Data Science",
      price: "₹0",
      tag: "Marketing",
      type: "Pro Expert",
      image: "/images/course.jpg",
    },
    {
      title: "Financial Analyst Training & Investing Course",
      instructor: "Robert Fox",
      rating: 4.2,
      category: "Business",
      priceOld: "₹20,000",
      price: "₹0",
      tag: "Financial",
      type: "Crush Course",
      image: "/images/course.jpg",
    },
  ];

  return (
    <section className="py-2 text-center bg-[#FFFFFF]">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-2xl font-medium mb-6">
        Certificate <span className="text-red-500 text-xl">●</span> Programs
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl font-semibold text-gray-900 mb-3">
        Every <span className="text-[#FCB11F]">Big Journey</span> Starts with a Small Step
      </h2>

      {/* Subheading */}
      <p className="text-gray-600 mb-12  text-3xl">
        Not sure which program to choose? Take our Free Masterclass
      </p>

      {/* 3 Feature Boxes */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 px-6">
        
        <div className="flex items-center gap-3 bg-white shadow-md rounded-xl px-6 py-3 w-full sm:w-auto">
          <Layers className="w-6 h-6 text-gray-800" />
          <span className="font-medium text-gray-800">Explore different fields</span>
        </div>

        <div className="flex items-center gap-3 bg-white shadow-md rounded-xl px-6 py-3 w-full sm:w-auto">
          <Brain className="w-6 h-6 text-gray-800" />
          <span className="font-medium text-gray-800">Test your skills & interests</span>
        </div>

        <div className="flex items-center gap-3 bg-white shadow-md rounded-xl px-6 py-3 w-full sm:w-auto">
          <BadgeCheck className="w-6 h-6 text-gray-800" />
          <span className="font-medium text-gray-800">Get a certificate of participation</span>
        </div>

      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1400px] mx-auto px-4">

        {programs.map((p, idx) => (
         <div
  key={idx}
  className="bg-white rounded-[8px] shadow-[0_10px_40px_rgba(0,0,0,0.07)] border border-[#f1f1f1] p-4"
>
  {/* Image Wrapper */}
  <div className="bg-white rounded-[6px] border border-[#e4e4e4] ">
    <div className="w-full h-[190px] rounded-[6px] overflow-hidden relative">
      <img
        src={p.image}
        alt={p.title}
        className="w-full h-full object-cover"
      />

      {/* Tags on image */}
      <div className="absolute top-3 left-3 flex flex-col gap-2 text-[12px]">
        <span className="bg-white text-gray-900 px-2 py-1 rounded-full shadow text-xs font-medium">
          {p.tag}
        </span>
        <span className="bg-white text-gray-900 px-2 py-1 rounded-full shadow text-xs font-medium">
          {p.type}
        </span>
      </div>

      {/* Ai label top-left */}
      <div className="absolute top-3 right-3 bg-[#5B2AFF] text-white px-3 py-1 rounded-md text-xs font-medium">
        Ai
      </div>
    </div>
  </div>

  {/* Bottom Content */}
  <div className="mt-4 text-left">

    {/* Category + Prices */}
    <div className="flex items-center justify-between">
      <span className="inline-block px-3 py-1 bg-[#FFECC7] text-[#D88900] text-xs rounded-full font-medium">
        {p.category}
      </span>

      <div className="flex items-center gap-2 text-sm">
        {p.priceOld && (
          <span className="text-gray-400 line-through text-[13px]">{p.priceOld}</span>
        )}
        <span className="text-red-500 font-bold text-[15px]">{p.price}</span>
      </div>
    </div>

    {/* Title */}
    <h3 className="font-semibold text-gray-900 text-[17px] leading-snug mt-2">
      {p.title}
    </h3>

    {/* Instructor + Rating */}
    <div className="flex items-center justify-between mt-3">
      {/* Instructor */}
      <div className="flex items-center gap-2">
        <img
          src=" /images/user.png"
          className="w-7 h-7 rounded-full object-cover"
        />
        <span className="text-gray-700 text-[14px]">{p.instructor}</span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 text-[14px] text-gray-700">
        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        ({p.rating} Reviews)
      </div>
    </div>

    {/* Enroll Button */}
    <div className=" flex justify-center ">
        <button className="w-30 mt-4 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">

      Enroll Now
    </button>
    </div>
    
  </div>
</div>


        ))}

      </div>

      {/* View All Button */}
      <div className="inline-flex items-center gap-2 bg-black text-white rounded-full text-sm font-medium mt-16">
        <button className="flex items-center gap-2 px-8 py-3 bg-[#FDB11F] text-white rounded-full hover:bg-[#faa506] cursor-pointer transition-all">
          View All Certificate Programs
          <span className=" h-6 text-xl text-white flex items-center justify-center rounded-full">
            →
          </span>
        </button>
      </div>

    </section>
  );
}
