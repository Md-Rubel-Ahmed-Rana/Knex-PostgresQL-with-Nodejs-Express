-- Create artists table
CREATE TABLE artists (
    id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Find many artists
SELECT * FROM artists;

-- Insert one artist
INSERT INTO artists (name) VALUES ('Artist Name') RETURNING *;

-- Find artist by ID
SELECT * FROM artists WHERE id = 1;

-- Update one artist by ID
UPDATE artists
SET
    name = 'Updated Artist Name'
WHERE
    id = 1 RETURNING *;

-- Delete one artist by ID
DELETE FROM artists WHERE id = 1 RETURNING *;