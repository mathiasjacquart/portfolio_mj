"use client";

import ProjectItem from "./ProjectItem";

export default function Projects() {
  const projects = [
    {
      title: "ShopCart",
      description:
        "Site e-commerce complet avec gestion de catalogue, panier et paiement sécurisé.",
      timeline: "Février 2025",
      stack: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "ExpressJS",
        "Prisma",
        "PostgreSQL",
        "AWS",
      ],
      features: [
        "Catalogue produits : Recherche, filtres avancés, gestion des stocks",
        "Panneau admin : Gestion des commandes, utilisateurs, produits",
        "Gestion panier & paiement : Intégration Stripe, commandes sécurisées",
        "Authentification : Connexion via JWT, rôles utilisateur (admin/client)",
      ],
      image: "/images/shopcart.png",
      link: "https://shopcart-omega.vercel.app/",
    },
    {
      title: "Fest Connect",
      description:
        "Plateforme de mise en relation entre prestataires et clients.",
      timeline: "Mars - Octobre 2024",
      stack: [
        "React",
        "Sass/SCSS",
        "Node.js",
        "Express",
        "Mongoose",
        "MongoDB",
        "Vercel",
      ],
      features: [
        "Recherche & mise en relation : Filtrage des prestataires",
        "Espace utilisateur : Gestion du profil, historique et interactions",
        "Panneau admin : Modération, gestion des utilisateurs",
      ],
      image: "/images/festconnect-e33_v3KB.png",
      link: "https://festconnect.vercel.app/",
    },
    {
      title: "Chloé Jacquart Photographie",
      description: "Site vitrine pour photographe professionnelle.",
      timeline: "Septembre - Décembre 2024",
      stack: ["WordPress", "Elementor", "PHP", "MySQL"],
      features: [
        "Galerie photo responsive",
        "Formulaire de contact",
        "Blog avec articles",
        "Gestion des rendez-vous en ligne",
      ],
      image: "/images/chloejacquart-CKD4vh_g.png",
      link: "https://dev.chloejacquart.com/",
    },
    {
      title: "Quizz Musical",
      description:
        "Application de blind test musical avec intégration de l'API Spotify.",
      timeline: "Juin 2024",
      stack: ["React", "Node.js", "WebSocket", "Spotify API"],
      features: [
        "Création de salles de jeu en temps réel",
        "Intégration de l'API Spotify pour la lecture de musique",
        "Système de points et classement",
        "Chat en temps réel entre joueurs",
      ],
      image: "/images/quizz-DM-m24cQ.png",
      link: "https://quizz-musical.onrender.com/",
    },
    {
      title: "Portfolio Personnel",
      description: "Site vitrine présentant mes projets et compétences.",
      timeline: "Novembre - Décembre 2024",
      stack: ["ReactJS", "Sass/SCSS", "O2SWITCH"],
      features: [
        "Présentation des projets : Pages détaillées avec stack, fonctionnalités",
        "Contact : Formulaire de contact et liens vers GitHub, LinkedIn, etc.",
      ],
      image: "/images/portfolio_v2.png",
      link: "https://mathias-jacquart.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projets
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </ul>
      </div>
    </section>
  );
}
