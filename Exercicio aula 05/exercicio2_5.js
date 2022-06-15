//5.	Implemente um programa capaz de identificar se há exatamente (apenas) um número positivo entre três números dados;

var a = 1
var b = 0
var c = 0

if (a > 0 && b < 0 && c < 0) {
    console.log("há exatamente um número positivo")
} else if ( b > 0 && a < 0 &&  c < 0) {
    console.log("há exatamente um número positivo")
} else if  ( c > 0 && a < 0 && b <0){
    console.log("há exatamente um número positivo")
} else {
    console.log("não há apenas um número positivo")
}