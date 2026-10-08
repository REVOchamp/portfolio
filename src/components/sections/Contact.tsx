'use client';

import { useState } from 'react';
import { sendEmail } from '@/app/actions/sendEmail';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Wystąpił błąd podczas wysyłania.');
    }
  };

  return (
    <section id="kontakt" className="border-t border-neutral-900 bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Informacje kontaktowe */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Kontakt
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Porozmawiajmy o Twoim projekcie
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Wypełnij formularz lub napisz bezpośrednio. Odpowiadam zazwyczaj w ciągu 24 godzin i przygotowuję darmową, niezobowiązującą wycenę.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3 text-neutral-300">
                <span className="text-xs font-semibold uppercase text-neutral-500">Email:</span>
                <a href="mailto:kontakt@karolziolkowski.pl" className="transition-colors hover:text-white">
                  kontakt@karolziolkowski.pl
                </a>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <span className="text-xs font-semibold uppercase text-neutral-500">Lokalizacja:</span>
                <span>Polska (Zdalnie / Cały świat)</span>
              </div>
            </div>
          </div>

          {/* Formularz */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
            {status === 'success' ? (
              <div className="py-12 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-xl font-bold text-emerald-400">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Wiadomość została wysłana!</h3>
                <p className="mt-2 text-xs text-neutral-400">
                  Dziękuję za kontakt. Odpowiem najszybciej, jak to możliwe.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-neutral-300">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="np. Jan Kowalski"
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-xs text-white placeholder-neutral-600 focus:border-neutral-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-neutral-300">
                    Adres e-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jan@firma.pl"
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-xs text-white placeholder-neutral-600 focus:border-neutral-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-neutral-300">
                    Szacowany budżet
                  </label>
                  <select
                    name="budget"
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-xs text-neutral-300 focus:border-neutral-500 focus:outline-none"
                  >
                    <option value="2 500 - 4 500 PLN">2 500 - 4 500 PLN (Landing Page)</option>
                    <option value="4 500 - 7 000 PLN">4 500 - 7 000 PLN (Strona Firmowa)</option>
                    <option value="7 000+ PLN">Powyżej 7 000 PLN (E-commerce / Dedykowany projekt)</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-neutral-300">
                    Wiadomość
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Opisz krótko swój projekt lub podaj adres obecnej strony..."
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-xs text-white placeholder-neutral-600 focus:border-neutral-500 focus:outline-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-400">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full rounded-lg bg-white py-3.5 text-xs font-semibold text-neutral-950 transition-all hover:bg-neutral-200 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Wysyłanie...' : 'Wyślij zapytanie'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}