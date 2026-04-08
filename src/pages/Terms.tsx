import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Wróć do strony głównej
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Regulamin</h1>
        <div className="prose prose-invert prose-slate max-w-none">
          <p>
            Poniżej znajduje się szkic regulaminu. Zastąp ten tekst swoim właściwym regulaminem.
          </p>
          <h2>1. Postanowienia ogólne</h2>
          <p>
            Niniejszy regulamin określa zasady korzystania ze sklepu internetowego oraz warunki sprzedaży produktów cyfrowych.
          </p>
          <h2>2. Zasady zakupu</h2>
          <p>
            Po opłaceniu zamówienia, produkt cyfrowy (ebook) zostanie wysłany na podany adres e-mail w formie linku do pobrania.
          </p>
          <h2>3. Zwroty i reklamacje (Gwarancja 30 dni)</h2>
          <p>
            Kupującemu przysługuje prawo do zwrotu produktu w ciągu 30 dni od daty zakupu bez podawania przyczyny, w ramach gwarancji satysfakcji.
          </p>
        </div>
      </div>
    </div>
  );
}
