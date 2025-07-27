import Hero from "../components/Hero.jsx";
import Services from "../components/Service.jsx";
import ExperienceEducation from "../components/ExperienceEducation.jsx";
import Skills from "../components/Skills.jsx";
import Certifications from "../components/Certification.jsx";
import ContactSection from "../components/ContactSection.jsx";

export default function Home() {
  return (
    <>
      <Hero showStats={true} />
      <Services />
      <ExperienceEducation />
      <Skills />
      <Certifications />
      <ContactSection />
    </>
  );
} 