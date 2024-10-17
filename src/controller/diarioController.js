import inserirService from "../service/diario/inserirService.js";
import consultarPorIdService from "../service/diario/consultarService.js";
import listarService from "../service/diario/listarService.js";
import alterarService from "../service/diario/alterarService.js";
import excluirService from "../service/diario/excluirService.js";

import { Router } from "express"


const endpoints = Router()

endpoints.post('/diario', async (req, resp) => {
    try {
        let anotacao = req.body;

        let id = await inserirService(anotacao);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/diario/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let anotacao = req.body;

        let linhasAfetadas = await alterarService(id, anotacao);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.get('/diario', async (req, resp) => {
    try {
        let registros = await listarService();
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.get('/diario/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let registros = await consultarPorIdService(id);
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



endpoints.delete('/diario/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await excluirService(id);
        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})





export default endpoints;