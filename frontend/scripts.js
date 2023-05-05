listarTarefas()

async function listarTarefas() {
    let listaDeTarefas = document.querySelector("#listaDeTarefas")
    listaDeTarefas.innerHTML = ""
    
    let response = await fetch("http://localhost:3000/tarefas")
    let tarefas = await response.json()                   
    tarefas.forEach(tarefa => {
        listaDeTarefas.innerHTML += `
            <form id="${tarefa.id}">
                <input name="concluida" class="concluida" onchange="atualizarTarefa(event)" ${tarefa.concluida ? "checked" : ""} type="checkbox">
                <input name="titulo" class="titulo" onblur="atualizarTarefa(event)" value="${tarefa.titulo}">
                <button onclick="removerTarefa(event)" class="botaoRemover">x</button>
            </form>`
    })
}

async function adicionarTarefa(event) {
    console.log(event)
    await fetch("http://localhost:3000/tarefas", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            titulo: event.target.parentElement.cadastroTitulo.value,
            concluida: false
        })
    })
    listarTarefas()
}

async function removerTarefa(event) {
    await fetch(`http://localhost:3000/tarefas/${event.target.parentElement.id}`, { method: 'DELETE' })
    listarTarefas()
}

async function atualizarTarefa(event) {
    await fetch(`http://localhost:3000/tarefas/${event.target.parentElement.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            titulo: event.target.parentElement.titulo.value,
            concluida: event.target.parentElement.concluida.checked
        })
    })
    listarTarefas()
}