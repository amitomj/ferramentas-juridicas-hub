
import React, { useState, useCallback } from 'react';
import { LegalApp, ViewState } from './types';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AppViewer from './components/AppViewer';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('dashboard');
  const [activeApp, setActiveApp] = useState<LegalApp | null>(null);

  const handleAppSelect = useCallback((app: LegalApp) => {
    setActiveApp(app);
    setViewState('viewer');
  }, []);

  const handleGoHome = useCallback(() => {
    setViewState('dashboard');
    setActiveApp(null);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-[#0f172a] text-slate-200 transition-colors duration-500 overflow-hidden">
      <Header 
        onGoHome={handleGoHome} 
        currentAppTitle={activeApp?.title}
      />
      
      <main className="flex-1 overflow-y-auto relative">
        {viewState === 'dashboard' ? (
          <Dashboard onAppSelect={handleAppSelect} />
        ) : activeApp ? (
          <AppViewer app={activeApp} />
        ) : null}
      </main>

      {viewState === 'viewer' && (
        <button
          onClick={handleGoHome}
          className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-[0_10px_30px_rgba(37,99,235,0.5)] flex items-center justify-center z-50 hover:bg-blue-500 active:scale-90 transition-all border border-blue-400/20"
          aria-label="Voltar ao início"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default App;
