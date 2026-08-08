'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { PWAInstallPrompt } from '@/components/PWAInstallPrompt';
import { Search, Filter, Play, CheckCircle2, Clock, Lock } from 'lucide-react';

export default function LessonLibraryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('All');

  const lessons = [
    {
      id: 'class-1',
      month: 1,
      classNumber: 1,
      title: "The Secret Inventor's Lab & Flashlight Discovery",
      description: 'Discover what a robot is, feed Bolt energy, and wire your very first battery-to-LED light circuit!',
      difficulty: 'Beginner',
      duration: '30 Mins',
      completed: true,
      unlocked: true,
      path: '/lessons/month-1/class-1'
    },
    {
      id: 'class-2',
      month: 1,
      classNumber: 2,
      title: 'Switches & Light Magic (The Cave of Lost Light)',
      description: 'Wire SPST switches to control LED lights on and off with custom color triggers. (Partially unlocked for preview).',
      difficulty: 'Beginner',
      duration: '35 Mins',
      completed: false,
      unlocked: true,
      path: '/lessons/month-1/class-2'
    },
    {
      id: 'class-3',
      month: 1,
      classNumber: 3,
      title: 'Save Robot City: Traffic Light Rescue',
      description: 'Rebuild Robot City traffic signals with Red, Yellow & Green LEDs. (Requires teacher permission).',
      difficulty: 'Intermediate',
      duration: '40 Mins',
      completed: false,
      unlocked: false,
      path: '#'
    },
    {
      id: 'class-4',
      month: 1,
      classNumber: 4,
      title: 'The Glowing Power Core',
      description: 'Assemble Byte glowing power core with resistors and breadboard circuits. (Requires teacher permission).',
      difficulty: 'Advanced',
      duration: '45 Mins',
      completed: false,
      unlocked: false,
      path: '#'
    }
  ];

  const filteredLessons = lessons.filter(l => {
    const matchesSearch = l.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDiff = filterDifficulty === 'All' || l.difficulty === filterDifficulty;
    return matchesSearch && matchesDiff;
  });

  return (
    <div className="min-h-screen bg-[#08121E] text-white flex flex-col md:flex-row selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      <CRMAppSidebar role="student" />
      <PWAInstallPrompt />

      <main className="flex-1 md:pl-64 pl-0 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen w-full">
        <header className="min-h-16 md:h-20 border-b border-cyan-500/15 px-4 md:px-8 py-3 md:py-0 flex items-center justify-between bg-[#08121E]/90 backdrop-blur-md sticky top-16 md:top-0 z-30">
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-white">Lesson Library</h1>
            <p className="text-[11px] md:text-xs text-slate-400">Interactive SaaS Robotics Lessons & Missions</p>
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
          {/* SEARCH AND FILTER BAR */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search lessons..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs md:text-sm"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="text-[10px] md:text-xs text-slate-400 font-bold uppercase shrink-0">Filter:</span>
              {['All', 'Beginner', 'Intermediate', 'Advanced'].map(d => (
                <button
                  key={d}
                  onClick={() => setFilterDifficulty(d)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-colors ${
                    filterDifficulty === d ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* LESSON CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {filteredLessons.map(l => (
              <div key={l.id} className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] md:text-xs font-bold uppercase">
                      Month {l.month} • Class {l.classNumber}
                    </span>
                    {l.completed ? (
                      <span className="flex items-center gap-1 text-[11px] md:text-xs text-emerald-400 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                      </span>
                    ) : l.unlocked ? (
                      <span className="flex items-center gap-1 text-[11px] md:text-xs text-yellow-400 font-bold">
                        <Clock className="w-3.5 h-3.5" /> Available
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] md:text-xs text-slate-500 font-bold">
                        <Lock className="w-3.5 h-3.5" /> Locked
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg md:text-xl font-extrabold text-white mb-2 leading-tight">{l.title}</h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-5">{l.description}</p>
                </div>

                <Link
                  href={l.unlocked ? l.path : '#'}
                  className={`w-full py-3 rounded-xl font-extrabold text-xs md:text-sm text-center flex items-center justify-center gap-2 transition-all ${
                    l.unlocked
                      ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/25'
                      : 'bg-slate-800/80 text-slate-500 cursor-not-allowed border border-slate-700/50'
                  }`}
                >
                  {l.unlocked ? <>Launch Lesson <Play className="w-3.5 h-3.5 fill-slate-950" /></> : <>Locked by Teacher <Lock className="w-3.5 h-3.5" /></>}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
