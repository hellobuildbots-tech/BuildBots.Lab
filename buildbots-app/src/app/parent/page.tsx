'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Heart, Clock, Award, FileText, CheckCircle2, TrendingUp, Sparkles, Download, MessageSquare } from 'lucide-react';

export default function ParentPortalPage() {
  const [selectedStudent, setSelectedStudent] = useState('Alex Smith');

  return (
    <div className="min-h-screen bg-[#08121E] text-white selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      <main className="pt-28 pb-20 max-w-7xl mx-auto px-6">
        {/* HEADER BANNER */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-purple-950/40 border border-purple-500/30 mb-8 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wider">Parent Portal</span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2">
              Parent Dashboard
            </h1>
            <p className="text-slate-400 text-sm mt-1">Track learning progress, quiz scores, certificates, and teacher notes for <span className="text-purple-300 font-bold">{selectedStudent}</span>.</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-full font-bold text-xs bg-purple-500/20 border border-purple-500/40 text-purple-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> AI Weekly Summary
            </button>
          </div>
        </div>

        {/* METRICS OVERVIEW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs font-bold text-slate-400 uppercase">Learning Time</div>
            <div className="text-2xl font-extrabold text-white mt-1">4.5 Hours <span className="text-xs text-emerald-400 font-normal">This Week</span></div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs font-bold text-slate-400 uppercase">Attendance</div>
            <div className="text-2xl font-extrabold text-emerald-400 mt-1">100% (4/4 Classes)</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs font-bold text-slate-400 uppercase">Avg Quiz Score</div>
            <div className="text-2xl font-extrabold text-cyan-400 mt-1">95%</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs font-bold text-slate-400 uppercase">Certificates</div>
            <div className="text-2xl font-extrabold text-yellow-400 mt-1">1 Earned 📜</div>
          </div>
        </div>

        {/* RECENT ACTIVITY & TEACHER FEEDBACK */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* TEACHER COMMENTS & FEEDBACK */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-400" /> Instructor Comments
            </h3>

            <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 mb-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-bold text-purple-300">Class 1: Flashlight Circuit</span>
                <span>Yesterday</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                "Alex demonstrated excellent understanding of battery energy storage and connected the wire highway canvas game on his first try!"
              </p>
            </div>
          </div>

          {/* DOWNLOADABLE CERTIFICATES */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" /> Official Certificates
            </h3>

            <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm">Junior Robot Explorer Certificate</h4>
                <p className="text-xs text-slate-400 mt-0.5">Issued upon completing Month 1 Class 1</p>
              </div>

              <a
                href="/lessons/month-1/class-1/index.html"
                target="_blank"
                className="px-4 py-2 rounded-xl bg-yellow-500 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 hover:bg-yellow-400 transition-colors"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
