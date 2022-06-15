//3.	Implemente um programa capaz de computar o resto da divisão de dois números sem utilizar o operador %
/*
var a = 28
var b = 5
var resultado = 0

while (a >= resultado * b) {
    resultado++
    a - b
   
    if ((resultado * b) > a) {
        resultado--
        if (a > (resultado * b) ) {
            console.log("O resto da divisão vale: ", ((resultado * b) - a)*-1)
            b = Infinity
        } else {
            console.log("Não há resto da divisão")
            b = Infinity
        }
    }

}

console.log("Fim do Programa")
/*
var num1 = 28
var num2 = 5

do {

}while ()*/


num1 = 28
num2 = 5 

do {
    num1 = num1 - num2
}while(num1 >= num2)

console.log(num1) 