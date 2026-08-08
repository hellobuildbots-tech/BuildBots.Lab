'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { PWAInstallPrompt } from '@/components/PWAInstallPrompt';
import { 
  Heart, Clock, Award, FileText, CheckCircle2, TrendingUp, Sparkles, 
  Download, MessageSquare, PhoneCall, Calendar, ShieldCheck, ArrowRight, Smartphone
} from 'lucide-react';

export default function ParentPortalPage() {
  const [selectedStudent, setSelectedStudent] = useState('Mivaan Dangayach');
  const [activeTab, setActiveTab] = useState<'overview' | 'reports' | 'notes' | 'certificates'>('overview');
  const [showCallModal, setShowCallModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#08121E] text-white flex flex-col md:flex-row selection:bg-purple-500 selection:text-white overflow-x-hidden">
      {/* CRM OS SIDEBAR FOR PARENTS */}
      <CRMAppSidebar role="parent" />

      <PWAInstallPrompt />

      <main className="flex-1 md:pl-64 pl-0 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen w-full">
        {/* MOBILE & DESKTOP PARENT HEADER BAR */}
        <header className="min-h-16 md:h-20 border-b border-purple-500/20 px-4 md:px-8 py-3 md:py-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#08121E]/90 backdrop-blur-md sticky top-16 md:top-0 z-30">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 text-[10px] font-black uppercase">Mobile Parent OS</span>
              <h1 className="text-lg md:text-xl font-extrabold text-white">Parent Portal</h1>
            </div>
            <p className="text-[11px] md:text-xs text-slate-400">Child Progress, Live Attendance & Faculty Direct Line</p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <button 
              onClick={() => setShowCallModal(true)}
              className="px-3.5 py-2 rounded-xl font-extrabold text-xs bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 transition-all flex items-center gap-1.5 shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Call Faculty
            </button>

            <Link 
              href="/dashboard"
              className="px-4 py-2 rounded-xl font-extrabold text-xs bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 transition-all flex items-center gap-1.5 shrink-0"
            >
              Switch to Student OS <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
          {/* PARENT MOBILE HERO CARD */}
          <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-slate-900 via-purple-950/40 to-slate-900 border border-purple-500/30 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-[11px] md:text-xs font-bold uppercase mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Parent Access
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  {selectedStudent}'s Learning Hub
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
                  Enrolled Course: <span className="text-purple-300 font-bold">Junior Robotics & AI (Month 1)</span> • Instructor: <span className="text-cyan-400 font-bold">Robotics Faculty</span>
                </p>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <button 
                  onClick={() => alert("✨ AI Summary generated! Mivaan score is 95%. Strong spatial reasoning in wiring circuits.")}
                  className="w-full md:w-auto px-4 py-2.5 rounded-full font-extrabold text-xs bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 shrink-0"
                >
                  <Sparkles className="w-4 h-4" /> Generate AI Weekly Summary
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE QUICK NAVIGATION TABS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-800">
            {[
              { id: 'overview', label: '📊 Overview', icon: TrendingUp },
              { id: 'reports', label: '📜 Class Reports', icon: FileText },
              { id: 'notes', label: '💬 Teacher Notes', icon: MessageSquare },
              { id: 'certificates', label: '🏅 Certificates', icon: Award },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: OVERVIEW METRICS */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* KEY METRICS GRID */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                <div className="p-4 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase">Learning Time</div>
                  <div className="text-lg md:text-2xl font-extrabold text-white mt-1">4.5 Hours</div>
                  <span className="text-[10px] text-emerald-400 font-bold">This Month</span>
                </div>

                <div className="p-4 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase">Attendance</div>
                  <div className="text-lg md:text-2xl font-extrabold text-emerald-400 mt-1">100%</div>
                  <span className="text-[10px] text-slate-400">4 / 4 Classes</span>
                </div>

                <div className="p-4 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase">Avg Quiz Score</div>
                  <div className="text-lg md:text-2xl font-extrabold text-cyan-400 mt-1">95%</div>
                  <span className="text-[10px] text-emerald-400 font-bold">Top Tier</span>
                </div>

                <div className="p-4 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase">Certificates</div>
                  <div className="text-lg md:text-2xl font-extrabold text-yellow-400 mt-1">1 Earned 📜</div>
                  <span className="text-[10px] text-purple-300 font-bold">Junior Explorer</span>
                </div>
              </div>

              {/* RECENT CLASS PROGRESS CARD */}
              <div className="p-5 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h3 className="font-extrabold text-base md:text-lg text-white mb-3">Latest Class Completed</h3>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 text-[10px] font-bold uppercase mb-1">
                      Month 1 Class 1
                    </div>
                    <h4 className="font-extrabold text-white text-base">The Secret Inventor's Lab & Flashlight Discovery</h4>
                    <p className="text-xs text-slate-400 mt-1">Learned electric current flow, switch dynamics, and battery polarity.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-xs shrink-0 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Passed with 100%
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CLASS REPORTS */}
          {(activeTab === 'overview' || activeTab === 'reports') && (
            <div className="p-5 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="font-extrabold text-base md:text-lg text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-400" /> Class Performance Reports
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-sm text-white">Class 1: Flashlight & Battery Highway</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Completed yesterday • Interactive score 98/100</p>
                  </div>
                  <button 
                    onClick={() => alert("Report downloaded! Check your downloads folder.")}
                    className="px-3 py-1.5 rounded-lg bg-slate-700 text-xs font-bold text-slate-200 hover:text-white flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan-400" /> Download PDF Report
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TEACHER NOTES */}
          {(activeTab === 'overview' || activeTab === 'notes') && (
            <div className="p-5 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="font-extrabold text-base md:text-lg text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-400" /> Instructor Comments & Feedback
              </h3>

              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-bold text-purple-300">Robotics Faculty</span>
                  <span>Yesterday at 4:30 PM</span>
                </div>
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                  "Mivaan demonstrated exceptional curiosity during Class 1! He answered all 3 energy storage questions correctly and helped assemble the battery connection."
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: CERTIFICATES */}
          {(activeTab === 'overview' || activeTab === 'certificates') && (
            <div className="p-5 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="font-extrabold text-base md:text-lg text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" /> Official Certificates
              </h3>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-bold text-sm text-white">Junior Robot Explorer Certificate</h4>
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
          )}
        </div>

        {/* CALL FACULTY MODAL */}
        {showCallModal && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-purple-500/30 rounded-2xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl animate-in zoom-in-95">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl font-bold">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-white">Contact Robotics Faculty</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect directly with Mivaan's instructor for progress feedback or class scheduling.
              </p>
              <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-cyan-300 font-mono font-bold text-sm">
                +1 (800) 555-BOTS
              </div>
              <div className="flex gap-2">
                <a 
                  href="tel:18005552687"
                  className="flex-1 py-2.5 rounded-xl font-extrabold text-xs bg-emerald-500 text-slate-950 text-center"
                >
                  Call Now 📞
                </a>
                <button
                  onClick={() => setShowCallModal(false)}
                  className="px-4 py-2.5 rounded-xl font-bold text-xs bg-slate-800 text-slate-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
