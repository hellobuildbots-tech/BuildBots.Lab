'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Home, Users, BookOpen, Calendar, CheckSquare, 
  FileText, Award, BarChart2, MessageSquare, Settings, Shield, Video,
  Menu, X, ChevronRight, UserCheck, Smartphone
} from 'lucide-react';

interface SidebarProps {
  role?: 'teacher' | 'parent' | 'student' | 'admin';
}

export function CRMAppSidebar({ role = 'teacher' }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);

  const teacherNav = [
    { label: 'Dashboard', href: '/teacher', icon: Home },
    { label: 'Create Google Meet', href: '/teacher/create-meet', icon: Video },
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
    { label: 'Parent Home', href: '/parent', icon: Home },
    { label: 'Child Progress', href: '/parent', icon: BarChart2 },
    { label: 'Certificates', href: '/parent', icon: Award },
    { label: 'Student Lessons', href: '/lessons', icon: BookOpen },
    { label: 'Settings', href: '/settings', icon: Settings },
  ];

  const studentNav = [
    { label: 'Student Dashboard', href: '/dashboard', icon: Home },
    { label: 'Lesson Library', href: '/lessons', icon: BookOpen },
    { label: 'Parent View', href: '/parent', icon: UserCheck },
    { label: 'Settings', href: '/settings', icon: Settings },
  ];

  const adminNav = [
    { label: 'Admin Console', href: '/admin', icon: Shield },
    { label: 'Teacher OS', href: '/teacher', icon: Home },
    { label: 'Student OS', href: '/dashboard', icon: Users },
    { label: 'Parent OS', href: '/parent', icon: MessageSquare },
  ];

  const navItems = role === 'admin' ? adminNav : role === 'parent' ? parentNav : role === 'student' ? studentNav : teacherNav;

  const roleOptions = [
    { key: 'student', label: 'Student Console 🚀', href: '/dashboard' },
    { key: 'parent', label: 'Parent Mobile Site 👨‍👩‍👧', href: '/parent' },
    { key: 'teacher', label: 'Faculty CRM 🎓', href: '/teacher' },
    { key: 'admin', label: 'Admin OS 🛡️', href: '/admin' },
  ];

  return (
    <>
      {/* 1. MOBILE TOP NAVIGATION BAR (ONLY ON MOBILE) */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#050C16]/95 border-b border-cyan-500/15 z-40 px-4 flex items-center justify-between backdrop-blur-md">
        <Link href="/dashboard" className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="BuildBots AI Logo" 
            className="w-8 h-8 object-contain" 
          />
          <div>
            <span className="font-extrabold text-sm tracking-tight text-white block leading-tight">
              BuildBots<span className="text-cyan-400"> OS</span>
            </span>
            <span className="text-[9px] uppercase font-bold text-cyan-400 tracking-wider">
              {role.toUpperCase()}
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          {/* Quick Role Switcher Button */}
          <div className="relative">
            <button
              onClick={() => setRoleMenuOpen(!roleMenuOpen)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800/90 border border-cyan-500/30 text-[11px] font-extrabold text-cyan-300 flex items-center gap-1 hover:bg-slate-800 transition-colors"
            >
              <span>{role === 'parent' ? '👨‍👩‍👧 Parent' : role === 'student' ? '🚀 Student' : role === 'teacher' ? '🎓 Teacher' : '🛡️ Admin'}</span>
            </button>

            {roleMenuOpen && (
              <div className="absolute right-0 top-10 w-48 rounded-xl bg-slate-900 border border-cyan-500/30 shadow-2xl p-2 z-50">
                <p className="text-[10px] font-bold uppercase text-slate-400 px-2 py-1">Switch View</p>
                {roleOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => {
                      setRoleMenuOpen(false);
                      router.push(opt.href);
                    }}
                    className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-bold transition-all ${
                      role === opt.key ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
          </button>
        </div>
      </div>

      {/* 2. MOBILE DRAWER SLIDE-OVER (WHEN HAMBURGER IS CLICKED) */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          {/* Slide Drawer Content */}
          <div className="relative w-4/5 max-w-xs bg-[#050C16] h-full shadow-2xl flex flex-col justify-between p-5 border-r border-cyan-500/20 z-50">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-cyan-500/15 mb-4">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="BuildBots Logo" className="w-8 h-8" />
                  <div>
                    <span className="font-extrabold text-base text-white block">BuildBots OS</span>
                    <span className="text-[10px] uppercase font-bold text-cyan-400">{role.toUpperCase()} CONSOLE</span>
                  </div>
                </div>
                <button 
                  onClick={() => setMobileOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Role Quick Selector in Mobile Drawer */}
              <div className="mb-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Current View Mode</p>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => { setMobileOpen(false); router.push('/dashboard'); }}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold ${role === 'student' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                  >
                    🚀 Student
                  </button>
                  <button
                    onClick={() => { setMobileOpen(false); router.push('/parent'); }}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold ${role === 'parent' ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-300'}`}
                  >
                    👨‍👩‍👧 Parent View
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1 overflow-y-auto max-h-[calc(100vh-280px)]">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-extrabold transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 shadow-md shadow-cyan-500/20'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="flex-1 truncate">{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-cyan-500/15">
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 font-bold flex items-center justify-center text-xs shrink-0">
                  {role === 'teacher' ? 'INST' : role === 'parent' ? 'PRNT' : 'USER'}
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-white truncate">{role === 'parent' ? 'Parent User' : 'Robotics Faculty'}</p>
                  <p className="text-[10px] text-slate-500 truncate">Mobile Connected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. MOBILE BOTTOM QUICK TAB BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#050C16]/95 border-t border-cyan-500/15 z-40 flex items-center justify-around px-2 backdrop-blur-md">
        <Link 
          href="/dashboard"
          className={`flex flex-col items-center justify-center gap-1 w-16 py-1 rounded-xl transition-colors ${
            pathname === '/dashboard' ? 'text-cyan-400 font-black' : 'text-slate-400'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px]">Home</span>
        </Link>

        <Link 
          href="/lessons"
          className={`flex flex-col items-center justify-center gap-1 w-16 py-1 rounded-xl transition-colors ${
            pathname.startsWith('/lessons') ? 'text-cyan-400 font-black' : 'text-slate-400'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px]">Lessons</span>
        </Link>

        <Link 
          href="/parent"
          className={`flex flex-col items-center justify-center gap-1 w-16 py-1 rounded-xl transition-colors ${
            pathname === '/parent' ? 'text-purple-400 font-black' : 'text-slate-400'
          }`}
        >
          <UserCheck className="w-5 h-5" />
          <span className="text-[10px]">Parent</span>
        </Link>

        <Link 
          href="/settings"
          className={`flex flex-col items-center justify-center gap-1 w-16 py-1 rounded-xl transition-colors ${
            pathname === '/settings' ? 'text-cyan-400 font-black' : 'text-slate-400'
          }`}
        >
          <Settings className="w-5 h-5" />
          <span className="text-[10px]">Settings</span>
        </Link>
      </div>

      {/* 4. DESKTOP SIDEBAR (UNCHANGED DESKTOP LOOK: HIDDEN ON MOBILE) */}
      <aside className="hidden md:flex w-64 bg-[#050C16] border-r border-cyan-500/15 min-h-screen flex-col justify-between shrink-0 fixed left-0 top-0 bottom-0 z-40">
        <div>
          {/* BRANDING HEADER */}
          <div className="h-20 px-6 flex items-center justify-between border-b border-cyan-500/15">
            <Link href="/dashboard" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="BuildBots AI Logo" 
                className="w-9 h-9 object-contain" 
              />
              <div>
                <span className="font-extrabold text-lg tracking-tight text-white block">
                  BuildBots<span className="text-cyan-400"> OS</span>
                </span>
                <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                  {role.toUpperCase()} CONSOLE
                </span>
              </div>
            </Link>
          </div>

          {/* ROLE SWITCHER STRIP (DESKTOP) */}
          <div className="px-4 pt-3 pb-1">
            <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase">View Mode</span>
              <div className="flex gap-1">
                <Link
                  href="/dashboard"
                  title="Student Console"
                  className={`px-2 py-1 rounded-lg text-[10px] font-extrabold ${role === 'student' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                >
                  Student
                </Link>
                <Link
                  href="/parent"
                  title="Parent Portal"
                  className={`px-2 py-1 rounded-lg text-[10px] font-extrabold ${role === 'parent' ? 'bg-purple-500 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Parent
                </Link>
              </div>
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
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* FOOTER USER CARD */}
        <div className="p-4 border-t border-cyan-500/15">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 font-bold flex items-center justify-center text-xs shrink-0">
              {role === 'teacher' ? 'INST' : role === 'parent' ? 'PRNT' : 'USER'}
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-white truncate">{role === 'parent' ? 'Parent Account' : 'Robotics Faculty'}</p>
              <p className="text-[10px] text-slate-500 truncate">active_session</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
