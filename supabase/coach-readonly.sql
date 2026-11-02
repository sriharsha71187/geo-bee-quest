-- GeoBee Quest — optional READ-ONLY "coach" login for an outside assistant.
--
-- Lets one extra Supabase account read (never write or delete) your family's
-- progress rows, so a daily coaching job can see how your child is doing
-- without holding the parent password.
--
-- 1. Supabase dashboard → Authentication → Users → "Add user": create the coach
--    user (any email you control + a strong password). Copy its User UID.
-- 2. Copy your FAMILY account's User UID from the same list.
-- 3. Paste both below, then run this in the SQL Editor.
--
-- Revoke any time with:  drop policy "coach read family" on public.progress;

drop policy if exists "coach read family" on public.progress;
create policy "coach read family" on public.progress
  for select to authenticated
  using (
    auth.uid() = 'COACH_USER_UID_HERE'::uuid
    and user_id = 'FAMILY_USER_UID_HERE'::uuid
  );
