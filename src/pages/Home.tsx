import React, {useState, useEffect, useRef} from 'react';
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
  ArrowRight,
  X
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';



const BookMockup = ({ title, subtitle, theme = 'orange' }: { title: string, subtitle: string, theme?: 'orange' | 'emerald' }) => {
  const bg = 'bg-slate-800';
  const accentColor = theme === 'orange' ? 'bg-orange-500' : 'bg-emerald-500';
  const titleColor = 'text-white';
  
  return (
    <div className="relative w-40 h-56 mx-auto group [perspective:1000px]">
      <div className="w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] [transform:rotateY(-25deg)] group-hover:[transform:rotateY(-15deg)]">
        
        {/* Back Cover */}
        <div className="absolute inset-0 bg-slate-900 rounded-r-md [transform:translateZ(-20px)] shadow-2xl"></div>

        {/* Pages Edge (Right) */}
        <div className="absolute top-[2%] right-0 w-[20px] h-[96%] bg-slate-200 origin-right [transform:rotateY(90deg)] flex flex-col justify-evenly border-y border-slate-300 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-full h-[1px] bg-slate-300/50"></div>
          ))}
        </div>

        {/* Pages Edge (Top) */}
        <div className="absolute top-0 left-[2%] w-[96%] h-[20px] bg-slate-200 origin-top [transform:rotateX(-90deg)] border-x border-slate-300"></div>

        {/* Spine */}
        <div className="absolute top-0 left-0 w-[20px] h-full bg-slate-950 origin-left [transform:rotateY(-90deg)] rounded-l-sm flex items-center justify-center overflow-hidden">
          <span className="text-[8px] text-slate-700 font-bold tracking-widest -rotate-90 whitespace-nowrap">{title}</span>
        </div>

        {/* Front Cover */}
        <div className={`absolute inset-0 ${bg} rounded-r-md border-l-[12px] border-slate-950 shadow-[inset_4px_0_10px_rgba(0,0,0,0.2)] flex flex-col p-4 overflow-hidden [transform:translateZ(0)]`}>
          <div className={`absolute top-0 right-0 w-24 h-24 ${accentColor} opacity-10 rounded-bl-full -mr-4 -mt-4`}></div>
          <div className={`absolute bottom-0 left-0 w-16 h-16 ${accentColor} opacity-10 rounded-tr-full -ml-4 -mb-4`}></div>
          
          <div className="mt-2 relative z-10">
            <h3 className={`font-black ${titleColor} text-xl leading-tight tracking-tight`}>{title}</h3>
            <div className={`w-8 h-1 mt-3 ${accentColor}`}></div>
          </div>
          <div className="mt-auto relative z-10">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{subtitle}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default function Home() {
  const [showPromoBanner, setShowPromoBanner] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Countdown timer logic
    const targetDate = new Date('2026-04-19T23:59:59').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-orange-500/30">
      {/* Floating Toggle */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-slate-800 border border-slate-700 rounded-full p-1 flex shadow-2xl shadow-black/50">
          <a href="https://www.zonaniematka.pl/" className="px-4 py-2 rounded-full text-slate-400 hover:text-white text-sm font-medium shadow-sm">
            Dla niej
          </a>
          <a href="/" className="px-4 py-2 rounded-full bg-slate-700 text-white text-sm font-medium transition-colors">
            Dla Niego
          </a>
        </div>
      </div>

      {/* <AnimatePresence>
        {showPromoBanner && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sticky top-0 z-50 bg-orange-500 text-white overflow-hidden shadow-md"
          >
            <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
              <div className="flex-1 flex flex-col md:flex-row justify-center items-center text-sm md:text-base font-medium text-center gap-2 md:gap-4">
                <div>
                  <span className="mr-2">🎉</span>
                  <span>
                    Promocja tylko do końca weekendu <strong className="font-bold">-20% na wszystko!</strong> Kod: <span className="bg-white/20 px-2 py-0.5 rounded font-mono font-bold tracking-wider ml-1">PROMO20</span>
                  </span>
                </div>
                <div className="flex items-center bg-black/20 px-3 py-0.5 rounded-full text-sm font-mono font-bold shadow-inner">
                  <Clock className="w-4 h-4 mr-1.5" />
                  {timeLeft.days > 0 && <span className="mr-1">{timeLeft.days}d</span>}
                  <span>{timeLeft.hours.toString().padStart(2, '0')}:</span>
                  <span>{timeLeft.minutes.toString().padStart(2, '0')}:</span>
                  <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                </div>
              </div>
              <button 
                onClick={() => setShowPromoBanner(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors flex-shrink-0 ml-2"
                aria-label="Zamknij banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

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
Dowiedz się, dlaczego Twoja nieporadność zabija jej libido – i jak Twoja sprawczość w domu może stać się najsilniejszym afrodyzjakiem w Waszej sypialni.              </p>
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
              
              <div className="flex justify-center mb-12 mt-8">
                <BookMockup title="Mąż, nie dziecko" subtitle="Poradnik dla facetów" theme="orange" />
              </div>

              <ul className="space-y-3 text-slate-300 mb-8 max-w-sm mx-auto text-left">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Format PDF, EPUB, MOBI</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Natychmiastowy dostęp na maila</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" /> Dostęp do aktualizacji</li>
              </ul>

              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-2xl text-slate-500 line-through">149 zł</span>
                <span className="text-5xl font-extrabold text-white">69 zł</span>
              </div>

              <a href="https://buy.stripe.com/cNi7sN4ZO1bHdQI0QgbMQ06" className="w-full sm:w-auto px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_30px_-10px_rgba(249,115,22,0.5)] flex items-center justify-center gap-2 mx-auto">
                Kupuję samego ebooka
                <ArrowRight className="w-5 h-5" />
              </a>

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
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12 mt-8">
                <BookMockup title="Mąż, nie dziecko" subtitle="Poradnik dla facetów" theme="orange" />
                <div className="text-4xl font-bold text-slate-600">+</div>
                <BookMockup title="Żona, nie matka" subtitle="Poradnik dla kobiet" theme="emerald" />

              </div>

              <div className="mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl text-slate-500 line-through">298 zł</span>
                  <span className="text-5xl font-extrabold text-orange-500">119 zł</span>
                </div>
                <p className="text-lg text-emerald-400 font-medium">
                  Kupując w pakiecie, oszczędzasz
                </p>
              </div>

              <a href="https://buy.stripe.com/5kQbJ38c05rX3c46aAbMQ07" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-lg font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-2 mx-auto">
                Wybieram Pakiet Partnerski
              </a>
              
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

              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Czy ten ebook zrobi ze mnie „pantofla”?</h3>
                <p className="text-slate-400 leading-relaxed">
Wręcz przeciwnie. Bycie „pantoflem” to bierne czekanie na instrukcje i strach przed gniewem żony. Ten ebook uczy Cię, jak przejąć stery, stać się decyzyjnym i odzyskać autorytet we własnym domu. Dowiesz się, jak być facetem, na którym można polegać, a nie kolejnym dzieckiem do upilnowania. Partnerstwo to nie uległość – to profesjonalne zarządzanie wspólnym życiem.                </p>
              </div>

              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Czy dostanę jakieś konkretne narzędzia, czy to tylko psychologiczne gadanie?</h3>
                <p className="text-slate-400 leading-relaxed">
Dostaniesz konkretną strategię. Ebook zawiera „Plan 7 dni na start” – prostą check-listę krok po kroku, co masz zrobić każdego dnia, żeby „odczarować” swój wizerunek w domu. Zero domysłów, same zadania bojowe: od logistyki zakupów po ogarnięcie dzieci bez pośrednictwa matki.                </p>
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
            <a href="https://buy.stripe.com/cNi7sN4ZO1bHdQI0QgbMQ06" className="w-full sm:w-auto px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 mx-auto">
              Biorę ebooka i zmieniam zasady gry
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 px-6 text-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Mąż, nie dziecko. Wszelkie prawa zastrzeżone.
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
