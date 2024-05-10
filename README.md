# CRUD de Tarefas

Este é um sistema de CRUD (Create, Read, Update, Delete) desenvolvido para gerenciar o cadastro de tarefas. O backend foi construído usando Node.js com Express.js, seguindo o padrão de arquitetura MVC (Model-View-Controller). O armazenamento de dados é feito utilizando MongoDB com a biblioteca Mongoose para modelagem de objetos. O arquivo de ambiente é gerenciado pelo Dotenv para configuração de variáveis de ambiente.

O frontend foi desenvolvido com HTML, CSS e JavaScript visando a melhor experiência do usuário.

## Tecnologias Utilizadas

### Backend:
- Node.js
- Express.js
- Cors
- MongoDB
- Mongoose
- Dotenv

### Frontend:
- HTML
- CSS
- JavaScript

## Configuração

1. **Backend**: 
   - Certifique-se de ter o Node.js instalado em sua máquina, para fazer essa verificação basta abrir o terminal da sua máquina e digitar o comando `node --version`. Caso não tenha o node instalado, instale seguindo esse tutorial: 
   `https://www.youtube.com/watch?v=IAdmw-hCFxw`.

   - Clone ou baixe este repositório e navegue até a pasta do backend.
   - Execute `npm install` para instalar as dependências.
   - Crie um arquivo `.env`, dentro da basta backend e configure as variáveis necessárias, para se conectar com seu banco de dados MongoDB.
   - Execute `npm start` para iniciar o servidor ou `npm run dev` para iniciar o servidor com o nodemon. Por padrão, a API estará rodando na porta 5000 da sua máquina.

2. **Frontend**:
   - Navegue até a pasta do frontend.
   - Utilize a extensão disponível do VSCode, o Live Server, para executar o frontend, por padrão ele irá rodar na porta 5500 da sua máquina.

## Uso

Após configurar o backend e o frontend com as informações anteriores, você poderá acessar a aplicação no seu navegador. O frontend fornecerá uma interface amigável para realizar operações de CRUD no cadastro de tarefas.


