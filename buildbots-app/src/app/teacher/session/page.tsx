'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { Play, CheckSquare, Save, Lock, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ClassSessionPage() {
  const [attendance, setAttendance] = useState<{ [key: string]: boolean }>({
    'mivaan': true,
    'tashvi': true,
  });
  const [saved, setSaved] = useState(false);

  const toggleStudent = (id: string) => {
    setAttendance(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSaveSession = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#08121E] text-white flex selection:bg-cyan-500 selection:text-slate-950">
      <CRMAppSidebar role="teacher" />

      <main className="flex-1 pl-64 min-h-screen">
        <header className="h-20 border-b border-cyan-500/15 px-8 flex items-center justify-between bg-[#08121E]/80 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <Link href="/teacher" className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl font-extrabold">Live Class Session Console</h1>
              <p className="text-xs text-slate-400">Class 1: Flashlight Circuit & Energy Storage</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={handleSaveSession} className="px-5 py-2.5 rounded-full font-extrabold text-xs bg-emerald-500 text-slate-950 hover:bg-emerald-400 flex items-center gap-2 transition-all">
              <Save className="w-4 h-4" /> Save Attendance & Session
            </button>
          </div>
        </header>

        {saved && (
          <div className="m-8 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold text-center">
            ✓ Live session attendance saved! Next class unlocked for students.
          </div>
        )}

        <div className="p-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* HTML LESSON LAUNCHER PANEL */}
          <div className="lg:col-span-2 p-6 rounded-3xl bg-slate-900/60 border border-cyan-500/30 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase">Active HTML Lesson</span>
              <h2 className="text-2xl font-extrabold mt-3 mb-2">The Secret Inventor's Lab & Flashlight Discovery</h2>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">Contains 15 interactive games, wire canvas builder, cute ultrasonic sensor mascot, audio SFX, and confetti engine.</p>
            </div>

            <Link href="/lessons/month-1/class-1" target="_blank" className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-extrabold text-sm text-center flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25">
              Launch HTML Lesson Viewer Fullscreen <Play className="w-4 h-4 fill-slate-950" />
            </Link>
          </div>

          {/* LIVE ATTENDANCE CHECKLIST */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h3 className="font-extrabold text-base mb-4 flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-emerald-400" /> Session Roster Attendance
            </h3>

            <div className="space-y-3">
              {[
                { id: 'mivaan', name: 'Mivaan Dangayach' },
                { id: 'tashvi', name: 'Tashvi Khandelwal' },
              ].map(s => (
                <label key={s.id} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 cursor-pointer">
                  <span className="text-xs font-bold text-white">{s.name}</span>
                  <input
                    type="checkbox"
                    checked={attendance[s.id] || false}
                    onChange={() => toggleStudent(s.id)}
                    className="w-5 h-5 accent-emerald-400"
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
