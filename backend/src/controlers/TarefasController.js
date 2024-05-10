import Tarefas from '../models/Tarefas.js'; // Importa o modelo de Tarefas

// Método para listar todas as tarefas cadastradas.
export const listarTarefas = async (req, res) => {
    try {
        const tarefas = await Tarefas.find(); // Busca todas as tarefas no banco de dados
        if (tarefas.length === 0) { // Se nenhuma tarefa for encontrada
            return res.status(404).json({ message: 'Nenhuma tarefa encontrada na base de dados.' });
        }
        res.status(200).json(tarefas); // Retorna as tarefas encontradas
    } catch (error) {
        res.status(500).json({ message: error.message }); // Retorna mensagem de erro caso ocorra um erro no servidor
    }
};

// Método para criar uma nova tarefa.
export const criarTarefa = async (req, res) => {
    const { descricao } = req.body; // Extrai a descrição da tarefa do corpo da requisição
    const novaTarefa = new Tarefas({ // Cria um novo objeto de Tarefa
        descricao,
        created_at: new Date() // Adiciona a data de criação
    });

    try {
        const tarefaSalva = await novaTarefa.save(); // Salva a nova tarefa no banco de dados
        res.status(201).json(tarefaSalva); // Retorna a tarefa criada
    } catch (error) {
        res.status(400).json({ message: error.message }); // Retorna mensagem de erro caso ocorra um erro no servidor
    }
};

// Método para atualizar uma tarefa com base no ID fornecido.
export const atualizarTarefa = async (req, res) => {
    const { id } = req.params; // Obtém o ID da tarefa a ser atualizada da URL da requisição
    const { descricao, status } = req.body; // Extrai os dados atualizados do corpo da requisição

    try {
        const tarefaAtualizada = await Tarefas.findByIdAndUpdate(
            id,
            {
                $set: {
                    descricao: descricao,
                    status: status,
                    updated_at: new Date() // Adiciona a data de atualização
                }
            },
            { new: true } // Para retornar o documento atualizado
        );

        if (!tarefaAtualizada) { // Se nenhuma tarefa for encontrada com o ID fornecido
            return res.status(404).json({ message: 'Tarefa não encontrada.' });
        }

        res.status(200).json(tarefaAtualizada); // Retorna a tarefa atualizada
    } catch (error) {
        res.status(500).json({ message: error.message }); // Retorna mensagem de erro caso ocorra um erro no servidor
    }
};

// Método para deletar uma tarefa com base no ID fornecido.
export const deletarTarefa = async (req, res) => {
    const { id } = req.params; // Obtém o ID da tarefa a ser deletada da URL da requisição

    try {
        const tarefaDeletada = await Tarefas.findByIdAndDelete(id); // Busca e deleta a tarefa no banco de dados
        if (!tarefaDeletada) { // Se nenhuma tarefa for encontrada com o ID fornecido
            return res.status(404).json({ message: 'Tarefa não encontrada.' });
        }
        res.status(200).json({ message: 'Tarefa deletada com sucesso.' }); // Retorna mensagem de sucesso
    } catch (error) {
        res.status(500).json({ message: error.message }); // Retorna mensagem de erro caso ocorra um erro no servidor
    }
};
