create table tarefas (id serial primary key, titulo varchar(100), concluida boolean);
insert into tarefas (titulo, concluida) values ('Estudar HTML', true);
insert into tarefas (titulo, concluida) values ('Estudar CSS', false);
insert into tarefas (titulo, concluida) values ('Estudar JavaScript', false);
insert into tarefas (titulo, concluida) values ('Estudar Node.js', false);
insert into tarefas (titulo, concluida) values ('Estudar PostgreSQL', false);
select id, titulo, concluida from tarefas;
-- para remover todas as linhas da tabela tarefas: truncate table tarefas;

