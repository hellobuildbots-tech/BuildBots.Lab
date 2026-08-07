-- ====================================================
-- BUILDBOTS AI - PHASE 3 SCHEMA EXTENSION (PARENT & AI)
-- ====================================================

-- 1. PARENT-STUDENT LINKAGE TABLE
CREATE TABLE IF NOT EXISTS public.parent_student_links (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  linked_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(parent_id, student_id)
);

-- 2. HOMEWORK SUBMISSIONS TABLE
CREATE TABLE IF NOT EXISTS public.homework_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  assignment_id UUID REFERENCES public.assignments(id) ON DELETE CASCADE NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT CHECK (file_type IN ('image', 'video', 'pdf')) DEFAULT 'image',
  teacher_feedback TEXT,
  grade TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. AI INTERACTION LOGS & ARCHITECTURE TABLE
CREATE TABLE IF NOT EXISTS public.ai_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  feature TEXT CHECK (feature IN ('tutor', 'reviewer', 'quiz_gen', 'parent_report', 'summary')) NOT NULL,
  prompt_input TEXT NOT NULL,
  ai_output TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS POLICIES FOR PARENT & HOMEWORK
ALTER TABLE public.parent_student_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.homework_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Parents view linked students" ON public.parent_student_links FOR SELECT USING (auth.uid() = parent_id);
CREATE POLICY "Students submit homework" ON public.homework_submissions FOR ALL USING (auth.uid() = student_id);
CREATE POLICY "Users view own AI logs" ON public.ai_logs FOR SELECT USING (auth.uid() = student_id);
