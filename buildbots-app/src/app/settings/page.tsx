'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
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
    <div className="min-h-screen bg-[#08121E] text-white selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      <main className="pt-28 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-8">Account & Platform Settings</h1>

        {saved && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold">
            ✓ Settings saved successfully!
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-8">
          {/* PROFILE SECTION */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-cyan-400" /> Student Profile
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
      </main>

      <Footer />
    </div>
  );
}
