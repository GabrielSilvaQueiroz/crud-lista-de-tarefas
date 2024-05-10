import { Router } from "express";
import { atualizarTarefa, criarTarefa, deletarTarefa, listarTarefas } from './controlers/TarefasController.js';

const routes = Router();

// Rota base para validar aplicação
routes.get('/', (req, res) => {
    res.json({ msg: 'API rodando!' });
});

// Rotas do Tarefas Controller
routes.get('/tarefas', listarTarefas);
routes.post('/criarTarefa', criarTarefa);
routes.put('/tarefas/:id', atualizarTarefa);
routes.delete('/tarefas/:id', deletarTarefa);

export default routes;
