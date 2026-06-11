/*
  # Remove duplicate simulators

  1. Changes
    - Remove duplicate entries from the simulators table
    - Keep only one instance of each unique simulator based on URL
*/

-- Create a temporary table to store unique simulators
CREATE TEMP TABLE unique_simulators AS
SELECT DISTINCT ON (url) *
FROM simulators
ORDER BY url, created_at ASC;

-- Delete all records from simulators
TRUNCATE simulators;

-- Reinsert unique records
INSERT INTO simulators
SELECT * FROM unique_simulators;

-- Drop temporary table
DROP TABLE unique_simulators;