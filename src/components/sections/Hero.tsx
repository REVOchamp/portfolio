import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Dostępny na nowe projekty
          </div>

          {/* Nagłówek H1 */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl sm:leading-tight text-neutral-100">
            Nowoczesne strony, które budują autorytet i <span className="text-neutral-400">zdobywają klientów</span>.
          </h1>

          {/* Podnagłówek */}
          <p className="mt-6 text-lg leading-relaxed text-neutral-400 sm:text-xl">
            Projektuję i wdrażam ultraszybkie strony dla firm. Zero ociężałych szablonów na WordPressie — szyty na miarę design, czysty kod i natychmiastowe ładowanie.
          </p>

          {/* Przyciski CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 shadow-sm transition-all hover:bg-neutral-200"
            >
              Umów bezpłatną konsultację (15 min)
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-neutral-200 transition-all hover:bg-neutral-800 hover:text-white"
            >
              Zobacz realizacje
            </Link>
          </div>

          {/* Wskaźniki jakości */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 border-t border-neutral-800/80 pt-8 text-neutral-400 text-xs sm:text-sm">
            <div>
              <strong className="block font-semibold text-white text-base">100/100</strong>
              Szybkość w Google Lighthouse
            </div>
            <div>
              <strong className="block font-semibold text-white text-base">Next.js & React</strong>
              Najnowocześniejsze technologie
            </div>
            <div>
              <strong className="block font-semibold text-white text-base">100% Responsive</strong>
              Idealne dopasowanie do smartfonów
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}