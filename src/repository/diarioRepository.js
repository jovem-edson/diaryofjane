import con from  "./connection.js"

export async function inserir(anotacao) {
    const comando = `
        insert into tb_anotacao_diario (txt_anotacao, dt_anotacao, id_autor) 
					        values (?, ?, ?)
    `

    let [info] = await con.query(comando, [anotacao.texto, anotacao.data, anotacao.autor]);
    return info.insertId;
}



export async function alterar(id, anotacao) {
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
        SELECT a.id_anotacao AS id,
               a.txt_anotacao AS anotacao,
               a.dt_anotacao AS data,
               a.id_autor AS autor,
               au.nm_autor AS nome_autor
        FROM tb_anotacao_diario a
        JOIN tb_autor au ON a.id_autor = au.id_autor
    `;

    let [registros] = await con.query(comando);
    return registros;
}





export async function buscarPorId(id) {
    const comando = `
        SELECT a.id_anotacao AS id,
               a.txt_anotacao AS anotacao,
               a.dt_anotacao AS data,
               a.id_autor AS autor,
               au.nm_autor AS nome_autor
        FROM tb_anotacao_diario a
        JOIN tb_autor au ON a.id_autor = au.id_autor
        WHERE a.id_anotacao = ?
    `;

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