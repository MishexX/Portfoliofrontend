'use client';

import ProjectName from "../_components/ProjectName";
import Certifications from "../../../components/Certification";
import ContactSection from "../../../components/ContactSection";
import Contributions from "../../work-exp/_components/Contributions";
import Repositories from "../_components/Repositories";
import Technologies from "../_components/Technologies";
import Main from "../_components/Main";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function PortfolioDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      setLoading(true);
      const res = await fetch(`/api/projects/${id}`);
      const data = await res.json();
      setProject(data);
      setLoading(false);
    }
    fetchProject();
  }, [id]);

  const title = project?.title ? `${project.title} | Portfolio | Mikheil Tamasidze` : "Projekt | Portfolio | Mikheil Tamasidze";
  const description = project?.description || "Innovatives Webprojekt, UI/UX-Design und moderne IT-Lösungen von Mikheil Tamasidze aus Wien.";
  const image = project?.image || "/logo.png";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <Main />
        <Technologies />
        <Repositories />
        <Certifications />
        <ContactSection />
      </div>
    </>
  );
}
