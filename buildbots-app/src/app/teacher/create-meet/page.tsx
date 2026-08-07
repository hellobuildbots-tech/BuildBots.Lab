'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { Video, Copy, Check, Sparkles, Send, Calendar, Clock, BookOpen, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CreateMeetPage() {
  const [topic, setTopic] = useState('BuildBots Class 1: The Secret Inventor\'s Lab');
  const [targetStudent, setTargetStudent] = useState('Both (Mivaan & Tashvi)');
  const [meetLink, setMeetLink] = useState('https://meet.google.com/new');
  const [copied, setCopied] = useState(false);
  const [whatsappCopied, setWhatsappCopied] = useState(false);

  // Generate customized message draft for parents
  const generateParentMessage = () => {
    return `🚀 *BuildBots AI Robotics Class Announcement* 🤖✨

Hello Parent! 👋

We are excited for our upcoming robotics mission:
📖 *Topic*: ${topic}
👤 *Student(s)*: ${targetStudent}

👉 *Join Google Meet Class*: ${meetLink}

Please make sure your young inventor is logged into their BuildBots portal:
🌐 Portal Link: https://hellobuildbots.netlify.app (Select Student Login)

See you in the Secret Inventor's Lab!
— Coach Nandini | BuildBots AI Academy`;
  };

  const parentMessageDraft = generateParentMessage();

  const copyToClipboard = (text: string, isWhatsapp = false) => {
    navigator.clipboard.writeText(text);
    if (isWhatsapp) {
      setWhatsappCopied(true);
      setTimeout(() => setWhatsappCopied(false), 2000);
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#08121E] text-white flex selection:bg-cyan-500 selection:text-slate-950">
      <CRMAppSidebar role="teacher" />

      <main className="flex-1 pl-64 min-h-screen">
        <header className="h-20 border-b border-cyan-500/15 px-8 flex items-center justify-between bg-[#08121E]/80 backdrop-blur-md sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-extrabold flex items-center gap-2">
              <Video className="w-5 h-5 text-cyan-400" /> Instant Google Meet Creator & Parent Broadcaster
            </h1>
            <p className="text-xs text-slate-400">Generate Google Meet link and draft WhatsApp message for parents in 1 click</p>
          </div>

          <a
            href="https://meet.google.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full font-extrabold text-xs bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2 transition-all"
          >
            <Video className="w-4 h-4" /> Open New Google Meet ↗
          </a>
        </header>

        <div className="p-8 max-w-6xl mx-auto space-y-8">
          {/* STEP PIPELINE BANNER */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-extrabold shrink-0">1</div>
              <div>
                <h4 className="font-bold text-sm">Create Meet Link</h4>
                <p className="text-xs text-slate-400">Tap to open new Google Meet room</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-extrabold shrink-0">2</div>
              <div>
                <h4 className="font-bold text-sm">Auto-Draft Message</h4>
                <p className="text-xs text-slate-400">Formatted parent notification ready</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center font-extrabold shrink-0">3</div>
              <div>
                <h4 className="font-bold text-sm">1-Click Copy & Send</h4>
                <p className="text-xs text-slate-400">Send to parents via WhatsApp/Email</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CONFIGURATION FORM */}
            <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold flex items-center gap-2 text-cyan-300">
                <Sparkles className="w-5 h-5 text-cyan-400" /> Class Setup Details
              </h3>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-400 mb-2">Target Student / Class</label>
                <select
                  value={targetStudent}
                  onChange={(e) => setTargetStudent(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm font-semibold focus:outline-none focus:border-cyan-400"
                >
                  <option value="Both (Mivaan & Tashvi)">Both (Mivaan & Tashvi)</option>
                  <option value="Mivaan">Mivaan</option>
                  <option value="Tashvi">Tashvi</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-400 mb-2">Lesson Topic</label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. Class 1: Flashlight & LED Discovery"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-400 mb-2">Google Meet Link</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={meetLink}
                    onChange={(e) => setMeetLink(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-cyan-300 text-sm font-mono focus:outline-none focus:border-cyan-400"
                  />
                  <a
                    href="https://meet.google.com/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl bg-cyan-500 text-slate-950 font-extrabold text-xs flex items-center gap-1 shrink-0 hover:bg-cyan-400 transition-colors"
                  >
                    New Meet ↗
                  </a>
                </div>
              </div>
            </div>

            {/* LIVE PARENT MESSAGE DRAFT PREVIEW */}
            <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold flex items-center gap-2 text-emerald-400">
                    <Send className="w-5 h-5" /> Live Parent WhatsApp Draft
                  </h3>
                  <button
                    onClick={() => copyToClipboard(parentMessageDraft, true)}
                    className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold flex items-center gap-1.5 hover:bg-emerald-500/20 transition-all"
                  >
                    {whatsappCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {whatsappCopied ? 'Copied Draft!' : 'Copy Draft'}
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-200 font-sans text-sm whitespace-pre-wrap leading-relaxed">
                  {parentMessageDraft}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => copyToClipboard(meetLink)}
                  className="w-full sm:w-1/2 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 text-xs font-extrabold flex items-center justify-center gap-2 hover:border-cyan-400 transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Link Copied!' : 'Copy Link Only'}
                </button>

                <button
                  onClick={() => copyToClipboard(parentMessageDraft, true)}
                  className="w-full sm:w-1/2 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 text-xs font-extrabold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                >
                  <Send className="w-4 h-4 fill-slate-950" /> Copy Full WhatsApp Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
