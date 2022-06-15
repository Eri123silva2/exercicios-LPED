//1.	Implemente um programa capaz de multiplicar dois números sem usar o operador da multiplicação (Dica: 5x3 = 5 + 5 + 5)
/*
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


a = -5
b = 0
resultado = 0
a1 = a
b1 = b

if (b < 0) {
    b *= -1
} 
if (a < 0) {
    a *= -1
}

while (b > 0) {
    resultado += a
    b--
}

if (a1 > 0 && b1 < 0) {
    console.log(-resultado)
} else if (a1 < 0 && b1 >0) {
    console.log(-resultado)
} else {
    console.log(resultado)
}

console.log("Fim do Programa!")*/

//////////////////////////////////
/*
var num1 = -5
var num2 = -2
var resultado = 0

if (num2 < 0) {
    num2 *= -1
}
do {
    resultado += num1
    num2--
} while (num2 > 0)

console.log(resultado)*/

var  num1 = 100
var num2 = 2

for(resultado = 0; num2 > 0; num2--){
    resultado += num1
}

console.log(resultado)