export default function Process() {
    const steps = [
      {
        number: '01',
        title: 'Konsultacja i Wycena',
        description:
          'Rozmawiamy o Twoim biznesie, celach i potrzebach. Na tej podstawie przygotowuję dokładny plan działania i darmową wycenę.',
      },
      {
        number: '02',
        title: 'Projekt i Makiety',
        description:
          'Tworzę nowoczesny, unikalny projekt graficzny dostosowany do Twojej marki. Prace nad kodem ruszają po Twojej akceptacji.',
      },
      {
        number: '03',
        title: 'Kodowanie i Optymalizacja',
        description:
          'Wdrażam stronę od zera w Next.js. Dbam o perfekcyjne dopasowanie do urządzeń mobilnych oraz maksymalną szybkość ładowania.',
      },
      {
        number: '04',
        title: 'Wdrożenie i Wsparcie',
        description:
          'Podpinam domenę, certyfikat SSL, konfiguruję analitykę Google i przekazuję Ci pełne wsparcie oraz szkolenie z obsługi.',
      },
    ];
  
    return (
      <section id="proces" className="border-t border-neutral-900 bg-neutral-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Prosty proces
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Jak wygląda współpraca krok po kroku?
            </p>
          </div>
  
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-neutral-800/80 bg-neutral-900/30 p-8"
              >
                <span className="text-3xl font-extrabold text-neutral-700">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-neutral-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }