-- Create albums table
CREATE TABLE albums (
    id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255) NOT NULL, release_year INT, genre VARCHAR(255), user_id INT UNSIGNED, FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Find many albums
SELECT * FROM albums;

-- Insert one album
INSERT INTO
    albums (
        title, release_year, genre, user_id
    )
VALUES (
        'Album Title', 2022, 'Genre', 1
    ) RETURNING *;

-- Find album by ID
SELECT * FROM albums WHERE id = 1;

-- Update one album by ID
UPDATE albums
SET
    title = 'Updated Album Title',
    release_year = 2023,
    genre = 'Updated Genre',
    user_id = 1
WHERE
    id = 1 RETURNING *;

-- Delete one album by ID
DELETE FROM albums WHERE id = 1 RETURNING *;