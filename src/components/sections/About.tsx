"use client";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          À propos
        </h2>
      </div>
      <div>
        <p className="mb-4 text-slate-300">
          <strong className="text-slate-300">Développeur front-end passionné</strong>, je crée des <strong className="text-slate-300">interfaces web
          fluides et accessibles</strong>. J'aime transformer une maquette en <strong className="text-slate-300">expérience
          utilisateur concrète</strong> : <strong className="text-slate-300">responsive, optimisée, cohérente et
          performante</strong>.
        </p>
        <p className="mb-4 text-slate-300">
          Avant le code, j'ai étudié la <strong className="text-slate-300">science politique</strong>, ce qui m'a donné le
          goût de l'analyse et des enjeux de société. J'ai ensuite bossé dans
          différents jobs, toujours avec sérieux, jusqu'au déclic : mon père,
          développeur, m'a transmis sa <strong className="text-slate-300">passion</strong>. J'ai appris en <strong className="text-slate-300">autodidacte</strong>, puis
          via une <strong className="text-slate-300">formation full stack</strong>.
        </p>
        <p className="mb-4 text-slate-300">
          Je veux <strong className="text-slate-300">intégrer une équipe</strong> avec qui <strong className="text-slate-300">progresser techniquement</strong>, relever
          des <strong className="text-slate-300">défis concrets</strong>, apprendre sur l'<strong className="text-slate-300">architecture logicielle</strong> et
          m'impliquer à fond dans des <strong className="text-slate-300">projets utiles</strong>.
        </p>
        <p className="mb-4 text-slate-300">
          Je suis <strong className="text-slate-300">curieux, sociable</strong> (même si un peu réservé au début), j'adore
          le <strong className="text-slate-300">travail d'équipe</strong>, <strong className="text-slate-300">partager des idées</strong> et <strong className="text-slate-300">apprendre des autres</strong>. Et
          surtout, j'ai la dalle : j'ai envie d'<strong className="text-slate-300">avancer, de construire et de
          m'investir à 100 %</strong>.
        </p>
      </div>
    </section>
  );
}
