import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ChevronRight, 
  BookOpen, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Target, 
  Users, 
  MessageSquare, 
  Flame,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-orange-500/30">
      {/* Floating Toggle */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-slate-800 border border-slate-700 rounded-full p-1 flex shadow-2xl shadow-black/50">
          <button className="px-4 py-2 rounded-full bg-slate-700 text-white text-sm font-medium shadow-sm">
            Wersja dla Niego
          </button>
          <button className="px-4 py-2 rounded-full text-slate-400 hover:text-white text-sm font-medium transition-colors">
            Wersja dla Niej
          </button>
        </div>
      </div>

      <main>
        {/* 1. Hero Section */}
        <section className="pt-20 pb-20 md:pt-32 md:pb-32 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
                Odzyskaj partnerkę. <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Przestań być synem własnej żony.
                </span>
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Dowiedz się, dlaczego "pomaganie w domu" to Twój największy błąd i jak stać się facetem, na którym ona może polegać bez proszenia o pomoc.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="#oferta-solo" className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] flex items-center justify-center gap-2">
                Chcę odzyskać święty spokój
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* 2. Sekcja "Lustro" */}
        <section className="py-20 bg-slate-800/50 border-y border-slate-800 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Czy to znasz?</h2>
            
            <div className="space-y-6 mb-12">
              {[
                "Masz wrażenie, że ona ciągle o coś gdera, a Ty przecież \"tylko siedzisz\"?",
                "Czekasz na instrukcję: \"Powiedz mi, co mam zrobić\", a ona w odpowiedzi wybucha płaczem lub złością?",
                "Czujesz, że w sypialni wieje chłodem, a ona traktuje Cię bardziej jak starsze dziecko niż faceta?"
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-slate-800 p-6 rounded-xl border border-slate-700"
                >
                  <div className="mt-1 bg-slate-900 p-2 rounded-lg text-orange-500 shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-8 text-center">
              <p className="text-xl font-medium text-white">
                To nie jej humory. To błąd w systemie Waszego związku. <br className="hidden md:block" />
                <span className="text-orange-400 font-bold">Czas na aktualizację.</span>
              </p>
            </div>
          </div>
        </section>

        {/* 3. Co znajdziesz w środku? */}
        <section id="spis-tresci" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Co znajdziesz w środku?</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Rozdział 1: Koniec z byciem \"pomocnikiem\"",
                  desc: "Dowiedz się, dlaczego czekanie na polecenia to najkrótsza droga do kłótni."
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Rozdział 2: Poznaj \"Mental Load\"",
                  desc: "Niewidzialny etat, który wykańcza Twoją żonę (i jak go częściowo przejąć w 15 minut dziennie)."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "Rozdział 3: Standardy Ligi Mistrzów",
                  desc: "Jak sprawić, żeby przestała po Tobie poprawiać i zaczęła Ci ufać."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Rozdział 4: Projekt: Dzieci",
                  desc: "Jak być ojcem, a nie nianią na telefon."
                },
                {
                  icon: <MessageSquare className="w-6 h-6" />,
                  title: "Rozdział 5: Komunikacja bez awantur",
                  desc: "Jak rozmawiać, żeby ona czuła się słyszana, a Ty nie czuł się atakowany."
                },
                {
                  icon: <Flame className="w-6 h-6" />,
                  title: "Rozdział 6 (Bonus): Seks i święty spokój",
                  desc: "Brutalna prawda o tym, jak Twoje zaangażowanie w domu podkręca temperaturę w sypialni."
                }
              ].map((chapter, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors group"
                >
                  <div className="text-orange-500 mb-4 bg-slate-900 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {chapter.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{chapter.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{chapter.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Dlaczego ten ebook jest inny? */}
        <section className="py-20 bg-slate-900 border-y border-slate-800 px-6 relative overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Zero lania wody",
                  desc: "Same konkrety, które przeczytasz w jeden wieczór."
                },
                {
                  title: "Męski punkt widzenia",
                  desc: "Nie będziemy Cię oceniać ani pouczać. Pokażemy Ci narzędzia."
                },
                {
                  title: "Szybkie efekty",
                  desc: "Plan \"7 dni na start\", który wdrożysz od razu po lekturze."
                }
              ].map((feature, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 text-emerald-500">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Dla kogo jest ten poradnik? */}
        <section id="dla-kogo" className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Dla kogo jest ten poradnik?</h2>
            
            <div className="space-y-4">
              {[
                "Dla facetów, którzy chcą mieć szczęśliwy dom, ale nie wiedzą, co robią źle.",
                "Dla mężów, którzy czują, że oddalili się od swoich żon.",
                "Dla ojców, którzy chcą być dla swoich dzieci kimś więcej niż gościem od prezentów."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                  <ChevronRight className="w-6 h-6 text-orange-500 shrink-0" />
                  <p className="text-lg text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Oferta Solo: "Mąż, nie dziecko" */}
        <section id="oferta-solo" className="py-24 bg-slate-900 px-6 border-t border-slate-800">
          <div className="max-w-4xl mx-auto bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ebook "Mąż, nie dziecko"
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Konkretny plan działania, który wdrożysz od razu. Zero lania wody.
              </p>
              
              <div className="flex justify-center mb-8">
                <div className="w-40 h-52 bg-slate-700 rounded-lg border border-slate-600 flex items-center justify-center relative shadow-lg">
                  <BookOpen className="w-12 h-12 text-slate-500" />
                  <div className="absolute bottom-4 text-sm font-bold text-slate-400 text-center px-2">Mąż, nie dziecko</div>
                </div>
              </div>

              <ul className="space-y-3 text-slate-300 mb-8 max-w-sm mx-auto text-left">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Format PDF, EPUB, MOBI</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Natychmiastowy dostęp na maila</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Dostęp do aktualizacji</li>
              </ul>

              <div className="mb-8">
                <div className="text-5xl font-extrabold text-white">69 zł</div>
              </div>

              <button className="w-full sm:w-auto px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_30px_-10px_rgba(249,115,22,0.5)] flex items-center justify-center gap-2 mx-auto">
                Kupuję samego ebooka
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Gwarancja satysfakcji: 30 dni na zwrot bez zadawania pytań.</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Pakiet: "Zrozumcie się wreszcie" */}
        <section id="pakiet" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 px-6 border-t border-slate-800">
          <div className="max-w-4xl mx-auto bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
            <div className="p-8 md:p-12 text-center">
              <div className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-orange-500/20">
                Oferta Specjalna
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pakiet: "Zrozumcie się wreszcie"
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Ona ma swoją wersję, Ty masz swoją. Przestańcie się domyślać – zacznijcie grać do jednej bramki.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div className="w-32 h-40 bg-slate-700 rounded-lg border border-slate-600 flex items-center justify-center relative shadow-lg">
                  <BookOpen className="w-10 h-10 text-slate-500" />
                  <div className="absolute bottom-2 text-xs font-bold text-slate-400">Mąż, nie dziecko</div>
                </div>
                <div className="text-2xl font-bold text-slate-500">+</div>
                <div className="w-32 h-40 bg-slate-700 rounded-lg border border-slate-600 flex items-center justify-center relative shadow-lg">
                  <BookOpen className="w-10 h-10 text-slate-500" />
                  <div className="absolute bottom-2 text-xs font-bold text-slate-400">Żona, nie matka</div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl text-slate-500 line-through">138 zł</span>
                  <span className="text-5xl font-extrabold text-orange-500">109 zł</span>
                </div>
                <p className="text-lg text-emerald-400 font-medium">
                  Kupując w pakiecie, oszczędzasz 29 zł
                </p>
              </div>

              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-lg font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-2 mx-auto">
                Wybieram Pakiet Partnerski
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Gwarancja satysfakcji: 30 dni na zwrot bez zadawania pytań.</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Sekcja Gwarancji / FAQ */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">FAQ i Gwarancja</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800/30 border border-emerald-500/30 p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-8 h-8 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Gwarancja 100% satysfakcji</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Masz pełne 30 dni na przeczytanie ebooka. Jeśli uznasz, że ta wiedza nie jest dla Ciebie lub nie przynosi efektów – napisz do mnie, a zwrócę Ci 100% pieniędzy. Bez zadawania pytań, bez kruczków. Ryzyko jest po mojej stronie.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Czy to zadziała, jeśli ona już straciła do mnie cierpliwość?</h3>
                <p className="text-slate-400 leading-relaxed">
                  Tak, bo zmiana Twojej postawy to jedyny sposób na odbudowanie jej zaufania. Słowa już nie wystarczą, potrzebne są konkrety.
                </p>
              </div>
              
              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Ile czasu zajmuje lektura?</h3>
                <p className="text-slate-400 leading-relaxed">
                  Około 45 minut. Tyle, co jedna połowa meczu – a stawką jest Twój związek i święty spokój na co dzień.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Finalne CTA */}
        <section className="py-24 bg-orange-500 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
              Czas przestać pytać "w czym pomóc?". <br className="hidden md:block" />
              Czas zacząć ogarniać.
            </h2>
            <button className="w-full sm:w-auto px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 mx-auto">
              Biorę ebooka i zmieniam zasady gry
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 px-6 text-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} MĄŻPRO. Wszelkie prawa zastrzeżone.
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/regulamin" className="text-slate-600 hover:text-slate-400 transition-colors">Regulamin</Link>
            <Link to="/polityka-prywatnosci" className="text-slate-600 hover:text-slate-400 transition-colors">Polityka prywatności</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
