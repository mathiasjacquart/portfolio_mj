interface ProjectItemProps {
  title: string;
  description: string;
  timeline: string;
  stack: string[];
  features: string[];
  image: string;
}

export default function ProjectItem({
  title,
  description,
  timeline,
  stack,
  features,
  image,
}: ProjectItemProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-emerald-900/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:col-span-5">
          <h3 className="font-medium leading-snug text-slate-200">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>{title}</span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal text-slate-400">
            {description}
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            {timeline}
          </p>
          <ul className="mt-2 text-sm leading-normal text-slate-200">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                {feature}
              </li>
            ))}
          </ul>
          <ul className="mt-2 flex flex-wrap">
            {stack.map((tech, techIndex) => (
              <li key={techIndex} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex items-center justify-center sm:col-span-3">
          <img
            className="w-full rounded-lg border-2 border-slate-200/10 transition-all duration-300 hover:scale-105 hover:border-slate-200/30"
            src={image}
            alt={`${title} screenshot`}
          />
        </div>
      </div>
    </li>
  );
}
