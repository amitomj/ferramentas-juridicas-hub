
import React, { useState } from 'react';
import { LegalApp } from '../types';

interface AppViewerProps {
  app: LegalApp;
}

const AppViewer: React.FC<AppViewerProps> = ({ app }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-full bg-slate-900 flex flex-col overflow-hidden">
      {loading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0f172a]">
          <div className="w-16 h-16 border-4 border-slate-800 border-t-blue-600 rounded-full animate-spin mb-6 shadow-[0_0_20px_rgba(37,99,235,0.2)]"></div>
          <p className="text-slate-400 font-bold animate-pulse tracking-widest text-xs uppercase">A inicializar {app.title}</p>
        </div>
      )}
      <iframe
        src={app.url}
        className="flex-grow border-none w-full h-full min-h-0"
        title={app.title}
        onLoad={() => setLoading(false)}
        allow="clipboard-write; geolocation; camera; microphone"
      />
      
      <div className="absolute bottom-4 right-4 bg-slate-800/80 backdrop-blur-md border border-slate-700 shadow-2xl px-3 py-1.5 rounded-lg text-[9px] text-slate-400 font-bold z-20 pointer-events-none uppercase tracking-wider hidden sm:block">
        Modo Seguro Ativo
      </div>
    </div>
  );
};

export default AppViewer;
