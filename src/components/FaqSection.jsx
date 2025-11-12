import { useState } from "react";
import { Plus, X, ArrowRight } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      id: 1,
      question: "How do I create an account on the job board?",
      answer:
        "Use the search bar on the homepage to enter keywords related to your skills, job title, or preferred location. You can also use advanced filters to narrow results by job type and experience level.",
    },
    {
      id: 2,
      question: "How do I apply for a job through the platform?",
      answer:
        "After logging in, browse through available jobs and click ‘Apply Now’. You can upload your resume and include a cover letter if required.",
    },
    {
      id: 3,
      question: "How can I track the status of my job applications?",
      answer:
        "Go to your dashboard and check the ‘My Applications’ section. There, you can view job statuses like pending, reviewed, or shortlisted.",
    },
    {
      id: 4,
      question: "How do I create an account on the job board?",
      answer:
        "Use the search bar on the homepage to enter keywords related to your skills, job title, or preferred location. You can also use advanced filters to narrow down results by industry, job type, and experience level.",
    },
    {
      id: 5,
      question: "Is there a cost to use the job board, and what features are free?",
      answer:
        "Basic job searches and applications are free. Premium users can access additional tools such as personalized job recommendations and early access to new listings.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto
 px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-12">
          Frequently asked <span className="text-[#FCB11F]">Questions</span>
        </h2>

        {/* FAQ list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`border rounded-2xl p-6 transition-all ${
                active === faq.id
                  ? "bg-yellow-50 border-yellow-200 shadow-md"
                  : "bg-white border-gray-200 hover:border-yellow-100"
              }`}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setActive(active === faq.id ? null : faq.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-700">
                    {faq.id.toString().padStart(2, "0")}
                  </div>
                  <p className="font-medium text-gray-800">{faq.question}</p>
                </div>
                {active === faq.id ? (
                  <X className="w-5 h-5 text-gray-700" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-700" />
                )}
              </div>
              {active === faq.id && (
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
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
    View More <ArrowRight className="w-4 h-4" />
  </button>
</div>
      </div>
    </section>
  );
}
