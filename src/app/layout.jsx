'use client';
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "../components/Footer";
import { useState } from "react";

const meta = {
  de: {
    title: "Mikheil Tamasidze | Webentwicklung, IT & Design",
    description: "Portfolio, Webentwicklung, IT-Dienstleistungen, Grafikdesign und mehr von Mikheil Tamasidze aus Wien. Jetzt Kontakt aufnehmen!"
  },
  en: {
    title: "Mikheil Tamasidze | Web Development, IT & Design",
    description: "Portfolio, web development, IT services, graphic design and more by Mikheil Tamasidze from Vienna. Get in touch now!"
  }
};

export default function RootLayout({ children }) {
  const [lang] = useState("de");

  return (
    <html lang={lang}>
      <head>
        <title>{meta[lang].title}</title>
        <meta name="description" content={meta[lang].description} />
        <meta name="keywords" content="Webentwicklung, IT, Grafikdesign, Wien, Portfolio, Mikheil Tamasidze, Fullstack, Developer, React, Next.js, MongoDB, Node.js, Design, Projekte, Web development, IT services, Vienna, graphic design" />
        <meta name="author" content="Mikheil Tamasidze" />
        <meta property="og:title" content={meta[lang].title} />
        <meta property="og:description" content={meta[lang].description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mikheil-tamasidze.com/" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta[lang].title} />
        <meta name="twitter:description" content={meta[lang].description} />
        <meta name="twitter:image" content="/logo.png" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </head>
      <body className="bg-black text-white">
        <div className="min-h-screen relative">
          <Navbar lang={lang} />
          {children && typeof children === 'function' ? children({ lang }) : children}
          <Footer lang={lang} />
        </div>
      </body>
    </html>
  );
} 