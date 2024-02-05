// Início do jogo
alert("Adivinhe o número que estou pensando");

// Variáveis
let palpite;
let numeroSecreto = parseInt(Math.random() * 100) + 1 ;
let tentativas = 1;

// Mostra o número secreto no console (apenas para teste, remova em uma versão final)
console.log(`O número secreto é: ${numeroSecreto}`);
console.log(tentativas);

// Loop principal para receber palpites até acertar
while (palpite != numeroSecreto) {
    palpite = prompt("Digite o seu palpite com um número entre 1 e 100: ");
    console.log(tentativas);
    tentativas++;
    console.log(tentativas); // Incrementa o contador de tentativas a cada tentativa

    if (palpite == numeroSecreto) {
        console.log(`O Palpite foi: ${palpite}`);
        console.log(tentativas);
    } else {
        if (palpite > numeroSecreto) {
            alert(`Você errou, o número secreto é MENOR que ${palpite}`);
            console.log("Você errou!");
            console.log(tentativas);
        } else {
            alert(`Você errou, o número secreto é MAIOR que: ${palpite}`);
            console.log("Você errou!");
            console.log(tentativas);
        }
    }
}

// Mensagem de acerto com o número de tentativas
// Operador ternário: define a variável para armazenar a resposta (tentativas > 1 ? "tentativas" : "tentativa")
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou, o número secreto é: ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
