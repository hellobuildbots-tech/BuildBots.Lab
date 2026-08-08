'use client';

import React from 'react';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { FileText, CheckCircle2, Clock } from 'lucide-react';

export default function HomeworkReviewPage() {
  return (
    <div className="min-h-screen bg-[#08121E] text-white flex selection:bg-cyan-500 selection:text-slate-950">
      <CRMAppSidebar role="teacher" />

      <main className="flex-1 md:pl-64 pl-0 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen w-full">
        <header className="h-20 border-b border-cyan-500/15 px-8 flex items-center justify-between bg-[#08121E]/80 backdrop-blur-md sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-extrabold">Homework Submissions & Grading</h1>
            <p className="text-xs text-slate-400">Review Student Uploads (Images, Videos, PDFs)</p>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-lg font-bold mb-4">Pending Student Homework Submissions</h2>
            <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex items-center justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 font-bold text-xs">Pending Review</span>
                <h4 className="font-extrabold text-base mt-2">Mivaan Dangayach — Class 1 LED Circuit Photo</h4>
                <p className="text-xs text-slate-400 mt-1">Uploaded 9V battery & red LED breadboard circuit image</p>
              </div>

              <button className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-xs hover:bg-emerald-400">
                Grade & Feedback
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
