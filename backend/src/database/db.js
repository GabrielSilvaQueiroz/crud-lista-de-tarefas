// Importa a biblioteca mongoose para interagir com o MongoDB
import mongoose from "mongoose"

// Importa a biblioteca dotenv para carregar variáveis de ambiente de um arquivo .env
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Variáveis de Ambiente localizadas no arquivo .env
const db_user = process.env.DB_USER // Nome de usuário do banco de dados MongoDB
const db_pass = process.env.DB_PASSWORD // Senha do banco de dados MongoDB
const cluster = process.env.DB_CLUSTER // Nome do cluster MongoDB (Cluster é o conjunto do servidor de banco de dados MongoDB que trabalham juntos para armazenar e gerenciar os dados.)
const db_name = process.env.DB_NAME // Nome do banco de dados MongoDB

// Função que conecta ao banco de dados MongoDB
async function connectDataBase() {
    // Conecta ao banco de dados MongoDB utilizando a string de conexão
    await mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@${cluster}.chkninc.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    })
}

// Exporta a função para poder utilizá-la em outros locais do projeto (no index.js)
export default connectDataBase