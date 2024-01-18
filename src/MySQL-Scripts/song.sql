-- Create songs table
CREATE TABLE songs (
    id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255) NOT NULL, duration INT, album_id INT UNSIGNED, user_id INT UNSIGNED, FOREIGN KEY (album_id) REFERENCES albums (id) ON DELETE CASCADE, FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Find many songs
SELECT * FROM songs;

-- Find songs by album
SELECT * FROM songs WHERE album_id = 1;

-- Find songs by artist
SELECT * FROM songs WHERE user_id = 1;

-- Insert one song
INSERT INTO
    songs (
        title, duration, album_id, user_id
    )
VALUES ('Song Title', 300, 1, 1) RETURNING *;

-- Find song by ID
SELECT * FROM songs WHERE id = 1;

-- Update one song by ID
UPDATE songs
SET
    title = 'Updated Song Title',
    duration = 400,
    album_id = 1,
    user_id = 1
WHERE
    id = 1 RETURNING *;

-- Delete one song by ID
DELETE FROM songs WHERE id = 1 RETURNING *;