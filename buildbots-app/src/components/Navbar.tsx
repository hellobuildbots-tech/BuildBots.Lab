import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#08121E]/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="BuildBots AI Logo" 
            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" 
          />
          <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
            BuildBots<span className="text-cyan-400">.AI</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <Link href="#features" className="hover:text-cyan-400 transition-colors">Features</Link>
          <Link href="#curriculum" className="hover:text-cyan-400 transition-colors">Curriculum</Link>
          <Link href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
          <Link href="/lessons" className="hover:text-cyan-400 transition-colors">Lessons</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="px-5 py-2.5 rounded-full text-sm font-bold text-slate-300 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link href="/signup" className="px-6 py-2.5 rounded-full text-sm font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all">
            Get Started 🚀
          </Link>
        </div>
      </div>
    </nav>
  );
}
