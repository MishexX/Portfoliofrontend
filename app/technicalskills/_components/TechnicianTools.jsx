export default function TechnicianTools() {
  const technologies = [
    { name: "Windows 10", icon: "/technicialtoolsIcons/windows.png" },
    { name: "Windows Server", icon: "/technicialtoolsIcons/windowserver.png" },
    { name: "MacOS", icon: "/technicialtoolsIcons/macos.png" },
    { name: "Ubuntu", icon: "/technicialtoolsIcons/Ubuntu.png" },
    { name: "Deblan", icon: "/technicialtoolsIcons/Debian.png" },
    {
      name: "Kali Linux",
      icon: "/technicialtoolsIcons/simple-icons_kalilinux.png",
    },
    { name: "ESXi", icon: "/technicialtoolsIcons/cib_elastic-search.png" },
    {
      name: "Acronis True Image",
      icon: "/technicialtoolsIcons/mdi_microsoft-azure.png",
    },
    {
      name: "Wireshark",
      icon: "/technicialtoolsIcons/simple-icons_wireshark.png",
    },
    {
      name: "FileZilla",
      icon: "/technicialtoolsIcons/simple-icons_filezilla.png",
    },
    { name: "Open VPN", icon: "/technicialtoolsIcons/open-vpn.png" },
    { name: "Powershell", icon: "/technicialtoolsIcons/powershell.png" },
    { name: "DNS", icon: "/technicialtoolsIcons/dns.png" },
    { name: "DHCP Cisco", icon: "/technicialtoolsIcons/cib_cisco.png" },
    {
      name: "Microsoft Office 365",
      icon: "/technicialtoolsIcons/mdi_microsoft-office.png",
    },
    { name: "VBA", icon: "/technicialtoolsIcons/vba.png" },
    { name: "NAS", icon: "/technicialtoolsIcons/simple-icons_truenas.png" },
    { name: "Hardware Repair", icon: "/technicialtoolsIcons/hardware.png" },
    {
      name: "Clonezilla Ubiquity Networks",
      icon: "/technicialtoolsIcons/gis_network.png",
    },
    {
      name: "Atlassian Confluence",
      icon: "/technicialtoolsIcons/logos_atlassian.png",
    },
    { name: "Jira", icon: "/technicialtoolsIcons/devicon_jiraalign.png" },
    { name: "MDM", icon: "/technicialtoolsIcons/open-vpn.png" },
    { name: "Ninjaone", icon: "/technicialtoolsIcons/ninjastar.png" },
    {
      name: "Team Viewer",
      icon: "/technicialtoolsIcons/simple-icons_teamviewer.png",
    },
    { name: "Anydesk", icon: "/technicialtoolsIcons/simple-icons_anydesk.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18122B] to-[#0F0715] py-22 max-w-full relative overflow-hidden flex flex-col items-center justify-center px-4">
      {/* --- Heading --- */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-200 to-white text-center drop-shadow-lg tracking-wide animate-fade-in">
        IT-Techniker-Tools
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

      {/* Vertical Gradient Line on the Left */}
      <div className="absolute left-2 sm:left-10 top-0 h-full z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="100%"
          viewBox="0 0 4 919"
          fill="none"
          className="h-full"
        >
          <defs>
            <linearGradient
              id="leftGradient"
              x1="2"
              y1="0"
              x2="2"
              y2="919"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#805BC0" />
              <stop offset="1" stopColor="#212034" />
            </linearGradient>
          </defs>
          <path
            d="M2 0V919"
            stroke="url(#leftGradient)"
            strokeOpacity="0.6"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Blurred Decorative Circle at Bottom-Right (verstärkt) */}
      <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-gradient-to-br from-purple-500/40 to-transparent opacity-40 rounded-full filter blur-2xl z-0 animate-float-slower" />

      {/* Horizontal Decorative Line near Bottom */}
      <div className="absolute bottom-[20%] left-0 w-full z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="3"
          viewBox="0 0 800 3"
          fill="none"
          className="opacity-30"
        >
          <path
            d="M0 1.5H800"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
}
