import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Wróć do strony głównej
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Polityka Prywatności</h1>
        <div className="prose prose-invert prose-slate max-w-none">
          <p>
            Poniżej znajduje się szkic polityki prywatności. Zastąp ten tekst swoją właściwą polityką.
          </p>
          <h2>1. Administrator danych</h2>
          <p>
            Administratorem Twoich danych osobowych jest [Twoja Nazwa/Firma].
          </p>
          <h2>2. Cel przetwarzania</h2>
          <p>
            Twoje dane przetwarzane są wyłącznie w celu realizacji zamówienia, wysyłki produktu cyfrowego oraz obsługi ewentualnych zwrotów.
          </p>
          <h2>3. Prawa użytkownika</h2>
          <p>
            Masz prawo do wglądu w swoje dane, ich poprawiania oraz żądania ich usunięcia. W tym celu skontaktuj się z nami pod adresem e-mail: [Twój e-mail].
          </p>
        </div>
      </div>
    </div>
  );
}
