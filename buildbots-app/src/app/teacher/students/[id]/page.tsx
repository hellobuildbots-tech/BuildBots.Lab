'use client';

import React from 'react';
import Link from 'next/link';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { User, Award, BookOpen, CheckSquare, Clock, RotateCcw, Lock } from 'lucide-react';

export default function StudentProfileCRMPage({ params }: { params: { id: string } }) {
  const student = {
    name: 'Mivaan Dangayach',
    age: 7,
    grade: 2,
    batch: 'Batch A',
    parentName: 'Mrs. Dangayach',
    parentEmail: 'parent@buildbots.ai',
    robotLevel: 'Level 1: Circuit Explorer',
    xp: 150,
    streak: 3,
    badge: 'New Inventor 🏅',
    attendance: '100% (4/4 Classes)',
  };

  return (
    <div className="min-h-screen bg-[#08121E] text-white flex selection:bg-cyan-500 selection:text-slate-950">
      <CRMAppSidebar role="teacher" />

      <main className="flex-1 pl-64 min-h-screen">
        <header className="h-20 border-b border-cyan-500/15 px-8 flex items-center justify-between bg-[#08121E]/80 backdrop-blur-md sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-extrabold">{student.name} Profile CRM</h1>
            <p className="text-xs text-slate-400">Detailed Student History & Performance</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-300 flex items-center gap-1.5 hover:bg-slate-700">
              <RotateCcw className="w-3.5 h-3.5" /> Reset Progress
            </button>
            <button className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 hover:bg-emerald-400">
              <Lock className="w-3.5 h-3.5" /> Unlock Class 2
            </button>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* PROFILE HEADER CARD */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-2xl font-extrabold flex items-center justify-center">
                M
              </div>
              <div>
                <h2 className="text-2xl font-extrabold">{student.name}</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Age {student.age} • Grade {student.grade} • {student.batch} • Parent: <span className="text-purple-300 font-bold">{student.parentName}</span> ({student.parentEmail})
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 text-center">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Total XP</div>
                <div className="text-xl font-extrabold text-yellow-400">⭐ {student.xp}</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 text-center">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Attendance</div>
                <div className="text-xl font-extrabold text-emerald-400">{student.attendance}</div>
              </div>
            </div>
          </div>

          {/* TIMELINE AND HISTORY */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" /> Completed Lessons
              </h3>
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm">Class 1: Flashlight Circuit</div>
                  <div className="text-xs text-slate-400 mt-0.5">Completed 15 interactive game modules</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">100% Score</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-400" /> Badges & Achievements
              </h3>
              <div className="flex gap-3">
                <div className="p-4 rounded-2xl bg-slate-800/60 text-center font-bold text-xs">
                  <div className="text-3xl mb-1">🏅</div>
                  New Inventor
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
