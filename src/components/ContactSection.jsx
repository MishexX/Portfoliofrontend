'use client';

import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactSection() {
  const recaptchaRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "", firma: "" });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("");
    setStatusType(null);
    setLoading(true);
    // Honeypot
    const honey = e.target.elements['website']?.value;
    if (honey) {
      setStatus("Bot erkannt!");
      setStatusType("error");
      setLoading(false);
      return;
    }
    // Validierung
    if (!form.name.trim()) {
      setStatus("Bitte gib deinen Namen ein.");
      setStatusType("error");
      setLoading(false);
      return;
    }
    if (!form.email.trim()) {
      setStatus("Bitte gib deine E-Mail-Adresse ein.");
      setStatusType("error");
      setLoading(false);
      return;
    }
    if (!validateEmail(form.email)) {
      setStatus("Bitte gib eine gültige E-Mail-Adresse ein.");
      setStatusType("error");
      setLoading(false);
      return;
    }
    if (!form.message.trim()) {
      setStatus("Bitte gib eine Nachricht ein.");
      setStatusType("error");
      setLoading(false);
      return;
    }
    if (!recaptchaToken) {
      setStatus("Bitte bestätige, dass du kein Roboter bist.");
      setStatusType("error");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });
      if (res.ok) {
        setStatus("Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.");
        setStatusType("success");
        setForm({ name: "", email: "", message: "", firma: "" });
        setRecaptchaToken("");
        recaptchaRef.current?.reset();
      } else {
        setStatus("Fehler beim Senden. Bitte versuche es erneut.");
        setStatusType("error");
      }
    } catch {
      setStatus("Serverfehler. Bitte versuche es später erneut.");
      setStatusType("error");
    }
    setLoading(false);
  }

  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#050709] overflow-hidden">
      {/* Background Image */}
      <div className="absolute left-0 top-0 z-0 opacity-5 md:opacity-[0.05] w-full overflow-hidden -translate-x-1/4 -translate-y-1/4 rotate-[-39deg] h-[50vh]">
        <Image
          src="/hero.png"
          alt="Decorative background"
          width={1596}
          height={1196}
          quality={100}
          className="object-cover object-left"
          priority
          style={{ width: "150%", height: "100%" }}
        />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 relative z-10">
        {/* Form Section */}
        <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-[#140C1C]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#8750F7] to-[#FFFFFF] bg-clip-text text-transparent mb-4">
            Lass uns zusammenarbeiten!
          </h2>
          <p className="text-[#757575] mb-6 md:mb-8 text-sm md:text-base">
            Ich freue mich auf Ihre Nachricht – egal ob Projektanfrage, Zusammenarbeit oder einfach nur zum Netzwerken.
          </p>

          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            {/* Honeypot-Feld (unsichtbar für echte Nutzer) */}
            <input type="text" name="website" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
            <div>
              <label className="text-[#757575] text-xs md:text-sm mb-1 md:mb-2 block">Name</label>
              <input
                type="text"
                className="w-full bg-[#050709] border border-[#757575] rounded-lg px-3 py-2 md:px-4 md:py-3 text-white text-sm md:text-base"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="text-[#757575] text-xs md:text-sm mb-1 md:mb-2 block">E-Mail</label>
              <input
                type="email"
                className="w-full bg-[#050709] border border-[#757575] rounded-lg px-3 py-2 md:px-4 md:py-3 text-white text-sm md:text-base"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="text-[#757575] text-xs md:text-sm mb-1 md:mb-2 block">Firma (optional)</label>
              <input
                type="text"
                className="w-full bg-[#050709] border border-[#757575] rounded-lg px-3 py-2 md:px-4 md:py-3 text-white text-sm md:text-base"
                value={form.firma}
                onChange={e => setForm(f => ({ ...f, firma: e.target.value }))}
                placeholder="Firmenname (optional)"
              />
            </div>
            <div>
              <label className="text-[#757575] text-xs md:text-sm mb-1 md:mb-2 block">Nachricht</label>
              <textarea
                rows="4"
                className="w-full bg-[#050709] border border-[#757575] rounded-lg px-3 py-2 md:px-4 md:py-3 text-white text-sm md:text-base"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                required
              ></textarea>
            </div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={token => setRecaptchaToken(token)}
              theme="dark"
              className="mt-2"
            />
            <button
              className="bg-gradient-to-r from-[#8750F7] via-[#2A1454] to-[#8750F7] text-white px-6 py-2 md:px-8 md:py-3 rounded-3xl w-full md:w-fit hover:opacity-90 transition-opacity text-sm md:text-base"
              disabled={loading}
            >
              {loading ? "Sende..." : "Nachricht senden"}
            </button>
            {status && (
              <div
                className={`mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-sm md:text-base shadow-md animate-fade-in
                  ${statusType === 'success' ? 'bg-green-900/80 text-green-300 border border-green-500' : ''}
                  ${statusType === 'error' ? 'bg-red-900/80 text-red-300 border border-red-500' : ''}`}
                role="alert"
                style={{ minHeight: 48 }}
              >
                {statusType === 'success' && (
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                )}
                {statusType === 'error' && (
                  <svg className="w-5 h-5 mr-2 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                )}
                <span>{status}</span>
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8 p-4 sm:p-6 md:p-8">
          {[
            {
              icon: "/email-icon.png",
              label: "E-Mail",
              value: "tamasidzemikheil@gmail.com",
              link: "mailto:tamasidzemikheil@gmail.com"
            },
            {
              icon: "/address-icon.png",
              label: "Adresse",
              value: "Wien, 1210 Wien",
              link: null
            },
            {
              icon: "/linkedin-icon.png",
              label: "LinkedIn",
              value: "linkedin.com/in/mikheil-tamasidze-4a2568247/",
              link: "https://www.linkedin.com/in/mikheil-tamasidze-4a2568247/"
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-b from-[#311A5D] to-[#8750F7] rounded-lg flex items-center justify-center flex-shrink-0">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </div>
              <div>
                <h4 className="text-[#757575] text-xs md:text-sm mb-1">
                  {item.label}
                </h4>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white text-sm md:text-base break-words hover:underline" style={{cursor:'pointer'}}>
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white text-sm md:text-base break-words">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements - Hidden on mobile */}
      <div className="hidden lg:block absolute top-0 left-6 z-0 h-full">
        <svg width="4" height="100%" viewBox="0 0 4 944" className="h-full">
          <path
            d="M2 0V944"
            stroke="url(#verticalGradient)"
            strokeOpacity="0.6"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="verticalGradient">
              <stop stopColor="#212034" />
              <stop offset="0.74" stopColor="#805BC0" />
              <stop offset="1" stopColor="#232237" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute top-0 z-0"
        style={{ left: "150px", height: "100%" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="890"
          viewBox="0 0 4 453"
          fill="none"
        >
          <path
            d="M1.8125 0.940186V452.954"
            stroke="rgba(31, 30, 51, 0.6)"
            strokeWidth="3.22291"
          />
        </svg>
      </div>

      {["25%", "50%", "75%"].map((pos, idx) => (
        <div
          key={idx}
          className="absolute left-0 w-full"
          style={{ top: pos, zIndex: 0 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="548"
            height="5"
            viewBox="0 0 548 5"
            fill="none"
          >
            <path
              d="M0 2.0293H1547"
              stroke="#2D2C40"
              strokeOpacity="0.4"
              strokeWidth="4.02864"
            />
          </svg>

          <div className="absolute z-20" style={{ left: "15px", top: "-9px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
            >
              <path
                d="M0.675781 8.85291H21.6464"
                stroke="white"
                strokeWidth="2.70588"
              />
              <path
                d="M11.498 0.0588379V17.6471"
                stroke="white"
                strokeWidth="2.70588"
              />
            </svg>
          </div>

          <div className="absolute z-20" style={{ left: "140px", top: "-9px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
            >
              <path
                d="M0.675781 8.85291H21.6464"
                stroke="white"
                strokeWidth="2.70588"
              />
              <path
                d="M11.498 0.0588379V17.6471"
                stroke="white"
                strokeWidth="2.70588"
              />
            </svg>
          </div>
        </div>
      ))}
    </section>
  );
}
