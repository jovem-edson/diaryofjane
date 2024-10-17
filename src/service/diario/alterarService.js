import { alterar } from '../../repository/diarioRepository.js'

export default async function alterarService(id, anotacao) {
    
    let linhasAfetadas = await alterar(id, anotacao)
    return linhasAfetadas
}