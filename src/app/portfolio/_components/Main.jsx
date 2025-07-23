"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function Main() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      setLoading(true);
      const res = await fetch(`http://localhost:5000/api/projects/${id}`);
      const data = await res.json();
      setProject(data);
      setLoading(false);
    }
    if (id) fetchProject();
  }, [id]);

  if (loading) return <div className="text-center text-purple-400 py-12">Lade Projektdaten...</div>;
  if (!project) return <div className="text-center text-red-400 py-12">Projekt nicht gefunden.</div>;

  return (
    <section className="relative bg-[#0F0715] text-white pt-20 pb-32 px-4 md:px-16 overflow-hidden flex flex-col items-center justify-center">
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
      {['25%', '75%', '100%'].map((top, idx) => (
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

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
        {/* Bild/Logo */}
        {project.image && (
          <div className="w-full flex justify-center mb-8">
            <img src={project.image} alt={project.title} className="max-w-[420px] w-full h-auto rounded-2xl shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-300" />
          </div>
        )}
        {/* Titel/Slogan */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">{project.title}</h1>
        {project.description && (
          <p className="text-xl md:text-2xl text-white mb-6 text-center font-light">{project.description}</p>
        )}

        {/* Galerie für Georgia-Projekt */}
        {project.title && project.title.toLowerCase().includes('georgia') && (
          <div className="flex flex-wrap gap-4 justify-center my-6">
            <img src="/Georgia.png" alt="UI Design Vorschau – Georgia Startseite" className="rounded shadow-lg w-72" />
            <img src="/Georgia2.png" alt="UI Design Vorschau – Georgia Flow" className="rounded shadow-lg w-72" />
            <img src="/Georgia3.png" alt="UI Design Vorschau – Georgia Mobile" className="rounded shadow-lg w-72" />
          </div>
        )}

        {/* SEO-Beschreibung für Georgia-Projekt */}
        {project.title && project.title.toLowerCase().includes('georgia') && (
          <div className="bg-[#18122B] rounded-xl p-6 mt-4 text-purple-100 text-base max-w-2xl mx-auto shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-purple-300">Georgia UI/UX Design – Figma Projekt</h2>
            <p>
              Das Georgia-Projekt zeigt ein modernes, responsives User Interface, das mit Figma entwickelt wurde. Die Screenshots demonstrieren die wichtigsten Ansichten und User Flows. Highlights sind ein konsistentes Designsystem, mobile Optimierung und eine klare, benutzerfreundliche Navigation. Weitere Details und das vollständige Design findest du im Figma-Link.
            </p>
          </div>
        )}
        {/* Button (optional) */}
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 mb-8 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-[#2A1454] transition-all">
            Zum Projekt
          </a>
        )}
        {/* Info-Text (optional) */}
        {project.info && (
          <div className="mt-6 text-gray-300 text-base md:text-lg text-center max-w-xl">{project.info}</div>
        )}
      </div>
    </section>
  );
}
