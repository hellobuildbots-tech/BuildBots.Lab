'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { 
  Users, BookOpen, Calendar, CheckSquare, Award, 
  BarChart2, Play, PlusCircle, ArrowUpRight, Sparkles, Clock, CheckCircle2 
} from 'lucide-react';

export default function TeacherOSDashboardPage() {
  return (
    <div className="min-h-screen bg-[#08121E] text-white flex selection:bg-cyan-500 selection:text-slate-950">
      <CRMAppSidebar role="teacher" />

      <main className="flex-1 pl-64 min-h-screen">
        {/* TOP BAR */}
        <header className="h-20 border-b border-cyan-500/15 px-8 flex items-center justify-between bg-[#08121E]/80 backdrop-blur-md sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-extrabold">Academy Dashboard OS</h1>
            <p className="text-xs text-slate-400">Live operational overview for BuildBots Robotics Academy</p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/teacher/session" className="px-5 py-2.5 rounded-full font-extrabold text-xs bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2 transition-all">
              <Play className="w-4 h-4 fill-slate-950" /> Launch Class Session
            </Link>
          </div>
        </header>

        <div className="p-8 space-y-8 max-w-7xl mx-auto">
          {/* METRIC CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase mb-2">
                <span>Students Enrolled</span> <Users className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-3xl font-extrabold text-white">24</div>
              <span className="text-xs text-emerald-400 font-semibold mt-1 inline-block">↑ +4 this month</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase mb-2">
                <span>Attendance Today</span> <CheckSquare className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-3xl font-extrabold text-emerald-400">100%</div>
              <span className="text-xs text-slate-400 mt-1 inline-block">18/18 Present</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase mb-2">
                <span>Avg Quiz Score</span> <BarChart2 className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="text-3xl font-extrabold text-yellow-400">92%</div>
              <span className="text-xs text-slate-400 mt-1 inline-block">Class 1 Assessment</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase mb-2">
                <span>Pending Review</span> <Clock className="w-4 h-4 text-orange-400" />
              </div>
              <div className="text-3xl font-extrabold text-orange-400">3</div>
              <span className="text-xs text-slate-400 mt-1 inline-block">Homework Uploads</span>
            </div>
          </div>

          {/* QUICK ACTIONS BAR */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-cyan-500/20">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4">Quick Operational Actions</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/teacher/students" className="px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold hover:border-cyan-400 transition-colors flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" /> View Students CRM
              </Link>
              <Link href="/teacher/session" className="px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold hover:border-emerald-400 transition-colors flex items-center gap-2">
                <Play className="w-4 h-4 text-emerald-400" /> Start Live Class
              </Link>
              <Link href="/teacher/attendance" className="px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold hover:border-yellow-400 transition-colors flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-yellow-400" /> Take Attendance
              </Link>
              <Link href="/teacher/homework" className="px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold hover:border-orange-400 transition-colors flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400" /> Review Homework
              </Link>
            </div>
          </div>

          {/* TODAY'S SCHEDULED CLASSES */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-400" /> Scheduled Classes Today
            </h2>

            <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase">Batch A • 5:00 PM</span>
                <h4 className="font-extrabold text-base mt-2">Class 1: Flashlight Circuit & Energy Storage</h4>
                <p className="text-xs text-slate-400 mt-1">18 Enrolled Students • Assigned Lesson: Month 1 Class 1</p>
              </div>

              <Link href="/teacher/session" className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-extrabold text-xs hover:bg-cyan-400 transition-colors">
                Launch Live Session ▶
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
