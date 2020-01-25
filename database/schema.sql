DROP DATABASE IF EXISTS DibsOnDinnerPhotos;

CREATE DATABASE DibsOnDinnerPhotos;

USE DibsOnDinnerPhotos;

CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  image text NOT NULL,
  restaurant_id int NOT NULL
);

INSERT INTO photos (id, image, restaurant_id) VALUES (1,'https://picsum.photos/id/237/200' , 1);

INSERT INTO photos (id, image, restaurant_id) VALUES (2, 'https://picsum.photos/id/1025/200', 1);

INSERT INTO photos (id, image, restaurant_id) VALUES (3, 'https://picsum.photos/id/1035/200', 1);

INSERT INTO photos (id, image, restaurant_id) VALUES (4, 'https://picsum.photos/id/1060/200', 1);

INSERT INTO photos (id, image, restaurant_id) VALUES (5, 'https://picsum.photos/id/1069/200', 1);

INSERT INTO photos (id, image, restaurant_id) VALUES (6, 'https://picsum.photos/id/1062/200', 1);

INSERT INTO photos (id, image, restaurant_id) VALUES (7, 'https://picsum.photos/id/1073/200', 1);

INSERT INTO photos (id, image, restaurant_id) VALUES (8, 'https://picsum.photos/id/1074/200', 1);

INSERT INTO photos (id, image, restaurant_id) VALUES (9, 'https://picsum.photos/id/113/200', 1);

INSERT INTO photos (id, image, restaurant_id) VALUES (10, 'https://picsum.photos/id/169/200', 1);