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

        <div className="prose prose-stone max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-rose-100">

        <h2 className="text-2xl font-bold mt-0 mb-4">§ 1 Informacje ogólne.</h2>
          <p className="mb-4 text-stone-700">
            1. mazniedziecko.pl jest sklepem internetowym, którego właścicielem jest firma Jakub Gugulski, NIP: 6821811984 z siedzibą pod adresem Ratajów 30, 32-090 Słomniki. Adres email: mazniedziecko@gmail.com. Regulamin określa zasady kupowania produktów na stronie mazniedziecko.pl.
          </p>
          <p className="mb-4 text-stone-700">
            2. Dostęp do serwisu jest wolny – każdy może przeglądać jego zawartość, jednak w momencie złożenia zamówienia, osoba taka staje się Klientem i oświadcza, iż zapoznała się z niniejszym Regulaminem oraz Polityką prywatności i w pełni się zgadza z owymi postanowieniami, w innym przypadku zaleca się opuszczenie serwisu.
          </p>
          <p className="mb-4 text-stone-700">
            3. Do korzystania z Serwisu mazniedziecko.pl wymagane są standardowe urządzenia wraz z oprogramowaniem, pozwalające na przeglądanie stron WWW, a także posiadanie skrzynki pocztowej email oraz możliwości i umiejętności komunikowania się za pośrednictwem poczty elektronicznej.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">§ 2 Przedmiot serwisu</h2>
          <p className="mb-4 text-stone-700">
            1. Przedmiotem Serwisu jest dystrybucja produktów ebook oraz treści publikowanych na łamach Serwisu mazniedziecko.pl. Jest on dostarczany do użytkownika dzięki poczcie elektronicznej. Produkt jest wysyłany do klientów w momencie zaksięgowania płatności.
          </p>
          <p className="mb-4 text-stone-700">
            2. Pod pojęciem ‚ebook’ należy rozumieć publikację elektroniczną w postaci pliku komputerowego, będącą odpowiednikiem publikacji treści dokonywanych w tradycyjnych formach (np. książka).
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">§ 3 Zasady składania zamówień i korzystania z serwisu.</h2>
          <p className="mb-4 text-stone-700">
            1. Za pomocą serwisu mazniedziecko.pl można nabyć oferowany produkt (Ebook).
          </p>
          <p className="mb-4 text-stone-700">
            2. Klient, chcąc złożyć zamówienie musi być osobą pełnoletnią posiadającą pełną zdolność do czynności prawnych.
          </p>
          <p className="mb-4 text-stone-700">
            3. Do realizacji Transakcji konieczne jest złożenie zamówienia poprzez aktywowanie widocznych na stronie Serwisu odpowiednich opcji dostępnych przy ofercie Ebooka i dalsze postępowanie zgodnie z wskazówkami podawanymi zamawiającym na każdym etapie procedury składania zamówienia.
          </p>
          <p className="mb-4 text-stone-700">
            4. Warunkiem niezbędnym do skutecznego złożenia zamówienia jest podanie niezbędnych danych i informacji w Serwisie oraz wykonywanie innych czynności każdorazowo dokładnie opisanych na łamach Serwisu lub w korespondencji elektronicznej.
          </p>
          <p className="mb-4 text-stone-700">
            5. Zamówienia realizowane są po otrzymaniu przez Administratora serwisu należności uiszczanej dostępnymi w Serwisie kanałami płatności.
          </p>
          <p className="mb-4 text-stone-700">
            6. Klient nie ma prawa udostępniać zakupionego Ebooka osobom trzecim. Każdy Klient nabywający Ebooka zobowiązany jest dbać o to, aby żadne inne nieupoważnione osoby nie miały do niego dostępu w ten sposób, aby mogły go powielać, dystrybuować bez zgody Sprzedawcy albo w inny sposób niezgodny z zakresem udzielonych praw go wykorzystywać, gdyż w przypadku wykrycia takich sytuacji, Sprzedawca może kierować roszczenia z tego tytułu względem znanego mu nabywcy Ebooka, z tytułu łamania praw autorskich.
          </p>
          <p className="mb-4 text-stone-700">
            7. Wszelkie Ebooki udostępniane w serwisie – odpłatnie lub nieodpłatnie – podlegają ochronie przewidzianej w ustawie o prawie autorskim i prawach pokrewnych (Dz.U. 1994 Nr 24 poz. 83).
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">§ 4 Reklamacje i zwroty.</h2>
          <p className="mb-4 text-stone-700">
            1. Zgłoszenia reklamacyjne będą na bieżąco rozpatrywane przez Sprzedawcę w terminie nie dłuższym niż 14 dni od otrzymania zgłoszenia reklamacyjnego, jednak Sprzedawca zastrzega sobie prawo pozostawienia reklamacji bez odpowiedzi, jeżeli dotyczy ona dysfunkcji wynikających z nieznajomości Regulaminu, niezastosowania się przez Użytkownika do udzielanych wskazówek oraz informacji ukazujących się na bieżąco na łamach Serwisu.
          </p>
          <p className="mb-4 text-stone-700">
            2. Prawo odstąpienia od umowy zawartej na odległość nie przysługuje nabywcy w przypadku produktów, które z uwagi na charakter nie mogą zostać zwrócone. Brak możliwości zwrotu dotyczy publikacji elektronicznych.
          </p>
          <p className="mb-4 text-stone-700">
            3. Reklamacje można składać drogą elektroniczną pod wskazany adres: mazniedziecko@gmail.com.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">§ 5 Postanowienia ogólne.</h2>
          <p className="mb-4 text-stone-700">
            1. Mimo dokładania wszelkich starań jakościowych i weryfikacyjnych, Administrator nie odpowiada w maksymalnie szerokim zakresie, jak tylko pozwalają na to obowiązujące przepisy prawa, za treści przekazywane i publikowane na łamach Serwisu przez Użytkowników oraz inne osoby, za ich prawdziwość, rzetelność oraz autentyczność wszelkich materiałów nie pochodzących od Administratora lub przez niego autoryzowanych.
          </p>
          <p className="mb-4 text-stone-700">
            2. Administrator nie odpowiada za zdarzenia i wydarzenia oraz ich skutki, jakie mogą mieć lub miały miejsce w świecie rzeczywistym w wyniku korzystania z Serwisu, stosowania się do treści zawartych w ebookach oraz w informacjach publikowanych na łamach Serwisu.
          </p>
          <p className="mb-4 text-stone-700">
            3. Administratorem danych osobowych Klientów uzyskanych przez Sprzedawcę podczas Transakcji jest Sprzedawca. Dane osobowe przetwarzane będą przez Sprzedawcę wyłącznie w celu realizacji zamówień przez Sprzedawcę. Klientowi, przysługuje prawo dostępu do treści swoich danych oraz ich poprawiania. Każdej osobie przysługuje prawo do kontroli przetwarzania danych, które jej dotyczą, zawartych w zbiorach danych, a zwłaszcza prawo do wniesienia, w przypadkach wymienionych w art. 23 ust. 1 pkt 4 i 5 ustawy o ochronie danych osobowych, pisemnego, umotywowanego żądania zaprzestania przetwarzania jej danych ze względu na jej szczególną sytuację.
          </p>
          <p className="mb-4 text-stone-700">
            4. Sprzedawca zastrzega sobie prawo do czasowego całkowitego lub częściowego wyłączenia Serwisu w celu jego ulepszenia, dodawania produktów lub przeprowadzania konserwacji, bez wcześniejszego uprzedzania.
          </p>
          <p className="mb-4 text-stone-700">
            5. Sprzedawca dołożył wszelkich starań, aby zawarte w Ebookach informacje były prawdziwe i rzetelne, ale wyłącza całkowitą odpowiedzialność za działanie produktów sprzedawanych w ramach serwisu www.mazniedziecko.pl.
          </p>
          <p className="mb-4 text-stone-700">
            6. Wszelkie postanowienia niniejszego Regulaminu mogą być w każdej chwili zmieniane przez Sprzedawcę, bez podawania przyczyn. Zmiany będą publikowane na bieżąco w postaci ujednoliconego tekstu Regulaminu na łamach Serwisu wraz z informacją o ich dokonaniu.
          </p>
          <p className="mb-4 text-stone-700">
            7. Sprzedawca nie ponosi odpowiedzialności za utratę danych Serwisu zgromadzonych w systemach informatycznych Sprzedawcy, spowodowanych awarią sprzętu, dysfunkcją sieci Internet, utratą na skutek działania osób trzecich.
          </p>
        </div>
      </div>


    </div>
  );
}
