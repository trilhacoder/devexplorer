let express = require('express')
let cors = require('cors')
let pgp = require('pg-promise');

let app = express()

app.use(cors())
app.use(express.json())

let banco = pgp()('postgres://postgres:admin@localhost:5432/postgres')

app.get('/tarefas', async function (req, res) {
    let tarefas = await banco.query('select id, titulo, concluida from tarefas order by id')
    res.json(tarefas)
})

app.post('/tarefas', async function (req, res) {
    await banco.query("insert into tarefas (titulo, concluida) values ($1, $2)", [req.body.titulo, req.body.concluida])
    res.end()
})

app.delete('/tarefas/:id', async function (req, res) {
    await banco.query("delete from tarefas where id = $1", [req.params.id]);
    res.end()
})

app.put('/tarefas/:id', async function (req, res) {
    await banco.query("update tarefas set titulo = $1, concluida = $2 where id = $3", [req.body.titulo, req.body.concluida, req.params.id])
    res.end()
})

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})