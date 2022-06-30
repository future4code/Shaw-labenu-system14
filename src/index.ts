import { app } from "./app";
import { alterarDocente } from "./endpoints/alterarDocente";
import { alterarTurma } from "./endpoints/alterarTurma";
import { buscarEstudanteNome } from "./endpoints/buscarEstudanteNome";
import { buscarTodosDocentes } from "./endpoints/buscarTodosDocentes";
import { criarDocente } from "./endpoints/criarDocente";
import { criarEstudante } from "./endpoints/criarEstudante";
import criarTurma from "./endpoints/criarTurma";
import mudancaModulo from "./endpoints/mudancaModulo";
import selecionarTurmasAtivas from "./endpoints/selecionarTurmasAtivas";

app.get('/selecionar-turmas-ativas', selecionarTurmasAtivas)

app.get('/buscar-nome/:nome', buscarEstudanteNome)

app.get('/docentes', buscarTodosDocentes)

app.post('/criar-turma', criarTurma)

app.post('/mudanca-modulo', mudancaModulo)

app.post('/criar-estudante', criarEstudante)

app.post('/criar-docente', criarDocente)

app.put('/alterar-turma', alterarTurma)

app.put('/alterar-docente', alterarDocente)
