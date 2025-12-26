
import React from 'react';
import { APPS } from '../constants';
import { LegalApp } from '../types';
import AppCard from './AppCard';

interface DashboardProps {
  onAppSelect: (app: LegalApp) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onAppSelect }) => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-12 py-10 md:py-16 flex flex-col items-center">
      <div className="text-center mb-16 flex flex-col items-center w-full max-w-[1400px]">
        {/* Moldura principal - Ajustada para acomodar o título reduzido */}
        <div className="border-4 border-blue-500/40 p-4 md:p-8 mb-10 w-full bg-[#1e293b]/10 backdrop-blur-sm shadow-[0_0_50px_rgba(37,99,235,0.1)] flex items-center justify-center min-h-[120px] md:min-h-[180px]">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter uppercase leading-none text-center">
            Ferramentas Jurídicas
          </h1>
        </div>
        
        {/* Separador visual */}
        <div className="mt-2 w-32 h-1.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_20px_rgba(37,99,235,1)]"></div>
      </div>

      {/* Grid fluido */}
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 items-stretch w-full max-w-[1400px]">
        {APPS.map((app) => (
          <AppCard key={app.id} app={app} onClick={onAppSelect} />
        ))}
      </div>

      <div className="mt-20 p-6 md:p-10 rounded-[2rem] bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl relative overflow-hidden w-full max-w-[1000px]">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-white mb-2">Precisão Jurídica</h3>
            <p className="text-slate-400 text-sm max-w-sm">
              Suite completa de ferramentas desenvolvidas para automatizar cálculos complexos e organizar documentação processual.
            </p>
          </div>
          <div className="flex gap-6">
            <div className="text-center">
              <span className="block text-3xl font-black text-blue-500 mb-0.5">24/7</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Disponível</span>
            </div>
            <div className="w-px h-10 bg-slate-700"></div>
            <div className="text-center">
              <span className="block text-3xl font-black text-blue-500 mb-0.5">V 2.1</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Versão</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-60 h-60 bg-blue-600/10 rounded-full blur-[80px]"></div>
      </div>

      <footer className="mt-20 text-center text-slate-500 text-xs font-medium tracking-wide border-t border-slate-800/50 pt-10 pb-10 w-full max-w-[1000px]">
        &copy; {new Date().getFullYear()} LEGALHUB ECOSYSTEM &bull; TECNOLOGIA PARA O DIREITO
      </footer>
    </div>
  );
};

export default Dashboard;
