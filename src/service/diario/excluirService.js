import { excluir } from "../../repository/diarioRepository.js"

export default async function excluirService(id) {
    let linhasAfetadas = await excluir(id)
    return linhasAfetadas
}