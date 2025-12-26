
import React from 'react';
import { LegalApp } from '../types';

interface AppCardProps {
  app: LegalApp;
  onClick: (app: LegalApp) => void;
}

const AppCard: React.FC<AppCardProps> = ({ app, onClick }) => {
  return (
    <div className="group relative bg-[#1e293b] border border-slate-700/50 rounded-[2.5rem] p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] h-full">
      {/* Container de Ícone */}
      <div className={`mb-8 w-24 h-24 ${app.color} rounded-3xl flex items-center justify-center text-5xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] transform transition-transform group-hover:scale-110`}>
        {app.icon}
      </div>
      
      {/* Título - min-height fixo para alinhar o início das descrições */}
      <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight leading-tight min-h-[4rem] flex items-center justify-center">
        {app.title}
      </h3>
      
      {/* Descrição - flex-grow garante que o espaço livre empurre o botão para baixo */}
      <div className="flex-grow flex items-start justify-center w-full mb-10">
        <p className="text-slate-400 text-sm leading-relaxed max-w-[250px]">
          {app.description}
        </p>
      </div>
      
      {/* Botão alinhado na base através do mt-auto no container pai flex */}
      <button
        onClick={() => onClick(app)}
        className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all active:scale-95 shadow-[0_8px_25px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 mt-auto"
      >
        <span className="tracking-widest text-sm">ABRIR FERRAMENTA</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>

      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-[2.5rem]"></div>
    </div>
  );
};

export default AppCard;
