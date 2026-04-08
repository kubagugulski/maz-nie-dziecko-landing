import React from 'react';
import { CheckCircle, Download, Bookmark, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans flex items-center justify-center p-6 selection:bg-orange-500/30">
      <div className="max-w-2xl w-full bg-slate-800 border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-emerald-500/20 blur-[60px] pointer-events-none"></div>
        
        <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
          <CheckCircle className="w-10 h-10 text-emerald-500" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
          Dziękuję za zakup!
        </h1>
        <p className="text-lg text-slate-400 mb-10 relative z-10">
          Płatność przebiegła pomyślnie. Twój ebook jest gotowy do pobrania.
        </p>

        <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6 md:p-8 mb-8 relative z-10">
          <h2 className="text-xl font-bold text-white mb-6">Twój e-book "Mąż, nie dziecko":</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
            href="/ebook-maz-nie-dziecko.pdf" 
            className="flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)] transform hover:scale-105"
            download
            >
              <Download className="w-5 h-5" />
              Pobierz PDF
            </a>
            
          </div>
        </div>

        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 text-left flex gap-4 items-start relative z-10">
          <Bookmark className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
          <div>
            <h3 className="text-white font-bold mb-1">Ważna informacja</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Koniecznie <strong>zapisz ten link</strong> lub <strong>dodaj tę stronę do zakładek</strong> w swojej przeglądarce (Ctrl+D / Cmd+D). Dzięki temu będziesz miał stały dostęp do plików oraz wszystkich przyszłych aktualizacji.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}
