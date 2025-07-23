export default function Certifications() {
  const certs = [
    {
      title: "Lehrabschluss Informationstechnologie",
      issuer: "Jüdisches Berufliches Bildungszentrum (JBBZ), Wien",
      description:
        "Abschluss der Lehre im Bereich Informationstechnologie – Technik mit Schwerpunkt auf Netzwerktechnik, Systemadministration und Softwaregrundlagen.",
      logo: "/group.png",
    },
    {
      title: "VBA-Programmierung für Notariate",
      issuer: "Notabene Software für das Österreichische Notariat GmbH",
      description:
        "Praxiszertifikat für die Entwicklung und Implementierung von VBA-Lösungen zur Automatisierung und Optimierung von Arbeitsabläufen in Notariaten.",
      logo: "/humble.png",
    },
    {
      title: "Ausbildung zum/zur geprüften Software Developer:in – JavaScript",
      issuer: "WIFI Wien (abgeschlossen 05.03.2024 – 18.10.2024)",
      description:
        "Intensive Ausbildung mit Schwerpunkt auf moderner JavaScript-Entwicklung, Webtechnologien und praxisnahen Projekten. Vermittlung von Best Practices, Frameworks und Tools für professionelle Softwareentwicklung.",
      logo: "/badge.png",
    },
  ];

  return (
    <section className="py-20 px-8 bg-[#0F0715]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#8750F7] to-[#FFFFFF] bg-clip-text text-transparent mb-6">
            Zertifikate
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Hier finden Sie eine Auswahl meiner wichtigsten Zertifikate und Nachweise – sie belegen meine fachliche Qualifikation und mein Engagement für kontinuierliche Weiterbildung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-8 bg-[#3C284F] rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              {/* Gradient Ring Container */}
              <div className="relative w-16 h-16 mb-6">
                {/* Gradient Ring */}
                <div className="absolute inset-0 p-[3px] bg-gradient-to-b from-[#311A5D] to-[#8750F7] rounded-full">
                  <div className="w-full h-full bg-[#3C284F] rounded-full flex items-center justify-center">
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4">
                  {cert.title}
                </h3>
                <p className="text-purple-300 text-sm mb-0 flex items-center">{cert.issuer}</p>
                <p className="text-gray-300 text-base mb-6">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
