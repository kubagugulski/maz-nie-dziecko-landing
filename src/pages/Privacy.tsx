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
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-stone-900">Polityka Prywatności</h1>
        
        <div className="prose prose-stone max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-rose-100">
          <h2 className="text-2xl font-bold mt-0 mb-4">Jakie dane osobiste zbieramy i dlaczego je zbieramy</h2>
          <p className="mb-4 text-stone-700">
            Administratorem danych osobowych mazniedziecko.pl jest firma Jakub Gugulski, Ratajów 30, 32-090 Słomniki, NIP: 6821811984.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Ciasteczka</h2>
          <p className="mb-4 text-stone-700">
            Jeśli zostawisz na naszej witrynie komentarz, będziesz mógł wybrać opcję zapisu twojej nazwy, adresu email i adresu strony internetowej w ciasteczkach, dzięki którym podczas pisania kolejnych komentarzy powyższe informacje będą już dogodnie uzupełnione. Te ciasteczka wygasają po roku.
          </p>
          <p className="mb-4 text-stone-700">
            Jeśli masz konto i zalogujesz się na tej witrynie, utworzymy tymczasowe ciasteczko na potrzeby sprawdzenia czy twoja przeglądarka akceptuje ciasteczka. To ciasteczko nie zawiera żadnych danych osobistych i zostanie wyrzucone kiedy zamkniesz przeglądarkę.
          </p>
          <p className="mb-4 text-stone-700">
            Podczas logowania tworzymy dodatkowo kilka ciasteczek potrzebnych do zapisu twoich informacji logowania oraz wybranych opcji ekranu. Ciasteczka logowania wygasają po dwóch dniach, a opcji ekranu po roku. Jeśli zaznaczysz opcję „Pamiętaj mnie”, logowanie wygaśnie po dwóch tygodniach. Jeśli wylogujesz się ze swojego konta, ciasteczka logowania zostaną usunięte.
          </p>
          <p className="mb-4 text-stone-700">
            Jeśli zmodyfikujesz albo opublikujesz artykuł, w twojej przeglądarce zostanie zapisane dodatkowe ciasteczko. To ciasteczko nie zawiera żadnych danych osobistych, wskazując po prostu na identyfikator przed chwilą edytowanego artykułu. Wygasa ono po 1 dniu.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Osadzone treści z innych witryn</h2>
          <p className="mb-4 text-stone-700">
            Artykuły na tej witrynie mogą zawierać osadzone treści (np. filmy, obrazki, artykuły itp.). Osadzone treści z innych witryn zachowują się analogicznie do tego, jakby użytkownik odwiedził bezpośrednio konkretną witrynę.
          </p>
          <p className="mb-4 text-stone-700">
            Witryny mogą zbierać informacje o tobie, używać ciasteczek, dołączać dodatkowe, zewnętrzne systemy śledzenia i monitorować twoje interakcje z osadzonym materiałem, włączając w to śledzenie twoich interakcji z osadzonym materiałem jeśli posiadasz konto i jesteś zalogowany w tamtej witrynie.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Z kim dzielimy się danymi</h2>
          <p className="mb-4 text-stone-700">
            Dane nie są przetwarzane przez osoby trzecie. Dane przechowywane są przez serwis https://mazniedziecko.pl/
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Jak długo przechowujemy twoje dane</h2>
          <p className="mb-4 text-stone-700">
            Jeśli zostawisz komentarz, jego treść i metadane będą przechowywane przez czas nieokreślony. Dzięki temu jesteśmy w stanie rozpoznawać i zatwierdzać kolejne komentarze automatycznie, bez wysyłania ich do każdorazowej moderacji.
          </p>
          <p className="mb-4 text-stone-700">
            Dla użytkowników którzy zarejestrowali się na naszej stronie internetowej (jeśli tacy są), przechowujemy również informacje osobiste wprowadzone w profilu. Każdy użytkownik może dokonać wglądu, korekty albo skasować swoje informacje osobiste w dowolnej chwili (nie licząc nazwy użytkownika, której nie można zmienić). Administratorzy strony również mogą przeglądać i modyfikować te informacje.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Jakie masz prawa do swoich danych</h2>
          <p className="mb-4 text-stone-700">
            Jeśli masz konto użytkownika albo dodałeś komentarze w tej witrynie, możesz zażądać dostarczenia pliku z wyeksportowanym kompletem twoich danych osobistych będących w naszym posiadaniu, w tym całość tych dostarczonych przez ciebie. Możesz również zażądać usunięcia przez nas całości twoich danych osobistych w naszym posiadaniu. Nie dotyczy to żadnych danych które jesteśmy zobligowani zachować ze względów administracyjnych, prawnych albo bezpieczeństwa.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Gdzie przesyłamy dane</h2>
          <p className="mb-4 text-stone-700">
            Komentarze gości mogą być sprawdzane za pomocą automatycznej usługi wykrywania spamu.
          </p>
        </div>
      </div>
    </div>
  );
}
