import { ArrowRight, UserPlus, Gift, Share2 } from "lucide-react";

export default function ReferEarn() {
  const steps = [
    {
    id: 1,
    title: "Refer a Friend",
    description:
      "Share your unique referral link with your friends, colleagues, or network.",
    icon: <UserPlus className="w-5 h-5 text-white" />,
  },
  
  {
    id: 2,
    title: "Friend Joins & Benefits",
    description:
      "Your friend signs up using your referral link and enjoys exclusive rewards/discounts.",
    icon: <Gift className="w-5 h-5 text-white" />,
  },
  {
    id: 3,
    title: "You Earn Rewards",
    description: "When your friend joins, you earn rewards instantly.",
    icon: <Share2 className="w-5 h-5 text-white" />,
  }
];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-10 h-[2px] bg-yellow-400 mr-4"></div>
          <h2 className="text-4xl font-semibold text-gray-900">
            Refer <span className="text-[#FCB11F]">& Earn</span>
          </h2>
          <div className="w-10 h-[2px] bg-yellow-400 ml-4"></div>
        </div>

        {/* ✅ MAIN LAYOUT */}
        <div className="flex gap-10">

          {/* ✅ LEFT COLUMN */}
          <div className="flex flex-col gap-10 flex-[2]">

            {/* Laptop */}
            <img
              src="images/laptop.jpg"
              className="w-full h-full object-cover rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
            />

            {/* Refer Steps */}
            <div className="relative w-full">

              {/* ✅ EXACT SVG CURVE FROM YOUR IMAGE */}
              <svg
  width="1200"
  height="250"
  viewBox="0 0 1200 250"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="absolute left-0 w-[115%] pointer-events-none"
>
  {/* Grey base line (shifted upward) */}
  <path
    d="M0.74741 154.403C72.7474 235.403 253.247 338.603 399.247 103.403C581.747 -190.597 748.247 249.403 874.247 176.403C1000.25 103.403 1038.75 0.902527 1199.25 154.403"
    stroke="rgba(0,0,0,0.25)"
    strokeWidth="2"
    transform="translate(0, -9)"
  />

  {/* Glowing green line */}
  <path
    d="M0.74741 154.403C72.7474 235.403 253.247 338.603 399.247 103.403C581.747 -190.597 748.247 249.403 874.247 176.403C1000.25 103.403 1038.75 0.902527 1199.25 154.403"
    stroke="url(#glowGradient)"
    strokeWidth="3"
  />

  <defs>
    <linearGradient
      id="glowGradient"
      x1="0.74741"
      y1="124.631"
      x2="1199.25"
      y2="124.631"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopOpacity="0" />
      <stop offset="0.5" stopColor="#5FD17D" stopOpacity="1" />
      <stop offset="1" stopOpacity="0" />
    </linearGradient>
  </defs>
</svg>



              {/* ✅ STEPS */}
              <div className="relative flex justify-between items-start text-center z-10 py-10 mt-10 w-full">

  {steps.map((s, index) => (
    <div
      key={s.id}
      className={`flex flex-col items-center w-1/3 relative  ${
        index === 0 ? " bottom-14" : index === 1 ? "relative bottom-18" : index === 2 ? "relative bottom-23" : "text-center"
      }`}
    >

      {/* ✅ STEP 1 & 3: TEXT ABOVE */}
      {s.id !== 2 && (
        <>
          <p className="text-gray-300 text-5xl font-bold mb-2">{s.id}</p>

          <h3 className="font-semibold text-gray-800">{s.title}</h3>

          <p className="text-gray-600 text-sm max-w-[170px] leading-relaxed mt-1">
            {s.description}
          </p>
        </>
      )}

      {/* ✅ STEP 2: ICON ON TOP */}
      {s.id === 2 && (
        <div className="w-14 h-14 relative top bg-black rounded-full flex items-center justify-center shadow-md mb-2">
          {s.icon}
        </div>
      )}

      {/* ✅ STEP 2: NUMBER + TEXT BELOW */}
      {s.id === 2 && (
        <>
          <p className="text-gray-300 text-5xl font-bold my-2">{s.id}</p>

          <h3 className="font-semibold text-gray-800">{s.title}</h3>

          <p className="text-gray-600 text-sm max-w-[230px] mx-auto leading-relaxed mt-1">
            {s.description}
          </p>
        </>
      )}

      {/* ✅ STEP 1 & 3: ICON AT BOTTOM */}
      {s.id !== 2 && (
        <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-md mt-4">
          {s.icon}
        </div>
      )}

    </div>
  ))}

</div>

            </div>

          </div>

          {/* ✅ RIGHT COLUMN */}
          <div className="flex flex-col gap-10 flex-[1]">

            {/* Headphones */}
            <img
              src=" images/head.png"
              className="w-full h-[380px] object-cover rounded-3xl shadow-lg"
            />

            {/* Watch */}
            <img
              src=" images/watch.png"
              className="w-full z-10 h-[380px] object-cover rounded-3xl shadow-lg"
            />

          </div>

        </div>

        {/* Button */}
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
      transition-all duration-300
      after:content-[''] after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-4 after:rounded-full after:bg-[#00B8D91A] after:blur-md after:-z-10
    "
  >
    Refer now <ArrowRight className="w-4 h-4" />
  </button>
</div>



      </div>
    </section>
  );
}
