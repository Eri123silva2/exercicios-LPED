//8.	Implemente um programa capaz de, dados quatro números, contar quantos entre eles são divisíveis por 5 e 7 ao mesmo tempo;

n1 = 357;
n2 = 32;
n3 = 35;
n4 = 35;
contagem = 0;

if (n1 % 5 == 0 && n1 % 7 == 0) {
    contagem++
}
if (n2 % 5 == 0 && n2 % 7 == 0) {
    contagem++
}
if (n3 % 5 == 0 && n3 % 7 == 0) {
    contagem++
}
if (n4 % 5 == 0 && n4 % 7 == 0) {
    contagem++
}

if (contagem == 0) {
    console.log("Nenhum é divisível por 5 e  7");
} else if (contagem == 1) {
    console.log("1 número entre os 4 é divisível por 5 e 7"); //criei esse else if apenas por causa da conjugação do verbo " 1 é" e " >=2 são"
} else {
    console.log(contagem, "números são divisíveis por 5 e 7");
}

console.log("Fim do Programa");

