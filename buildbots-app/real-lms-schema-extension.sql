-- ====================================================
-- BUILDBOTS AI - REAL LMS DYNAMIC STUDENT SCHEMA & TRIGGER
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

-- 2. AUTOMATIC PROFILE CREATION TRIGGER ON AUTH SIGNUP
-- Creates profile, initial streak, and "New Inventor" badge when a student signs up or is created in Supabase Auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, display_name, role, robot_level, xp, current_month, current_class, experience)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', SPLIT_PART(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'display_name', SPLIT_PART(NEW.email, '@', 1)),
    'student', 1, 0, 1, 1, 'Beginner'
  )
  ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    full_name = EXCLUDED.full_name;

  INSERT INTO public.badges (student_id, badge_name, badge_icon)
  VALUES (NEW.id, 'New Inventor', '🏅')
  ON CONFLICT DO NOTHING;

  INSERT INTO public.streaks (student_id, current_streak, longest_streak)
  VALUES (NEW.id, 0, 0)
  ON CONFLICT (student_id) DO NOTHING;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Attach trigger to auth.users table
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
