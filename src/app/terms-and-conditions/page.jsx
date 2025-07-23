import React from "react";
import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Impressum & AGB | Mikheil Tamasidze</title>
        <meta name="description" content="Impressum, rechtliche Hinweise und Allgemeine Geschäftsbedingungen (AGB) von Mikheil Tamasidze, Webentwicklung & Design, Wien." />
        <meta property="og:title" content="Impressum & AGB | Mikheil Tamasidze" />
        <meta property="og:description" content="Impressum, rechtliche Hinweise und Allgemeine Geschäftsbedingungen (AGB) von Mikheil Tamasidze, Webentwicklung & Design, Wien." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Impressum & AGB | Mikheil Tamasidze" />
        <meta name="twitter:description" content="Impressum, rechtliche Hinweise und Allgemeine Geschäftsbedingungen (AGB) von Mikheil Tamasidze, Webentwicklung & Design, Wien." />
        <meta name="twitter:image" content="/logo.png" />
      </Head>
      <section className="min-h-screen bg-gradient-to-br from-[#2A1454] to-[#8750F7] text-white py-20 px-4 md:px-16 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full bg-[#18122B] bg-opacity-90 rounded-2xl shadow-xl p-10 border border-purple-800">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent text-center">
            Impressum & Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          <div className="space-y-6 text-base md:text-lg text-gray-200">
            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">Angaben gemäß § 5 ECG</h2>
              <p>
                Mikheil Tamasidze<br />
                Webentwicklung & Design<br />
                1210 Wien, Österreich<br />
                E-Mail: tamasidzemikheil@gmail.com
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">Haftungsausschluss</h2>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.<br />
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">Urheberrecht</h2>
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">Kontakt</h2>
              <p>
                Bei Fragen zu Impressum oder AGB wenden Sie sich bitte an:<br />
                E-Mail: tamasidzemikheil@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
