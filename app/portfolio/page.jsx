import Head from "next/head";
import Works from "../../components/Works";
import ContactSection from "../../components/ContactSection";

const portfolio = () => {
  return (
    <main>
      <Head>
        <title>Portfolio | Mikheil Tamasidze – Webentwicklung, UI/UX & Design</title>
        <meta name="description" content="Entdecke innovative Webprojekte, UI/UX-Designs und moderne IT-Lösungen von Mikheil Tamasidze aus Wien. Jetzt inspirieren lassen!" />
        <meta property="og:title" content="Portfolio | Mikheil Tamasidze" />
        <meta property="og:description" content="Entdecke innovative Webprojekte, UI/UX-Designs und moderne IT-Lösungen von Mikheil Tamasidze aus Wien." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Works />
      <ContactSection />
    </main>
  );
};

export default portfolio;
