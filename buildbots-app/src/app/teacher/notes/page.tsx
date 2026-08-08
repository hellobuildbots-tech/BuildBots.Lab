'use client';

import React from 'react';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { MessageSquare, PlusCircle } from 'lucide-react';

export default function ParentNotesCRMPage() {
  return (
    <div className="min-h-screen bg-[#08121E] text-white flex selection:bg-cyan-500 selection:text-slate-950">
      <CRMAppSidebar role="teacher" />

      <main className="flex-1 md:pl-64 pl-0 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen w-full">
        <header className="h-20 border-b border-cyan-500/15 px-8 flex items-center justify-between bg-[#08121E]/80 backdrop-blur-md sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-extrabold">Parent Notes & Communication Log</h1>
            <p className="text-xs text-slate-400">Private Notes & Instructor Updates for Parents</p>
          </div>

          <button className="px-5 py-2.5 rounded-full font-extrabold text-xs bg-purple-500 text-white flex items-center gap-2 hover:bg-purple-400">
            <PlusCircle className="w-4 h-4" /> Create Parent Note
          </button>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-lg font-bold mb-4">Active Parent Notes Log</h2>

            <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 mb-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-bold text-purple-300">Student: Mivaan Dangayach</span>
                <span>Yesterday</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                "Mivaan demonstrated excellent understanding of battery energy storage and connected the wire highway canvas game on his first try!"
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
