var opcoes = [
    { id: "opcao1", texto: "Úrsula" },
    { id: "opcao2", texto: "Malévola" },
    { id: "opcao3", texto: "Grimhilde (Rainha Má)" },
    { id: "opcao4", texto: "Fera" },
    { id: "opcao5", texto: "Gothel (Mãe Gothel)" }
];

function enviarResposta() {
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
        return;
    }

    alert("Você escolheu: " + escolha);

    fetch(`/formulario/inserir`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome_vilao: escolha
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            console.log("Voto registrado!");
        }
    });
}

function limparEscolha() {
    for (var index = 0; index < opcoes.length; index++) {
        document.getElementById(opcoes[index].id).checked = false;
    }
}

function encerrarQuiz() {
    alert("Formulário encerrado");
}
