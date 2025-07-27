import React from "react";
import Head from "next/head";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Datenschutz | Mikheil Tamasidze</title>
        <meta name="description" content="Datenschutzerklärung von Mikheil Tamasidze, Webentwicklung & Design, Wien. Informationen zum Umgang mit personenbezogenen Daten." />
        <meta property="og:title" content="Datenschutz | Mikheil Tamasidze" />
        <meta property="og:description" content="Datenschutzerklärung von Mikheil Tamasidze, Webentwicklung & Design, Wien. Informationen zum Umgang mit personenbezogenen Daten." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Datenschutz | Mikheil Tamasidze" />
        <meta name="twitter:description" content="Datenschutzerklärung von Mikheil Tamasidze, Webentwicklung & Design, Wien. Informationen zum Umgang mit personenbezogenen Daten." />
        <meta name="twitter:image" content="/logo.png" />
      </Head>
      <section className="min-h-screen bg-gradient-to-br from-[#2A1454] to-[#8750F7] text-white py-20 px-4 md:px-16 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full bg-[#18122B] bg-opacity-90 rounded-2xl shadow-xl p-10 border border-purple-800">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent text-center">
            Datenschutzerklärung
          </h1>
          <div className="space-y-6 text-base md:text-lg text-gray-200">
            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">Allgemeines</h2>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">Kontakt mit uns</h2>
              <p>
                Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">Ihre Rechte</h2>
              <p>
                Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">Cookies & Web-Analyse</h2>
              <p>
                Diese Website verwendet keine Cookies zur persönlichen Identifikation und keine Web-Analyse-Tools wie Google Analytics.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">Kontakt</h2>
              <p>
                Für Fragen zum Datenschutz wenden Sie sich bitte an:<br />
                E-Mail: tamasidzemikheil@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
