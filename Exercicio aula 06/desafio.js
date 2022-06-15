//Implementar um programa que testa se o fatorial de um número é primo. Qual seria a forma mais natural de implementar essa solução? Com while, for ou do … while?

var num = 15
var num1 = num
var resultado = 1
var Quantdivisores = 0

while (num > 1) {
   resultado *= num
   num--
}

var divisores = resultado

while (divisores > 0) {
    if (resultado % divisores == 0) {
        Quantdivisores++
    }
    divisores--
}

if (Number.isInteger(num1) == true) /*função para verificar se o número é inteiro*/ {
    if (num1 > 0) {
        console.log("O fatorial de", num1, "=", resultado)
    } else {
        console.log("Não existe fatorial de número negativo")
    }
    if (num1 > 0) {
        if (Quantdivisores == 2) {
            console.log("O fatorial de ", num1, "é primo")
        } else {
            console.log("O fatorial de ", num1, "não é primo")
        }
    }
} else {
    console.log("Informe um número inteiro")
}