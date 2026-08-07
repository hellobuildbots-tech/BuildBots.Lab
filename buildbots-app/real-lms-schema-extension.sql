-- ====================================================
-- BUILDBOTS AI - REAL LMS DYNAMIC STUDENT SCHEMA & SEED
-- ====================================================

-- 1. EXTEND PROFILES TABLE WITH FULL LMS METADATA
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS display_name TEXT,
ADD COLUMN IF NOT EXISTS age INT DEFAULT 7,
ADD COLUMN IF NOT EXISTS grade INT DEFAULT 2,
ADD COLUMN IF NOT EXISTS school TEXT,
ADD COLUMN IF NOT EXISTS parent_name TEXT,
ADD COLUMN IF NOT EXISTS parent_email TEXT,
ADD COLUMN IF NOT EXISTS current_month INT DEFAULT 1,
ADD COLUMN IF NOT EXISTS current_class INT DEFAULT 1,
ADD COLUMN IF NOT EXISTS experience TEXT DEFAULT 'Beginner',
ADD COLUMN IF NOT EXISTS xp INT DEFAULT 0;

-- 2. SEED REAL CLASSROOM STUDENTS (MIVAAN & TASHVI)
-- (These profiles mirror Supabase Auth users)
INSERT INTO public.profiles (
  id, email, full_name, display_name, age, grade, role, robot_level, xp, current_month, current_class, experience
) VALUES
(
  'a0000000-0000-0000-0000-000000000001',
  'mivaan@buildbots.ai',
  'Mivaan Dangayach',
  'Mivaan',
  7, 2, 'student', 1, 0, 1, 1, 'Beginner'
),
(
  'a0000000-0000-0000-0000-000000000002',
  'tashvi@buildbots.ai',
  'Tashvi Khandelwal',
  'Tashvi',
  7, 2, 'student', 1, 0, 1, 1, 'Beginner'
)
ON CONFLICT (email) DO UPDATE SET
  full_name = EXCLUDED.full_name,
  age = EXCLUDED.age,
  grade = EXCLUDED.grade;

-- SEED INITIAL NEW INVENTOR BADGES
INSERT INTO public.badges (student_id, badge_name, badge_icon) VALUES
('a0000000-0000-0000-0000-000000000001', 'New Inventor', '🏅'),
('a0000000-0000-0000-0000-000000000002', 'New Inventor', '🏅')
ON CONFLICT DO NOTHING;

-- SEED INITIAL STREAKS
INSERT INTO public.streaks (student_id, current_streak, longest_streak) VALUES
('a0000000-0000-0000-0000-000000000001', 0, 0),
('a0000000-0000-0000-0000-000000000002', 0, 0)
ON CONFLICT (student_id) DO NOTHING;
