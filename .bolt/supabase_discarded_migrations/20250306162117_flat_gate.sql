/*
  # Setup Admin Authentication

  1. Changes
    - Create admin user account with proper constraints
    - Set email confirmation timestamp
    
  2. Security
    - Admin user will be created with specified credentials
    - Email confirmation is automatically set
*/

-- Create the admin user if it doesn't exist
DO $$
DECLARE
  user_id UUID;
BEGIN
  -- Check if user already exists
  SELECT id INTO user_id
  FROM auth.users
  WHERE email = 'benjamin.hofman@hotmail.com';

  -- If user doesn't exist, create it
  IF user_id IS NULL THEN
    INSERT INTO auth.users (
      id,
      email,
      encrypted_password,
      email_confirmed_at,
      created_at,
      updated_at,
      last_sign_in_at,
      raw_app_meta_data,
      raw_user_meta_data,
      aud,
      role
    ) VALUES (
      gen_random_uuid(),
      'benjamin.hofman@hotmail.com',
      crypt('060606', gen_salt('bf')),
      NOW(),
      NOW(),
      NOW(),
      NOW(),
      '{"provider":"email","providers":["email"]}',
      '{}',
      'authenticated',
      'authenticated'
    );
  ELSE
    -- Update existing user's email confirmation
    UPDATE auth.users
    SET email_confirmed_at = NOW()
    WHERE id = user_id;
  END IF;
END $$;