'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Bot, Sparkles, Send, Cpu, FileCheck, HelpCircle, Lightbulb } from 'lucide-react';

export default function AITutorPage() {
  const [feature, setFeature] = useState<'tutor' | 'reviewer' | 'quiz_gen' | 'parent_report'>('tutor');
  const [inputPrompt, setInputPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);

  const handleSimulateAI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputPrompt.trim()) return;

    if (feature === 'tutor') {
      setResponse(`🤖 AI TUTOR: "A battery is like a lunchbox full of electrical energy! When you connect wires to an LED bulb, electrons flow out of the lunchbox down the wire highway to light up the bulb!"`);
    } else if (feature === 'reviewer') {
      setResponse(`🤖 AI HOMEWORK REVIEWER: "Great job on your circuit photo submission! The red jumper wire is connected properly to the positive terminal of the 9V battery. Score: 10/10 ⭐"`);
    } else if (feature === 'quiz_gen') {
      setResponse(`🤖 AI QUIZ GENERATOR: Generated 3 new questions based on Lesson 1: 1) What component stores energy? (Battery) 2) What component glows? (LED) 3) What controls energy flow? (Switch)`);
    } else if (feature === 'parent_report') {
      setResponse(`🤖 AI PARENT REPORT: "Weekly Summary: Alex spent 4.5 hours on robotics, completed Class 1 with 100% score, and mastered circuit wiring!"`);
    }
  };

  return (
    <div className="min-h-screen bg-[#08121E] text-white selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      <main className="pt-28 pb-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" /> AI Engine Architecture
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold">BuildBots AI Engine</h1>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">Reusable AI service layer powering AI Robotics Tutor, Homework Reviewer, Quiz Generator, and Parent Reports.</p>
        </div>

        {/* AI FEATURE SELECTOR */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {[
            { id: 'tutor', label: 'AI Robotics Tutor', icon: Cpu },
            { id: 'reviewer', label: 'AI Homework Reviewer', icon: FileCheck },
            { id: 'quiz_gen', label: 'AI Quiz Generator', icon: HelpCircle },
            { id: 'parent_report', label: 'AI Parent Summarizer', icon: Lightbulb },
          ].map(f => {
            const Icon = f.icon;
            return (
              <button
                key={f.id}
                onClick={() => { setFeature(f.id as any); setResponse(null); }}
                className={`px-5 py-3 rounded-2xl font-bold text-xs flex items-center gap-2 transition-all ${
                  feature === f.id
                    ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" /> {f.label}
              </button>
            );
          })}
        </div>

        {/* AI CONSOLE BOX */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-cyan-500/30 backdrop-blur-xl shadow-2xl">
          <form onSubmit={handleSimulateAI} className="mb-6">
            <label className="block text-xs font-bold uppercase text-slate-400 mb-2">
              Prompt Input ({feature.toUpperCase()})
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={inputPrompt}
                onChange={e => setInputPrompt(e.target.value)}
                placeholder={
                  feature === 'tutor' ? "Ask: Why does a battery make lights glow?" :
                  feature === 'reviewer' ? "Submit image description of LED circuit..." :
                  feature === 'quiz_gen' ? "Generate quiz for Class 1 Circuit Basics..." :
                  "Generate weekly summary for Alex..."
                }
                className="flex-1 px-4 py-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button type="submit" className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-extrabold text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                <Send className="w-4 h-4" /> Run AI
              </button>
            </div>
          </form>

          {response && (
            <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 text-sm font-medium leading-relaxed animate-fade-in">
              {response}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
