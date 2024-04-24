CREATE DATABASE db_application;

CREATE TABLE tb_administrator (id_administrator SERIAL NOT NULL, "user" varchar(255), password varchar(255), email varchar(255), active bool, PRIMARY KEY (id_administrator));
CREATE TABLE tb_student (id_student SERIAL NOT NULL, ra int8, name varchar(255), email varchar(255), cpf varchar(255), PRIMARY KEY (id_student));

INSERT INTO tb_administrator ("user", password, email, active)
VALUES ('administrator', '$2y$10$aL6ntBPQwveATikuRiH/m.YGkXP3KlPxvudRn2E0RAkaWPhYhUGdS', 'admin@online.com', true);