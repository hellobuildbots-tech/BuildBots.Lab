'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Bot, Zap, Shield, Sparkles, Award, Play, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#08121E] text-white selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-8">
            <Sparkles className="w-4 h-4" /> Next-Gen Robotics SaaS Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto mb-8 bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Where Young Inventors Build Real <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-yellow-300 bg-clip-text text-transparent">Robotics Games</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Duolingo meets NASA & Tinkercad. Hands-on interactive robotics adventures, canvas circuit builders, and gamified XP rewards for ages 7–14.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/signup" className="w-full sm:w-auto px-8 py-4 rounded-full font-extrabold text-base bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-105 transition-all flex items-center justify-center gap-2">
              Start Free Trial <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="/lessons/month-1/class-1" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base bg-slate-800/80 border border-slate-700 text-white hover:bg-slate-800 hover:border-cyan-400 transition-all flex items-center justify-center gap-2">
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" /> Play Class 1 Demo
            </Link>
          </div>

          {/* APP MOCKUP CARD */}
          <div className="relative max-w-5xl mx-auto rounded-3xl p-3 bg-gradient-to-b from-cyan-500/30 to-slate-800/40 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
            <div className="rounded-2xl overflow-hidden bg-[#0A1628] aspect-video relative flex items-center justify-center border border-slate-800">
              <iframe 
                src="/lessons/month-1/class-1/index.html" 
                className="w-full h-full border-0"
                title="Class 1 Interactive Demo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 bg-[#0B1829] border-y border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Why BuildBots AI?</h2>
            <p className="text-slate-400">Built ground-up with interactive Canvas games, audio feedback, and Supabase student progress tracking.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Mascot Bolt</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Dynamic ultrasonic sensor robot reacting with happy, sleeping, and victory facial expressions.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Interactive Wire Builder</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Drag-and-draw canvas wire mechanics powering real battery-to-LED light circuits.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-yellow-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gamified XP & Badges</h3>
              <p className="text-slate-400 text-sm leading-relaxed">5-star level meters, jackpot confetti animations, and printable graduation certificates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM SECTION */}
      <section id="curriculum" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Curriculum Roadmap</h2>
            <p className="text-slate-400">Structured month-by-month robotics journey for kids.</p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-cyan-500/30 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-400 text-slate-950 font-bold flex items-center justify-center">M1</div>
                <div>
                  <h4 className="font-bold text-lg">Month 1: Circuit Basics & Flashlight Discovery</h4>
                  <p className="text-slate-400 text-sm">Batteries, LEDs, Wires, Breadboards, and Switches.</p>
                </div>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold">Active</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-center justify-between opacity-70">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-400 font-bold flex items-center justify-center">M2</div>
                <div>
                  <h4 className="font-bold text-lg">Month 2: Sensor Magic & Traffic Lights</h4>
                  <p className="text-slate-400 text-sm">Ultrasonic sensors, photoresistors, and buzzers.</p>
                </div>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-slate-800 text-slate-400 text-xs font-bold">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 bg-[#0B1829] border-t border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Simple Transparent Pricing</h2>
          <p className="text-slate-400 mb-16">Unlock full access for your young inventor.</p>

          <div className="max-w-md mx-auto p-8 rounded-3xl bg-gradient-to-b from-cyan-500/20 to-slate-900 border border-cyan-500/40 shadow-2xl relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider">Most Popular</span>
            <h3 className="text-2xl font-bold mb-2">Student Pass</h3>
            <div className="text-5xl font-extrabold mb-6">$29<span className="text-base text-slate-400 font-normal">/month</span></div>
            <ul className="space-y-3 text-left text-sm text-slate-300 mb-8">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> All 15 Interactive Classes</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Unlimited Wire Canvas Games</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Printable Certificates</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Parent Progress Dashboard</li>
            </ul>
            <Link href="/signup" className="block w-full py-3.5 rounded-full font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              Enroll Now 🚀
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
