import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      title: 'Aura Clinic — Klinika Medycyny Estetycznej',
      category: 'Landing Page / System Rezerwacji',
      description:
        'Nowoczesna strona wizerunkowa z systemem rezerwacji wizyt online i czasem ładowania poniżej 0.8s.',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: '#kontakt',
    },
    {
      title: 'Lumina Studio — Architektura Wnętrz',
      category: 'Strona Firmowa & Portfolio',
      description:
        'Minimalistyczne portfolio nastawione na ekspozycję wysokiej jakości fotografii wnętrz i pozyskiwanie klientów B2B.',
      tags: ['Next.js', 'CMS', 'Tailwind CSS'],
      link: '#kontakt',
    },
    {
      title: 'Veloce Craft — Sklep z Zegarkami',
      category: 'E-commerce Dedykowany',
      description:
        'Błyskawiczny sklep internetowy z pełną integracją płatności BLIK oraz automatyzacją wysyłki InPost.',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
      link: '#kontakt',
    },
  ];

  return (
    <section id="portfolio" className="border-t border-neutral-900 bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Wybrane realizacje
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projekty, które sprzedają i wyróżniają w sieci
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-8 transition-all hover:border-neutral-700 hover:bg-neutral-900/80"
            >
              <div>
                <span className="text-xs font-medium text-neutral-500">
                  {project.category}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white group-hover:text-neutral-200">
                  {project.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-neutral-400">
                  {project.description}
                </p>
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[10px] text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-neutral-300"
                >
                  Zapytaj o podobny projekt <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}