import { Star } from "lucide-react";

export default function Features({ features }) {
  return (
    <div className="relative w-full mt-20 mb-24 px-20">
      

      {/* 💡 Grid layout */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 items-center z-10">
        {features.map((f, idx) => (
          <div key={idx} className="flex justify-center relative">
            {/* CARD */}
            <div
              className={`
                relative p-10 rounded-[34px] shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                transition-all duration-300
                w-[310px]
                ${
                  f.highlight
                    ? "bg-[#ffe394] -rotate-[7deg] scale-[1.05]"
                    : "bg-[#f4f4f4] opacity-90"
                }
              `}
            >
              {/* top icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-white rounded-full shadow flex items-center justify-center">
                  <Star className="w-6 h-6 text-gray-800" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {f.description}
              </p>

              {/* ✅ Gray SVG Connector for the 1st card */}
              {idx === 0 && (
                <svg
                  width="160"
                  height="57"
                  viewBox="0 0 110 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -right-[150px] top-1/2 -translate-y-1/2"
                >
                  <path
                    d="M22.5 18.0878L1.5 33.2433V2.93237L22.5 18.0878Z"
                    fill="#F7F7F7"
                  />
                  <path
                    d="M12 17.9324H110M22.5 18.0878L1.5 33.2433V2.93237L22.5 18.0878Z"
                    stroke="#F7F7F7"
                    strokeWidth="3"
                  />
                </svg>
              )}

              {/* ✅ Yellow SVG Connector for highlighted (middle) card */}
              {f.highlight && (
                <svg
                  width="220"
                  height="90"
                  viewBox="0 0 112 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -right-[145px] top-1/2 w-40 rotate-[7deg] -translate-y-1/2"
                >
                  <path
                    d="M26.0706 21.8291L9.14086 41.4269L2.13696 11.9363L26.0706 21.8291Z"
                    fill="#FFE6A1"
                  />
                  <path
                    d="M15.8188 24.1041L111.167 1.45938M26.0706 21.8291L9.14086 41.4269L2.13696 11.9363L26.0706 21.8291Z"
                    stroke="#FFE6A1"
                    strokeWidth="3"
                  />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
