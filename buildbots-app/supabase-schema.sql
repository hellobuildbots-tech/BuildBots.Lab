-- ====================================================
-- BUILDBOTS AI - COMPLETE SUPABASE POSTGRESQL SCHEMA
-- ====================================================

-- 1. PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT CHECK (role IN ('student', 'parent', 'teacher', 'admin')) DEFAULT 'student',
  avatar_url TEXT,
  robot_level INT DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. LESSONS TABLE
CREATE TABLE IF NOT EXISTS public.lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lesson_number INT NOT NULL,
  month INT NOT NULL,
  class_number INT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  difficulty TEXT CHECK (difficulty IN ('Beginner', 'Intermediate', 'Advanced')) DEFAULT 'Beginner',
  duration TEXT DEFAULT '30-45 Mins',
  html_path TEXT NOT NULL,
  badge_name TEXT,
  xp_reward INT DEFAULT 150,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. STUDENT PROGRESS TABLE
CREATE TABLE IF NOT EXISTS public.student_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE NOT NULL,
  completed BOOLEAN DEFAULT false,
  stars_earned INT DEFAULT 0,
  score INT DEFAULT 0,
  time_spent_seconds INT DEFAULT 0,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(student_id, lesson_id)
);

-- 4. ROBOT LEVELS TABLE
CREATE TABLE IF NOT EXISTS public.robot_levels (
  level INT PRIMARY KEY,
  title TEXT NOT NULL,
  min_xp INT NOT NULL,
  badge_icon TEXT NOT NULL,
  unlocked_skin TEXT NOT NULL
);

-- 5. XP TABLE
CREATE TABLE IF NOT EXISTS public.xp (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  total_xp INT DEFAULT 0,
  weekly_xp INT DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. BADGES TABLE
CREATE TABLE IF NOT EXISTS public.badges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  badge_name TEXT NOT NULL,
  badge_icon TEXT NOT NULL,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. STREAKS TABLE
CREATE TABLE IF NOT EXISTS public.streaks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL UNIQUE,
  current_streak INT DEFAULT 1,
  longest_streak INT DEFAULT 1,
  last_activity_date DATE DEFAULT CURRENT_DATE
);

-- ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.xp ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.streaks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;

-- Allow users to read all lessons & robot levels
CREATE POLICY "Public lessons access" ON public.lessons FOR SELECT USING (true);
CREATE POLICY "Public robot_levels access" ON public.robot_levels FOR SELECT USING (true);

-- Allow students to view & edit their own data
CREATE POLICY "Users view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Students view own progress" ON public.student_progress FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Students insert/update own progress" ON public.student_progress FOR ALL USING (auth.uid() = student_id);

CREATE POLICY "Students view own xp" ON public.xp FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Students view own badges" ON public.badges FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Students view own streaks" ON public.streaks FOR SELECT USING (auth.uid() = student_id);

-- SEED DATA FOR LESSON 1
INSERT INTO public.lessons (lesson_number, month, class_number, title, description, difficulty, duration, html_path, badge_name, xp_reward)
VALUES (
  1, 1, 1,
  'The Secret Inventor''s Lab & Flashlight Discovery',
  'Discover what a robot is, feed Bolt energy, and wire your very first battery-to-LED light circuit!',
  'Beginner',
  '30 Mins',
  '/lessons/month-1/class-1/index.html',
  'Junior Robot Explorer',
  150
) ON CONFLICT DO NOTHING;

-- SEED ROBOT LEVELS
INSERT INTO public.robot_levels (level, title, min_xp, badge_icon, unlocked_skin) VALUES
(1, 'Circuit Explorer', 0, '🔋', 'Basic Cyan Bot'),
(2, 'Junior Engineer', 200, '🛠️', 'Bronze Mechanic Bot'),
(3, 'Robot Master', 500, '🚀', 'Golden Hero Bot'),
(4, 'AI Architect', 1000, '🔮', 'Quantum Holographic Bot')
ON CONFLICT DO NOTHING;
