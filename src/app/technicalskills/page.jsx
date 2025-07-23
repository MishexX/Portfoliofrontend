import BackEndDevelopment from "./_components/BackendDevelopment";
import DevOps from "./_components/DevOps";
import FrontEndDevelopement from "./_components/FrontendDevelopment";
import Hero from "./_components/Hero";
import NetworkAndAdministration from "./_components/NetworkAndAdministration";
import CloudManagement from './_components/CloudManagement'
import TechnicianTools from "./_components/TechnicianTools";
import Security from "./_components/Security";
import ProjectManagement from "./_components/ProjectManagement";
import OfficeApplication from "./_components/Office";
import Design from "./_components/3DandDesign";
import Head from "next/head";

export default function TechnicalSkills() {
    return (
      <>
        <Head>
          <title>Technical Skills | Mikheil Tamasidze</title>
          <meta name="description" content="Alle technischen Fähigkeiten, Tools und Technologien von Mikheil Tamasidze im Überblick: Frontend, Backend, DevOps, Security, Design und mehr." />
          <meta property="og:title" content="Technical Skills | Mikheil Tamasidze" />
          <meta property="og:description" content="Alle technischen Fähigkeiten, Tools und Technologien von Mikheil Tamasidze im Überblick: Frontend, Backend, DevOps, Security, Design und mehr." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/techskills.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Technical Skills | Mikheil Tamasidze" />
          <meta name="twitter:description" content="Alle technischen Fähigkeiten, Tools und Technologien von Mikheil Tamasidze im Überblick: Frontend, Backend, DevOps, Security, Design und mehr." />
          <meta name="twitter:image" content="/techskills.png" />
        </Head>
        <Hero/>
        <FrontEndDevelopement/>
        <BackEndDevelopment/>
        <DevOps/>
        <NetworkAndAdministration/>
        <CloudManagement/>
        <TechnicianTools/>
        <Security/>
        <ProjectManagement/>
        <OfficeApplication/>
        <Design/>
      </>
    );
  }
  