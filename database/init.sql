CREATE TABLE auth_user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(150) NOT NULL UNIQUE,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    email VARCHAR(254) NOT NULL,
    password VARCHAR(128) NOT NULL,
    is_staff BOOLEAN NOT NULL,
    is_active BOOLEAN NOT NULL,
    is_superuser BOOLEAN NOT NULL,
    is_authenticated BOOLEAN NOT NULL,
    is_anonymous BOOLEAN NOT NULL,
    last_login DATETIME NOT NULL,
    date_joined DATETIME NOT NULL
);

CREATE TABLE UserProfile (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL UNIQUE,
    hometown VARCHAR(100) NOT NULL,
    age INTEGER NOT NULL,
    gender VARCHAR(10) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES auth_user (id) ON DELETE CASCADE
);


-- Insertion des données dans la table User
INSERT INTO auth_user (username, first_name, last_name, email, password, is_staff, is_active, is_superuser, is_authenticated, is_anonymous, last_login, date_joined)
VALUES
    ('john_doe', 'John', 'Doe', 'john@example.com', 'password123', 1, 1, 0, 0, 0, '2023-01-01 12:00:00', '2023-01-01 12:00:00'),
    ('jane_doe', 'Jane', 'Doe', 'jane@example.com', 'password123', 0, 1, 0, 0, 0, '2023-01-02 12:00:00', '2023-01-01 12:00:00'),
    ('alice_smith', 'Alice', 'Smith', 'alice@example.com', 'password123', 0, 1, 0, 0, 0, '2023-01-03 12:00:00', '2023-01-01 12:00:00'),
    ('bob_johnson', 'Bob', 'Johnson', 'bob@example.com', 'password123', 0, 1, 0, 0, 0, '2023-01-04 12:00:00', '2023-01-01 12:00:00'),
    ('sarah_williams', 'Sarah', 'Williams', 'sarah@example.com', 'password123', 0, 1, 0, 0, 0, '2023-01-05 12:00:00', '2023-01-01 12:00:00'),
    ('Therry_williams', 'Terry', 'Williams', 'terry@example.com', 'password123', 0, 1, 0, 0, 0, '2023-01-05 12:00:00', '2023-01-01 12:00:00'),
    ('ali_wayles', 'Ali', 'Wayles', 'ali@example.com', 'password123', 0, 1, 0, 0, 0, '2023-01-05 12:00:00', '2023-01-01 12:00:00'),
    ('sunny_wayles', 'Sunny', 'Wayles', 'sunny@example.com', 'password123', 0, 1, 0, 0, 0, '2023-01-05 12:00:00', '2023-01-01 12:00:00'),
    ('charles_ohara', 'Charles', 'Ohara', 'cohara@example.com', 'password123', 0, 1, 0, 0, 0, '2023-01-05 12:00:00', '2023-01-01 12:00:00'),
    ('alice_ohara', 'Alice', 'Ohara', 'aohara@example.com', 'password123', 0, 1, 0, 0, 0, '2023-01-05 12:00:00', '2023-01-01 12:00:00'),
    ('peter_ohara', 'Peter', 'Ohara', 'pohara@example.com', 'password123', 0, 1, 0, 0, 0, '2023-01-05 12:00:00', '2023-01-01 12:00:00')
    ;

-- Insertion des données dans la table UserProfile
INSERT INTO UserProfile (user_id, hometown, age, gender)
VALUES
    (1, 'New York', 30, 'Male'),
    (2, 'Los Angeles', 28, 'Female'),
    (3, 'Chicago', 35, 'Female'),
    (4, 'Miami', 25, 'Male'),
    (5, 'Seattle', 55, 'Female'),
    (6, 'Paris', 12, 'Male'),
    (7, 'Seattle', 22, 'Male'),
    (8, 'Chicago', 32, 'Female'),
    (9, 'Seattle', 24, 'Male'),
    (10, 'Vendome', 35, 'Female'),
    (11, 'Nantes', 39, 'Male')
    ;
