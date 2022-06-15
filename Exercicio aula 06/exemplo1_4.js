var inicio = 5
var fim = 10
var numeroAtual = inicio

console.log("intervalo de", inicio, "ate", fim)

while (numeroAtual <= fim) { // enquanto ainda não chegamos no fim
    console.log(numeroAtual) // imprime o número atual
    numeroAtual = numeroAtual + 1 // essa linha impede um laço infinito
}
console.log("fim do programa")

