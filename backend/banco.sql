drop database dbtarefas;
create database dbtarefas;
show databases;
use dbtarefas;
show tables;
create table tarefas (id int auto_increment, titulo varchar(100), concluida boolean, primary key (id));
insert into tarefas (titulo, concluida) values ("Estudar HTML", true);
insert into tarefas (titulo, concluida) values ("Estudar CSS", false);
insert into tarefas (titulo, concluida) values ("Estudar JavaScript", false);
insert into tarefas (titulo, concluida) values ("Estudar Node.js", false);
select id, titulo, concluida from tarefas;
-- use o comando abaixo caso queira remover todas as linhas da tabela tarefas:
-- truncate table tarefas;
