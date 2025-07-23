"use client";

import Image from "next/image";
import AnimatedCodeEditor from "./AnimatedCodeEditor";
import { useRef, useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

export default function Hero({ showStats = false }) {
  const [downloading, setDownloading] = useState(false);
  const [status, setStatus] = useState(null);
  const recaptchaRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState(null); // success | error | null
  const [formMsg, setFormMsg] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  useEffect(() => {
    async function fetchProfileImage() {
      setProfileLoading(true);
      try {
        const res = await fetch("/api/profile-image");
        const data = await res.json();
        setProfileImage(data.image);
      } catch {
        setProfileImage(null);
      }
      setProfileLoading(false);
    }
    fetchProfileImage();
  }, []);

  const handleRequestDownload = async (e) => {
    e.preventDefault();
    setFormStatus(null);
    setFormMsg("");
    setFormLoading(true);
    try {
      const token = await recaptchaRef.current?.executeAsync();
      if (!token) throw new Error("reCAPTCHA token not generated");
      const res = await fetch("/api/request-cv-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, recaptchaToken: token })
      });
      const data = await res.json();
      if (res.ok) {
        setFormStatus("success");
        setFormMsg("Bitte prüfe deine E-Mails und bestätige die Adresse. Der Download-Link wird dir nach Bestätigung zugeschickt.");
        setEmail("");
      } else {
        setFormStatus("error");
        setFormMsg(data.message || "Fehler beim Senden.");
      }
    } catch (err) {
      setFormStatus("error");
      setFormMsg("Fehler beim Senden. Bitte versuche es später erneut.");
    }
    setFormLoading(false);
  };

  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 min-h-screen relative overflow-hidden bg-[#0F0715]">
      {/* Background "HI" Text */}
      <h1
        style={{ WebkitTextStroke: "5px #2A1454" }}
        className="text-transparent absolute top-[50px] md:top-[90px] left-1/2 md:left-[40%] transform -translate-x-1/2 z-0 text-[120px] sm:text-[200px] md:text-[349px] select-none"
      >
        HI
      </h1>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative">
        {/* Left Section - Modified for mobile left alignment */}
        <div className="w-full md:w-[40%] mb-8 md:mb-0 text-left">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-[#8750F7] to-[#FFFFFF] bg-clip-text text-transparent drop-shadow-lg tracking-wide">
            Ich bin Mikheil
          </h1>
          <div className="mb-6 md:mb-8">
            <span className="block bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent text-[48px] sm:text-[60px] md:text-[80px] leading-none font-bold">
              Next-Level Web
            </span>
            <span className="block bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent text-[48px] sm:text-[60px] md:text-[80px] leading-none font-bold">
              Entwickler.
            </span>
          </div>
          <p className="mb-6 md:mb-8 text-gray-400 text-base sm:text-lg">
            Ich löse komplexe Herausforderungen im User Experience Bereich und entwickle moderne, effiziente Weblösungen, die Menschen verbinden.
          </p>
          <form onSubmit={handleRequestDownload} className="flex flex-col gap-4 mt-8 mb-6 max-w-sm w-full md:max-w-md md:p-8 p-4 mx-auto bg-[#18122B] rounded-xl shadow-lg" aria-label="Lebenslauf-Download-Formular">
            <label htmlFor="cv-email" className="text-base font-semibold text-purple-200 mb-1">E-Mail-Adresse für Download</label>
            <input
              id="cv-email"
              type="email"
              placeholder="E-Mail-Adresse für Download"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500 text-base w-full"
              required
              autoFocus
              aria-required="true"
              aria-label="E-Mail-Adresse für Download"
              pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
              title="Bitte gib eine gültige E-Mail-Adresse ein."
              tabIndex={0}
            />
            <div className="flex items-center gap-3 mt-2">
              <input
                type="checkbox"
                id="privacy-check"
                checked={privacyAccepted}
                onChange={e => setPrivacyAccepted(e.target.checked)}
                required
                aria-required="true"
                className="accent-purple-500 w-5 h-5"
                tabIndex={0}
              />
              <label htmlFor="privacy-check" className="text-sm text-purple-100 select-none leading-tight">
                Ich habe die <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-purple-400">Datenschutzerklärung</a> gelesen und akzeptiere sie.
              </label>
            </div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              size="invisible"
            />
            <button
              type="submit"
              disabled={formLoading || !privacyAccepted}
              className="flex items-center justify-center gap-3 border-2 border-purple-500 px-6 py-2 md:px-8 md:py-3 rounded-full bg-gradient-to-r from-[#8750F7] to-[#2A1454] hover:from-[#a084f7] hover:to-[#3a1c71] shadow-lg text-base font-bold transition-all duration-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              style={{ cursor: formLoading || !privacyAccepted ? 'not-allowed' : 'pointer' }}
              aria-disabled={!privacyAccepted}
              aria-label="Lebenslauf herunterladen"
              tabIndex={0}
            >
              {formLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                  Sende...
                </span>
              ) : (
                <>
                  Lebenslauf herunterladen
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 15 15" fill="none"><path d="M14.0729 9.25667C13.9595 9.25667 13.8462 9.30389 13.7329 9.39834C13.6195 9.49278 13.5629 9.61556 13.5629 9.76667V11.58C13.5629 12.0333 13.4023 12.4206 13.0812 12.7417C12.7601 13.0628 12.3918 13.2233 11.9762 13.2233H2.68286C2.26731 13.2233 1.89898 13.0628 1.57786 12.7417C1.25675 12.4206 1.0962 12.0333 1.0962 11.58V9.76667C1.0962 9.61556 1.03953 9.49278 0.926198 9.39834C0.812865 9.30389 0.690087 9.25667 0.557865 9.25667C0.425642 9.25667 0.302865 9.30389 0.189531 9.39834C0.0761979 9.49278 0.0195312 9.61556 0.0195312 9.76667V11.58C0.0195312 12.3356 0.283976 12.9778 0.812865 13.5067C1.34175 14.0356 1.96509 14.3 2.68286 14.3H11.9762C12.694 14.3 13.3173 14.0356 13.8462 13.5067C14.3751 12.9778 14.6395 12.3356 14.6395 11.58V9.76667C14.6395 9.61556 14.5829 9.49278 14.4695 9.39834C14.3562 9.30389 14.224 9.25667 14.0729 9.25667ZM6.93286 10.7867C7.0462 10.9 7.17842 10.9567 7.32953 10.9567C7.48064 10.9567 7.61286 10.9 7.7262 10.7867L10.7295 7.78334C10.8051 7.67 10.8429 7.54722 10.8429 7.415C10.8429 7.28278 10.7956 7.16945 10.7012 7.075C10.6068 6.98056 10.4934 6.92389 10.3612 6.905C10.229 6.88611 10.1062 6.93334 9.99286 7.04667L7.83953 9.14334V1.26667C7.83953 1.11556 7.79231 0.983335 7.69787 0.870003C7.60342 0.756669 7.48064 0.700003 7.32953 0.700003C7.17842 0.700003 7.05564 0.756669 6.9612 0.870003C6.86675 0.983335 6.81953 1.11556 6.81953 1.26667V9.14334L4.6662 7.04667C4.55286 6.93334 4.43009 6.87667 4.29786 6.87667C4.16564 6.87667 4.04286 6.92389 3.92953 7.01834C3.8162 7.11278 3.75953 7.23556 3.75953 7.38667C3.75953 7.53778 3.8162 7.67 3.92953 7.78334L6.93286 10.7867Z" fill="#fff"/></svg>
                </>
              )}
            </button>
            {formStatus && (
              <div className={`mt-2 text-center flex flex-col items-center gap-2 ${formStatus === 'success' ? 'text-green-400' : 'text-red-300 font-bold bg-[#2A1454] p-2 rounded'}`} role="alert" aria-live="polite">
                {formStatus === 'success' && (
                  <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                )}
                {formStatus === 'error' && (
                  <svg className="w-8 h-8 animate-shake" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                )}
                {formMsg}
              </div>
            )}
          </form>
          {/* Social Icons unter dem Button, mittig */}
          <div className="flex flex-row items-center justify-center gap-6 mt-4 mb-2">
            {/* Discord */}
            <button
              className="h-14 w-14 sm:h-12 sm:w-12 rounded-full border-2 border-purple-500 flex items-center justify-center hover:bg-purple-500 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400"
              onClick={() => window.open('https://discord.com/users/_mishex', '_blank')}
              title="Discord"
              style={{ cursor: 'pointer' }}
              aria-label="Discord"
              tabIndex={0}
            >
              {/* Offizielles Discord-Logo, lila */}
              <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
                <circle cx="20" cy="20" r="19" fill="#18122B" stroke="#8750F7" strokeWidth="2" />
                <path d="M27.5 27c-2.2-1.3-5.8-1.3-8 0-2.2-1.3-3.5-3.6-3.5-6.3 0-4.1 3.2-7.3 7.5-7.3s7.5 3.2 7.5 7.3c0 2.7-1.3 5-3.5 6.3z" fill="#8750F7" />
                <ellipse cx="16.5" cy="20.5" rx="1.2" ry="1.3" fill="#fff" />
                <ellipse cx="23.5" cy="20.5" rx="1.2" ry="1.3" fill="#fff" />
              </svg>
            </button>
            {/* LinkedIn */}
            <button
              className="h-14 w-14 sm:h-12 sm:w-12 rounded-full border-2 border-purple-500 flex items-center justify-center hover:bg-purple-500 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400"
              onClick={() => window.open('https://www.linkedin.com/in/mikheil-tamasidze-4a2568247/', '_blank')}
              title="LinkedIn"
              style={{ cursor: 'pointer' }}
              aria-label="LinkedIn"
              tabIndex={0}
            >
              {/* Offizielles LinkedIn-Logo, lila */}
              <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
                <circle cx="20" cy="20" r="19" fill="#18122B" stroke="#8750F7" strokeWidth="2" />
                <rect x="13" y="17" width="3" height="8" rx="1" fill="#fff"/>
                <rect x="18.5" y="17" width="3" height="8" rx="1" fill="#fff"/>
                <rect x="24" y="17" width="3" height="8" rx="1" fill="#fff"/>
                <circle cx="14.5" cy="14" r="1.5" fill="#fff"/>
                <rect x="11" y="11" width="18" height="18" rx="4" fill="#8750F7" />
                <rect x="14" y="16" width="2" height="8" rx="1" fill="#fff" />
                <rect x="18" y="16" width="2" height="8" rx="1" fill="#fff" />
                <rect x="22" y="16" width="2" height="8" rx="1" fill="#fff" />
                <circle cx="15" cy="14" r="1" fill="#fff" />
              </svg>
            </button>
          </div>
          {status && <div className="text-center text-red-400 mb-4">{status}</div>}
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 relative mt-12 md:mt-0">
          <img
            src="hero.png"
            alt="Background"
            className="absolute inset-0 z-[-1] object-cover opacity-2 hidden md:block"
            style={{
              transform: "rotate(-38.823deg)",
              width: "1350.459px",
              height: "1011.766px",
              aspectRatio: "1350.46 / 1011.77",
            }}
          />

          <div className="absolute top-[-50px] md:top-[-100px] right-[-50px] md:right-[-90px] w-32 h-32 md:w-40 md:h-40 bg-gradient-to-b from-[#232230] to-[#805BC0] opacity-100 rounded-full filter blur-3xl"></div>

          {/* Vertical Lines */}
          <div
            className="hidden lg:block absolute"
            style={{ left: "750px", top: 0 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="829"
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

          <div
            className="hidden lg:block absolute"
            style={{ left: "540px", top: 0, height: "50%" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="453"
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

          {/* Horizontal Lines */}
          {[
            { top: "25%", svgWidth: 1547 },
            { top: "75%", svgWidth: 1547 },
            { top: "100%", svgWidth: 1192 },
          ].map((line, idx) => (
            <div
              key={idx}
              className="absolute left-0 w-full hidden lg:block"
              style={{ top: line.top }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={line.svgWidth}
                height="5"
                viewBox={`0 0 ${line.svgWidth} 5`}
                fill="none"
              >
                <path
                  d={idx === 1 ? "M1547.8 2.61273H0" : "M0 2.02924H1547"}
                  stroke="#2D2C40"
                  strokeOpacity="0.4"
                  strokeWidth="4.02864"
                />
              </svg>
              <div className="absolute" style={{ left: "750px", top: "-6px" }}>
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

          {/* Profile Image Container */}
          <div className="w-[170px] h-[170px] sm:w-[260px] sm:h-[260px] md:w-[400px] md:h-[400px] mx-auto md:mx-0 md:absolute md:right-[-80px] md:top-1/2 md:-translate-y-1/2 z-20 transform rotate-6 shadow-2xl border-[6px] border-[#8750F7] rounded-full bg-[#1a1028] flex items-center justify-center transition-all duration-300"
            style={{ boxShadow: '0 0 60px 10px #8750F7, 0 8px 32px 0 rgba(135,80,247,0.25)' }}>
            {profileLoading ? (
              <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
            ) : profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover rounded-full shadow-xl border-none"
                style={{ boxShadow: '0 0 40px 0 #8750F7, 0 8px 32px 0 rgba(135,80,247,0.15)' }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-purple-300 bg-[#2A1454] rounded-full">Kein Bild</div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {showStats && (
        <>
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-12 md:mt-24 p-4 max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col items-center text-center p-6 flex-1 bg-[#1a1028] rounded-2xl shadow-lg border border-purple-800">
              <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8750F7] to-[#2A1454] mb-2">3</span>
              <span className="text-white text-base sm:text-lg font-semibold">Jahre Erfahrung</span>
            </div>
            <div className="flex flex-col items-center text-center p-6 flex-1 bg-[#1a1028] rounded-2xl shadow-lg border border-purple-800">
              <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8750F7] to-[#2A1454] mb-2">30+</span>
              <span className="text-white text-base sm:text-lg font-semibold">abgeschlossene Projekte</span>
            </div>
            <div className="flex flex-col items-center text-center p-6 flex-1 bg-[#1a1028] rounded-2xl shadow-lg border border-purple-800">
              <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8750F7] to-[#2A1454] mb-2">100K</span>
              <span className="text-white text-base sm:text-lg font-semibold">Zeilen Code geschrieben</span>
            </div>
          </div>
          <AnimatedCodeEditor />
        </>
      )}
      {/* reCAPTCHA Badge (Google Policy) */}
      <div className="fixed right-2 bottom-2 z-50 opacity-80 text-xs">
        <a href="https://www.google.com/recaptcha/about/" target="_blank" rel="noopener noreferrer">
          <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="inline h-5 align-middle mr-1" />
          <span className="align-middle text-gray-400">protected by reCAPTCHA</span>
        </a>
      </div>
    </section>
  );
}
