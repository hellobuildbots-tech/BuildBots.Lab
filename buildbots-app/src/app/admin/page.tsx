'use client';

import React from 'react';
import Link from 'next/link';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { PWAInstallPrompt } from '@/components/PWAInstallPrompt';
import { Shield, Users, BookOpen, Settings, Database, Key } from 'lucide-react';

export default function AdminConsolePage() {
  return (
    <div className="min-h-screen bg-[#08121E] text-white flex flex-col md:flex-row selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      <CRMAppSidebar role="admin" />
      <PWAInstallPrompt />

      <main className="flex-1 md:pl-64 pl-0 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen w-full">
        <header className="min-h-16 md:h-20 border-b border-cyan-500/15 px-4 md:px-8 py-3 md:py-0 flex items-center justify-between bg-[#08121E]/90 backdrop-blur-md sticky top-16 md:top-0 z-30">
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-white">BuildBots OS Admin Console</h1>
            <p className="text-[11px] md:text-xs text-slate-400">Academy Permissions, Storage, & Master Configuration</p>
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <Link href="/teacher" className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors">
              <Users className="w-7 h-7 md:w-8 md:h-8 text-cyan-400 mb-3" />
              <h3 className="font-extrabold text-sm md:text-base text-white">Teacher OS Console</h3>
              <p className="text-xs text-slate-400 mt-1">Manage all academy classes, students, and lesson uploads.</p>
            </Link>

            <Link href="/dashboard" className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-emerald-400 mb-3" />
              <h3 className="font-extrabold text-sm md:text-base text-white">Student LMS Portal</h3>
              <p className="text-xs text-slate-400 mt-1">View live student dashboard & game modules.</p>
            </Link>

            <Link href="/parent" className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-colors">
              <Shield className="w-7 h-7 md:w-8 md:h-8 text-purple-400 mb-3" />
              <h3 className="font-extrabold text-sm md:text-base text-white">Parent Mobile Portal</h3>
              <p className="text-xs text-slate-400 mt-1">View child progress, attendance logs, and certificates.</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
