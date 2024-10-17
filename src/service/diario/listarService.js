import { listar } from "../../repository/diarioRepository.js"

export default async function listarService(){

    let registros = await listar()
        return registros

}