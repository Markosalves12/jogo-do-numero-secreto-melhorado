let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
}


function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute==numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
        let messagemTentativas = `Voce acertou com ${tentativas} ${palavraTentativas}`
        exibirTextoNaTela('p', messagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', `O número é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O número é maior que ${chute}`);
        }
        tentativas ++;
        limparampo();
    }

    console.log(chute==numeroSecreto);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random()*10+1);
}

function limparampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

let numeroSecreto = gerarNumeroAleatorio();

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}