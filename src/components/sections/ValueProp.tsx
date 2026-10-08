export default function ValueProp() {
    const points = [
      {
        title: 'Brak wolnych szablonów',
        description:
          'Tradycyjne strony na WordPressie bywają ociężałe przez dziesiątki wtyczek. Moje strony koduję od zera w Next.js — ładują się w ułamku sekundy.',
        badge: 'Szybkość',
      },
      {
        title: 'Dedykowany design',
        description:
          'Nie korzystam z gotowych szablonów, które widziałeś na tysiącu innych stron. Tworzę unikalny projekt dopasowany bezpośrednio do Twojej branży.',
        badge: 'Unikalność',
      },
      {
        title: 'Bezpośredni kontakt',
        description:
          'Nie rozmawiasz z handlowcem ani kierownikiem projektu. Pracujesz bezpośrednio z osobą, która projektuje i koduje Twoją stronę.',
        badge: 'Partnerstwo',
      },
    ];
  
    return (
      <section className="border-t border-neutral-900 bg-neutral-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Dlaczego mój kod?
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Inwestycja w jakość, która przekłada się na wyniki.
            </p>
          </div>
  
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {points.map((point, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-8 transition-all hover:border-neutral-700"
              >
                <span className="inline-block rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-medium text-neutral-300">
                  {point.badge}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }