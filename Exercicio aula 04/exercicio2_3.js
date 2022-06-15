//3.	Implemente um programa capaz de, dadas quatro notas, computar e classificar o valor da média das notas de um  estudante como aprovado (> 6), reprovado (< 4) e recuperação (caso contrário);

var nota1 = 2;
var nota2 = 4;
var nota3 = 5;
var nota4 = 3;
var media = (nota1+nota2+nota3+nota4) / 4

if (media >= 6) {
    console.log("Sua média:", media.toFixed(1), ". Parabéns, você foi aprovado." );
} else if (media < 4) {
    console.log("Sua média:", media.toFixed(1), ". Ops... Você foi reprovado");
} else {
    console.log("Sua média:", media.toFixed(1), "Você está em recuperação" );
}

console.log("Fim do programa");