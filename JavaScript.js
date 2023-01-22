// 1) Referenciar o input
let input = document.querySelector('input[name=tarefa]');

// 2) Referenciar o button
let btn = document.querySelector('#botao');


// 3) Referenciar a lista
let lista = document.querySelector('#lista');

//Card
let card = document.querySelector('.card');

let tarefas = [
  'jogar GTA5',
  'Estudar python',
  'Estudar JavaScript',
  'Ver um filme',
  'Ler um livro'
];

function renderizarTarefas() {

  //Limpar a listagem de itens antes de renderizar novamente a tela
  lista.innerHTML = '';

  for (tarefa of tarefas) {
    // criar o item da lista
    let itemLista = document.createElement('li');

    // adicionar as classes no item da lista
    itemLista.setAttribute('class', 'list-group-item list-group-item-action');

    //Criar um texto 
    let itemTexto = document.createTextNode(tarefa);

    //Adicionar o texto no item da lista
    itemLista.appendChild(itemTexto);

    // Adicionar o item da lista na lista
    lista.appendChild(itemLista);
  }
}
//Executando a função renderizar as tarefas
renderizarTarefas();

// 0)inserindo dados na aplicação
// 1)precisamos escutar o evento de click no botão
btn.onclick = function(){
  // 2) Precisamos capturar o valor digitado pelo usuario no input  
  let novaTarefa = input.Value;

  if (novaTarefa !== " "){

    // 3) Precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela
    tarefas.push(novaTarefa);

    //Executar a função de renderizar a tela
    renderizarTarefas();

    // Limpar o input
    input.value = ' ';

    //Limpar mensagens de erros (spans)
    removerSpans();
  }else{
    //Limpar mensagens de erros (spans)
    removerSpans();

    let span = document.createElement('span');
    span.setAttribute('class', 'alert alert-warning');

    let msg = document.createTextNode('Você precisa informar a tarefa');

    span.appendChild(msg);

    card.appendChild(span);
  }

}

function removerSpans(){
  let spans = document.querySelectorAll('span');

  for(let i = 0; i < spans.length; i++){
    card.removeChild(spans[i]);
  }
  
}






