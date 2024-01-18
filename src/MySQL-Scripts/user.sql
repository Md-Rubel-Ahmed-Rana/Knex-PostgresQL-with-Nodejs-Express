CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- all users
SELECT * FROM users;

-- insert one
INSERT INTO
    users (name, email, password)
VALUES (
        'John Doe', 'john@example.com', 'hashed_password'
    ) RETURNING *;

-- get by id
SELECT * FROM users WHERE id = 1;

-- update
UPDATE users
SET
    name = 'Updated Name',
    email = 'updated_email@example.com',
    password = 'updated_hashed_password'
WHERE
    id = 1 RETURNING *;

-- delete one
DELETE FROM users WHERE id = 1 RETURNING *;

-- get by email
SELECT * FROM users WHERE email = 'john@example.com' LIMIT 1;