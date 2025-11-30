var formularioModel = require("../models/formularioModel");

function inserir(req, res) {
    var nome_vilao = req.body.nome_vilao;

    formularioModel.inserir(nome_vilao)
        .then(function () {
            res.status(200).send("Resposta registrada com sucesso!");
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

function listar(req, res) {
    formularioModel.listar()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listar,
    inserir
};
