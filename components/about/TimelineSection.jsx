const TimelineSection = () => {
  const timelineItems = [
    {
      date: "2021",
      title: "Fullstack Developer Certification",
      description:
        "Successfully completed a rigorous program, mastering both front-end and back-end development.",
      iconSrc: "/certification.png",
    },
    {
      date: "2020",
      title: "IT Infrastructure Experience",
      description:
        "Gained in-depth knowledge of system administration, cloud computing, and network security.",
      iconSrc: "/timeline-icons.png",
    },
    {
      date: "2023",
      title: "High-Profile Projects",
      description:
        "Worked on large-scale software and IT solutions, ensuring efficiency, security, and automation.",
      iconSrc: "/whiteFigma.png",
    },
    {
      date: "2024",
      title: "Bridging Tech & Design",
      description:
        "Integrating full-stack development, IT administration, and UI/UX for seamless experiences.",
      iconSrc: "/high.png",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-8 bg-[#0F0715] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute -left-65 top-0 -z-0 opacity-[0.04]"
        style={{
          width: "1263.425px",
          height: "1471.001px",
          transform: "rotate(-20.823deg)",
          background: "url(/hero.png) lightgray",
          aspectRatio: "1963.43/1471.00",
        }}
      />

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#8750F7] to-[#FFFFFF] bg-clip-text text-transparent">
          My Journey: A Timeline of Growth & Expertise
        </h2>

        <p className="text-gray-400 text-base sm:text-lg mb-20 max-w-2xl mx-auto">
          A journey fueled by passion, creativity, and continuous learning. Each
          milestone reflects my evolution as a designer, shaping intuitive and
          engaging digital experiences.
        </p>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {timelineItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Timeline Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full p-2"
                style={{
                  background:
                    "linear-gradient(161deg, #311A5D 0%, #8750F7 100%)",
                }}
              >
                <img
                  src={item.iconSrc}
                  alt="timeline icon"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Content Card */}
              <div className="w-full p-6 rounded-2xl bg-[#3C284F] mt-4 text-left">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#8750F7] font-bold text-xl">
                    {item.date}
                  </span>
                  <img
                    src="/line.png"
                    alt="vertical line"
                    className="w-px h-16 object-contain"
                  />
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-[#DDDDDD] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          {/* Central Gradient Line */}
          <div
            className="absolute left-1/2 h-full w-1 -translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, #211752, #311A5D, #5C237A, #7B2A8F)",
            }}
          />
          <div className="space-y-40">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline Icon Circle */}
                <div
                  className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full z-10 p-2"
                  style={{
                    background:
                      "linear-gradient(161deg, #311A5D 0%, #8750F7 100%)",
                  }}
                >
                  <img
                    src={item.iconSrc}
                    alt="timeline icon"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`relative w-[45%] p-8 rounded-2xl bg-[#3C284F] ${
                    index % 2 === 0 ? "ml-8" : "mr-8"
                  }`}
                >
                  <div className="flex items-start">
                    {/* Date and vertical line */}
                    <div className="flex items-center gap-4 mr-6">
                      <span className="text-[#8750F7] font-bold text-xl">
                        {item.date}
                      </span>
                      <img
                        src="/line.png"
                        alt="vertical line"
                        className="w-px h-16 object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-left">
                      <h3 className="text-white text-2xl font-bold mb-4">
                        {item.title}
                      </h3>
                      <p className="text-[#DDDDDD] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Decorative Elements on the Extreme Left (behind timeline content) --- */}
      <div className="absolute z-0">
        {/* First Vertical Line at left: 6px */}
        <div
          className="absolute"
          style={{ top: "-1950px", bottom: "-50px", left: "6px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="2572"
            viewBox="0 0 7 1372"
            fill="none"
            className="flex-shrink-0"
          >
            <path
              d="M3.5 -171V1416"
              stroke="url(#paint0_linear_293_295)"
              strokeOpacity="0.6"
              strokeWidth="6.76471"
            />
            <defs>
              <linearGradient
                id="paint0_linear_293_295"
                x1="3.99997"
                y1="-171"
                x2="3.99997"
                y2="1416"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#212034" />
                <stop offset="0.741667" stopColor="#805BC0" />
                <stop offset="1" stopColor="#232237" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Second Vertical Line at left: 150px */}
        <div
          className="absolute"
          style={{ top: "-1950px", bottom: "-50px", left: "150px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="2303"
            viewBox="0 0 8 1103"
            fill="none"
            className="flex-shrink-0"
          >
            <path
              d="M4.20703 -168.294V1102.79"
              stroke="url(#paint0_linear_293_296)"
              strokeOpacity="0.6"
              strokeWidth="6.76471"
            />
            <defs>
              <linearGradient
                id="paint0_linear_293_296"
                x1="4.707"
                y1="-168.294"
                x2="4.707"
                y2="1102.79"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#212034" />
                <stop offset="0.741667" stopColor="#805BC0" />
                <stop offset="1" stopColor="#232237" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Horizontal Lines with Plus Icons */}
        {["3%", "0%", "6%"].map((pos, idx) => (
          <div
            key={idx}
            className="absolute left-0 w-full"
            style={{ top: pos }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="706"
              height="8"
              viewBox="0 0 706 8"
              fill="none"
              className="flex-shrink-0"
            >
              <path
                d="M-1892 3.85303H705.647"
                stroke="#2D2C40"
                strokeOpacity="0.4"
                strokeWidth="6.76471"
              />
            </svg>
            {/* Plus Icon for first vertical line (aligned at left: 6px) */}
            <div className="absolute z-20" style={{ left: "6px", top: "-9px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                className="flex-shrink-0"
              >
                <path
                  d="M0.675781 8.85291H21.6464"
                  stroke="white"
                  strokeWidth="2.70588"
                />
                <path
                  d="M11.498 0.0588379V17.6471"
                  stroke="white"
                  strokeWidth="2.70588"
                />
              </svg>
            </div>
            {/* Plus Icon for second vertical line (aligned at left: 150px) */}
            <div
              className="absolute z-20"
              style={{ left: "150px", top: "-9px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                className="flex-shrink-0"
              >
                <path
                  d="M0.675781 8.85291H21.6464"
                  stroke="white"
                  strokeWidth="2.70588"
                />
                <path
                  d="M11.498 0.0588379V17.6471"
                  stroke="white"
                  strokeWidth="2.70588"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
