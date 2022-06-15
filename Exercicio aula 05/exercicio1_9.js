//9. Implemente um programa capaz de, dados quatro números, contar quantos dentre eles são divisíveis por 3 ou 4;

n1 = 5;
n2 = 6;
n3 = 5;
n4 = 5;
contagem = 0;

if (n1 % 3 == 0 || n1 % 4 == 0) {
    contagem++
}
if (n2 % 3 == 0 || n2 % 4 == 0) {
    contagem++
}
if (n3 % 3 == 0 || n3 % 4 == 0) {
    contagem++
}
if (n4 % 3 == 0 || n4 % 4 == 0) {
    contagem++
}
if (contagem == 0) {
    console.log("Nenhum é divisível por 3 ou 4");
} else if (contagem == 1) {
    console.log("1 número entre os 4 é divisível por 3 ou 4"); //criei esse else if apenas por causa da conjugação do verbo " 1 é" e " >=2 são"
} else {
    console.log(contagem, "números são divisíveis por 3 ou 4");
}

console.log("Fim do Programa");

