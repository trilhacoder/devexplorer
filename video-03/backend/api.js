let pgp = require("pg-promise")

let bd = pgp()("postgres://postgres:postgres@localhost:5432/postgres")

//atualizaTarefa("Estudar PostgreSQL atu2", true)
getTarefas()
//removerTarefa(1)
//inserirTarefa("estudar backend", false)

async function inserirTarefa(titulo, concluida) {
    await bd.query('insert into tarefas (titulo, concluida) values ($1, $2)', [ titulo, concluida ])
}

async function removerTarefa(id) {
    await bd.query('delete from tarefas where id = $1', [ id ])
}

async function getTarefas() {
    let tarefas = await bd.query("select * from tarefas")
    console.log(tarefas)
}

async function atualizaTarefa(id, titulo, concluida) {
    await bd.query('update tarefas set titulo = $1, concluida = $2 where id = $3', [ titulo, concluida, id ])
}
