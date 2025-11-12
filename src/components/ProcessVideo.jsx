export default function ProcessVideo() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Title + Subtitle */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-gray-900 leading-tight">
          The{" "}
          <span
            className="text-[#F5A623] text-5xl sm:text-6xl lg:text-8xl"
            style={{ fontFamily: "'Oregano', cursive" }}
          >
            Process
          </span>{" "}
          We Follow
        </h2>
      </div>

      {/* 🔥 Responsive Full-Width Video Frame */}
      <div
        className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
        style={{
          lineHeight: 0, // Remove inline spacing
          backgroundColor: "#fff", // Neutral background to avoid dark edges
        }}
      >
        <div className="relative w-full aspect-[18/9] sm:aspect-[13/8] md:aspect-[14/7] lg:aspect-[8/4]">
          <video
            className="absolute inset-0 w-full h-full object-cover block"
            src=" videos/process.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
