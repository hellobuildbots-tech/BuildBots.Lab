'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { PWAInstallPrompt } from '@/components/PWAInstallPrompt';
import { supabase } from '@/lib/supabase';
import { Zap, Clock, Sparkles, Play, Award, Trophy, BookOpen, CheckCircle2, UserCheck } from 'lucide-react';

export default function DashboardPage() {
  const [profile, setProfile] = useState<any>(null);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [badges, setBadges] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStudentData() {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        const { data: userProfile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        const { data: userBadges } = await supabase
          .from('badges')
          .select('*')
          .eq('student_id', user.id);

        const { data: userStreak } = await supabase
          .from('streaks')
          .select('*')
          .eq('student_id', user.id)
          .single();

        if (userProfile) setProfile(userProfile);
        if (userBadges) setBadges(userBadges);
        if (userStreak) setStreak(userStreak.current_streak);
      } else {
        setProfile({
          full_name: 'Mivaan Dangayach',
          display_name: 'Mivaan',
          robot_level: 1,
          experience: 'Beginner',
          current_month: 1,
          current_class: 1,
          xp: 0
        });
        setBadges([{ badge_name: 'New Inventor', badge_icon: '🏅' }]);
      }
      setLoading(false);
    }

    loadStudentData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#08121E] text-white flex items-center justify-center p-4">
        <div className="text-cyan-400 font-bold text-base md:text-lg animate-pulse">Loading Student OS...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08121E] text-white flex flex-col md:flex-row selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      {/* CRM OS SIDEBAR FOR STUDENTS */}
      <CRMAppSidebar role="student" />

      {/* PWA MOBILE INSTALL PROMPT BANNER */}
      <PWAInstallPrompt />

      <main className="flex-1 md:pl-64 pl-0 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen w-full">
        {/* APP HEADER BAR */}
        <header className="min-h-16 md:h-20 border-b border-cyan-500/15 px-4 md:px-8 py-3 md:py-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#08121E]/90 backdrop-blur-md sticky top-16 md:top-0 z-30">
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-white leading-tight">Student Operating System</h1>
            <p className="text-[11px] md:text-xs text-slate-400">BuildBots AI Academy • Young Inventor Portal</p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <Link 
              href="/parent" 
              className="px-3.5 py-2 rounded-xl font-bold text-xs bg-purple-500/20 border border-purple-500/40 text-purple-300 hover:bg-purple-500/30 transition-all flex items-center gap-1.5 shrink-0"
            >
              <UserCheck className="w-4 h-4" /> Parent View
            </Link>

            <Link 
              href="/lessons/month-1/class-1" 
              className="px-4 md:px-6 py-2 md:py-2.5 rounded-full font-extrabold text-xs bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-1.5 shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-slate-950" /> Continue Lesson 1
            </Link>
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
          {/* TODAY'S FIRST CLASS FEATURED BANNER — MEET BYTE */}
          <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-gradient-to-r from-cyan-950 via-slate-900 to-emerald-950 border-2 border-cyan-400/50 shadow-2xl relative overflow-hidden animate-pulse">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-cyan-400/20 border border-cyan-400/40 text-3xl flex items-center justify-center shrink-0">
                  🤖
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 text-[10px] md:text-xs font-black uppercase tracking-wider mb-1">
                    ⭐ TODAY'S FIRST CLASS SPECIAL
                  </div>
                  <h3 className="text-lg md:text-2xl font-black text-white leading-tight">
                    Meet Byte — Amazing Intro to Robot Companion!
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 mt-0.5">
                    Discover Byte's secret signal, learn the 5 Inventor Rules & earn your 1st Badge today!
                  </p>
                </div>
              </div>

              <a
                href="/meet-byte.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full font-black text-xs md:text-sm bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 text-slate-950 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 transition-all shrink-0 flex items-center justify-center gap-2"
              >
                Launch Intro to Byte 🚀
              </a>
            </div>
          </div>
          <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/30 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-[11px] md:text-xs font-bold uppercase tracking-wider mb-2 md:mb-3">
                  <Sparkles className="w-3.5 h-3.5" /> Student Academy OS
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Hello {profile?.display_name || profile?.full_name} 👋
                </h2>
                <p className="text-slate-400 mt-2 text-xs sm:text-sm md:text-base leading-relaxed">
                  Robot Tier: <span className="text-cyan-400 font-bold">Circuit Explorer (Level {profile?.robot_level || 1})</span> • Status: <span className="text-emerald-400 font-bold">Active Inventor</span>
                </p>
              </div>

              <Link href="/lessons/month-1/class-1" className="w-full md:w-auto text-center justify-center px-6 py-3 md:py-3.5 rounded-full font-extrabold text-xs md:text-sm bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-2 shrink-0">
                <Play className="w-4 h-4 fill-slate-950" /> Start Lesson 1
              </Link>
            </div>
          </div>

          {/* DYNAMIC METRIC STAT CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            <div className="p-4 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 flex items-center justify-center font-bold text-lg md:text-xl shrink-0">
                ⭐
              </div>
              <div className="min-w-0">
                <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase truncate">Total XP</div>
                <div className="text-lg md:text-2xl font-extrabold text-white truncate">{profile?.xp || 0} XP</div>
              </div>
            </div>

            <div className="p-4 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/30 flex items-center justify-center font-bold text-lg md:text-xl shrink-0">
                🔥
              </div>
              <div className="min-w-0">
                <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase truncate">Weekly Streak</div>
                <div className="text-lg md:text-2xl font-extrabold text-white truncate">{streak} Days</div>
              </div>
            </div>

            <div className="p-4 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold text-lg md:text-xl shrink-0">
                🤖
              </div>
              <div className="min-w-0">
                <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase truncate">Robot Level</div>
                <div className="text-base md:text-xl font-extrabold text-cyan-300 truncate">Level {profile?.robot_level || 1}</div>
              </div>
            </div>

            <div className="p-4 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-lg md:text-xl shrink-0">
                🏅
              </div>
              <div className="min-w-0">
                <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase truncate">Badges</div>
                <div className="text-lg md:text-2xl font-extrabold text-white truncate">{badges.length || 1} Earned</div>
              </div>
            </div>
          </div>

          {/* TODAY'S ACTIVE MISSION */}
          <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-slate-900/80 border border-cyan-500/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] md:text-xs font-bold uppercase tracking-wider">Month 1 • Class 1</span>
              <h3 className="text-xl md:text-3xl font-extrabold mt-2 mb-2 text-white leading-tight">The Secret Inventor's Lab</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-4">
                Discover what a robot is, feed Bolt energy, and wire your very first battery-to-LED light circuit!
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-cyan-400" /> 30 Mins</span>
                <span>•</span>
                <span className="text-emerald-400 font-bold">15 Playable Interactive Games</span>
              </div>
            </div>

            <div className="w-full lg:w-auto">
              <Link href="/lessons/month-1/class-1" className="block text-center py-3.5 px-6 md:px-8 rounded-full font-extrabold text-xs md:text-sm bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                Launch Interactive Games 🚀
              </Link>
            </div>
          </div>

          {/* BADGES & CLASS PROGRESS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-5 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-base md:text-lg mb-4 text-white">Class 1 Progress</h3>
              <div className="w-full h-3.5 bg-slate-800 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 w-1/4" />
              </div>
              <p className="text-xs text-slate-400">Ready to start today's first robotics lesson!</p>
            </div>

            <div className="p-5 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-base md:text-lg mb-4 text-white">Unlocked Trophy Shelf</h3>
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {badges.map((b, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-slate-800 text-2xl md:text-3xl border border-slate-700 shrink-0" title={b.badge_name}>
                    {b.badge_icon || '🏅'}
                  </div>
                ))}
                <div className="p-3 rounded-2xl bg-slate-800/40 text-2xl md:text-3xl opacity-30 border border-slate-800 shrink-0">🔒</div>
                <div className="p-3 rounded-2xl bg-slate-800/40 text-2xl md:text-3xl opacity-30 border border-slate-800 shrink-0">🔒</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
