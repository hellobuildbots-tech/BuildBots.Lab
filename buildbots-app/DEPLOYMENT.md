# BuildBots AI — Production Netlify & Deployment Guide

This document outlines the step-by-step production deployment workflow for **BuildBots AI** on **Netlify** with **Supabase**.

---

## 🚀 1. Netlify Build Configuration (`netlify.toml`)

Create a `netlify.toml` file in your root folder:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 🔑 2. Environment Variables Configuration

Set the following environment variables in your **Netlify Dashboard -> Site Settings -> Environment Variables**:

| Variable Name | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase Project API URL | `https://xxxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase Public Anon Key | `eyJhbGci...` |

---

## 🗄️ 3. Supabase Database & Security Setup

1. Open your **Supabase SQL Editor**.
2. Execute `supabase-schema.sql` (Main Tables & RLS Policies).
3. Execute `teacher-schema-extension.sql` (Assignments, Quizzes, Attendance).
4. Execute `parent-schema-extension.sql` (Parent Links, Homework, AI Logs).

---

## 📦 4. Lesson Deployment Architecture

Every HTML lesson is served statically from `/public/lessons/month-X/class-Y/index.html`.
Updating or adding a new lesson is as simple as adding a folder to `/public/lessons/` and adding a record in the `lessons` table!
