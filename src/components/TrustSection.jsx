import {
  GraduationCap,
  Users,
  Headphones,
  Briefcase,
  UserCheck,
  Lightbulb,
  Laptop,
  Trophy,
} from "lucide-react";

export default function TrustSection() {
  const cardBase =
    "bg-white shadow-[0_8px_25px_rgba(0,0,0,0.08)] rounded-2xl border border-[#f7dca4] flex items-center gap-3 px-5";

  return (
    <section className="bg-white relative overflow-hidden">
      {/* Heading */}
      <div className="text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
          Why Learners Trust <span className="text-[#FCB11F]">Upskillway</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Unlock your true potential with Upskillway and explore opportunities
          that fit your skills, passions, and career goals.
        </p>
      </div>

      {/* ---------------- DESKTOP LAYOUT ---------------- */}
      <div className="hidden lg:flex relative mx-auto w-[900px] h-[900px] items-center justify-center">
        {/* ✅ Concentric Circles */}
        <div className="absolute w-[410px] h-[410px] bg-[#FCF7EE] border-2 border-[#F4EAD0] rounded-full opacity-60"></div>
        <div className="absolute w-[330px] h-[330px] bg-[#FCF7EE] border-2 border-[#F4EAD0] rounded-full opacity-70"></div>

        {/* ✅ Center Logo */}
        <div className="absolute z-10 w-[250px] h-[250px] bg-[#FFF4E2] rounded-full shadow-lg 
                        border-2 border-[#f7dca4] flex items-center justify-center">
          <img src=" images/logo.png" className="w-[320px] h-auto" alt="Upskillway Logo" />
        </div>

        {/* Cards */}
        <div className={`${cardBase} w-[260px] h-[85px] absolute left-[120px] top-[140px]`}>
          <GraduationCap className="w-6 h-6 text-[#f6a726]" /> Certified Programs
        </div>

        <div className={`${cardBase} w-[260px] h-[85px] absolute right-[120px] top-[140px]`}>
          <Users className="w-6 h-6 text-[#f6a726]" /> Networking Opportunities
        </div>

        <div className="absolute bg-white shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                        rounded-2xl border border-[#f7dca4] flex flex-col items-center justify-center
                        w-[270px] h-[180px] left-[40px] top-[260px] px-6 py-5">
          <Laptop className="w-10 h-10 text-[#f6a726]" />
          <h3 className="text-lg font-semibold text-gray-900 mt-2">Showcase Skill</h3>
          <p className="text-gray-600 text-sm text-center mt-1">
            Showcase your skill to stand out among all
          </p>
          <button className="mt-3 bg-black text-white px-4 py-2 rounded-full text-sm">
            Start Learning
          </button>
        </div>

        <div className={`${cardBase} w-[260px] h-[180px] absolute right-[40px] top-[260px] flex-col py-6`}>
          <Headphones className="w-10 h-10 text-[#f6a726]" />
          Personalised Guidance with 24x7 Support
        </div>

        <div className={`${cardBase} w-[270px] h-[85px] absolute left-[40px] bottom-[335px]`}>
          <Trophy className="w-6 h-6 text-[#f6a726]" />
          Instructor-led live teaching
        </div>

        <div className={`${cardBase} w-[260px] h-[85px] absolute right-[40px] bottom-[335px]`}>
          <Briefcase className="w-6 h-6 text-[#f6a726]" />
          Placement Assistance
        </div>

        <div className={`${cardBase} w-[260px] h-[85px] absolute left-[100px] bottom-[210px]`}>
          <Laptop className="w-6 h-6 text-[#f6a726]" />
          Hands-On Projects
        </div>

        <div className={`${cardBase} w-[260px] h-[85px] absolute right-[100px] bottom-[210px]`}>
          <UserCheck className="w-6 h-6 text-[#f6a726]" />
          Expert Mentorship
        </div>

        <div className={`${cardBase} w-[260px] h-[85px] absolute left-1/2 -translate-x-1/2 bottom-[90px]`}>
          <Lightbulb className="w-6 h-6 text-[#f6a726]" />
          Flexible Learning
        </div>

        {/* ---------------- ARROWS (Symmetrical to Logo) ---------------- */}
        <div className="absolute bottom-[110px] -right-30 -translate-x-[320px] opacity-90">
          {/* Left Arrow SVG */}
          <svg
            width="95"
            height="66"
            viewBox="0 0 95 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.330971 51.0524C5.21574 53.138 9.53956 53.2935 14.6937 52.0494C15.4907 52.1799 14.4521 52.8825 14.1938 53.1019C11.8306 54.9708 7.98164 55.018 4.94359 54.8597C12.3055 59.1363 21.6807 62.7992 30.2144 61.855C40.1228 60.958 50.3728 53.8767 51.3864 43.449C45.2492 41.269 39.0315 37.4784 35.8712 31.5717C32.5222 23.5877 40.7865 19.55 47.4847 24.3903C52.9166 28.317 55.7574 35.0679 55.974 41.6994C81.717 46.8897 98.4957 24.5319 93.1083 0.285793C93.1005 0.256223 93.0988 0.225373 93.1034 0.195128C93.1079 0.164884 93.1185 0.135878 93.1346 0.109887C93.1508 0.0838955 93.172 0.0614631 93.1971 0.0439605C93.2222 0.0264579 93.2505 0.0142528 93.2805 0.00809099C93.3093 0.000146579 93.3394 -0.00197514 93.3691 0.00184826C93.3987 0.00567166 93.4273 0.015364 93.4531 0.0303595C93.479 0.0453551 93.5016 0.0653525 93.5196 0.0891841C93.5377 0.113016 93.5508 0.140204 93.5582 0.169158C100.304 25.34 82.6528 49.0197 55.8102 44.582C54.9354 52.3049 49.4425 58.9086 42.6083 62.2632C30.4366 68.4254 14.466 64.2321 4.21324 56.0066C4.47428 57.3951 5.25462 58.6392 5.52121 60.0222C5.83224 61.6412 5.21852 64.6043 4.48261 63.6879C4.15596 62.1435 3.71125 60.6265 3.15242 59.1502C2.61368 57.6478 1.95831 55.9678 1.35014 54.4932L1.22795 54.2155L0.0227203 51.3885C0.00231171 51.3442 -0.00456238 51.2949 0.00296783 51.2468C0.010498 51.1986 0.0320892 51.1538 0.065033 51.1179C0.0979691 51.082 0.140793 51.0566 0.18811 51.0449C0.235428 51.0333 0.285126 51.0359 0.330971 51.0524Z"
              fill="#FFE6A1"
            />
          </svg>
        </div>

        <div className="absolute bottom-[110px] -left-30 translate-x-[320px] opacity-90">
          {/* Right Arrow SVG */}
          <svg
            width="95"
            height="66"
            viewBox="0 0 95 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M94.669 51.0524C89.7843 53.138 85.4604 53.2935 80.3063 52.0494C79.5093 52.1799 80.5479 52.8825 80.8062 53.1019C83.1694 54.9708 87.0184 55.018 90.0564 54.8597C82.6945 59.1363 73.3193 62.7992 64.7856 61.855C54.8772 60.958 44.6272 53.8767 43.6136 43.449C49.7508 41.269 55.9685 37.4784 59.1288 31.5717C62.4778 23.5877 54.2135 19.55 47.5153 24.3903C42.0834 28.317 39.2426 35.0679 39.026 41.6994C13.283 46.8897 -3.49573 24.5319 1.89169 0.285793C1.89949 0.256223 1.90117 0.225373 1.89665 0.195128C1.89212 0.164884 1.88148 0.135878 1.86536 0.109887C1.84925 0.0838955 1.828 0.0614631 1.80293 0.0439605C1.77785 0.0264579 1.74947 0.0142528 1.71951 0.00809099C1.6907 0.000146579 1.66059 -0.00197514 1.63095 0.00184826C1.6013 0.00567166 1.57272 0.015364 1.54687 0.0303595C1.52101 0.0453551 1.49841 0.0653525 1.48037 0.0891841C1.46233 0.113016 1.44922 0.140204 1.44181 0.169158C-5.30356 25.34 12.3472 49.0197 39.1898 44.582C40.0646 52.3049 45.5575 58.9086 52.3917 62.2632C64.5634 68.4254 80.534 64.2321 90.7868 56.0066C90.5257 57.3951 89.7454 58.6392 89.4788 60.0222C89.1678 61.6412 89.7815 64.6043 90.5174 63.6879C90.844 62.1435 91.2887 60.6265 91.8476 59.1502C92.3863 57.6478 93.0417 55.9678 93.6499 54.4932L93.772 54.2155L94.9773 51.3885C94.9977 51.3442 95.0046 51.2949 94.997 51.2468C94.9895 51.1986 94.9679 51.1538 94.935 51.1179C94.902 51.082 94.8592 51.0566 94.8119 51.0449C94.7646 51.0333 94.7149 51.0359 94.669 51.0524Z"
              fill="#FFE6A1"
            />
          </svg>
        </div>
      </div>

      {/* ---------------- MOBILE + TABLET LAYOUT ---------------- */}
      <div className="lg:hidden px-6 mt-10 flex flex-col items-center">
        <div className="relative w-[280px] h-[280px] mb-10 flex items-center justify-center">
          <div className="absolute w-[220px] h-[220px] bg-[#FCF7EE] rounded-full border border-[#F4EAD0] opacity-60"></div>
          <div className="absolute w-[160px] h-[160px] bg-[#FFF4E2] rounded-full border border-[#f7dca4]"></div>
          <img src=" images/logo.png" className="w-20 z-10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-[600px]">
          {[
            { title: "Certified Programs", icon: GraduationCap },
            { title: "Networking Opportunities", icon: Users },
            { title: "Personalised Guidance with 24x7 Support", icon: Headphones },
            { title: "Placement Assistance", icon: Briefcase },
            { title: "Expert Mentorship", icon: UserCheck },
            { title: "Flexible Learning", icon: Lightbulb },
            { title: "Hands-On Projects", icon: Laptop },
            { title: "Instructor-led live teaching", icon: Trophy },
          ].map((c, i) => (
            <div key={i} className={`${cardBase} h-[100px] flex items-start gap-3 p-4`}>
              <c.icon className="w-6 h-6 text-[#f6a726]" />
              <p className="font-medium text-gray-800 text-sm">{c.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
