'use client';

import React, { useState } from 'react';
import { CRMAppSidebar } from '@/components/CRMAppSidebar';
import { User, Lock, Bell, Globe, Moon, Save } from 'lucide-react';

export default function SettingsPage() {
  const [name, setName] = useState('Chief Inventor Alex');
  const [email, setEmail] = useState('alex@buildbots.ai');
  const [notifications, setNotifications] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#08121E] text-white flex selection:bg-cyan-500 selection:text-slate-950">
      <CRMAppSidebar role="student" />

      <main className="flex-1 pl-64 min-h-screen">
        <header className="h-20 border-b border-cyan-500/15 px-8 flex items-center justify-between bg-[#08121E]/80 backdrop-blur-md sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-extrabold">Account & Platform Settings</h1>
            <p className="text-xs text-slate-400">User Profile, Password & Preferences</p>
          </div>
        </header>

        <div className="p-8 max-w-4xl mx-auto space-y-8">
          {saved && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold">
              ✓ Settings saved successfully!
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-8">
            {/* PROFILE SECTION */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-cyan-400" /> User Profile
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Display Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* NOTIFICATION PREFERENCES */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Bell className="w-5 h-5 text-yellow-400" /> Notification Preferences
              </h2>

              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <div className="font-bold text-sm">Lesson & Homework Alerts</div>
                  <div className="text-xs text-slate-400 mt-0.5">Receive email alerts when new robotics lessons unlock.</div>
                </div>
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={e => setNotifications(e.target.checked)}
                  className="w-5 h-5 accent-cyan-400"
                />
              </label>
            </div>

            <button
              type="submit"
              className="px-8 py-3.5 rounded-full font-extrabold text-sm bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Save Preferences
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
