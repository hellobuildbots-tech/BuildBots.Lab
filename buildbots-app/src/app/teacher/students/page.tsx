'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { Search, Filter, ArrowUpDown, ChevronRight, UserPlus, Award } from 'lucide-react';

export default function StudentCRMPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const students = [
    { id: '2c4f1651-a0b3-4343-853b-f6e0547d6311', name: 'Mivaan Dangayach', age: 7, grade: 2, batch: 'Batch A', level: 'Level 1: Circuit Explorer', xp: 150, currentLesson: 'The Secret Inventor\'s Lab', attendance: '100%', parent: 'Mrs. Dangayach', status: 'Active' },
    { id: '827481cf-bb72-4c26-8752-707615942320', name: 'Tashvi Khandelwal', age: 7, grade: 2, batch: 'Batch A', level: 'Level 1: Circuit Explorer', xp: 150, currentLesson: 'The Secret Inventor\'s Lab', attendance: '100%', parent: 'Mrs. Khandelwal', status: 'Active' },
  ];

  const filtered = students.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#08121E] text-white flex selection:bg-cyan-500 selection:text-slate-950">
      <CRMAppSidebar role="teacher" />

      <main className="flex-1 md:pl-64 pl-0 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen w-full">
        <header className="h-20 border-b border-cyan-500/15 px-8 flex items-center justify-between bg-[#08121E]/80 backdrop-blur-md sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-extrabold">Student Roster CRM</h1>
            <p className="text-xs text-slate-400">Academy Student Directory, Levels, & Progress</p>
          </div>

          <button className="px-5 py-2.5 rounded-full font-extrabold text-xs bg-cyan-400 text-slate-950 flex items-center gap-2 hover:bg-cyan-300 transition-colors">
            <UserPlus className="w-4 h-4" /> Add Student
          </button>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
            {/* SEARCH AND FILTERS */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Search students..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex items-center gap-2">
                <button className="px-3 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-400 flex items-center gap-1"><Filter className="w-3.5 h-3.5" /> Filter</button>
                <button className="px-3 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-400 flex items-center gap-1"><ArrowUpDown className="w-3.5 h-3.5" /> Sort</button>
              </div>
            </div>

            {/* PROFESSIONAL CRM TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase">
                    <th className="py-3 px-4">Student Name</th>
                    <th className="py-3 px-4">Age / Grade</th>
                    <th className="py-3 px-4">Batch</th>
                    <th className="py-3 px-4">Robot Level</th>
                    <th className="py-3 px-4">XP</th>
                    <th className="py-3 px-4">Current Lesson</th>
                    <th className="py-3 px-4">Attendance</th>
                    <th className="py-3 px-4">Parent</th>
                    <th className="py-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-medium">
                  {filtered.map(s => (
                    <tr key={s.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-4 font-bold text-white flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 font-bold flex items-center justify-center text-xs border border-cyan-500/30">
                          {s.name[0]}
                        </div>
                        {s.name}
                      </td>
                      <td className="py-4 px-4 text-slate-300">Age {s.age} • Gr {s.grade}</td>
                      <td className="py-4 px-4 text-slate-300">{s.batch}</td>
                      <td className="py-4 px-4 text-cyan-300 font-bold">{s.level}</td>
                      <td className="py-4 px-4 text-yellow-400 font-extrabold">⭐ {s.xp}</td>
                      <td className="py-4 px-4 text-slate-300">{s.currentLesson}</td>
                      <td className="py-4 px-4 text-emerald-400 font-bold">{s.attendance}</td>
                      <td className="py-4 px-4 text-slate-400">{s.parent}</td>
                      <td className="py-4 px-4">
                        <Link href={`/teacher/students/${s.id}`} className="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-400 font-bold hover:bg-slate-700 transition-colors flex items-center gap-1">
                          Profile <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
