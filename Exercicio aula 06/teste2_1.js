//multiplicar dois números sem usar o operador da multiplicação

var num1 = -5
var num2 = -3
var resultado = 0

if (num2 > 0) {
    while (num2 > 0) {
        resultado += num1
        num2--
    }
    console.log(resultado)
} else {
    while (num2 < 0) {
        resultado -= num1
        num2++
    }
    console.log(resultado)
}

console.log("Fim do Programa!")