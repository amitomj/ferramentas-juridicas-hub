
import React from 'react';
import { LegalApp } from '../types';

interface AppCardProps {
  app: LegalApp;
  onClick: (app: LegalApp) => void;
}

const AppCard: React.FC<AppCardProps> = ({ app, onClick }) => {
  return (
    <div className="group relative bg-[#1e293b] border border-slate-700/50 rounded-[2rem] p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] h-full">
      {/* Container de Ícone */}
      <div className={`mb-6 w-20 h-20 ${app.color} rounded-2xl flex items-center justify-center text-4xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] transform transition-transform group-hover:scale-110`}>
        {app.icon}
      </div>
      
      {/* Título */}
      <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight leading-tight min-h-[3.5rem] flex items-center justify-center">
        {app.title}
      </h3>
      
      {/* Descrição */}
      <div className="flex-grow flex items-start justify-center w-full mb-8">
        <p className="text-slate-400 text-xs leading-relaxed max-w-[220px]">
          {app.description}
        </p>
      </div>
      
      {/* Botão */}
      <button
        onClick={() => onClick(app)}
        className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all active:scale-95 shadow-[0_8px_25px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 mt-auto"
      >
        <span className="tracking-widest text-[10px]">ABRIR FERRAMENTA</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>

      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-[2rem]"></div>
    </div>
  );
};

export default AppCard;
