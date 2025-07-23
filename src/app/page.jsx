import Hero from "../components/Hero";
import Services from "../components/Service";
import ExperienceEducation from "../components/ExperienceEducation";
import Skills from "../components/Skills";
import Certifications from "../components/Certification";
import ContactSection from "../components/ContactSection";

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