/*
  # Configure authentication settings

  1. Authentication
    - Disable email confirmation requirement
    - Set default value for email_confirmed_at
    - Update existing users' email confirmation status
*/

-- Disable email confirmation requirement by setting default value for new users
ALTER TABLE auth.users
ALTER COLUMN email_confirmed_at
SET DEFAULT NOW();

-- Update existing users to confirm their email
UPDATE auth.users
SET email_confirmed_at = NOW()
WHERE email_confirmed_at IS NULL;

-- Enable RLS on auth.users table for additional security
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$ 
BEGIN
    DROP POLICY IF EXISTS "Users can read own data" ON auth.users;
    DROP POLICY IF EXISTS "Users can update own data" ON auth.users;
EXCEPTION
    WHEN undefined_object THEN 
        NULL;
END $$;

-- Add policy for users to read their own data
CREATE POLICY "Users can read own data"
ON auth.users
FOR SELECT
TO authenticated
USING (auth.uid() = id);

-- Add policy for users to update their own data
CREATE POLICY "Users can update own data"
ON auth.users
FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);