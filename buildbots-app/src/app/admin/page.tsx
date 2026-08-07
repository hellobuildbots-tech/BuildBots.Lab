'use client';

import React from 'react';
import Link from 'next/link';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { Shield, Users, BookOpen, Settings, Database, Key } from 'lucide-react';

export default function AdminConsolePage() {
  return (
    <div className="min-h-screen bg-[#08121E] text-white flex selection:bg-cyan-500 selection:text-slate-950">
      <CRMAppSidebar role="admin" />

      <main className="flex-1 pl-64 min-h-screen">
        <header className="h-20 border-b border-cyan-500/15 px-8 flex items-center justify-between bg-[#08121E]/80 backdrop-blur-md sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-extrabold">BuildBots OS Admin Console</h1>
            <p className="text-xs text-slate-400">Academy Permissions, Storage, & Master Configuration</p>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/teacher" className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors">
              <Users className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="font-extrabold text-base">Teacher OS Console</h3>
              <p className="text-xs text-slate-400 mt-1">Manage all academy classes, students, and lesson uploads.</p>
            </Link>

            <Link href="/dashboard" className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <BookOpen className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="font-extrabold text-base">Student LMS Portal</h3>
              <p className="text-xs text-slate-400 mt-1">View live student dashboard & game modules.</p>
            </Link>

            <Link href="/parent" className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-colors">
              <Shield className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-extrabold text-base">Parent Portal</h3>
              <p className="text-xs text-slate-400 mt-1">View child progress, attendance logs, and certificates.</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
