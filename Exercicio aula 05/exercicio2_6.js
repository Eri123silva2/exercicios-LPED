//6.	Implemente um programa capaz de identificar se há exatamente dois números negativos entre três número dados

var a = 8
var b = -9
var c = -3

if (a < 0 && b < 0 && c > 0) {
    console.log("há exatamente dois números negativos ")
} else if (a < 0 && c < 0 && b > 0) {
    console.log("há exatamente dois números negativos ")
} else if (b < 0 && c < 0 && a > 0) {
    console.log("há exatamente dois números negativos ")
} else {
    console.log("não há exatamente dois números negativos ")
}