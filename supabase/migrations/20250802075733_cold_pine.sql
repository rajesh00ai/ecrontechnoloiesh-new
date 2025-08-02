-- SQL query to create the course_applications table with correct schema
CREATE TABLE IF NOT EXISTS course_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  course_name text NOT NULL,
  experience_level text NOT NULL,
  interest_message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE course_applications ENABLE ROW LEVEL SECURITY;

-- Add policy for authenticated users (adjust as needed for your security requirements)
CREATE POLICY "Allow all operations on course_applications"
  ON course_applications
  FOR ALL
  TO authenticated
  USING (true);