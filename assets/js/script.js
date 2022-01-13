/*
Principais Objetivos

1. Criar uma nova tarefa
 a. Capturar conteúdo adicionado pelo usuário - concluído.
 b. Criar nova tarefa
 c. Adicionar nova tarefa na página
 Obs: esses passos vão ocorrer a partir do click no botão

2. Marcar uma tarefa como concluída

3. Remover uma tarefa
 a. Capturar todas as tarefas
 b. Identificar a tarefa clicada
 c. Remover a tarefa
*/

const buttonAddTarefa = document.querySelector(".formularioTarefa button");
const campoAddTarefa = document.getElementById("inputAdicionarTarefa");
const listaItens = document.querySelector(".listaTarefas ul");
const imagem = document.querySelector(".addTarefas");

buttonAddTarefa.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
    imagem.remove();

    const conteudoCampo = campoAddTarefa.value;

    /* Criando Lista */
    let listItem = document.createElement("li");
    listaItens.appendChild(listItem);

    /* Nome da Tarefa */
    let title = document.createElement("h2");
    title.innerHTML = conteudoCampo;
    listItem.appendChild(title);

    /* Container dos Botões */
    let div = document.createElement("div");
    div.classList.add("itemAdd");
    listItem.appendChild(div);

    /* Botão Finalizar Tarefa */
    let buttonFinalizarTarefa = document.createElement("button");
    buttonFinalizarTarefa.classList.add("botaoFinalizarTarefa");
    buttonFinalizarTarefa.addEventListener("click", finalizarTarefa);
    div.appendChild(buttonFinalizarTarefa);

    /* Botão Remover Tarefa */
    let buttonRemove = document.createElement("button");
    let imgButton = document.createElement("img");
    imgButton.classList.add("trash");
    imgButton.setAttribute("src", "./assets/img/trash.svg")

    buttonRemove.appendChild(imgButton);

    div.appendChild(buttonRemove);

    document.getElementById('inputAdicionarTarefa').value='';
    
    const listaBotoesRemover = document.querySelectorAll(".botaoFinalizarTarefa ~ button");
    adicionarEventHandler(listaBotoesRemover);
}

function adicionarEventHandler(listaBotoesRemover) {
    for(let i = 0; i < listaBotoesRemover.length; i++) {
        const buttonRemover = listaBotoesRemover[i];

        buttonRemover.addEventListener("click", removerTarefa);
    }
}

function removerTarefa(evento){
    const buttonClicado = evento.currentTarget;
    const tarefaClicada = buttonClicado.closest('li');
    tarefaClicada.remove();
}

function finalizarTarefa(evento){
    const buttonClicado = evento.currentTarget;
    const tarefaClicada = buttonClicado.closest("li");
    
    tarefaClicada.classList.toggle("tarefaFinalizada");
}

const inputClean = document.getElementById("inputModoClean");
const body = document.querySelector("body");
const section = document.querySelector("section");
const subtitulo = document.querySelector(".subtitulo");
const textButton = document.querySelector(".formularioTarefa button")

inputClean.addEventListener("click", ativarModoNoturno);

function ativarModoNoturno(){
    body.classList.toggle("Noturno");
    section.classList.toggle("Noturno");
    subtitulo.classList.toggle("Noturno");
    textButton.classList.toggle("textNoturno")
}