import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export default function Repositories() {
  const contributions = [
    {
      id: "01",
      text: "/3I9TucufJna3tyN0hLihXq/Portfolio-Website?node-id.....",
    },
    {
      id: "02",
      text: "/3I9TucufJna3tyN0hLihXq/Portfolio-Website?node-id.....",
    },
    {
      id: "03",
      text: "/3I9TucufJna3tyN0hLihXq/Portfolio-Website?node-id.....",
    },
    {
        id: "04",
        text: "/3I9TucufJna3tyN0hLihXq/Portfolio-Website?node-id.....",
      },
  ];

  return (
    <section className="min-h-[20vh] max-w-[100vw] overflow-hidden relative bg-black text-white py-8 px-8 md:px-16 flex items-center justify-center">
      <div className="relative z-20 max-w-2xl mx-auto text-center flex flex-col items-center">
        <p className="text-lg text-gray-300 mb-2">
          Dieses Projekt ist Teil meines Portfolios und dient als Referenz für meine abgeschlossenen Arbeiten.
        </p>
        <p className="text-base text-purple-200">Weitere Projekte und Informationen gerne auf Anfrage.</p>
      </div>
    </section>
  );
}
