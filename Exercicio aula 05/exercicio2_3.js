//3.	Implemente um programa capaz de, dados três números, encontrar o número do meio (não é o menor, nem o maior);

var a = 6
var b = 6
var c = 6

if ((a > b && a < c) || (a > c && a < b)) {
    console.log("meio:", a)
} else if ((b > a && b < c) || (b > c && a < b)) {
    console.log("meio:", b)
} else if (a == b && b == c) {
    console.log("todos são iguais")
} else {
    console.log("meio:", c)
}
