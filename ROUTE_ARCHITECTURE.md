# 🤖 BuildBots AI — Complete App Route & Architecture Directory

This document details the exact, clean separation between **Public Website Marketing Pages** and **Authenticated SaaS Application OS Pages**.

---

## 🌐 1. Public Marketing Website (Top `Navbar` + `Footer`)

These pages are for public visitors, new parents, and students exploring the BuildBots AI Academy.

| URL Route | Purpose & Description | Header Navigation |
|---|---|---|
| **`/`** | **Public Landing Page**: Hero, live 15-game interactive demo, curriculum roadmap, pricing plans. | Top `Navbar` ("Features", "Curriculum", "Pricing", "Sign In") |
| **`/login`** | **Sign In Gateway**: Single authentication portal for all user roles. | Top Brand Logo + Credentials Input Form |
| **`/signup`** | **Registration Gateway**: Account signup for new students. | Top Brand Logo + Student Registration Form |

---

## 🚀 2. SaaS Application OS (Left `CRMAppSidebar` Console)

Once logged in, users enter the **BuildBots SaaS Application Console** featuring a left-hand navigation sidebar layout.

### 🎓 Student OS Routes
- **`/dashboard`**: **Student Command Center** (*Displays total XP, weekly streak, Level 1 Bot status, unlocked badges, & active mission*).
- **`/lessons`**: **Lesson Library Catalog** (*Searchable & filterable grid of robotics classes*).
- **`/lessons/month-1/class-1`**: **Interactive HTML Lesson Player** (*Safe iframe playing 15 micro-games with audio & canvas builder*).
- **`/settings`**: **Account Settings** (*Display name, email, & notification preferences*).

### 👩‍🏫 Teacher Academy OS Routes (`/teacher/*`)
- **`/teacher`**: **Page 1 - Operational Overview** (*Enrolled students, today's classes, attendance %, pending homework, quick actions*).
- **`/teacher/students`**: **Page 2 - Students CRM Roster** (*Full directory table with filter, sort, & profile links*).
- **`/teacher/students/[id]`**: **Page 3 - Student Profile CRM Detail** (*XP timeline, attendance history, badges, homework review*).
- **`/teacher/classes`**: **Page 4 - Classes Schedule** (*Batch times, assigned lessons, & session launchers*).
- **`/teacher/session`**: **Page 5 - Live Class Session Console** (*Interactive attendance checklist & live HTML viewer launcher*).
- **`/teacher/attendance`**: **Page 6 - Attendance Matrix** (*Monthly attendance % tracker & CSV report export*).
- **`/teacher/lessons`**: **Page 7 - Lesson Management Library** (*Publish, unpublish, preview, & HTML folder upload*).
- **`/teacher/homework`**: **Page 8 - Homework Submissions** (*Review student images, videos, PDFs & grade feedback*).
- **`/teacher/notes`**: **Page 9 - Parent Communication Notes** (*Private instructor notes linked to student records*).
- **`/teacher/certificates`**: **Page 10 - Certificates Registry** (*Generate PDF certificates & email dispatch log*).
- **`/teacher/analytics`**: **Page 11 - Academy Growth Analytics** (*Completion rates, XP distribution, & weekly leaderboards*).

### 👨‍👩‍👧 Parent Portal Routes
- **`/parent`**: **Parent Dashboard** (*Track learning time, attendance history, teacher comments, & download PDF certificates*).

### 🛡️ Master Admin Console Routes
- **`/admin`**: **Admin Master Console** (*Academy permissions, storage, & master system configuration*).

---

## 🔑 Login Credentials Reference (`credentials.json`)

| Role | Email | Password | Access Level |
|---|---|---|---|
| **Faculty Lead (Teacher)** | `nandini@buildbots.com` | `onedirection` | Full access to `/teacher` OS console |
| **Real Student 1** | `mivaan@buildbots.ai` | `Mivaan@2026` | Day 1 Student LMS Dashboard (`/dashboard`) |
| **Real Student 2** | `tashvi@buildbots.ai` | `Tashvi@2026` | Day 1 Student LMS Dashboard (`/dashboard`) |
| **Test Student** | `teststudent@buildbots.ai` | `test1234` | Demo student dashboard (`/dashboard`) |
| **Test Parent** | `testparent@buildbots.ai` | `test1234` | Demo parent portal (`/parent`) |
| **Test Teacher** | `testteacher@buildbots.ai` | `test1234` | Demo teacher console (`/teacher`) |
