'use client';

import React from 'react';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { Award, Download, Mail } from 'lucide-react';

export default function CertificatesCRMPage() {
  return (
    <div className="min-h-screen bg-[#08121E] text-white flex selection:bg-cyan-500 selection:text-slate-950">
      <CRMAppSidebar role="teacher" />

      <main className="flex-1 pl-64 min-h-screen">
        <header className="h-20 border-b border-cyan-500/15 px-8 flex items-center justify-between bg-[#08121E]/80 backdrop-blur-md sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-extrabold">Certificate Generator & Registry</h1>
            <p className="text-xs text-slate-400">PDF Generation, Email Dispatches, & Reissuance</p>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-lg font-bold mb-4">Issued Student Certificates</h2>

            <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex items-center justify-between">
              <div>
                <h4 className="font-extrabold text-base">Junior Robot Explorer Certificate</h4>
                <p className="text-xs text-slate-400 mt-0.5">Awarded to: <span className="text-cyan-300 font-bold">Mivaan Dangayach & Tashvi Khandelwal</span></p>
              </div>

              <div className="flex gap-2">
                <a href="/lessons/month-1/class-1" target="_blank" className="px-4 py-2 rounded-xl bg-yellow-500 text-slate-950 font-extrabold text-xs flex items-center gap-1 hover:bg-yellow-400">
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
