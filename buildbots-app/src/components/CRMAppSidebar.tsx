'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, Users, BookOpen, Calendar, CheckSquare, 
  FileText, Award, BarChart2, MessageSquare, Settings, Shield
} from 'lucide-react';

interface SidebarProps {
  role?: 'teacher' | 'parent' | 'student' | 'admin';
}

export function CRMAppSidebar({ role = 'teacher' }: SidebarProps) {
  const pathname = usePathname();

  const teacherNav = [
    { label: 'Dashboard', href: '/teacher', icon: Home },
    { label: 'Students CRM', href: '/teacher/students', icon: Users },
    { label: 'Lessons Library', href: '/teacher/lessons', icon: BookOpen },
    { label: 'Classes Schedule', href: '/teacher/classes', icon: Calendar },
    { label: 'Attendance', href: '/teacher/attendance', icon: CheckSquare },
    { label: 'Homework Review', href: '/teacher/homework', icon: FileText },
    { label: 'Certificates', href: '/teacher/certificates', icon: Award },
    { label: 'Academy Analytics', href: '/teacher/analytics', icon: BarChart2 },
    { label: 'Parent Notes', href: '/teacher/notes', icon: MessageSquare },
    { label: 'Settings', href: '/settings', icon: Settings },
  ];

  const parentNav = [
    { label: 'Home', href: '/parent', icon: Home },
    { label: 'Child Progress', href: '/parent', icon: BarChart2 },
    { label: 'Certificates', href: '/parent', icon: Award },
    { label: 'Settings', href: '/settings', icon: Settings },
  ];

  const studentNav = [
    { label: 'Home', href: '/dashboard', icon: Home },
    { label: 'Lesson Library', href: '/lessons', icon: BookOpen },
    { label: 'Settings', href: '/settings', icon: Settings },
  ];

  const adminNav = [
    { label: 'Admin Console', href: '/admin', icon: Shield },
    { label: 'Teacher OS', href: '/teacher', icon: Home },
    { label: 'Student OS', href: '/dashboard', icon: Users },
    { label: 'Parent OS', href: '/parent', icon: MessageSquare },
  ];

  const navItems = role === 'admin' ? adminNav : role === 'parent' ? parentNav : role === 'student' ? studentNav : teacherNav;

  return (
    <aside className="w-64 bg-[#050C16] border-r border-cyan-500/15 min-h-screen flex flex-col justify-between shrink-0 fixed left-0 top-0 bottom-0 z-40">
      <div>
        {/* BRANDING HEADER */}
        <div className="h-20 px-6 flex items-center gap-3 border-b border-cyan-500/15">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-emerald-400 text-slate-950 flex items-center justify-center font-black text-lg shadow-lg shadow-cyan-500/20">
            🤖
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-white block">
              BuildBots<span className="text-cyan-400"> OS</span>
            </span>
            <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
              {role.toUpperCase()} CONSOLE
            </span>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="p-4 space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-extrabold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* FOOTER USER CARD */}
      <div className="p-4 border-t border-cyan-500/15">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 font-bold flex items-center justify-center text-xs">
            {role === 'teacher' ? 'INST' : 'USER'}
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold text-white truncate">Robotics Faculty</p>
            <p className="text-[10px] text-slate-500 truncate">active_session</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
