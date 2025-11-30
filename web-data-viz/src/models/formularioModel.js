var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT nome_vilao, COUNT(*) AS quantidades 
        FROM formulario 
        GROUP BY nome_vilao;
    `;
    return database.executar(instrucao);
}

function inserir(nome_vilao) {
    var instrucao = `
        INSERT INTO formulario (nome_vilao) 
        VALUES ('${nome_vilao}');
    `;
    return database.executar(instrucao);
}

module.exports = {
    inserir,
    listar
};
