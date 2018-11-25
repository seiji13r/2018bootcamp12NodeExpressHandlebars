-- DROP DATABASE IF EXISTS burger_db;
-- CREATE DATABASE burger_db;
-- USE burger_db;

DROP TABLE IF EXISTS burger;
CREATE TABLE burger(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

SELECT * FROM burger;