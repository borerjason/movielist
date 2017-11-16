CREATE DATABASE MOVIES;

USE MOVIES;

DROP TABLE IF EXISTS (`MOVIES`);

CREATE TABLE movies (
  `TITLE` VARCHAR(255) NULL DEFAULT NULL,
  `Popularity` DECIMAL(4) NULL DEFAULT NULL,
  `Date` VARCHAR(255) NULL DEFAULT NULL,
  `Watched` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`Title`)
)

