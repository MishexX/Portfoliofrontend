"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Works() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/projects");
      const data = await res.json();
      setProjects(data);
      setLoading(false);
    }
    fetchProjects();
  }, []);

  // Neue Filter-Namen (deutsch)
  const filters = ["Alle", "UI/UX", "Branding", "App", "Webseite"];

  // Mapping für Kategorie-Anzeige
  const categoryMap = {
    "UI/UX": "UI/UX",
    "Branding": "Branding",
    "Apps": "App",
    "App": "App",
    "Web App": "Webseite",
    "Webseite": "Webseite",
    "All": "Alle",
    "Alle": "Alle"
  };

  const handleCardClick = (project) => {
    router.push(`/portfolio/${project._id}`);
  };

  // Filter-Logik
  const filteredProjects =
    activeFilter === "Alle"
      ? projects
      : projects.filter((project) => {
          if (Array.isArray(project.categories)) {
            return project.categories.includes(activeFilter);
          }
          // Fallback für alte Projekte mit category-String
          if (project.category) {
            return project.category === activeFilter;
          }
          return false;
        });

  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#140C1C] overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0 -left-[5%] lg:-left-[15%]">
        <div className="absolute left-0 top-0 h-full w-[55%] md:w-[45%]">
          <Image
            src="/hero.png"
            alt="Hero Background"
            fill
            className="object-cover object-left"
            style={{
              maskImage:
                "linear-gradient(to right, black 15%, transparent 60%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 15%, transparent 60%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#140C1C] via-[#140C1C]/90 to-transparent" />
        </div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto relative z-10">
        {/* Header & Filters */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8750F7] to-[#FFFFFF] bg-clip-text text-transparent mb-4 mt-8">
            Meine aktuellen Projekte
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
            Entdecke meine neuesten Arbeiten mit innovativen Design- und Entwicklungslösungen.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`px-4 py-1.5 md:px-6 md:py-2 border border-purple-500 rounded-full bg-transparent transition-all hover:bg-gradient-to-r hover:from-[#2A1454] hover:to-[#8750F7] hover:text-white text-xs md:text-base ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-[#2A1454] to-[#8750F7] text-white border-white"
                    : "text-[#8750F7]"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center text-purple-400 py-12">Lade Projekte...</div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(project)}
              className="group relative overflow-hidden rounded-lg border border-gray-800 transition-transform duration-500 hover:scale-[1.02] cursor-pointer h-[280px] md:h-[380px]"
            >
              <div className="relative h-full w-full bg-[#140C1C]">
                {project.image && project.image.match(/\.(jpg|jpeg|png|gif|webp)$/i) && (
                  <div className="w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt="Bild" 
                      className="w-full h-full object-cover" 
                      style={{ display: 'block' }}
                    />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <span className="text-purple-400 text-xs md:text-sm">
                    {Array.isArray(project.categories)
                      ? project.categories.join(", ")
                      : (categoryMap[project.category] || project.category)}
                  </span>
                  <h3 className="text-base md:text-xl font-semibold mt-1 text-white drop-shadow-lg" style={{textShadow: '0 2px 8px #000, 0 0px 2px #8750F7'}}>
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>

      {/* Blur Effect */}
      <div
        className="hidden md:block absolute z-0 mx-auto"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(80vw, 453.59px)",
          height: "30vh",
          borderRadius: "215.72px",
          background:
            "linear-gradient(261deg, #8750F7 0%, rgba(115,67,210,0) 100%)",
          filter: "blur(75px)",
        }}
      />
      {/* Decorative Lines */}
      <div className="hidden lg:block">
        <div className="absolute left-6 top-0 z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="1587"
            viewBox="0 0 7 1587"
            fill="none"
          >
            <path
              d="M3.5 0V1587"
              stroke="url(#paint0_linear_291_864)"
              strokeOpacity="0.6"
              strokeWidth="6.76471"
            />
            <defs>
              <linearGradient
                id="paint0_linear_291_864"
                x1="3.99997"
                y1="0"
                x2="3.99997"
                y2="1587"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#212034" />
                <stop offset="0.741667" stopColor="#805BC0" />
                <stop offset="1" stopColor="#232237" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div
          className="absolute z-0"
          style={{ left: "350px", top: 0, height: "50%" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="700"
            viewBox="0 0 8 800"
            fill="none"
          >
            <path
              d="M4.20703 0.705872V800"
              stroke="url(#paint0_linear_291_865)"
              strokeOpacity="0.6"
              strokeWidth="6.76471"
            />
            <defs>
              <linearGradient
                id="paint0_linear_291_865"
                x1="4.707"
                y1="0.705881"
                x2="4.707"
                y2="800"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#212034" />
                <stop offset="0.741667" stopColor="#805BC0" />
                <stop offset="1" stopColor="#232237" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Horizontal Lines */}
        {[{ top: "25%" }, { top: "50%" }, { top: "75%" }].map((line, idx) => (
          <div
            key={idx}
            className="absolute left-0 w-full"
            style={{ top: line.top, zIndex: 0 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="847"
              height="8"
              viewBox="0 0 847 8"
              fill="none"
            >
              <path
                d="M-1751 3.85303H846.647"
                stroke="#2D2C40"
                strokeOpacity="0.4"
                strokeWidth="6.76471"
              />
            </svg>
            <div
              className="absolute z-20"
              style={{ left: "16px", top: "-9px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
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
}
