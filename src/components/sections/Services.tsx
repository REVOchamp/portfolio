import Link from 'next/link';

export default function Services() {
  const packages = [
    {
      name: 'Landing Page / Wizytówka',
      price: 'Od 2 500 PLN',
      description: 'Idealne rozwiązanie dla usługodawców i małych firm potrzebujących szybkiej, estetycznej strony.',
      features: [
        'Dedykowany projekt graficzny',
        '1-3 rozbudowane sekcje',
        'Czysty kod w Next.js & Tailwind CSS',
        'Formularz kontaktowy',
        'Pełna optymalizacja mobile (RWD)',
        'Podstawowe SEO i analityka',
      ],
      popular: false,
    },
    {
      name: 'Strona Firmowa (Multi-Page)',
      price: 'Od 4 500 PLN',
      description: 'Kompletna strona dla rozwijających się firm, które chcą budować autorytet i prezentować ofertę.',
      features: [
        'Do 5 dedykowanych podstron',
        'Panel CMS do edycji treści',
        'Szybkość ładowania 95+ w Google',
        'Zaawansowane SEO i meta tagi',
        'Integracja z CRM / e-mail marketingiem',
        'Wsparcie i szkolenie po wdrożeniu',
      ],
      popular: true,
    },
    {
      name: 'Dedykowany E-commerce',
      price: 'Od 7 000 PLN',
      description: 'Szybki sklep internetowy dostosowany do Twojego produktu bez opłat abonamentowych.',
      features: [
        'Unikalny koszyk i proces zakupowy',
        'Integracja płatności (BLIK, przelewy)',
        'Integracja kurierów i InPost',
        'Zarządzanie produktami i zamówieniami',
        'Brak miesięcznych prowizji',
        'Optymalizacja pod wysoką konwersję',
      ],
      popular: false,
    },
  ];

  return (
    <section id="uslugi" className="border-t border-neutral-900 bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Oferta i pakiety
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Przejrzyste zasady, bez ukrytych kosztów
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between rounded-2xl border p-8 transition-all ${
                pkg.popular
                  ? 'border-white bg-neutral-900/90 shadow-2xl'
                  : 'border-neutral-800 bg-neutral-900/30 hover:border-neutral-700'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-bold text-neutral-950">
                  Najpopularniejszy
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                <p className="mt-2 text-2xl font-extrabold text-neutral-100">{pkg.price}</p>
                <p className="mt-4 text-xs leading-relaxed text-neutral-400">{pkg.description}</p>

                <ul className="mt-8 space-y-3 text-xs text-neutral-300">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href="#kontakt"
                  className={`block w-full rounded-lg py-3 text-center text-xs font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
                      : 'border border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700'
                  }`}
                >
                  Wybierz pakiet
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}