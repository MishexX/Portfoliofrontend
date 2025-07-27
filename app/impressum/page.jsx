import React from "react";

export default function Impressum() {
  return (
    <div className="min-h-screen w-full bg-[#0F0715] flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-2xl bg-[#18122B] rounded-2xl shadow-xl p-10 md:p-16 text-white border border-[#2A1454]">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#8750F7] to-white bg-clip-text text-transparent">Impressum</h1>
        <p className="mb-6 text-center text-gray-300">Angaben gemäß § 5 ECG, § 14 UGB und Offenlegung nach § 25 Mediengesetz</p>
        <div className="mb-4">
          <span className="font-semibold">Firmenname:</span>
          <span className="ml-2">Mikheil Tamasidze Webentwicklung e.U.</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Rechtsform:</span>
          <span className="ml-2">Einzelunternehmen</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Unternehmensgegenstand:</span>
          <span className="ml-2">IT-Dienstleistungen, Webentwicklung, Grafikdesign</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Sitz:</span>
          <span className="ml-2">Musterstraße 1, 1010 Wien, Österreich</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Kontakt:</span>
          <span className="ml-2">mikheiltamasidze87@gmail.com, Tel: +43 123 456789</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Firmenbuchnummer:</span>
          <span className="ml-2">FN 123456a</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Firmenbuchgericht:</span>
          <span className="ml-2">Handelsgericht Wien</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">UID-Nummer:</span>
          <span className="ml-2">ATU12345678</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Mitgliedschaften:</span>
          <span className="ml-2">Wirtschaftskammer Wien, Fachgruppe Unternehmensberatung, Buchhaltung und Informationstechnologie</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Aufsichtsbehörde:</span>
          <span className="ml-2">Magistratisches Bezirksamt für den 1. Bezirk</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Berufsbezeichnung:</span>
          <span className="ml-2">Webentwickler (verliehen in Österreich)</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Online-Streitbeilegung:</span>
          <span className="ml-2">Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="underline text-purple-300">https://ec.europa.eu/odr</a>. Sie können allfällige Beschwerden auch an die oben angegebene E-Mail-Adresse richten.</span>
        </div>
        <p className="text-sm text-white/60 mt-10 text-center">Dieses Impressum dient als Platzhalter. Bitte ersetzen Sie die Angaben durch Ihre eigenen Unternehmensdaten.</p>
      </div>
    </div>
  );
} 