import Image from "next/image";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const certifications = [
    {
      title: "CERTIFIED WEB DEVELOPER – GOOGLE",
      description:
        "Mastery in modern web development, performance optimization, and scalable solutions. This certification validates expertise in building responsive, high-performance websites using industry-standard technologies.",
      icon: "/learning.png",
    },
    {
      title: "JAVASCRIPT & FRONTEND DEVELOPMENT – UDEMY",
      description:
        "In-depth knowledge of JavaScript ES6+, asynchronous programming, and frontend frameworks like React, Vue.js, and Angular to create interactive, user-friendly applications.",
      icon: "/learning.png",
    },
    {
      title: "API INTEGRATION & DEVELOPMENT – COURSERA",
      description:
        "Proficiency in RESTful API design, authentication (OAuth, JWT), and third-party service integration. Ensures seamless backend communication and data exchange for web applications.",
      icon: "/learning.png",
    },
  ];

export default function Certifications(){
    const recaptchaRef = useRef();
    const [downloading, setDownloading] = useState(false);
    const [status, setStatus] = useState("");

    async function handleDownload() {
      setStatus("");
      setDownloading(true);
      try {
        const token = await recaptchaRef.current.executeAsync();
        recaptchaRef.current.reset();
        const res = await fetch("/api/download-cv", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ recaptchaToken: token }),
        });
        if (!res.ok) {
          setStatus("Download nicht möglich (Bot-Schutz fehlgeschlagen oder Datei nicht gefunden).");
          setDownloading(false);
          return;
        }
        // Download als Blob
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Lebenslauf_Mikheil_Tamasidze.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        setStatus("Download gestartet!");
      } catch (err) {
        setStatus("Fehler beim Download.");
      }
      setDownloading(false);
    }

    return (
        <section className="relative min-h-[100vh] bg-[#0F0715] text-white py-32 px-8 md:px-16 overflow-hidden">
            {/* Content */}
            <div className="z-10 px-16">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white mb-8 text-center">Certifications</h2>

                <div className="py-16 px-6">
                    <div className="container">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 items-start">
                        {certifications.map((cert, index) => (
                                    <div
                                    key={index}
                                    className="bg-[#2D1B42] rounded-2xl shadow-lg p-6 flex flex-col items-start text-white"
                                    >
                                    <div className="bg-purple-600 rounded-full p-4 mb-4">
                                        <Image src={cert.icon} alt={cert.title} width={30} height={30} />
                                    </div>
                                    <h3 className="text-sm font-semibold text-left">{cert.title}</h3>
                                    <p className="text-xs text-gray-300 mt-3 text-left">
                                        {cert.description}
                                    </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                {/* Download Button */}
                <p className="mb-4">Want to know more about my expertise? Download my CV to explore my journey and skills in detail.</p>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  size="invisible"
                />
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  style={{ cursor: 'pointer' }}
                  className="w-full block text-center px-6 py-5 rounded-full bg-gradient-to-r from-[#8750F7] via-[#2A1454] to-[#8750F7] text-white font-semibold hover:opacity-90 transition-all mb-8"
                >
                  {downloading ? "Download läuft..." : "Download CV (PDF)"}
                </button>
                {status && <div className="text-center text-red-400 mb-4">{status}</div>}
                <noscript>
                  <div className="text-center text-red-400 mb-4">Bitte aktiviere JavaScript, um den Download und den Bot-Schutz zu nutzen.</div>
                </noscript>
            </div>

        </section>
    )
}