'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Mail, Lock, ArrowRight, Key } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // 👩‍🏫 TEACHER DEMO LOGIN
    if (email === 'nandini@buildbots.com' && password === 'onedirection') {
      router.push('/teacher');
      return;
    }

    // 👨‍👩‍👧 PARENT DEMO LOGIN
    if (email === 'parent@buildbots.ai' && password === 'parent123') {
      router.push('/parent');
      return;
    }

    // 🎓 STUDENT DEMO LOGIN
    if (
      (email === 'mivaan@buildbots.ai' && password === 'Mivaan@2026') ||
      (email === 'tashvi@buildbots.ai' && password === 'Tashvi@2026') ||
      (email === 'student@buildbots.ai' && password === 'student123')
    ) {
      router.push('/dashboard');
      return;
    }

    // 🛡️ ADMIN DEMO LOGIN
    if (email === 'admin@buildbots.ai' && password === 'admin123') {
      router.push('/admin');
      return;
    }

    // Live Supabase Authentication
    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
    } else {
      const user = data.user;
      const role = user?.user_metadata?.role || 'student';
      if (role === 'teacher' || role === 'admin') {
        router.push('/teacher');
      } else if (role === 'parent') {
        router.push('/parent');
      } else {
        router.push('/dashboard');
      }
    }
  };

  const quickFill = (e: string, p: string) => {
    setEmail(e);
    setPassword(p);
  };

  return (
    <div className="min-h-screen bg-[#08121E] text-white flex items-center justify-center p-6 selection:bg-cyan-500 selection:text-slate-950">
      <div className="w-full max-w-lg p-8 rounded-3xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-400 text-slate-950 font-bold text-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">🤖</div>
            <span className="font-extrabold text-2xl tracking-tight">BuildBots<span className="text-cyan-400">.AI</span></span>
          </Link>
          <h1 className="text-2xl font-extrabold">Welcome Back!</h1>
          <p className="text-slate-400 text-sm mt-1">Sign in as Student, Teacher, Parent, or Admin.</p>
        </div>

        {/* QUICK DEMO CREDENTIAL CHIPS */}
        <div className="mb-6 p-4 rounded-2xl bg-slate-800/60 border border-cyan-500/30 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-cyan-400 mb-2">
            <Key className="w-3.5 h-3.5" /> One-Click Test Logins:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              type="button"
              onClick={() => quickFill('nandini@buildbots.com', 'onedirection')}
              className="px-2.5 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-bold text-cyan-300 hover:bg-cyan-500/20"
            >
              👩‍🏫 Teacher
            </button>
            <button
              type="button"
              onClick={() => quickFill('parent@buildbots.ai', 'parent123')}
              className="px-2.5 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-[11px] font-bold text-purple-300 hover:bg-purple-500/20"
            >
              👨‍👩‍👧 Parent
            </button>
            <button
              type="button"
              onClick={() => quickFill('student@buildbots.ai', 'student123')}
              className="px-2.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300 hover:bg-emerald-500/20"
            >
              🎓 Student
            </button>
            <button
              type="button"
              onClick={() => quickFill('admin@buildbots.ai', 'admin123')}
              className="px-2.5 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-[11px] font-bold text-yellow-300 hover:bg-yellow-500/20"
            >
              🛡️ Admin
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm font-medium transition-colors"
                placeholder="student@buildbots.ai"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Password</label>
            <div className="relative">
              <Lock className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm font-medium transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl font-extrabold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 mt-6"
          >
            {loading ? 'Signing In...' : <>Sign In to Platform <ArrowRight className="w-5 h-5" /></>}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-400">
          Don't have an account?{' '}
          <Link href="/signup" className="text-cyan-400 font-bold hover:underline">
            Sign Up Free
          </Link>
        </div>
      </div>
    </div>
  );
}
