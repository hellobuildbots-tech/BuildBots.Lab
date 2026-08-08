'use client';

import React from 'react';
import Link from 'next/link';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { Calendar, Play, Users, CheckCircle2, Clock } from 'lucide-react';

export default function ClassesSchedulePage() {
  const classes = [
    { id: 'c1', batch: 'Batch A', date: 'Today', time: '5:00 PM', lesson: 'Month 1 Class 1: Flashlight Circuit', enrolled: 18, status: 'Scheduled' },
    { id: 'c2', batch: 'Batch B', date: 'Tomorrow', time: '4:00 PM', lesson: 'Month 1 Class 2: Switches & Light Magic', enrolled: 12, status: 'Upcoming' },
  ];

  return (
    <div className="min-h-screen bg-[#08121E] text-white flex selection:bg-cyan-500 selection:text-slate-950">
      <CRMAppSidebar role="teacher" />

      <main className="flex-1 md:pl-64 pl-0 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen w-full">
        <header className="h-20 border-b border-cyan-500/15 px-8 flex items-center justify-between bg-[#08121E]/80 backdrop-blur-md sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-extrabold">Classes Schedule</h1>
            <p className="text-xs text-slate-400">Scheduled Sessions & Live Class Launcher</p>
          </div>

          <Link href="/teacher/session" className="px-5 py-2.5 rounded-full font-extrabold text-xs bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
            <Play className="w-4 h-4 fill-slate-950" /> Launch Class Session
          </Link>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-6">
          {classes.map(c => (
            <div key={c.id} className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase">{c.batch} • {c.date} ({c.time})</span>
                <h3 className="text-xl font-extrabold mt-2">{c.lesson}</h3>
                <p className="text-xs text-slate-400 mt-1">{c.enrolled} Enrolled Students • Instructor: Faculty Lead</p>
              </div>

              <Link href="/teacher/session" className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-extrabold text-xs hover:bg-cyan-400 transition-colors flex items-center gap-2">
                <Play className="w-4 h-4 fill-slate-950" /> Start Session
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
