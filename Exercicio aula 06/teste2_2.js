//dividir dois números sem usar o operador da divisão

var num1 = 28
var num2 = 5
var i = 0

if (num1 > 0) {
    while (num1 >0) {
        num1 -= num2
        i++
    }
    //num2--
    console.log(i)
}            