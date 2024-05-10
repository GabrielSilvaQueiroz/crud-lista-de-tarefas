// Importando os módulos necessários
import express from 'express'; // Framework para aplicativos web Node.js
import cookieParser from 'cookie-parser';
import cors from 'cors'; // Middleware para habilitar o CORS (Cross-Origin Resource Sharing)
import routes from './src/routes.js'

// Importa a função de conexão com o banco de dados MongoDB
import connectDataBase from './src/database/db.js'

// Criando uma instância do aplicativo Express
const app = express();

// Middlewares para processamento de requisições
app.use(cors()); // Habilita o CORS para todas as requisições
app.use(cookieParser()); // Configura o middleware para lidar com cookies
app.use(express.json()); // Configura o middleware para processar o corpo das requisições como JSON
app.use(routes); // Configurando as rotas definidas no arquivo routes.js


// Chama a função de conexão com o banco de dados e inicia o servidor após a conexão bem sucedida
connectDataBase()
    .then(() => {
        // Inicia o servidor na porta 5000
        app.listen(5000, () => {
            console.log("Servidor Iniciado & MongoDB Conectado!")
        })
    })
    // Caso dê algum erro, retorna o erro
    .catch((error) => console.log(error))
