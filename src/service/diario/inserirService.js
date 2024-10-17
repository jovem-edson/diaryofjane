import { inserir } from "../../repository/diarioRepository.js";

export default async function inserirService(anotacao){

    let id = await inserir(anotacao)
    return id

}