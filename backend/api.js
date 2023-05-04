let express = require('express')
let cors = require('cors')
let mysql = require('mysql2');

let app = express()

app.use(cors())
app.use(express.json())

let connection = mysql.createConnection('mysql://root:admin@localhost:3306/dbtarefas')

app.get('/tarefas', function (req, res) {
    connection.query('select id, titulo, concluida from tarefas', (error, results, fields) => res.json(results))
})

app.post('/tarefas', (req, res) => {
    connection.query("insert into tarefas (titulo, concluida) values (?, ?)", [req.body.titulo, req.body.concluida], (error, results, fields) => res.end())
})

app.delete('/tarefas/:id', (req, res) => {
    connection.query("delete from tarefas where id = ?", [req.params.id], (error, results, fields) => res.end());
})

app.put('/tarefas/:id', (req, res) => {
    connection.query("update tarefas set titulo = ?, concluida = ? where id = ?", [req.body.titulo, req.body.concluida, req.params.id], (error, results, fields) => res.end())
})

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})