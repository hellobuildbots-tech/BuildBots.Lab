'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
    } else {
      if (authData.user) {
        await supabase.from('profiles').insert({
          id: authData.user.id,
          email: email,
          full_name: fullName,
          robot_level: 1,
        });

        await supabase.from('xp').insert({
          student_id: authData.user.id,
          total_xp: 150,
        });

        await supabase.from('streaks').insert({
          student_id: authData.user.id,
          current_streak: 1,
        });
      }
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#08121E] text-white flex items-center justify-center p-6 selection:bg-cyan-500 selection:text-slate-950">
      <div className="w-full max-w-md p-8 rounded-3xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-cyan-400 text-slate-950 font-bold text-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">🤖</div>
            <span className="font-extrabold text-2xl tracking-tight">BuildBots<span className="text-cyan-400">.AI</span></span>
          </Link>
          <h1 className="text-2xl font-extrabold">Join as a Young Inventor!</h1>
          <p className="text-slate-400 text-sm mt-1">Start building real robotics games today.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Student Full Name</label>
            <div className="relative">
              <User className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm font-medium transition-colors"
                placeholder="Alex Smith"
              />
            </div>
          </div>

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
            <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Create Password</label>
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
            {loading ? 'Creating Account...' : <>Start Robotics Journey 🚀</>}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link href="/login" className="text-cyan-400 font-bold hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
