'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Rocket } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#08121E]/90 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
          <img 
            src="/logo.png" 
            alt="BuildBots AI Logo" 
            className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-105 transition-transform" 
          />
          <span className="font-extrabold text-xl md:text-2xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
            BuildBots<span className="text-cyan-400">.AI</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <Link href="#features" className="hover:text-cyan-400 transition-colors">Features</Link>
          <Link href="#curriculum" className="hover:text-cyan-400 transition-colors">Curriculum</Link>
          <Link href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
          <Link href="/lessons" className="hover:text-cyan-400 transition-colors">Lessons</Link>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="px-5 py-2.5 rounded-full text-sm font-bold text-slate-300 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link href="/signup" className="px-6 py-2.5 rounded-full text-sm font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all">
            Get Started 🚀
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link href="/dashboard" className="px-3 py-1.5 rounded-full text-xs font-black bg-cyan-400 text-slate-950 flex items-center gap-1">
            <Rocket className="w-3.5 h-3.5" /> App OS
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08121E] border-b border-cyan-500/20 px-4 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <Link 
            href="#features" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-slate-300 hover:text-cyan-400 py-1"
          >
            Features
          </Link>
          <Link 
            href="#curriculum" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-slate-300 hover:text-cyan-400 py-1"
          >
            Curriculum
          </Link>
          <Link 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-slate-300 hover:text-cyan-400 py-1"
          >
            Pricing
          </Link>
          <Link 
            href="/lessons" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-slate-300 hover:text-cyan-400 py-1"
          >
            Lesson Library
          </Link>
          <Link 
            href="/parent" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-purple-300 hover:text-purple-400 py-1"
          >
            👨‍👩‍👧 Parent Mobile Portal
          </Link>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <Link 
              href="/login" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl font-bold text-slate-300 bg-slate-900 border border-slate-800"
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950"
            >
              Get Started 🚀
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
