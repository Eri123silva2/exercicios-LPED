//4.	Implemente um programa capaz de computar o fatorial de um número
console.log("Usando while")
var num = 5
var i = 1
var resultado = 1

while (num >1){
    resultado *= num
    num--
}

console.log(resultado)

///////////////////////////////
console.log("Usando for")

resultado = 1
for (num = 5; num >1; num--) {
    resultado *= num
} console.log(resultado)

///////////////////////////////////

console.log("Usando do..while")

var num = 5
var resultado = 1

do {
    resultado *=num
    num--
} while (num > 1)

console.log(resultado)