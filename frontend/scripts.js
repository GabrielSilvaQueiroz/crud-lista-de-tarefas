const button = document.querySelector('.add-task'); // Seleciona o botão de adicionar tarefa
const input = document.querySelector('.input-task'); // Seleciona o campo de input para digitar a tarefa
const listaCompleta = document.querySelector('.list-tasks'); // Seleciona a lista onde as tarefas serão exibidas

let minhaListaDeItens = []; // Inicializa uma lista vazia para armazenar as tarefas

// Função para carregar as tarefas da API
async function carregarTarefasDaAPI() {
    try {
        // Faz uma requisição GET para a rota /tarefas da API
        const response = await fetch('http://localhost:5000/tarefas');
        // Converte a resposta para JSON
        const data = await response.json();
        // Armazena as tarefas na lista minhaListaDeItens
        minhaListaDeItens = data;
        // Mostra as tarefas na lista
        mostrarTarefas();
    } catch (error) {
        // Exibe um erro no console se ocorrer algum problema ao carregar as tarefas
        console.error('Erro ao carregar tarefas da API:', error);
    }
}

// Função para adicionar uma nova tarefa
async function adicionarTarefa() {
    // Cria um objeto representando a nova tarefa com base no valor do input
    const novaTarefa = {
        descricao: input.value, // Ajustado para 'descricao' ao invés de 'tarefa'
        status: false // Mantido como falso por padrão
    };

    try {
        // Envia uma requisição POST para a rota /tarefas da API, enviando a nova tarefa como corpo da requisição
        const response = await fetch('http://localhost:5000/criarTarefa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaTarefa)
        });

        if (response.ok) {
            // Se a requisição for bem-sucedida, adiciona a nova tarefa à lista e limpa o input
            const tarefaSalva = await response.json();
            minhaListaDeItens.push(tarefaSalva);
            input.value = '';
            mostrarTarefas();
        } else {
            // Se a requisição não for bem-sucedida, exibe um erro no console
            console.error('Erro ao adicionar tarefa:', response.statusText);
        }
    } catch (error) {
        // Exibe um erro no console se ocorrer algum problema ao adicionar a tarefa
        console.error('Erro ao adicionar tarefa:', error);
    }
}

// Função para marcar uma tarefa como concluída ou não
async function concluirTarefa(posicao) {
    // Obtém o ID da tarefa a ser atualizada
    const id = minhaListaDeItens[posicao]._id;
    // Inverte o status da tarefa (concluída ou não)
    const status = minhaListaDeItens[posicao].status ? 0 : 1;

    try {
        // Envia uma requisição PUT para a rota /tarefas/:id da API, enviando o novo status da tarefa como corpo da requisição
        const response = await fetch(`http://localhost:5000/tarefas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status })
        });

        if (response.ok) {
            // Se a requisição for bem-sucedida, atualiza o status da tarefa na lista e mostra as tarefas
            minhaListaDeItens[posicao].status = !minhaListaDeItens[posicao].status;
            mostrarTarefas();
        } else {
            // Se a requisição não for bem-sucedida, exibe um erro no console
            console.error('Erro ao atualizar status da tarefa:', response.statusText);
        }
    } catch (error) {
        // Exibe um erro no console se ocorrer algum problema ao atualizar o status da tarefa
        console.error('Erro ao atualizar status da tarefa:', error);
    }
}

// Função para deletar uma tarefa
async function deletarItem(posicao) {
    // Obtém o ID da tarefa a ser deletada
    const id = minhaListaDeItens[posicao]._id;

    try {
        // Envia uma requisição DELETE para a rota /tarefas/:id da API
        const response = await fetch(`http://localhost:5000/tarefas/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            // Se a requisição for bem-sucedida, remove a tarefa da lista e mostra as tarefas
            minhaListaDeItens.splice(posicao, 1);
            mostrarTarefas();
        } else {
            // Se a requisição não for bem-sucedida, exibe um erro no console
            console.error('Erro ao excluir tarefa:', response.statusText);
        }
    } catch (error) {
        // Exibe um erro no console se ocorrer algum problema ao excluir a tarefa
        console.error('Erro ao excluir tarefa:', error);
    }
}

// Função para mostrar as tarefas na lista
function mostrarTarefas() {
    let novaLi = '';

    minhaListaDeItens.forEach((item, posicao) => {
        // Cria uma string HTML para representar cada tarefa na lista
        novaLi = novaLi + `
        <li class="task ${item.status && 'done'}">
            <img src="./assets/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
            <p>${item.descricao}</p> <!-- Alterado para exibir a descrição da tarefa -->
            <img src="./assets/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
        </li>
        `;
    });

    // Atualiza o conteúdo da lista com as novas tarefas
    listaCompleta.innerHTML = novaLi;
}

// Função para recarregar as tarefas ao carregar a página
window.addEventListener('load', async () => {
    await carregarTarefasDaAPI();
});

// Adiciona um event listener para o botão de adicionar tarefa
button.addEventListener('click', adicionarTarefa);
