'use client';

import React, { useEffect, useState } from 'react';
import { Smartphone, Download, X, Check } from 'lucide-react';

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstalled(true);
    }
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  if (!showPrompt || installed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-4 rounded-2xl bg-slate-900/95 border border-cyan-500/40 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 p-0.5 shrink-0 flex items-center justify-center text-slate-950 font-black">
          <Smartphone className="w-5 h-5 text-slate-950" />
        </div>
        <div className="flex-1 pr-2">
          <h4 className="text-sm font-extrabold text-white flex items-center gap-1.5">
            Install BuildBots App 📱
          </h4>
          <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
            Add BuildBots OS to your phone home screen for fast fullscreen access & instant student notifications!
          </p>
          <div className="flex items-center gap-2 mt-3">
            <button
              onClick={handleInstall}
              className="px-4 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 flex items-center gap-1.5 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 transition-all"
            >
              <Download className="w-3.5 h-3.5" /> Install Now
            </button>
            <button
              onClick={() => setShowPrompt(false)}
              className="px-3 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Later
            </button>
          </div>
        </div>
        <button
          onClick={() => setShowPrompt(false)}
          className="text-slate-500 hover:text-white p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
