import purplePng from "../../../../public/purpleIcons/purple.png";
import purpleBird from "../../../../public/purpleIcons/purpleBird.png";

export default function NetworkAndAdministration() {
  const technologies = [
    { name: "DHCP", icon: "networkingicons/dhcp.png" },
    { name: "DNS", icon: "networkingicons/dns.png" },
    {
      name: "Active Directory Domain Services (ADDS)",
      icon: "networkingicons/adds.png",
    },
    {
      name: "SCCM",
      icon: "networkingicons/system-center-configuration-manager-seeklogo.png",
    },
    { name: "VPN", icon: "networkingicons/vpn.png" },
    { name: "Firewall", icon: "networkingicons/carbon_firewall.png" },
  ];

  return (
    <div className="min-h-screen bg-[#0F0715] max-w-full relative overflow-hidden flex flex-col items-center justify-center py-8 px-4">
      {/* --- Heading --- */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white text-center">
        Network And IT Administration
      </h2>

      {/* --- Responsive Grid of Technology Boxes --- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 relative">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#2A1E38] rounded-lg p-5 w-28 h-28 sm:w-[140px] sm:h-[140px] shadow-md hover:scale-105 transition-transform relative"
          >
            <img src={tech.icon} alt={tech.name} className="w-14 h-14 mb-3" />
            <p className="text-white text-xs font-medium text-center">
              {tech.name}
            </p>
            {/* Deko-Punkt */}
            <span className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-tr from-purple-400 to-white rounded-full opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
}
