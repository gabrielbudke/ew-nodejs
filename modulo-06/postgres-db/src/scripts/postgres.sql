DROP TABLE IF EXISTS heroes;
CREATE TABLE heroes (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  power TEXT NOT NULL
);

--create
INSERT INTO heroes (name, power) 
VALUES ('Flash', 'Velocidade'),
       ('Aquaman', 'Falar com os peixes'),
       ('Batman', 'Dinheiro');

--read
SELECT * FROM heroes;
SELECT * FROM heroes WHERE name = 'Flash';

--update
UPDATE heroes 
   SET name = 'Goku', power = 'Deus'
 WHERE id = 1;

 --delete
 DELETE FROM heroes
 WHERE id = 2;