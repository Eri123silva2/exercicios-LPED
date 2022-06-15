/*5.	Implemente um programa capaz testar se um número é primo
Dica: um número é primo quando ele é divisível apenas por 1 além de ele próprio*/

console.log("Usando while")
var a = -5
var a2 = a
var Quantdivisores = 0

if (a < 0) {
    a = a * -1
}
var divisores = a

while (divisores >= 1) {
    if (a % divisores == 0) {
        Quantdivisores++
    }
    divisores--
}

if (Quantdivisores == 2) {
    console.log(a2, "é primo")
} else {
    console.log(a2, "não é primo")
}

//////////////////////////////////
console.log("Usando for:")
var num = -5
var num1 = num
i = 0

if (num < 0) {
    num *= -1
}

for (divisores = num; divisores >= 1; divisores--) {
    if (num % divisores == 0) {
        i++
    }
}

if (i == 2) {
    console.log(num1, "é primo")
} else {
    console.log(num1, "não é primo")
}
////////////////////////////////
console.log("Usando do... while")
var num = 5
var divisores = 1
var i = 0

do {
    if (num % divisores == 0) {
        i++
    }
    divisores++
} while ((i <= 2) && (divisores <= num))

if (i == 2) {
    console.log(num, "é primo")
} else {
    console.log(num, "não é primo")
}