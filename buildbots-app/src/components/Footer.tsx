import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#050B14] border-t border-cyan-500/10 py-16 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-400 text-slate-950 flex items-center justify-center font-bold">🤖</div>
            <span className="font-bold text-xl text-white">BuildBots.AI</span>
          </div>
          <p className="text-slate-500 leading-relaxed">
            The next-generation interactive SaaS robotics learning platform for young inventors aged 7–14.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Platform</h4>
          <ul className="space-y-2.5">
            <li><Link href="/dashboard" className="hover:text-cyan-400">Student Dashboard</Link></li>
            <li><Link href="/lessons" className="hover:text-cyan-400">Lesson Library</Link></li>
            <li><Link href="/signup" className="hover:text-cyan-400">Join as Student</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Curriculum</h4>
          <ul className="space-y-2.5">
            <li>Month 1: Circuit Basics & LED Flashlight</li>
            <li>Month 2: Switches & Sensor Magic</li>
            <li>Month 3: Arduino & Autonomous Bots</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Support & Contact</h4>
          <p className="text-slate-500 mb-2">Have questions? Reach out anytime.</p>
          <a href="mailto:support@buildbots.ai" className="text-cyan-400 font-semibold hover:underline">support@buildbots.ai</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-slate-600 text-xs">
        <p>© 2026 BuildBots AI Inc. All rights reserved.</p>
        <p>Built with Next.js 15, TailwindCSS & Supabase.</p>
      </div>
    </footer>
  );
}
