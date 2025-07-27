import React from "react";

export default function FrontEndDevelopment() {
  const technologies = [
    { name: "HTML5", icon: "/frontendIcons/html5.png" },
    { name: "CSS3", icon: "/frontendIcons/css3.png" },
    { name: "JavaScript", icon: "/frontendIcons/javascript.png" },
    { name: "React.Js", icon: "/frontendIcons/reactjs.png" },
    { name: "Vue.Js", icon: "/frontendIcons/vuejs.png" },
    { name: "Angular", icon: "/frontendIcons/angular.png" },
    { name: "NextJs", icon: "/frontendIcons/nextjs.png" },
    { name: "ElectronJs", icon: "/frontendIcons/electron.png" },
    { name: "Tailwind CSS", icon: "/frontendIcons/tailwindcss.png" },
    { name: "Bootstrap", icon: "/frontendIcons/bootstrap.png" },
    { name: "SEO", icon: "/frontendIcons/seo.png" },
    { name: "Three Js", icon: "/frontendIcons/threejs.png" },
  ];

  return (
    <div className="min-h-screen bg-[#0F0715] max-w-full relative overflow-hidden flex flex-col items-center justify-center py-8 px-4">
      {/* --- Decorative Grid Lines (Left & Right) --- */}
      <div className="absolute left-10 top-0 h-full z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="100%"
          viewBox="0 0 4 919"
          fill="none"
          className="h-full"
        >
          <path
            d="M2 0V919"
            stroke="#805BC0"
            strokeOpacity="0.18"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="absolute right-10 top-0 h-full z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="100%"
          viewBox="0 0 4 919"
          fill="none"
          className="h-full"
        >
          <path
            d="M2 0V919"
            stroke="#805BC0"
            strokeOpacity="0.18"
            strokeWidth="3"
          />
        </svg>
      </div>
      
      {/* --- Plus icons at intersections --- */}
      {['20%', '50%', '80%'].map((top, idx) => (
        <React.Fragment key={top}>
          <div className="absolute left-10" style={{ top }}>
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.7 8.8H21.6" stroke="#fff" strokeWidth="2.7" />
              <path d="M11.5 0.1V17.6" stroke="#fff" strokeWidth="2.7" />
            </svg>
          </div>
          <div className="absolute right-10" style={{ top }}>
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.7 8.8H21.6" stroke="#fff" strokeWidth="2.7" />
              <path d="M11.5 0.1V17.6" stroke="#fff" strokeWidth="2.7" />
            </svg>
          </div>
        </React.Fragment>
      ))}

      {/* --- Heading --- */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
        Frontend Development
      </h2>

      {/* --- Responsive Grid of Technology Boxes --- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#2A1E38] rounded-lg p-5 w-32 h-32 shadow-md hover:scale-105 transition-transform relative"
          >
            <img src={tech.icon} alt={tech.name} className="w-14 h-14 mb-3" />
            <p className="text-white text-xs font-medium text-center">
              {tech.name}
            </p>
            {/* Decorative dot */}
            <span className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-tr from-purple-400 to-white rounded-full opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
}
