import { buscarPorId } from "../../repository/diarioRepository.js";

export default async function consultarPorIdService(id){
    let registros = await buscarPorId(id)
    return registros
}