import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div>
          <p className="text-sm font-bold text-white">Karol Ziółkowski</p>
          <p className="text-xs text-neutral-500 mt-0.5">
            Web Design & Development
          </p>
        </div>

        <p className="text-xs text-neutral-600">
          © {new Date().getFullYear()} Karol Ziółkowski. Wszelkie prawa zastrzeżone.
        </p>

        <div className="flex gap-6 text-xs text-neutral-400">
          <Link href="#uslugi" className="hover:text-white transition-colors">
            Oferta
          </Link>
          <Link href="#portfolio" className="hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link href="#kontakt" className="hover:text-white transition-colors">
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
}