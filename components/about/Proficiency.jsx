"use client";
import { useState } from "react";

const proficiencyItems = [
  {
    title: "JavaScript (Advanced)",
    description:
      "A powerful, versatile language used for both front-end and back-end development, enabling dynamic and interactive web applications.",
    icon: "/yellowJava.png",
    category: "Fullstack Development",
  },
  {
    title: "Node.js (Advanced)",
    description:
      "A runtime environment that allows JavaScript to be executed on the server side, making it ideal for scalable, high-performance apps.",
    icon: "/js.png",
    category: "Fullstack Development",
  },
  {
    title: "React (Advanced)",
    description:
      "A modern front-end library for building interactive and reusable UI components, ensuring fast and responsive user experiences.",
    icon: "/prooReact.png",
    category: "Fullstack Development",
  },
  {
    title: "Next.js (Intermediate)",
    description:
      "A React framework optimized for server-side rendering (SSR) and static site generation (SSG), improving performance and SEO.",
    icon: "/pronext.png",
    category: "Fullstack Development",
  },
  {
    title: "Electron (Intermediate)",
    description:
      "A framework for building cross-platform desktop applications using web technologies, combining the power of JS, HTML.",
    icon: "/proAtom.png",
    category: "Automation & Scripting",
  },
  {
    title: "MongoDB (Intermediate)",
    description:
      "A NoSQL database designed for high scalability, flexibility, and fast data storage, often used in modern web applications.",
    icon: "/mongoose.png",
    category: "Fullstack Development",
  },
  {
    title: "HTML & CSS (Advanced)",
    description:
      "The foundation of web design, where HTML structures the content and CSS styles it, ensuring visually appealing layouts.",
    icon: "/html5.png",
    category: "UI/UX Design",
  },
  {
    title: "Bootstrap (Intermediate)",
    description:
      "A front-end framework with pre-designed components and responsive utilities, speeding up development.",
    icon: "/boot.png",
    category: "UI/UX Design",
  },
];

const filters = [
  "All",
  "Fullstack Development",
  "System Administration",
  "Automation & Scripting",
  "UI/UX Design",
  "Email & Communication",
  "Networking",
  "Other Relevant Skills",
];

export default function ProficiencySection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = proficiencyItems.filter((item) =>
    activeFilter === "All" ? true : item.category === activeFilter
  );

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#050709]">
      <div className="container mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#8750F7] to-[#FFFFFF] bg-clip-text text-transparent text-center">
          Areas of Proficiency
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto text-center">
          A journey fueled by passion, creativity, and continuous learning. Each
          milestone reflects my evolution as a designer, shaping intuitive and
          engaging digital experiences.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-16 justify-center overflow-x-auto py-2">
          {filters.map((text, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(text)}
              className={`px-4 py-2 md:px-6 md:py-3.5 rounded-full border border-[#8750F7] transition-all duration-300 text-sm md:text-base font-medium
                whitespace-nowrap flex-shrink-0 ${
                  activeFilter === text
                    ? "bg-gradient-to-r from-[#8750F7] via-[#2A1454] to-[#8750F7] text-white"
                    : "text-[#8750F7] hover:bg-gradient-to-r hover:from-[#8750F7] hover:via-[#2A1454] hover:to-[#8750F7] hover:text-white"
                }`}
            >
              {text}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="rounded-lg p-4 md:p-6 relative overflow-hidden bg-[#3C284F] hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-full mb-4 md:mb-6 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(161deg, #311A5D 0%, #8750F7 100%)",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-7 h-7 md:w-8 md:h-8 object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-white text-lg md:text-xl font-bold mb-2 md:mb-3">
                {item.title}
              </h3>
              <p className="text-[#DDDDDD] text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
