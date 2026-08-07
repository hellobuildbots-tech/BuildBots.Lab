'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import { Zap, Clock, Sparkles, Play, Award, CheckCircle2 } from 'lucide-react';

export default function DashboardPage() {
  const [profile, setProfile] = useState<any>(null);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [badges, setBadges] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStudentData() {
      // Get logged in user from Supabase Auth
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        // Fetch dynamically from Supabase profiles table
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
        // Fallback default student state (e.g., Mivaan / Tashvi demonstration mode)
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
      <div className="min-h-screen bg-[#08121E] text-white flex items-center justify-center">
        <div className="text-cyan-400 font-bold text-lg animate-pulse">Loading Student Dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08121E] text-white selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      <main className="pt-28 pb-20 max-w-7xl mx-auto px-6">
        {/* PERSONALIZED DYNAMIC WELCOME BANNER */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/30 relative overflow-hidden mb-10 shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Classroom Portal
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Hello {profile?.display_name || profile?.full_name} 👋
              </h1>
              <p className="text-slate-400 mt-2 text-sm md:text-base">
                Robot Level: <span className="text-cyan-400 font-bold">Circuit Explorer (Level {profile?.robot_level || 1})</span> • Experience: <span className="text-emerald-400 font-bold">{profile?.experience || 'Beginner'}</span>
              </p>
            </div>

            <Link href="/lessons/month-1/class-1" className="px-6 py-3.5 rounded-full font-extrabold text-sm bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all flex items-center gap-2">
              <Play className="w-4 h-4 fill-slate-950" /> Start Lesson 1
            </Link>
          </div>
        </div>

        {/* PERSONALIZED METRICS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 flex items-center justify-center font-bold text-xl">
              ⭐
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase">Total XP</div>
              <div className="text-2xl font-extrabold text-white">{profile?.xp || 0} XP</div>
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
              <div className="text-xs font-bold text-slate-400 uppercase">Robot Level</div>
              <div className="text-xl font-extrabold text-cyan-300">Level {profile?.robot_level || 1}</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xl">
              🏅
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase">Unlocked Badges</div>
              <div className="text-2xl font-extrabold text-white">{badges.length || 1} Badges</div>
            </div>
          </div>
        </div>

        {/* TODAY'S LESSON CARD */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-cyan-400" /> Today's Lesson
          </h2>

          <div className="p-8 rounded-3xl bg-slate-900/80 border border-cyan-500/30 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-wider">Month 1 • Class 1</span>
              <h3 className="text-2xl md:text-3xl font-extrabold mt-3 mb-3">The Secret Inventor's Lab</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Discover what a robot is, feed Bolt energy, and wire your very first battery-to-LED light circuit!
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-cyan-400" /> 30 Mins</span>
                <span>•</span>
                <span className="text-emerald-400 font-bold">15 Playable Interactive Games</span>
              </div>
            </div>

            <div className="w-full lg:w-auto">
              <Link href="/lessons/month-1/class-1" className="block text-center py-3.5 px-8 rounded-full font-extrabold text-sm bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                Continue Learning 🚀
              </Link>
            </div>
          </div>
        </div>

        {/* BADGES & PROGRESS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="font-bold text-lg mb-4">Progress (0%)</h3>
            <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 w-0" />
            </div>
            <p className="text-xs text-slate-400">Ready to play Class 1!</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="font-bold text-lg mb-4">Unlocked Badge</h3>
            <div className="flex items-center gap-4">
              {badges.map((b, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-slate-800 text-3xl" title={b.badge_name}>
                  {b.badge_icon || '🏅'}
                </div>
              ))}
              <div className="p-3 rounded-2xl bg-slate-800/40 text-3xl opacity-30">🔒</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
