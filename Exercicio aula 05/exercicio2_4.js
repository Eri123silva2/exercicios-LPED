//4.	Implemente um programa capaz de identificar se há exatamente (apenas) um número negativo entre três números dados

var a = 5
var b = -8
var c = -17

if (a < 0 && b > 0 && c > 0) {
    console.log("há exatamente um número negativo")
} else if (b < 0 && c > 0 && a > 0) {
    console.log("há exatamente um número negativo")
} else if (c < 0 && b >0 && a > 0) {
    console.log("há exatamente um número negativo")
} else {
    console.log("Não há exatamente um número negativo")
}