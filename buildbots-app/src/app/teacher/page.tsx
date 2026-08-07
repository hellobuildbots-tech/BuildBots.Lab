'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  Users, BookOpen, BarChart3, Award, Trophy, Bell, PlusCircle, 
  Search, ShieldAlert, CheckCircle2, Clock, Upload, Trash2, Edit
} from 'lucide-react';

export default function TeacherDashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'lessons' | 'quizzes' | 'analytics' | 'certificates' | 'leaderboard'>('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock Students Data
  const students = [
    { id: '1', name: 'Alex Smith', email: 'alex@buildbots.ai', level: 'Level 1: Circuit Explorer', xp: 150, streak: 3, attendance: '100%', lastActive: 'Today' },
    { id: '2', name: 'Maya Patel', email: 'maya@buildbots.ai', level: 'Level 2: Junior Engineer', xp: 320, streak: 5, attendance: '95%', lastActive: 'Yesterday' },
    { id: '3', name: 'Leo Chen', email: 'leo@buildbots.ai', level: 'Level 1: Circuit Explorer', xp: 210, streak: 2, attendance: '90%', lastActive: '3 days ago' },
  ];

  // Mock Quiz List
  const quizzes = [
    { id: 'q1', title: 'Class 1 Circuit Basics Quiz', questionsCount: 5, difficulty: 'Beginner', avgScore: '92%' },
    { id: 'q2', title: 'Class 2 Switch Toggle Quiz', questionsCount: 4, difficulty: 'Beginner', avgScore: '88%' }
  ];

  return (
    <div className="min-h-screen bg-[#08121E] text-white selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      <main className="pt-28 pb-20 max-w-7xl mx-auto px-6">
        {/* TEACHER DASHBOARD HEADER */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/30 mb-8 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-wider">Teacher / Admin Console</span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2">
              Instructor Command Center
            </h1>
            <p className="text-slate-400 text-sm mt-1">Manage students, upload HTML lessons, build auto-graded quizzes & track analytics.</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-full font-bold text-xs bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 flex items-center gap-2">
              <Bell className="w-4 h-4" /> Send Notification
            </button>
          </div>
        </div>

        {/* DASHBOARD TABS NAVIGATION */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-2 rounded-2xl bg-slate-900/60 border border-slate-800">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'students', label: 'Student Management', icon: Users },
            { id: 'lessons', label: 'Lesson Manager', icon: BookOpen },
            { id: 'quizzes', label: 'Quiz Builder', icon: PlusCircle },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 },
            { id: 'certificates', label: 'Certificates', icon: Award },
            { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase">Total Students</div>
                <div className="text-3xl font-extrabold text-white mt-1">24 Active</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase">Avg Completion</div>
                <div className="text-3xl font-extrabold text-emerald-400 mt-1">88%</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase">Avg Quiz Score</div>
                <div className="text-3xl font-extrabold text-cyan-400 mt-1">91%</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase">Daily Active</div>
                <div className="text-3xl font-extrabold text-yellow-400 mt-1">18 Today</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: STUDENT MANAGEMENT */}
        {activeTab === 'students' && (
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <h2 className="text-xl font-bold">Student Roster</h2>
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Search students..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-sm"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase text-xs">
                    <th className="py-3 px-4">Student</th>
                    <th className="py-3 px-4">Robot Level</th>
                    <th className="py-3 px-4">Total XP</th>
                    <th className="py-3 px-4">Streak</th>
                    <th className="py-3 px-4">Attendance</th>
                    <th className="py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {students.map(s => (
                    <tr key={s.id} className="hover:bg-slate-800/30">
                      <td className="py-4 px-4 font-bold">{s.name}<br/><span className="text-xs text-slate-500 font-normal">{s.email}</span></td>
                      <td className="py-4 px-4 text-cyan-300 font-semibold">{s.level}</td>
                      <td className="py-4 px-4 font-bold text-yellow-400">⭐ {s.xp} XP</td>
                      <td className="py-4 px-4 text-orange-400 font-bold">🔥 {s.streak} Days</td>
                      <td className="py-4 px-4 text-emerald-400 font-semibold">{s.attendance}</td>
                      <td className="py-4 px-4">
                        <button className="text-xs font-bold text-red-400 hover:underline">Reset Progress</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: LESSON MANAGER */}
        {activeTab === 'lessons' && (
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Upload & Manage HTML Lessons</h2>
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-2">
                <Upload className="w-4 h-4" /> Upload Lesson Folder
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/40 border border-dashed border-cyan-500/30 text-center">
              <Upload className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="font-bold text-sm">Drag & Drop HTML Lesson Folder (with index.html, css/, js/)</p>
              <p className="text-xs text-slate-500 mt-1">Automatic metadata indexing to Supabase Storage</p>
            </div>
          </div>
        )}

        {/* TAB 4: QUIZ BUILDER */}
        {activeTab === 'quizzes' && (
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Auto-Graded Quiz Builder</h2>
              <button className="px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-extrabold text-xs flex items-center gap-2">
                <PlusCircle className="w-4 h-4" /> Create New Quiz
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quizzes.map(q => (
                <div key={q.id} className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
                  <h3 className="font-bold text-base mb-1">{q.title}</h3>
                  <p className="text-xs text-slate-400 mb-4">{q.questionsCount} MCQ Questions • Avg Score: <span className="text-emerald-400 font-bold">{q.avgScore}</span></p>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-slate-700 text-xs font-bold flex items-center gap-1"><Edit className="w-3.5 h-3.5" /> Edit</button>
                    <button className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 text-xs font-bold flex items-center gap-1"><Trash2 className="w-3.5 h-3.5" /> Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: LEADERBOARD */}
        {activeTab === 'leaderboard' && (
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 text-center">
            <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
            <h2 className="text-2xl font-extrabold mb-2">Weekly Champions Leaderboard</h2>
            <p className="text-slate-400 text-sm mb-6">Real-time student rankings based on total XP and completed lessons.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
