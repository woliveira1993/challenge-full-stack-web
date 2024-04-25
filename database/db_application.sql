CREATE DATABASE db_application;

CREATE TABLE tb_administrator (id_administrator SERIAL NOT NULL, "user" varchar(255) NOT NULL, password varchar(255) NOT NULL, email varchar(255) NOT NULL, active bool NOT NULL, PRIMARY KEY (id_administrator));
CREATE TABLE tb_students (id_student SERIAL NOT NULL, ra varchar(10) NOT NULL UNIQUE, name varchar(255) NOT NULL, email varchar(255) NOT NULL, cpf varchar(11) NOT NULL, PRIMARY KEY (id_student));

INSERT INTO tb_administrator ("user", password, email, active)
VALUES ('administrator', '$2a$12$J6GL7p86NqeLYq6zFMfYru6Dr7/Lehbse6fuLoTiExGpbAucej05O', 'admin@online.com', true);

INSERT INTO tb_students (ra, name, email, cpf) VALUES
('3495943083', 'Joao Silva a3', 'joao@silva.com', '19238493204'),
('2399328493', 'Matheus', 'matheus@email.com', '23842938239'),
('4985439058', 'Lucas', 'lucas@email.com', '23482394239'),
('4920349823', 'Giovanna', 'giovanna@email.com', '39428923849'),
('4596894549', 'Rogerio', 'rogerio@email.com', '23940329492'),
('9458594454', 'Mauricio', 'mauricio@email.com', '39234234932'),
('9843958349', 'Ruan', 'ruan@email.com', '93392423942'),
('5983495348', 'William', 'william@email.com', '84453458934'),
('4953495834', 'Washington', 'washington@email.com', '39423904230');