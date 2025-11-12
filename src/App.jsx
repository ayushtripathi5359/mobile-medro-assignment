import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import CertificatePrograms from "./components/CertificatePrograms";
import Tesimonials from "./components/Tesimonialss";
import BusinessSection from "./components/BusinessSection";
import FaqSection from "./components/FaqSection";
import ReferEarn from "./components/ReferEarn";
import RequestCallback from "./components/RequestCallback";
import Footer from "./components/Footer";
import ExplorePrograms from "./components/ExplorePrograms";
import TrustSection from "./components/TrustSection";
import DiscoverCertification from "./components/DiscoverCertification";
import ProcessVideo from "./components/ProcessVideo";


export default function Landing() {
  const navItems = [
    "Courses",
    "College Training",
    "Corporate Training",
    "Study Abroad",
    "Ebooks",
    "Blogs",
    "Contact Us",
  ];

  const features = [
    {
      title: "Job Assistance",
      description:
        "Placement support through 400+ hiring partners with resume & interview guidance.",
      bgColor: "bg-gray-100",
      rotation: "-rotate-3",
    },
    {
      title: "Industry Recognition",
      description:
        "Earn globally recognized certifications valued by leading tech companies.",
      bgColor: "bg-yellow-200",
      rotation: "rotate-6",
      highlight: true,
    },
    {
      title: "Expert Mentorship",
      description:
        "Get trained and guided by industry experts with proven experience.",
      bgColor: "bg-gray-100",
      rotation: "rotate-2",
    },
  ];

  const stats = [
    { value: "170%", label: "Average Salary Hike" },
    { value: "15,000+", label: "Students Trained" },
    { value: "400+", label: "Hiring Partners" },
    { value: "4.8/5", label: "Student Rating" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white to-[#fff8e6]">
      {/* 🟡 BACKGROUND GRADIENT SHAPES */}

      {/* RIGHT SIDE GLOW */}
      <div
        className="absolute rounded-full blur-3xl opacity-90"
        style={{
          width: "1329.97px",
          height: "1346.36px",
          top: "-1100.41px",
          left: "768.54px",
          transform: "rotate(51.54deg)",
          background:
            "linear-gradient(152.13deg, #FFFFFF 62.37%, #FCB11F 82.7%)",
          zIndex: 0,
        }}
      ></div>

      <div
        className="absolute rounded-full blur-3xl opacity-90"
        style={{
          width: "734.67px",
          height: "743.59px",
          top: "-731px",
          left: "1079.75px",
          transform: "rotate(-180deg)",
          background:
            "linear-gradient(152.13deg, #FFFFFF 62.37%, #FCB11F 82.7%)",
          zIndex: 0,
        }}
      ></div>

      {/* 🔁 LEFT SIDE MIRROR GLOW (EXACT MIRROR OF RIGHT) */}
      <div
        className="absolute rounded-full blur-3xl opacity-90"
        style={{
          width: "1329.97px",
          height: "1346.36px",
          top: "-1100.41px",
          right: "748.54px",
          transform: "rotate(-51.54deg) scaleX(-1)", // mirror rotation
          background:
            "linear-gradient(152.13deg, #FFFFFF 62.37%, #FCB11F 82.7%)",
          zIndex: 0,
        }}
      ></div>

      <div
        className="absolute rounded-full blur-3xl opacity-90"
        style={{
          width: "734.67px",
          height: "743.59px",
          top: "-731px",
          right: "1079.75px",
          transform: "rotate(180deg) scaleX(-1)", // mirrored version of second blob
          background:
            "linear-gradient(152.13deg, #FFFFFF 62.37%, #FCB11F 82.7%)",
          zIndex: 0,
        }}
      ></div>

      {/* CONTENT */}
      <Navbar navItems={navItems} />
      <main className="relative max-w-[1900px] mx-auto z-10">
        <Hero />
        <Features features={features} />
        <Stats stats={stats} />
        <ExplorePrograms />
        <ProcessVideo /> 
        <TrustSection />
        
        <CertificatePrograms />
        <DiscoverCertification />
        <Tesimonials />
        <BusinessSection />
        <FaqSection />
        <ReferEarn />
        <RequestCallback />
        <Footer />
      </main>
    </div>
  );
}
