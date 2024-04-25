CREATE DATABASE db_application;

CREATE TABLE tb_administrator (id_administrator SERIAL NOT NULL, "user" varchar(255) NOT NULL, password varchar(255) NOT NULL, email varchar(255) NOT NULL, active bool NOT NULL, PRIMARY KEY (id_administrator));
CREATE TABLE tb_students (id_student SERIAL NOT NULL, ra varchar(10) NOT NULL UNIQUE, name varchar(255) NOT NULL, email varchar(255) NOT NULL, cpf varchar(11) NOT NULL, PRIMARY KEY (id_student));

INSERT INTO tb_administrator ("user", password, email, active)
VALUES ('administrator', '$2a$12$J6GL7p86NqeLYq6zFMfYru6Dr7/Lehbse6fuLoTiExGpbAucej05O', 'admin@online.com', true);