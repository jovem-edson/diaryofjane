import diario from './controller/diarioController.js'

export default function adicionarRotas(servidor){
    servidor.use(diario)
}