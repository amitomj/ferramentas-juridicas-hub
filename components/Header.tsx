
import React from 'react';

interface HeaderProps {
  onGoHome: () => void;
  currentAppTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ onGoHome, currentAppTitle }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800 px-4 md:px-8 py-4 flex items-center justify-between">
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={onGoHome}
      >
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all group-hover:scale-110">
          L
        </div>
        <div className="hidden sm:block">
          <h1 className="text-lg font-extrabold text-white tracking-tight leading-none">LEGALHUB</h1>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Ecosystem</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {currentAppTitle && (
          <div className="hidden lg:flex items-center gap-2 bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
            <span className="text-sm font-bold text-slate-200">{currentAppTitle}</span>
          </div>
        )}
        
        <button 
          onClick={onGoHome}
          className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-slate-700 hover:border-slate-600 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Início
        </button>
      </div>
    </header>
  );
};

export default Header;
