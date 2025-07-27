import Image from "next/image";
import Hero from "../../components/Hero";
import AboutSection from "../../components/about/AboutSection";
import TimelineSection from "../../components/about/TimelineSection";
import ProficiencySection from "../../components/about/Proficiency";
import Head from "next/head";

const About = () => {
  return (
    <div className="bg-[#050709]">
      <Head>
        <title>Über mich | Mikheil Tamasidze</title>
        <meta name="description" content="Erfahre mehr über Mikheil Tamasidze – Webentwickler, IT-Spezialist und Designer aus Wien. Kompetenzen, Werdegang und Werte." />
        <meta property="og:title" content="Über mich | Mikheil Tamasidze" />
        <meta property="og:description" content="Erfahre mehr über Mikheil Tamasidze – Webentwickler, IT-Spezialist und Designer aus Wien. Kompetenzen, Werdegang und Werte." />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="/profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Über mich | Mikheil Tamasidze" />
        <meta name="twitter:description" content="Erfahre mehr über Mikheil Tamasidze – Webentwickler, IT-Spezialist und Designer aus Wien. Kompetenzen, Werdegang und Werte." />
        <meta name="twitter:image" content="/profile.jpg" />
      </Head>
      <Hero />
      {/* About Section */}
      <AboutSection />

      {/* timeline section */}
      <TimelineSection />

      {/* proficiency */}
      <ProficiencySection />
    </div>
  );
};

export default About;
