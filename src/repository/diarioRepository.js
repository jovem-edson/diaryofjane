import con from  "./connection.js"

export async function inserir(anotacao) {
    const comando = `
        insert into tb_anotacao_diario (txt_anotacao, dt_anotacao, id_autor) 
					        values (?, ?, ?)
    `

    let [info] = await con.query(comando, [anotacao.texto, anotacao.data, anotacao.autor]);
    return info.insertId;
}



export async function alterar(id, pessoa) {
    const comando = `
        update tb_anotacao_diario
           set txt_anotacao            = ?,
               dt_anotacao            = ?,
               id_autor          = ?
          where id_anotacao = ?
    `

    let [info] = await con.query(comando, [anotacao.texto, anotacao.data, anotacao.autor, id]);
    return info.affectedRows;
}




export async function listar() {
    const comando = `
        select id_anotacao       id,
               txt_anotacao            nome,
               dt_anotacao            motivo,
               id_autor          vinganca,
          from tb_anotacao_diario
    `

    let [registros] = await con.query(comando);
    return registros;
}




export async function buscarPorId(id) {
    const comando = `
        select id_lista_negra       id,
               txt_anotacao            nome,
               dt_anotacao            motivo,
               id_autor          vinganca,
          from tb_anotacao_diario
          where id_anotacao = ?
    `

    let [registros] = await con.query(comando, [id]);
    return registros[0];
}





export async function excluir(id) {
    const comando = `
        delete from tb_anotacao_diario
           where id_anotacao = ?
    `

    let [info] = await con.query(comando, [id]);
    return info.affectedRows;
}