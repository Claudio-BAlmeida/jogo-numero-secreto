let listaDeNumerosSorteados = [];
let numeroMaximo = 50
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function mensagemInicial() {
    exibirTextoNaTela('h1', 'Bem vindo ao jogo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 100');
}
function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rat:1.4});
}
mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(`O número secreto é ${numeroSecreto}`);
    console.log(`Chute = ${chute}`);
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled', true);
    } else {
        if (chute > numeroSecreto) {
            let mensagemMenor = `O número secreto é menor do que ${chute}`;
            exibirTextoNaTela('p', mensagemMenor);
        } else {
            let mensagemMaior = `O número secreto é maior do que ${chute}`;
            exibirTextoNaTela('p', mensagemMaior);
        }
        tentativas++
        limparCampo();
    }
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    mensagemInicial();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chutar').removeAttribute('disabled');
}
