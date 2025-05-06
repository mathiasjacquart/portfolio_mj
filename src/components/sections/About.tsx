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
          Développeur front-end passionné par l’univers du design web, je mets
          toute mon énergie à créer des interfaces à la fois belles, fluides et
          accessibles. Ce qui me fait vibrer, c’est de transformer une maquette
          en une expérience utilisateur vivante, agréable et cohérente. J’adore
          concevoir des parcours intuitifs, peaufiner chaque détail visuel,
          assurer la réactivité sur tous les écrans, et optimiser chaque
          composant pour la performance et le SEO.
        </p>
        <p className="mb-4 text-slate-300">
          Avant d’être développeur, j’ai suivi un parcours en science politique
          qui m’a donné une solide capacité d’analyse et un vrai intérêt pour
          les enjeux sociétaux. J’ai ensuite multiplié les expériences
          professionnelles variées, enchaînant les jobs alimentaires avec
          sérieux et engagement. Le déclic pour le développement web est venu de
          mon père, lui-même développeur. En autodidacte d’abord, puis via une
          formation full stack, j’ai découvert une vraie passion pour ce métier,
          qui allie rigueur, logique, créativité et apprentissage constant.
        </p>
        <p className="mb-4 text-slate-300">
          Aujourd’hui, je recherche une équipe avec laquelle je pourrais monter
          en compétence, relever des défis techniques et contribuer à des
          projets concrets. J’ai une grande envie d’apprendre en collaborant, de
          progresser sur les aspects d’architecture logicielle et d’approfondir
          ma compréhension des bonnes pratiques en développement.
        </p>
        <p className="mb-4 text-slate-300">
          En dehors du code, je suis quelqu’un de très sociable, ouvert et
          curieux, bien qu’un peu réservé au début. J’aime le travail d’équipe,
          échanger des idées et apprendre des autres. Je suis très motivé, j’ai
          “les crocs” comme on dit : envie d’avancer, de construire des projets
          collectifs stimulants et de m’impliquer pleinement dans une aventure
          professionnelle.{" "}
        </p>
      </div>
    </section>
  );
}
