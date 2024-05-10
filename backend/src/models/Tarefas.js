// Importa o Mongoose, que é uma biblioteca para modelar objetos MongoDB
import mongoose from 'mongoose';

// Define um esquema (Schema) para os documentos da coleção "tarefas"
const tarefasSchema = new mongoose.Schema({
    descricao: { type: String, required: true },   // Campo "descricao" do tipo String, obrigatório
    status: { type: Number, default: 0 }, // Adiciona o campo status para indicar se a tarefa está concluída (0 para não concluída, 1 para concluída)
    created_at: { type: Date, default: Date.now }, // Adiciona o campo created_at com a data atual
    updated_at: { type: Date, default: null } //Adiciona o campo updated_at para listar caso haja alguma modificação na tarefa
});

// Cria um modelo (Model) chamado "Tarefas" usando o esquema definido anteriormente
const Tarefas = mongoose.model('Tarefas', tarefasSchema);

// Exporta o modelo "Produto" para que possa ser importado e utilizado em outros arquivos do aplicativo
export default Tarefas;