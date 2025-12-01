function calcularDesconto() {

    var div_msg = document.getElementById('div_msg');
    var ipt_desconto = document.getElementById('ipt_desconto');

    div_msg.innerHTML = "";

    var vetorLivros = [
        'livro1', 'livro2', 'livro3', 'livro4', 'livro5', 'livro6'
    ];

    var preco_unitario = 59.90;
    var totalLivros = 0;

    var descontoIpt = ipt_desconto.value;
    var descontoNum = Number(descontoIpt);
    
    for (var i = 0; i < vetorLivros.length; i++) {
        var chk = window[vetorLivros[i]]; 
        if (chk.checked) {
            totalLivros++;
        }
    }

    if (descontoIpt == "" || descontoNum < 0 || descontoNum > 100) {
        div_msg.innerHTML = "Erro: Insira um valor entre 0 e 100.";
    }
    if (totalLivros == 0) {
        div_msg.innerHTML = "Selecione pelo menos um livro!";
    }

    var precoBruto = totalLivros * preco_unitario;
    var valorDesconto = precoBruto * (descontoNum / 100);
    var precoFinal = precoBruto - valorDesconto;

    div_msg.innerHTML = `
        <h3>Confirmação da Compra:</h3>
        Livros selecionados: ${totalLivros} <br>
        Preço Bruto: R$ ${precoBruto.toFixed(2)} <br>
        Desconto (${descontoNum}%): R$ ${valorDesconto.toFixed(2)} <br>
        Valor Final: R$ ${precoFinal.toFixed(2)}
    `;
}