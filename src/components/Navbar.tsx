import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / Nazwa */}
        <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-neutral-300 transition-colors">
          Karol Ziółkowski <span className="text-xs font-normal text-neutral-400 block sm:inline sm:ml-2">/ Web Dev</span>
        </Link>

        {/* Nawigacja */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          <Link href="#uslugi" className="hover:text-white transition-colors">
            Oferta
          </Link>
          <Link href="#portfolio" className="hover:text-white transition-colors">
            Realizacje
          </Link>
          <Link href="#proces" className="hover:text-white transition-colors">
            Proces
          </Link>
          <Link href="#kontakt" className="hover:text-white transition-colors">
            Kontakt
          </Link>
        </nav>

        {/* Przyciski CTA */}
        <div>
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition-all hover:bg-neutral-200"
          >
            Darmowa wycena
          </Link>
        </div>
      </div>
    </header>
  );
}