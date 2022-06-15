//8.	Implemente um programa capaz de imprimir os números entre 0 e 25 em ordem decrescente

console.log("Usando for: intervalo inclusivo")
for(i = 25; i >= 0; i--) {
    console.log(i)
}

/////////////////////////
console.log("Usando while: intervalo inclusivo")

var i = 25

while (i >= 0) {
    console.log(i)
    i--
}

////////////////////////////////////

console.log(" While com intervalo exclusivo:")

var inicio = 25
var fim = 0

while (inicio > fim+1){
    inicio --
    console.log(inicio)
}

//////////////////////////////////////
console.log("do...while intervalo exclusivo")
var a = 25
var b = 0
do {
    a--
    console.log(a)
} while (a > 1)

console.log("Fim do Programa")
