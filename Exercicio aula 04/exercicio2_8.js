//8.	Implemente um programa que converte texto em um número inteiro (“um” -> 1, “dois” -> 2, até o número “cinco”);

var numero = 1;

console.log("Programa que escreve número por extenso.");

switch (numero) {
    case 1:
        console.log("Um");
        break
    case 2:
        console.log("Dois");
        break
    case 3:
        console.log("Três");
        break
    case 4:
        console.log("Quatro");
        break
    case 5:
        console.log("Cinco");
        break
    default:
        console.log("Número invalido!");
        break
}

console.log("Fim do programa!");