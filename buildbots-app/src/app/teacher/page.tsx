'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { PWAInstallPrompt } from '@/components/PWAInstallPrompt';
import { 
  Users, BookOpen, Calendar, CheckSquare, Award, 
  BarChart2, Play, PlusCircle, ArrowUpRight, Sparkles, Clock, CheckCircle2, Video 
} from 'lucide-react';

export default function TeacherOSDashboardPage() {
  return (
    <div className="min-h-screen bg-[#08121E] text-white flex flex-col md:flex-row selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      <CRMAppSidebar role="teacher" />
      <PWAInstallPrompt />

      <main className="flex-1 md:pl-64 pl-0 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen w-full">
        {/* TOP BAR */}
        <header className="min-h-16 md:h-20 border-b border-cyan-500/15 px-4 md:px-8 py-3 md:py-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#08121E]/90 backdrop-blur-md sticky top-16 md:top-0 z-30">
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-white">Academy Dashboard OS</h1>
            <p className="text-[11px] md:text-xs text-slate-400">Live operational overview for BuildBots Academy</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <Link href="/teacher/create-meet" className="px-3.5 py-2 rounded-xl font-bold text-xs bg-slate-800 border border-slate-700 text-slate-200 hover:border-cyan-400 flex items-center gap-1.5 transition-all">
              <Video className="w-3.5 h-3.5 text-cyan-400" /> Create Meet
            </Link>

            <Link href="/teacher/session" className="px-4 py-2 rounded-full font-extrabold text-xs bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-1.5 transition-all">
              <Play className="w-3.5 h-3.5 fill-slate-950" /> Launch Session
            </Link>
          </div>
        </header>

        <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-w-7xl mx-auto">
          {/* METRIC CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            <div className="p-4 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between text-[10px] md:text-xs text-slate-400 font-bold uppercase mb-2">
                <span>Students Enrolled</span> <Users className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-white">24</div>
              <span className="text-[10px] text-emerald-400 font-semibold mt-1 inline-block">↑ +4 this month</span>
            </div>

            <div className="p-4 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between text-[10px] md:text-xs text-slate-400 font-bold uppercase mb-2">
                <span>Attendance Today</span> <CheckSquare className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-emerald-400">100%</div>
              <span className="text-[10px] text-slate-400 mt-1 inline-block">18/18 Present</span>
            </div>

            <div className="p-4 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between text-[10px] md:text-xs text-slate-400 font-bold uppercase mb-2">
                <span>Avg Quiz Score</span> <BarChart2 className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-yellow-400">92%</div>
              <span className="text-[10px] text-slate-400 mt-1 inline-block">Class 1 Assessment</span>
            </div>

            <div className="p-4 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between text-[10px] md:text-xs text-slate-400 font-bold uppercase mb-2">
                <span>Pending Review</span> <Clock className="w-4 h-4 text-orange-400" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-orange-400">3</div>
              <span className="text-[10px] text-slate-400 mt-1 inline-block">Homework Uploads</span>
            </div>
          </div>

          {/* QUICK ACTIONS BAR */}
          <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-slate-900/60 border border-cyan-500/20">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">Quick Operational Actions</h3>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/teacher/students" className="px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold hover:border-cyan-400 transition-colors flex items-center gap-1.5">
                <Users className="w-4 h-4 text-cyan-400" /> View Students CRM
              </Link>
              <Link href="/teacher/session" className="px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold hover:border-emerald-400 transition-colors flex items-center gap-1.5">
                <Play className="w-4 h-4 text-emerald-400" /> Start Live Class
              </Link>
              <Link href="/teacher/attendance" className="px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold hover:border-yellow-400 transition-colors flex items-center gap-1.5">
                <CheckSquare className="w-4 h-4 text-yellow-400" /> Take Attendance
              </Link>
              <Link href="/teacher/homework" className="px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold hover:border-orange-400 transition-colors flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-orange-400" /> Review Homework
              </Link>
            </div>
          </div>

          {/* TODAY'S SCHEDULED CLASSES */}
          <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-base md:text-lg font-bold mb-4 flex items-center gap-2 text-white">
              <Calendar className="w-5 h-5 text-cyan-400" /> Scheduled Classes Today
            </h2>

            <div className="p-4 md:p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] md:text-xs font-bold uppercase">Batch A • 5:00 PM</span>
                <h4 className="font-extrabold text-sm md:text-base mt-2 text-white">Class 1: Flashlight Circuit & Energy Storage</h4>
                <p className="text-xs text-slate-400 mt-1">18 Enrolled Students • Assigned Lesson: Month 1 Class 1</p>
              </div>

              <Link href="/teacher/session" className="w-full md:w-auto text-center px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-extrabold text-xs hover:bg-cyan-400 transition-colors">
                Launch Live Session ▶
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
