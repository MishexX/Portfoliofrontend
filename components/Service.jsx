import { FaLaptopCode, FaCogs, FaPlug, FaRedo } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      title: "Responsives Design",
      desc: "Ihre Website sieht auf jedem Gerät großartig aus – mit Layouts, die sich nahtlos an alle Bildschirmgrößen anpassen.",
      icon: <FaLaptopCode className="text-3xl text-purple-400" />,
    },
    {
      title: "CMS-Entwicklung",
      desc: "Benutzerfreundliche CMS-Lösungen wie WordPress oder individuell entwickelt, damit Sie Ihre Inhalte einfach verwalten können.",
      icon: <FaCogs className="text-3xl text-purple-400" />,
    },
    {
      title: "API-Integrationen",
      desc: "Schnittstellen zu Drittanbietern für mehr Funktionalität und Automatisierung – individuell und sicher eingebunden.",
      icon: <FaPlug className="text-3xl text-purple-400" />,
    },
    {
      title: "Website-Relaunch",
      desc: "Modernisierung und Neugestaltung bestehender Websites – für einen zeitgemäßen, überzeugenden Online-Auftritt.",
      icon: <FaRedo className="text-3xl text-purple-400" />,
    },
  ];
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#050709]">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#8750F7] to-[#FFFFFF] bg-clip-text text-transparent mb-4">
            Meine Leistungen
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto text-base md:text-lg">
            Hier finden Sie einen Auszug meiner wichtigsten Kompetenzen und Services als Webentwickler – maßgeschneidert für Ihren Erfolg.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full bg-gradient-to-br from-[#1a1028] to-[#2A1454] border border-purple-800 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#8750F7]/10 border-2 border-purple-400 shadow-md">
                  {service.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-purple-400">0{index + 1}</span>
                  <h3 className="text-2xl font-semibold text-white leading-tight mt-1">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-200 text-base md:text-lg mb-2 flex-1">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
