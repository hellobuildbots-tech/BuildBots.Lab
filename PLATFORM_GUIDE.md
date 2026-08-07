# 🤖 BuildBots AI Platform Architecture & Access Guide

Welcome to the **BuildBots AI Platform Guide**. This document outlines how **Students**, **Teachers**, and **Parents** access the platform, complete interactive games, track progress, and manage lessons.

---

## 🔗 Platform Live URL Routes

When deployed to Netlify (e.g. `https://buildbots-lab.netlify.app`), the following web routes are available:

| Route Path | Targeted Audience | Purpose & Description |
|---|---|---|
| **`/`** | Everyone / Public | **Futuristic Landing Page**: Hero, 15-Game Demo, Curriculum, Pricing, Features. |
| **`/login`** | Students / Teachers / Parents | **Authentication Gateway**: Sign in with email and password. |
| **`/signup`** | New Students | **Student Registration**: Create a new inventor account with default Level 1 Bot. |
| **`/dashboard`** | **Students** | **Student Gamified Command Center**: Track XP, Streaks, Robot Level, & Progress. |
| **`/lessons`** | Students & Teachers | **Lesson Library**: Searchable catalog with difficulty filtering. |
| **`/lessons/month-1/class-1`** | **Students** | **Interactive Lesson Viewer**: Safe iframe loading 15 playable games with audio & canvas wire builder. |
| **`/teacher`** | **Teachers & Admins** | **Instructor Command Console**: Student Roster, HTML Lesson Uploader, Quiz Builder, Analytics. |
| **`/parent`** | **Parents** | **Parent Dashboard**: Track learning time, attendance, teacher notes, & PDF certificates. |
| **`/ai-engine`** | Developers / Admins | **AI Service Layer Console**: Robotics Tutor, Homework Reviewer, Quiz Generator, Parent Summarizer. |
| **`/settings`** | All Users | **Account Settings**: Update display name, email, & notification preferences. |

---

## 👥 How Roles Access & Use the Platform

### 1. 🎓 Student Experience (`/dashboard` & `/lessons/month-1/class-1`)
1. **Login/Signup**: Students register at `/signup` or log in at `/login`.
2. **Dashboard**: Students land on `/dashboard` displaying:
   - ⭐ Total XP (e.g. 150 XP)
   - 🔥 Weekly Streak (e.g. 3 Days)
   - 🤖 Current Robot Level (*Level 1: Circuit Explorer*)
   - 🏅 Unlocked Badge Shelf
3. **Playing Lessons**: Clicking **"Launch Lesson"** opens `/lessons/month-1/class-1` in an isolated frame.
4. **Interactive Games**: Students complete **15 playable micro-games** (*Canvas Wire Highway Builder, Battery Charge Match, Tactile Switch Toggle, Flashlight Color Switcher*).
5. **Auto-Grading & XP**: Correct answers trigger jackpot confetti, Web Audio chimes, and auto-award XP and stars.

---

### 2. 👩‍🏫 Teacher & Admin Experience (`/teacher`)
1. **Access**: Teachers navigate to `/teacher`.
2. **Student Roster Management**:
   - View all registered students, emails, current Robot Levels, total XP, streak counts, and attendance %.
   - Reset progress or manage student accounts.
3. **HTML Lesson Folder Uploader**:
   - Drag-and-drop standalone HTML lesson folders containing `index.html`, `css/`, `js/`, and asset assets.
   - Automatically index metadata into Supabase Database.
4. **Auto-Graded Quiz Builder**:
   - Build MCQ, True/False, and Image questions assigned to specific lessons.
5. **Live Analytics & Leaderboard**:
   - View daily active student counts, class average scores (91%), and weekly XP champions.

---

### 3. 👨‍👩‍👧 Parent Experience (`/parent`)
1. **Access**: Parents navigate to `/parent`.
2. **Learning Activity Tracking**:
   - View total hours spent on robotics (e.g. *4.5 Hours This Week*).
   - Check attendance history (e.g. *100% Present*).
   - Review quiz score averages (e.g. *95% Average*).
3. **Teacher Feedback & Comments**:
   - Read direct notes left by robotics instructors (*e.g., "Alex completed the wire highway canvas game on his first try!"*).
4. **PDF Certificate Downloads**:
   - Download printable **Junior Robot Explorer Certificates** earned upon class completion.

---

## 🗄️ Database Architecture (Supabase PostgreSQL)

The platform is backed by 3 Supabase SQL migration files:

1. **`supabase-schema.sql`**: `profiles`, `lessons`, `student_progress`, `robot_levels`, `xp`, `badges`, `streaks`.
2. **`teacher-schema-extension.sql`**: `assignments`, `quizzes`, `quiz_results`, `attendance`, `certificates`, `notifications`.
3. **`parent-schema-extension.sql`**: `parent_student_links`, `homework_submissions`, `ai_logs`.

---

## 🚀 Netlify Deployment Workflow

1. Connect your GitHub repository `hellobuildbots-tech/BuildBots.Lab` to Netlify.
2. Netlify will read the root [`netlify.toml`](file:///Users/nandinikhandelwal/Desktop/Codes/study/netlify.toml) file:
   - **Base**: `buildbots-app`
   - **Command**: `npm run build`
   - **Publish**: `.next`
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to Netlify Environment Variables.
4. Deployment completes automatically!
