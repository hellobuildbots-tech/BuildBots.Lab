'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Search, Filter, Play, CheckCircle2, Clock } from 'lucide-react';

export default function LessonLibraryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('All');

  const lessons = [
    {
      id: 'class-1',
      month: 1,
      classNumber: 1,
      title: "The Secret Inventor's Lab & Flashlight Discovery",
      description: 'Discover what a robot is, feed Bolt energy, and wire your very first battery-to-LED light circuit!',
      difficulty: 'Beginner',
      duration: '30 Mins',
      completed: true,
      path: '/lessons/month-1/class-1'
    },
    {
      id: 'class-2',
      month: 1,
      classNumber: 2,
      title: 'Switches & Light Magic',
      description: 'Wire SPST switches to control LED lights on and off with custom color triggers.',
      difficulty: 'Beginner',
      duration: '35 Mins',
      completed: false,
      path: '#'
    },
    {
      id: 'class-3',
      month: 1,
      classNumber: 3,
      title: 'Ultrasonic Distance Sensors',
      description: 'Teach Bolt to see distance using ultrasonic waves and detect obstacles.',
      difficulty: 'Intermediate',
      duration: '40 Mins',
      completed: false,
      path: '#'
    }
  ];

  const filteredLessons = lessons.filter(l => {
    const matchesSearch = l.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDiff = filterDifficulty === 'All' || l.difficulty === filterDifficulty;
    return matchesSearch && matchesDiff;
  });

  return (
    <div className="min-h-screen bg-[#08121E] text-white selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      <main className="pt-28 pb-20 max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Lesson Library</h1>
          <p className="text-slate-400">Explore interactive SaaS robotics lessons for ages 7–14.</p>
        </div>

        {/* SEARCH AND FILTER BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
          <div className="relative w-full sm:w-80">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search lessons..."
              className="w-full pl-12 pr-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-slate-500" />
            <span className="text-xs text-slate-400 font-bold uppercase">Difficulty:</span>
            {['All', 'Beginner', 'Intermediate'].map(d => (
              <button
                key={d}
                onClick={() => setFilterDifficulty(d)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  filterDifficulty === d ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* LESSON CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLessons.map(l => (
            <div key={l.id} className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase">
                    Month {l.month} • Class {l.classNumber}
                  </span>
                  {l.completed ? (
                    <span className="flex items-center gap-1 text-xs text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4" /> Completed
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-slate-500 font-bold">
                      <Clock className="w-4 h-4" /> {l.duration}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2">{l.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{l.description}</p>
              </div>

              <Link
                href={l.path}
                className={`w-full py-3 rounded-xl font-extrabold text-sm text-center flex items-center justify-center gap-2 transition-all ${
                  l.path !== '#'
                    ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/25'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                {l.path !== '#' ? <>Launch Lesson <Play className="w-4 h-4 fill-slate-950" /></> : 'Locked'}
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
