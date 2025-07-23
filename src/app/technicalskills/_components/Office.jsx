export default function OfficeApplication() {
  const technologies = [
    { name: "Microsoft Excel", icon: "/officeIcons/microsoftexcel.png" },
    { name: "Word", icon: "/officeIcons/word.png" },
    { name: "Outlook", icon: "/officeIcons/outlook.png" },
    { name: "Powerpoint", icon: "/officeIcons/powerpoint.png" },
    { name: "Teams", icon: "/officeIcons/teams.png" },
    { name: "OneDrive", icon: "/officeIcons/onedrive.png" },
    { name: "SharePoint", icon: "/officeIcons/sharepoint.png" },
  ];

  return (
    <div className="min-h-screen bg-black max-w-full relative overflow-hidden flex flex-col items-center justify-center py-8 px-4">
      {/* --- Heading --- */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-500 to-white">
        Office Application
      </h2>

      {/* --- Responsive Grid of Technology Boxes --- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 relative z-10">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#2A1E38] rounded-lg p-5 w-28 h-28 sm:w-[140px] sm:h-[140px] shadow-md hover:scale-105 transition-transform"
          >
            <img src={tech.icon} alt={tech.name} className="w-14 h-14 mb-3" />
            <p className="text-white text-xs font-medium text-center">
              {tech.name}
            </p>
          </div>
        ))}
      </div>

      {/* --- Decorative Grid Lines (Responsive Adjustments) --- */}
      <div className="absolute right-2 sm:right-[100px] top-0 h-full z-0">
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

      <div className="absolute right-4 sm:right-[200px] top-0 h-[50%] z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="100%"
          viewBox="0 0 4 453"
          fill="none"
          className="h-full"
        >
          <path
            d="M1.8125 0.940186V452.954"
            stroke="rgba(31, 30, 51, 0.6)"
            strokeWidth="3.223"
          />
        </svg>
      </div>

      {/* --- Horizontal Lines (Responsive) --- */}
      {["25%", "75%", "100%"].map((top, idx) => (
        <div
          key={idx}
          className="absolute right-0 w-full md:w-[800px] z-0"
          style={{ top }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="5"
            viewBox="0 0 800 5"
            fill="none"
            className="translate-x-1/2"
          >
            <path
              d="M0 2.02924H800"
              stroke="#2D2C40"
              strokeOpacity="0.4"
              strokeWidth="4.02864"
            />
          </svg>

          {/* Plus icon at intersection */}
          <div className="absolute right-2 sm:right-[100px] top-[-6px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path
                d="M0.84375 6.20984H13.3325"
                stroke="white"
                strokeWidth="1.61146"
              />
              <path
                d="M7.28906 0.972595V11.4471"
                stroke="white"
                strokeWidth="1.61146"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
