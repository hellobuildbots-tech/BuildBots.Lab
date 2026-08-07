'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Maximize2, Minimize2, CheckCircle2, Home } from 'lucide-react';

export default function LessonViewerClass3Page() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const elem = document.getElementById('iframeContainer');
    if (!elem) return;

    if (!isFullscreen) {
      if (elem.requestFullscreen) elem.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#08121E] text-white flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      <header className="h-16 bg-[#0B1829] border-b border-cyan-500/20 px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors">
            <Home className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-extrabold text-sm md:text-base leading-tight">Month 1 • Class 3: Save Robot City (Traffic Light Rescue)</h1>
            <p className="text-xs text-cyan-400 font-semibold">BuildBots AI HTML Lesson Viewer</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleFullscreen}
            className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-slate-300 hover:text-white flex items-center gap-2 transition-all"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </button>

          <Link href="/dashboard" className="px-5 py-2 rounded-xl font-extrabold text-xs bg-emerald-500 text-slate-950 hover:bg-emerald-400 flex items-center gap-1.5 transition-all">
            <CheckCircle2 className="w-4 h-4" /> Complete & Exit
          </Link>
        </div>
      </header>

      <main className="flex-1 relative bg-black" id="iframeContainer">
        <iframe
          src="/lessons/month-1/class-3/index.html"
          className="w-full h-full border-0 absolute inset-0"
          title="Class 3 Interactive HTML Lesson"
        />
      </main>
    </div>
  );
}
