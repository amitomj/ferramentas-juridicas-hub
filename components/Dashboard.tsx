
import React from 'react';
import { APPS } from '../constants';
import { LegalApp } from '../types';
import AppCard from './AppCard';

interface DashboardProps {
  onAppSelect: (app: LegalApp) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onAppSelect }) => {
  return (
    <div className="w-full px-4 sm:px-10 lg:px-16 py-12 md:py-20 flex flex-col items-center">
      <div className="text-center mb-20 flex flex-col items-center w-full max-w-[1800px]">
        {/* Moldura principal - Título numa única linha, ocupando a largura total alinhada com os botões */}
        <div className="border-4 border-blue-500/40 p-8 md:p-16 mb-12 w-full bg-[#1e293b]/10 backdrop-blur-sm shadow-[0_0_50px_rgba(37,99,235,0.1)] flex items-center justify-center min-h-[300px] md:min-h-[400px]">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-extrabold text-white tracking-tighter uppercase leading-none text-center whitespace-nowrap">
            Ferramentas Jurídicas
          </h1>
        </div>
        
        {/* Separador visual */}
        <div className="mt-4 w-48 h-2 bg-blue-600 mx-auto rounded-full shadow-[0_0_20px_rgba(37,99,235,1)]"></div>
      </div>

      {/* Grid fluido que aproveita o espaço horizontal */}
      <div className="grid grid-cols-1 gap-8 md:gap-10 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-stretch w-full max-w-[1800px]">
        {APPS.map((app) => (
          <AppCard key={app.id} app={app} onClick={onAppSelect} />
        ))}
      </div>

      <div className="mt-24 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl relative overflow-hidden w-full max-w-[1200px]">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-extrabold text-white mb-3">Precisão Jurídica</h3>
            <p className="text-slate-400 max-w-md">
              Suite completa de ferramentas desenvolvidas para automatizar cálculos complexos e organizar documentação processual.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="text-center">
              <span className="block text-4xl font-black text-blue-500 mb-1">24/7</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Disponível</span>
            </div>
            <div className="w-px h-12 bg-slate-700"></div>
            <div className="text-center">
              <span className="block text-4xl font-black text-blue-500 mb-1">V 2.0</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Versão</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      <footer className="mt-24 text-center text-slate-500 text-sm font-medium tracking-wide border-t border-slate-800/50 pt-12 pb-12 w-full max-w-[1200px]">
        &copy; {new Date().getFullYear()} LEGALHUB ECOSYSTEM &bull; TECNOLOGIA PARA O DIREITO
      </footer>
    </div>
  );
};

export default Dashboard;
