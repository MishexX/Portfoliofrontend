export default function ProjectManagement() {
  const technologies = [
    { name: "Trello", icon: "/managementIcons/trello.png" },
    {
      name: "Atlassian Confluence",
      icon: "/managementIcons/logos_atlassian.png",
    },
    { name: "Jira", icon: "/managementIcons/devicon_jiraalign.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18122B] to-[#0F0715] max-w-full relative overflow-hidden flex flex-col items-center justify-center py-8 px-4">
      {/* --- Decorative Project Management SVGs --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
          {/* Board rectangles, zentriert und näher am Content */}
          <rect x="320" y="80" width="220" height="70" rx="16" fill="#B39DDB" />
          <rect x="570" y="170" width="180" height="60" rx="14" fill="#9575CD" />
          <rect x="800" y="100" width="180" height="70" rx="16" fill="#80CBC4" />
          {/* Checklist lines auf erstem Board */}
          <rect x="340" y="110" width="140" height="8" rx="4" fill="#fff" />
          <rect x="340" y="130" width="100" height="8" rx="4" fill="#fff" />
          {/* Calendar icon auf rechtem Board */}
          <rect x="950" y="120" width="60" height="40" rx="8" fill="#fff" />
          {/* Verbindungslinien */}
          <line x1="540" y1="115" x2="570" y2="200" stroke="#B39DDB" strokeWidth="4" />
          <line x1="750" y1="200" x2="800" y2="135" stroke="#9575CD" strokeWidth="4" />
        </svg>
      </div>
      {/* --- Heading --- */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white text-center">
        Project Management
      </h2>

      {/* --- Responsive Grid of Technology Boxes --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#2A1E38] rounded-lg p-5 w-28 h-28 sm:w-[140px] sm:h-[140px] shadow-md hover:scale-105 transition-transform"
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
      {/* --- Untere Deko: größere Task-Karten, weiter unten und nach links --- */}
      <div className="absolute" style={{ bottom: '10%', left: '-8vw', right: 0 }}>
        <svg width="100%" height="260" viewBox="0 0 1200 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
          {/* Größere Task-Karten */}
          <rect x="180" y="40" width="180" height="54" rx="12" fill="#B39DDB" />
          <rect x="420" y="120" width="130" height="44" rx="10" fill="#9575CD" />
          <rect x="750" y="80" width="200" height="48" rx="12" fill="#80CBC4" />
          {/* Verbindungslinien */}
          <line x1="360" y1="67" x2="420" y2="142" stroke="#B39DDB" strokeWidth="4" />
          <line x1="550" y1="142" x2="750" y2="104" stroke="#9575CD" strokeWidth="4" />
          {/* Subtiler Kreis */}
          <circle cx="1050" cy="180" r="44" fill="#B39DDB" />
          {/* Gantt-Chart-Element */}
          <rect x="950" y="120" width="160" height="18" rx="6" fill="#fff" />
          <rect x="980" y="150" width="110" height="18" rx="6" fill="#fff" />
        </svg>
      </div>
    </div>
  );
}
