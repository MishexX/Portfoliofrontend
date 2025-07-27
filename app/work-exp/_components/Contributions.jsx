import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Contributions() {
  const contributions = [
    {
      id: "01",
      text: "Developed Web-Based Applications For Startups, Focusing On Scalability And Security.",
    },
    {
      id: "02",
      text: "Designed Interactive 3D Models And UI Components For Creative Projects.",
    },
    {
      id: "03",
      text: "Contributed To Open-Source Repositories Related To DevOps And Software Security.",
    },
  ];

  return (
    <section className="h-[100vh] max-w-[100vw] overflow-hidden relative bg-[#0B0613] text-white py-20 px-8 md:px-16">
      {/* Background Blend Image (Moved to Right Side) */}
      <div className="absolute inset-0 z-0 right-0">
        <div className="absolute right-0 top-0 h-full w-[45%]">
          <Image
            src="/hero.png"
            alt="Hero Background"
            fill
            className="object-cover object-right"
            style={{
              maskImage: "linear-gradient(to left, black 25%, transparent 60%)",
              WebkitMaskImage: "linear-gradient(to left, black 15%, transparent 60%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#140C1C] via-[#140C1C]/90 to-transparent" />
        </div>
      </div>

      {/* Grid Lines (Still on Right Side) */}
      <div className="absolute right-[100px] top-0 h-full z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="100%"
          viewBox="0 0 4 919"
          fill="none"
          className="h-full"
        >
          <path
            d="M1.88672 0.343018V306.923V944.657"
            stroke="url(#paint0_linear_291_827)"
            strokeOpacity="0.6"
            strokeWidth="3.223"
          />
          <defs>
            <linearGradient
              id="paint0_linear_291_827"
              x1="2.38669"
              y1="0.343024"
              x2="2.38669"
              y2="944.657"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#212034" />
              <stop offset="0.741667" stopColor="#805BC0" />
              <stop offset="1" stopColor="#232237" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute right-[200px] top-0 h-[40%] z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="100%"
          viewBox="0 0 4 453"
          fill="none"
          className="h-full"
        >
          <path d="M1.8125 0.940186V452.954" stroke="rgba(31, 30, 51, 0.6)" strokeWidth="3.223" />
        </svg>
      </div>

      {["25%", "75%", "100%"].map((top, idx) => (
        <div key={idx} className="absolute right-0 w-[800px] z-10" style={{ top }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="700"
            height="5"
            viewBox="0 0 800 5"
            fill="none"
            className="translate-x-1/2"
          >
            <path d="M0 2.02924H800" stroke="#2D2C40" strokeOpacity="0.4" strokeWidth="4.02864" />
          </svg>
          <div className="absolute right-[100px] top-[-6px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path d="M0.84375 6.20984H13.3325" stroke="white" strokeWidth="1.61146" />
              <path d="M7.28906 0.972595V11.4471" stroke="white" strokeWidth="1.61146" />
            </svg>
          </div>
        </div>
      ))}

      {/* Content Section */}
      <div className="relative z-20 max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
          Freelance & Open-Source Contributions
        </h2>
        <p className="text-gray-300 mt-4 w-[40vw] mx-auto text-center text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum suscipit, voluptate assumenda dolorum ex tempora impedit.
        </p>
      </div>

      {/* Contribution List */}
      <div className="relative z-20 mt-10 max-w-3xl mx-auto space-y-6">
        {contributions.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gradient-to-b  from-[#210D40] to-[#3B185F] px-6 py-6 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <span className="text-white font-bold text-lg">{item.id}</span>
            <p className="text-gray-300 flex-1 ml-4">{item.text}</p>
            <ArrowRight className="text-white w-6 h-6" />
          </div>
        ))}
      </div>
    </section>
  );
}
