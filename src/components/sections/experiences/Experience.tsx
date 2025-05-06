"use client";

import ExperienceItem from "./ExperienceItem";
import Link from "next/link";
export default function Experience() {
  const experiences = [
    {
      timeline: "Janvier 2025 — Présent",
      title:
        "Titre Professionnel Concepteur et Développeur d'Applications - en alternance ",
      entreprise: "3W Academy",
      description: [
        "POO Avancé",
        "BDD & Modélisation",
        "Cybersécurité",
        "Gestion de projet et agilité",
        "Devops",
        "Frameworks : React & NodeJS | Angular & Java | Symphony",
      ],
    },
    {
      timeline: "Mars 2024 — Novembre 2024",
      title: "Titre Professionnel Développeur Web et Web Mobile Full Stack",
      entreprise: "SOFIP Formation",
      description: [
        "Maquettage & prototypage",
        "Réalisation d'UI responsive",
        "Développement de la partie dynamique UI ",
        "Mettre en place une BDD",
        "Développement de services métiers",
        "Langages & Frameworks : HTML, CSS, JS | React, SASS",
      ],
    },
    {
      timeline: "Novembre 2023 — Février 2024",
      title: "Formation au développement web",
      entreprise: "Autodidacte",
      description: [
        "Compréhension du fonctionnement du Web",
        "Langages de base : HTML & CSS",
        "Découverte du langage JavaScript",
        "Utilisation d'outils et d'environnements",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-38 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Expérience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </ol>
      </div>
      <div className="mt-8 flex ">
        <a
          href="/others/MathiasJACQUART-CV.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-300 hover:bg-teal-400/20 transition-colors"
        >
          <span>Télécharger mon CV complet</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
