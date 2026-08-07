'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Bot, Zap, Flame, Award, Play, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function DashboardPage() {
  const [studentName, setStudentName] = useState('Chief Inventor Alex');
  const [xp, setXp] = useState(150);
  const [streak, setStreak] = useState(3);
  const [robotLevel, setRobotLevel] = useState('Level 1: Circuit Explorer');

  return (
    <div className="min-h-screen bg-[#08121E] text-white selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      <main className="pt-28 pb-20 max-w-7xl mx-auto px-6">
        {/* WELCOME BANNER */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/30 relative overflow-hidden mb-10 shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Welcome Back
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                {studentName} 👋
              </h1>
              <p className="text-slate-400 mt-2 text-sm md:text-base">
                Current Status: <span className="text-cyan-400 font-bold">{robotLevel}</span>
              </p>
            </div>

            <Link href="/lessons/month-1/class-1" className="px-6 py-3.5 rounded-full font-extrabold text-sm bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all flex items-center gap-2">
              <Play className="w-4 h-4 fill-slate-950" /> Continue Lesson 1
            </Link>
          </div>
        </div>

        {/* METRICS STAT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 flex items-center justify-center font-bold text-xl">
              ⭐
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase">Total XP</div>
              <div className="text-2xl font-extrabold text-white">{xp} XP</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/30 flex items-center justify-center font-bold text-xl">
              🔥
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase">Weekly Streak</div>
              <div className="text-2xl font-extrabold text-white">{streak} Days</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold text-xl">
              🤖
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase">Robot Tier</div>
              <div className="text-xl font-extrabold text-cyan-300">Level 1 Bot</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xl">
              🏅
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase">Badges Earned</div>
              <div className="text-2xl font-extrabold text-white">2 Badges</div>
            </div>
          </div>
        </div>

        {/* TODAY'S LESSON HIGHLIGHT CARD */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-cyan-400" /> Today's Active Mission
          </h2>

          <div className="p-8 rounded-3xl bg-slate-900/80 border border-cyan-500/30 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-wider">Month 1 • Class 1</span>
              <h3 className="text-2xl md:text-3xl font-extrabold mt-3 mb-3">The Secret Inventor's Lab & Flashlight Discovery</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Discover what a robot is, feed Bolt energy, and wire your very first battery-to-LED light circuit!
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-cyan-400" /> 30 Mins</span>
                <span>•</span>
                <span className="text-emerald-400 font-bold">15 Playable Interactive Games</span>
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[220px]">
              <Link href="/lessons/month-1/class-1" className="py-3.5 px-6 rounded-full font-extrabold text-sm text-center bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                Launch Lesson Viewer 🚀
              </Link>
            </div>
          </div>
        </div>

        {/* PROGRESS BAR & BADGE SHELF */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="font-bold text-lg mb-4">Class 1 Progress (100%)</h3>
            <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 w-full" />
            </div>
            <p className="text-xs text-slate-400">All 15 interactive game missions completed!</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="font-bold text-lg mb-4">Trophy & Badge Shelf</h3>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-slate-800 text-3xl">🏅</div>
              <div className="p-3 rounded-2xl bg-slate-800 text-3xl">🔋</div>
              <div className="p-3 rounded-2xl bg-slate-800 text-3xl">🚀</div>
              <div className="p-3 rounded-2xl bg-slate-800/40 text-3xl opacity-30">🔒</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
