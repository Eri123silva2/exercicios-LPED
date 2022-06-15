//6.	Implemente um programa capaz de testar se um número não é primo; Dica: um número é primo quando ele é divisível apenas por 1 além de ele próprio

var num =  7
var num1 = num
var quantDivisores = 0

if (num < 0) {
    num = num * - 1
}

var divisores = num

while (divisores >= 1) {
    if (num % divisores == 0) {
        quantDivisores++
    }
    divisores--
}

if (quantDivisores != 2) {
    console.log(num1, "não é primo")
} else {
    console.log(num1, "é primo")
}

console.log("Fim do Programa")
////////////////////////////////
console.log("Usando for")
var quantDivisores = 1
i = 0

for(num =  7; i <=2 && quantDivisores <= num; quantDivisores++){
    if(num % quantDivisores == 0){
        i++
    }
}

if (i != 2){
    console.log("não é primo")
} else {
    console.log("é primo")
}