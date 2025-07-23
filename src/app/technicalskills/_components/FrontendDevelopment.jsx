import purpleBird from "../../../../public/purpleIcons/purpleBird.png";

export default function FrontEndDevelopment() {
  const technologies = [
    { name: "HTML5", icon: "/frontendIcons/html5.png" },
    { name: "CSS3", icon: "/frontendIcons/css3.png" },
    { name: "JavaScript", icon: "/frontendIcons/javascript.png" },
    { name: "ReactJs", icon: "/frontendIcons/reactjs.png" },
    { name: "VueJs", icon: "/frontendIcons/vuejs.png" },
    { name: "Angular", icon: "/frontendIcons/angular.png" },
    { name: "NextJs", icon: "/frontendIcons/nextjs.png" },
    { name: "ElectronJs", icon: "/frontendIcons/electron.png" },
    { name: "Tailwind CSS", icon: "/frontendIcons/tailwindcss.png" },
    { name: "Bootstrap", icon: "/frontendIcons/bootstrap.png" },
    { name: "SEO", icon: "/frontendIcons/seo.png" },
    { name: "Three Js", icon: "/frontendIcons/threejs.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18122B] to-[#0F0715] max-w-full relative overflow-hidden flex flex-col items-center justify-center py-8 px-4">
      {/* --- Heading --- */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-200 to-white text-center drop-shadow-lg tracking-wide animate-fade-in">
        Frontend-Entwicklung
      </h2>

      {/* --- Responsive Grid of Technology Boxes --- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 relative z-10">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#2A1E38]/90 rounded-2xl p-6 w-32 h-32 sm:w-[150px] sm:h-[150px] shadow-md hover:scale-105 transition-transform duration-200 group border border-purple-900/30 hover:shadow-[0_0_24px_4px_rgba(135,80,247,0.25)] hover:border-purple-400/60 relative"
          >
            <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-3 drop-shadow-lg group-hover:animate-sparkle" />
            <p className="text-white text-sm font-semibold text-center mt-1">
              {tech.name}
            </p>
            {/* Sparkle effect */}
            <span className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-tr from-purple-400 to-white rounded-full opacity-0 group-hover:opacity-80 group-hover:scale-125 transition-all duration-300 animate-pulse pointer-events-none" />
          </div>
        ))}
      </div>

      {/* --- Decorative Animated Circles --- */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full filter blur-3xl animate-float-slow z-0" />
      <div className="absolute bottom-[-80px] left-[-60px] w-60 h-60 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full filter blur-2xl animate-float-slower z-0" />
    </div>
  );
}
