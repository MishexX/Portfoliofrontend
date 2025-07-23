'use client';

import Image from 'next/image';

const WorkExperience = [ 
    { year: "2021", title: "Fullstack Developer - Technova Sol", details: [
      "Building scalable applications with React, Node.js, and Next.js.",
      "Automating CI/CD pipelines, infrastructure provisioning, and monitoring.",
      "Optimizing performance and reducing operational costs."
    ]},
    { year: "2022", title: "IT Infrastructure Specialist - Edge Tech", details: [
      "Designed cloud-based infrastructure with AWS, Docker, and Kubernetes.",
      "Automated server deployments, monitoring, and scaling.",
      "Led cost-saving cloud storage optimizations."
    ]},
    { year: "2023 - Present", title: "Freelance & Personal Projects", details: [
      "Developing custom web applications for clients.",
      "Exploring 3D design and integrating creative UI/UX.",
      "Contributing to open-source projects in DevOps and security."
    ]},
  ]

export default function Journey() {
  return (
    <section className="relative min-h-screen bg-[#0F0715] text-white py-44 px-8 md:px-16 overflow-hidden">
            {/* Background Image with Blend */}
            <div className="absolute inset-0 z-0">
              <div className="absolute -left-30 top-0 h-full w-[60%] opacity-20">
                <Image
                  src="/hero.png"
                  alt="Hero Background"
                  fill
                  className="object-cover object-right -rotate-35"
                />
              </div>
              <div className="absolute inset-0 bg-[#0F0715] opacity-90" />
            </div>
      
            {/* Grid Lines (Now on the Left Side) */}
            <div className="absolute left-[100px] top-0 h-full z-10">
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
      
            <div className="absolute left-[200px] top-0 h-[40%] z-10">
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
      
            {/* Horizontal Lines (Now on the Left Side) */}
            {["25%", "75%", "100%"].map((top, idx) => (
              <div key={idx} className="absolute left-0 w-[800px] z-10" style={{ top }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="700"
                  height="5"
                  viewBox="0 0 800 5"
                  fill="none"
                  className="-translate-x-1/2"
                >
                  <path d="M0 2.02924H800" stroke="#2D2C40" strokeOpacity="0.4" strokeWidth="4.02864" />
                </svg>
                <div className="absolute left-[100px] top-[-6px]">
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

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
          My Professional Journey: Building, Optimizing, and Innovating
        </h2>
        <p className="mt-4 text-gray-300 text-sm max-w-xl mx-auto text-center">
        A journey fueled by passion, creativity, and continuous learning. Each milestone reflects my evolution as a designer, shaping intuitive and engaging digital experiences.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
        {/* Experience Cards */}
        {WorkExperience.map((exp, idx) => (
            <div key={idx} className="bg-[#3C284F] flex rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[#3C284F] pl-4 py-4 flex items-top text-[#8750F7] font-bold text-md min-w-[90px]">
                {exp.year}
            </div>
            <div className="w-[2px] bg-[#8750F7]"></div>
            <div className="p-6">
                <h3 className="text-white font-semibold uppercase text-sm mb-6">{exp.title}</h3>
                <ul className="text-gray-300 list-disc pl-5 mt-2 space-y-1 text-xs">
                {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                ))}
                </ul>
            </div>
            </div>
        ))}
        </div>

    </section>
  );
}