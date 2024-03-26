const form = document.querySelector('#form');
const inputTarefa = document.querySelector('#inserir');
const listaTarefas = document.querySelector('.lista_tarefas');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(inputTarefa.value === ''){
        alert('Preencha o campo nome da tarefa.');
        return
    }

    const novoLi = document.createElement('li');
    const btnRm = document.createElement('input');


    novoLi.className = 'item_list';
    btnRm.className = 'btnRemove';
    btnRm.type = "button";
    btnRm.value = "remover";

    novoLi.textContent = `📌 ${inputTarefa.value}`;
    novoLi.appendChild(btnRm);


    listaTarefas.appendChild(novoLi);
    
    inputTarefa.value = '';

})

listaTarefas.addEventListener("click", (e) => {
    if(e.target.tagName === "INPUT" && e.target.type === "button" && e.target.value === 'remover')
    {
      const liToRemove = e.target.parentNode;
      liToRemove.remove();  
    }
})