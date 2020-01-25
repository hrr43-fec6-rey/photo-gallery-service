DROP DATABASE IF EXISTS DibsOnDinnerPhotos;

CREATE DATABASE DibsOnDinnerPhotos;

USE DibsOnDinnerPhotos;

CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT,
  url text NOT NULL,
  restaurant_id int NOT NULL,
);
