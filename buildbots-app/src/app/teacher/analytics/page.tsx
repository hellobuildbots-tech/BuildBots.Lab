'use client';

import React from 'react';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { BarChart2, TrendingUp, Users, Award, Trophy } from 'lucide-react';

export default function AnalyticsCRMPage() {
  return (
    <div className="min-h-screen bg-[#08121E] text-white flex selection:bg-cyan-500 selection:text-slate-950">
      <CRMAppSidebar role="teacher" />

      <main className="flex-1 md:pl-64 pl-0 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen w-full">
        <header className="h-20 border-b border-cyan-500/15 px-8 flex items-center justify-between bg-[#08121E]/80 backdrop-blur-md sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-extrabold">Academy Growth Analytics</h1>
            <p className="text-xs text-slate-400">Completion Rates, XP Distribution, & Active Student Charts</p>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs text-slate-400 font-bold uppercase">Lesson Completion</div>
              <div className="text-3xl font-extrabold text-emerald-400 mt-1">100%</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs text-slate-400 font-bold uppercase">Avg Quiz Score</div>
              <div className="text-3xl font-extrabold text-cyan-400 mt-1">96%</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs text-slate-400 font-bold uppercase">Weekly Active</div>
              <div className="text-3xl font-extrabold text-yellow-400 mt-1">100%</div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 text-center">
            <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
            <h2 className="text-2xl font-extrabold mb-2">Weekly Leaderboard Champions</h2>
            <div className="max-w-md mx-auto space-y-3 mt-6">
              <div className="p-4 rounded-2xl bg-slate-800/60 flex items-center justify-between font-bold text-sm">
                <span>🥇 Mivaan Dangayach</span>
                <span className="text-yellow-400">⭐ 150 XP</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/60 flex items-center justify-between font-bold text-sm">
                <span>🥈 Tashvi Khandelwal</span>
                <span className="text-yellow-400">⭐ 150 XP</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
