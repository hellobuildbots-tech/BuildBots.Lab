'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Mail, Lock, ArrowRight, UserCheck, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';

export default function DirectPortalPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | 'parent'>('student');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const cleanEmail = email.trim().toLowerCase();

    // 👩‍🏫 INSTRUCTOR AUTHENTICATION
    if (cleanEmail === 'nandini@buildbots.com' && password === 'onedirection') {
      router.push('/teacher');
      return;
    }

    // 🎓 REAL STUDENT AUTHENTICATION (MIVAAN & TASHVI)
    if (
      (cleanEmail === 'mivaan@buildbots.ai' && password === 'Mivaan@2026') ||
      (cleanEmail === 'tashvi@buildbots.ai' && password === 'Tashvi@2026')
    ) {
      router.push('/dashboard');
      return;
    }

    // 🧪 TEST ACCOUNTS
    if (cleanEmail === 'teststudent@buildbots.ai' && password === 'test1234') {
      router.push('/dashboard');
      return;
    }
    if (cleanEmail === 'testparent@buildbots.ai' && password === 'test1234') {
      router.push('/parent');
      return;
    }
    if (cleanEmail === 'testteacher@buildbots.ai' && password === 'test1234') {
      router.push('/teacher');
      return;
    }

    // Supabase Auth Fallback & Role Route Dispatch
    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password,
      });

      if (authError) {
        // Direct role fallback if email contains role key
        if (cleanEmail.includes('teacher') || selectedRole === 'teacher') {
          router.push('/teacher');
        } else if (cleanEmail.includes('parent') || selectedRole === 'parent') {
          router.push('/parent');
        } else {
          router.push('/dashboard');
        }
      } else {
        if (selectedRole === 'teacher') router.push('/teacher');
        else if (selectedRole === 'parent') router.push('/parent');
        else router.push('/dashboard');
      }
    } catch (err: any) {
      if (selectedRole === 'teacher') router.push('/teacher');
      else if (selectedRole === 'parent') router.push('/parent');
      else router.push('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const selectQuickAccount = (quickEmail: string, quickPass: string, role: 'student' | 'teacher' | 'parent') => {
    setEmail(quickEmail);
    setPassword(quickPass);
    setSelectedRole(role);
  };

  return (
    <div className="min-h-screen bg-[#08121E] text-white flex flex-col justify-center items-center px-4 relative overflow-hidden selection:bg-cyan-500 selection:text-slate-950">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* LOGO & HEADING */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-extrabold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" /> BuildBots AI Portal
          </div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Welcome to BuildBots
          </h1>
          <p className="text-slate-400 text-sm mt-1">Select your role or enter registered email to start</p>
        </div>

        {/* ROLE SELECTION TABS */}
        <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl mb-6">
          <button
            type="button"
            onClick={() => setSelectedRole('student')}
            className={`py-2.5 px-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all ${
              selectedRole === 'student'
                ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <GraduationCap className="w-4 h-4" /> Student
          </button>
          <button
            type="button"
            onClick={() => setSelectedRole('teacher')}
            className={`py-2.5 px-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all ${
              selectedRole === 'teacher'
                ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserCheck className="w-4 h-4" /> Teacher
          </button>
          <button
            type="button"
            onClick={() => setSelectedRole('parent')}
            className={`py-2.5 px-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all ${
              selectedRole === 'parent'
                ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" /> Parent
          </button>
        </div>

        {/* LOGIN FORM CARD */}
        <div className="bg-slate-900/70 border border-slate-800 backdrop-blur-xl p-8 rounded-3xl shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold text-center">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-extrabold text-slate-300 uppercase mb-2">Registered Email</label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    selectedRole === 'student' ? 'mivaan@buildbots.ai' : selectedRole === 'teacher' ? 'nandini@buildbots.com' : 'parent@buildbots.ai'
                  }
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm font-medium transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-slate-300 uppercase mb-2">Password</label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm font-medium transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-black text-sm bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 mt-2"
            >
              {loading ? 'Entering Portal...' : `Enter ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)} Workspace`}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
