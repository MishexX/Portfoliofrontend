"use client";
import { useEffect, useState } from "react";

export default function ExperienceEducation() {
  const [experienceItems, setExperienceItems] = useState([]);
  const [educationItems, setEducationItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError("");
      try {
        const [expRes, eduRes] = await Promise.all([
          fetch("/api/experience"),
          fetch("/api/education")
        ]);
        if (!expRes.ok || !eduRes.ok) throw new Error("Fehler beim Laden der Daten");
        setExperienceItems(await expRes.json());
        setEducationItems(await eduRes.json());
      } catch (e) {
        setError("Lebenslauf konnte nicht geladen werden.");
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-[#050709]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience Column */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-[#8750F7] to-[#FFFFFF] bg-clip-text text-transparent">
              Berufserfahrung
            </h3>
            {loading ? <div className="text-purple-400 text-center">Lade...</div> : error ? <div className="text-red-400 text-center">{error}</div> : (
              <div className="space-y-4">
                {experienceItems.length === 0 ? <div className="text-gray-400 text-center">Keine Einträge vorhanden.</div> : experienceItems.map((item, index) => (
                  <div
                    key={item._id || index}
                    className="p-4 md:p-6 bg-[#140C1C] rounded-lg hover:border-l-4 hover:border-purple-500 transition-all"
                  >
                    <span className="text-purple-500 text-base md:text-lg font-bold">
                      {item.date}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold mt-1 text-purple-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-200 text-sm md:text-base mt-1 font-semibold">
                      {item.company}
                    </p>
                    {item.description && item.description.length > 0 && (
                      <ul className="list-disc ml-5 mt-1 text-gray-400 text-sm md:text-base">
                        {item.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Education Column */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-[#8047f4] to-[#FFFFFF] bg-clip-text text-transparent">
              Ausbildung
            </h3>
            {loading ? <div className="text-purple-400 text-center">Lade...</div> : error ? <div className="text-red-400 text-center">{error}</div> : (
              <div className="space-y-4">
                {educationItems.length === 0 ? <div className="text-gray-400 text-center">Keine Einträge vorhanden.</div> : educationItems.map((item, index) => (
                  <div
                    key={item._id || index}
                    className="p-4 md:p-6 bg-[#140C1C] rounded-lg hover:border-l-4 hover:border-purple-500 transition-all"
                  >
                    <span className="text-purple-500 text-base md:text-lg font-bold">
                      {item.date}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold mt-1 text-purple-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-200 text-sm md:text-base mt-1 font-semibold">
                      {item.company}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
