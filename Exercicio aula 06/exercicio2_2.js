//2.	Implemente um programa capaz de dividir dois números sem usar o operador da divisão (Dica: 9/3 = 9 - 3 - 3 - 3)

var a = 20
var b = 5
var a1 = a
var b1 = b
var resultado = 0

if (a < 0) {
    a = a * -1
}
if (b < 0) {
    b = b * -1
}

while (a >= (resultado * b)) {
    a - b
    resultado++
    if (resultado * b > a) {
        resultado--
        b = Infinity  
    }
}

if (a1 % b1 != 0) {
    console.log("Não é uma divisão inteira")
} else if (a1 == 0 || b1 == 0) {
    console.log(a1, "÷", b1, "=", resultado)
} else if (a1 > 0 && b1 > 0) /*++*/ {
    console.log(a1, "÷", b1, "=", resultado)
} else if (a1 < 0 && b1 < 0) /*--*/ {
    console.log(a1, "÷", b1, "=", resultado)
} else if (a1 < 0 && b1 > 0) /*-+*/ {
    console.log(a1, "÷", b1, "=", -resultado)
} else {
    console.log(a1, "÷", b1, "=", -resultado)
} 
console.log("Fim do Programa")