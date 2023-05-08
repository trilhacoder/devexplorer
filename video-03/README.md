# Série Dev Explorer - Projeto Full-stack

## 1. Projeto

O projeto é uma Aplicação Web chamada "Lista de Tarefas", onde será possível cadastrar, excluir, listar e editar tarefas por meio de uma página Web.

Projeto: https://github.com/trilhafront/devexplorer

<img style="max-width:500px" src="previa.png">

## 2. Banco de dados (PostgreSQL - Para armazenar as tarefas)

- [x] Fazer o Fork do projeto: https://github.com/trilhafront/devexplorer

- [x] Criar o ambiente (Github Codespaces) do Projeto

- [x] Instalar o banco Postgres:

    docker network create network
    
    docker create --network network --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres

- [x] Gerenciar o banco Postgres:

    docker start postgres (para iniciar o banco)

    docker run -it --rm --network network postgres psql -h postgres -U postgres (para conectar no banco)
        - Obs.: usar o comando quit para desconectar do banco
    docker ps (para verificar se o banco está no ar)
    
    docker stop postgres (para parar o banco)

- [x] Criar a tabela "tarefas" e fazer operações em SQL:

    create table tarefas (id serial primary key, titulo varchar(100), concluida boolean);

    insert into tarefas (titulo, concluida) values ('Estudar PostgreSQL', false);
    
    insert into tarefas (titulo, concluida) values ('Estudar Node.js', false);
    
    insert into tarefas (titulo, concluida) values ('Estudar Express.js', false);
    
    insert into tarefas (titulo, concluida) values ('Estudar JavaScript', false);
    
    insert into tarefas (titulo, concluida) values ('Estudar HTML', true);
    
    insert into tarefas (titulo, concluida) values ('Estudar CSS', false);
    
    select id, titulo, concluida from tarefas;

    truncate table tarefas; (para remover todas as linhas da tabela)

    drop table tarefas; (para remover a tabela)

## 3. API (pg-promise - Para se comunicar com o PostgreSQL)
- [x] npm install pg-promise (para se comunicar com o PostrgreSQL)
  - postgres://postgres:postgres@localhost:5432/postgres
