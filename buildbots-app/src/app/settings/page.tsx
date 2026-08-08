'use client';

import React, { useState } from 'react';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { PWAInstallPrompt } from '@/components/PWAInstallPrompt';
import { User, Lock, Bell, Globe, Moon, Save, Smartphone } from 'lucide-react';

export default function SettingsPage() {
  const [name, setName] = useState('Chief Inventor Mivaan');
  const [email, setEmail] = useState('mivaan@buildbots.ai');
  const [notifications, setNotifications] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#08121E] text-white flex flex-col md:flex-row selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      <CRMAppSidebar role="student" />
      <PWAInstallPrompt />

      <main className="flex-1 md:pl-64 pl-0 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen w-full">
        <header className="min-h-16 md:h-20 border-b border-cyan-500/15 px-4 md:px-8 py-3 md:py-0 flex items-center justify-between bg-[#08121E]/90 backdrop-blur-md sticky top-16 md:top-0 z-30">
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-white">Account & App Settings</h1>
            <p className="text-[11px] md:text-xs text-slate-400">Profile, PWA & Notification Preferences</p>
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-6 md:space-y-8">
          {saved && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm font-bold">
              ✓ Settings saved successfully!
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6 md:space-y-8">
            {/* PROFILE SECTION */}
            <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-slate-900/60 border border-slate-800">
              <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2 text-white">
                <User className="w-5 h-5 text-cyan-400" /> User Profile
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-400 mb-2">Display Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-xs md:text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-xs md:text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </div>

            {/* PWA & MOBILE PREFERENCES */}
            <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-slate-900/60 border border-slate-800">
              <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2 text-white">
                <Smartphone className="w-5 h-5 text-emerald-400" /> Mobile & PWA App Features
              </h2>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-xs md:text-sm text-white">Add BuildBots to Home Screen</h3>
                    <p className="text-[11px] md:text-xs text-slate-400 mt-0.5">Fast 1-tap launcher icon on iPhone or Android.</p>
                  </div>
                  <button 
                    type="button"
                    onClick={() => alert("Tap your browser's share icon 📤 then select 'Add to Home Screen' to install BuildBots OS!")}
                    className="px-3.5 py-2 rounded-xl text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shrink-0"
                  >
                    Install Guide
                  </button>
                </div>
              </div>
            </div>

            {/* NOTIFICATION PREFERENCES */}
            <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-slate-900/60 border border-slate-800">
              <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2 text-white">
                <Bell className="w-5 h-5 text-yellow-400" /> Notification Preferences
              </h2>

              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <div className="font-bold text-xs md:text-sm text-white">Lesson & Homework Alerts</div>
                  <div className="text-[11px] md:text-xs text-slate-400 mt-0.5">Receive email & mobile alerts when new robotics lessons unlock.</div>
                </div>
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={e => setNotifications(e.target.checked)}
                  className="w-5 h-5 accent-cyan-400 shrink-0"
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-extrabold text-xs md:text-sm bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" /> Save Preferences
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
