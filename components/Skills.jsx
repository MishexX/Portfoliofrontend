"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSkills() {
      setLoading(true);
      const res = await fetch("/api/skills", { cache: "no-store" });
      if (res.ok) {
        setSkills(await res.json());
      }
      setLoading(false);
    }
    fetchSkills();
    // window.reloadSkills entfernt
  }, []);

  const filteredSkills = activeFilter === "All"
    ? skills
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#050709]">
      <div className="container mx-auto">
        {/* Skills neu laden Button entfernt */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#8750F7] to-[#FFFFFF] bg-clip-text text-transparent text-center">
          Technische Fähigkeiten
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto text-center">
          Fundierte Kenntnisse in modernen Webtechnologien und Tools – stetig erweitert und vertieft.
        </p>
        <div className="relative group">
          {loading ? (
            <div className="text-center text-purple-400 py-12">Lade Skills...</div>
          ) : (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              loop={skills.length > 2}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="py-2"
            >
              {filteredSkills.map((skill, index) => (
                <SwiperSlide key={skill._id || index}>
                  <div className="relative group hover:scale-105 transition-transform duration-300">
                    {/* Circular Logo */}
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#311A5D] to-[#8750F7] p-1 flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-[#050709] flex items-center justify-center">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-14 h-14 object-contain"
                        />
                      </div>
                    </div>
                    {/* Progress Circle */}
                    <div className="relative w-18 h-18 mx-auto">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          className="text-[#2A1454]"
                          strokeWidth="8"
                          stroke="currentColor"
                          fill="transparent"
                          r="40"
                          cx="50"
                          cy="50"
                        />
                        <circle
                          className="text-[#8750F7]"
                          strokeWidth="8"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="transparent"
                          r="40"
                          cx="50"
                          cy="50"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={
                            2 * Math.PI * 40 * (1 - skill.percent / 100)
                          }
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm">
                        {skill.percent}%
                      </span>
                    </div>
                    <h3 className="text-center text-white text-lg mt-4 font-semibold">
                      {skill.name}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}
