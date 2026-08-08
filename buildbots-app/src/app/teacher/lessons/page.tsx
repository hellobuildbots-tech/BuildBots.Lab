'use client';

import React from 'react';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { BookOpen, Upload, Eye, CheckCircle2 } from 'lucide-react';

export default function LessonsManagementCRMPage() {
  return (
    <div className="min-h-screen bg-[#08121E] text-white flex selection:bg-cyan-500 selection:text-slate-950">
      <CRMAppSidebar role="teacher" />

      <main className="flex-1 md:pl-64 pl-0 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen w-full">
        <header className="h-20 border-b border-cyan-500/15 px-8 flex items-center justify-between bg-[#08121E]/80 backdrop-blur-md sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-extrabold">Lesson Management Library</h1>
            <p className="text-xs text-slate-400">Publish, Unpublish, & HTML Folder Indexing</p>
          </div>

          <button className="px-5 py-2.5 rounded-full font-extrabold text-xs bg-cyan-400 text-slate-950 flex items-center gap-2 hover:bg-cyan-300">
            <Upload className="w-4 h-4" /> Upload New HTML Lesson
          </button>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-lg font-bold mb-4">Published Curriculum Lessons</h2>
            
            <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700 flex items-center justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase">Month 1 Class 1</span>
                <h3 className="font-extrabold text-base mt-2">The Secret Inventor's Lab & Flashlight Discovery</h3>
                <p className="text-xs text-slate-400 mt-1">15 Playable HTML Micro-Games • Duration: 30 Mins • Status: <span className="text-emerald-400 font-bold">Published</span></p>
              </div>

              <div className="flex gap-2">
                <a href="/lessons/month-1/class-1" target="_blank" className="px-4 py-2 rounded-xl bg-slate-700 text-xs font-bold text-white hover:bg-slate-600 flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
