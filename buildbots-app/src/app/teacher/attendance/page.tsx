'use client';

import React from 'react';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { Calendar, Download, CheckCircle2, Clock } from 'lucide-react';

export default function AttendanceCRMPage() {
  return (
    <div className="min-h-screen bg-[#08121E] text-white flex selection:bg-cyan-500 selection:text-slate-950">
      <CRMAppSidebar role="teacher" />

      <main className="flex-1 pl-64 min-h-screen">
        <header className="h-20 border-b border-cyan-500/15 px-8 flex items-center justify-between bg-[#08121E]/80 backdrop-blur-md sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-extrabold">Academy Attendance Matrix</h1>
            <p className="text-xs text-slate-400">Monthly Attendance %, Absences, & CSV Export</p>
          </div>

          <button className="px-5 py-2.5 rounded-full font-extrabold text-xs bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-2 hover:text-white">
            <Download className="w-4 h-4" /> Export CSV Report
          </button>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold">Monthly Student Attendance Log</h2>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs">Academy Overall: 98%</span>
            </div>

            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase">
                  <th className="py-3 px-4">Student</th>
                  <th className="py-3 px-4">Class 1</th>
                  <th className="py-3 px-4">Class 2</th>
                  <th className="py-3 px-4">Class 3</th>
                  <th className="py-3 px-4">Monthly %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <tr className="hover:bg-slate-800/30">
                  <td className="py-4 px-4 font-bold">Mivaan Dangayach</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">Present ✓</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">Present ✓</td>
                  <td className="py-4 px-4 text-slate-500">Scheduled</td>
                  <td className="py-4 px-4 font-extrabold text-emerald-400">100%</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-4 px-4 font-bold">Tashvi Khandelwal</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">Present ✓</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">Present ✓</td>
                  <td className="py-4 px-4 text-slate-500">Scheduled</td>
                  <td className="py-4 px-4 font-extrabold text-emerald-400">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
