var opcoes = [
    { id: "opc1", texto: "Úrsula" },
    { id: "opc2", texto: "Malévola" },
    { id: "opc3", texto: "Grimhilde (Rainha Má)" },
    { id: "opc4", texto: "Fera" },
    { id: "opc5", texto: "Gothel (Mãe Gothel)" }
];

function proximaPergunta() {
    var escolha = "";

    for (var index = 0; index < opcoes.length; index++) {
        var radio = document.getElementById(opcoes[index].id);

        if (radio.checked) {
            escolha = opcoes[index].texto;
            break;
        }
    }

    if (escolha === "") {
        alert("Escolha um vilão antes de continuar");
    } else {
        alert("Você escolheu: " + escolha);
    }
}

function limparEscolha() {
    for (var index = 0; index < opcoes.length; index++) {
        document.getElementById(opcoes[index].id).checked = false;
    }
}

function encerrarQuiz() {
    alert("Formulário encerrado");
}
