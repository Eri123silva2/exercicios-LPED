var inicio = 5
var fim = 10

if (inicio <= fim) { // testa se o intervalo é válido
    console.log("intervalo de", inicio, "ate", fim)

    for (var numeroAtual = inicio; numeroAtual <= fim; numeroAtual++) {
        console.log(numeroAtual) // imprime o número atual
    }
} else { // trata o caso do intervalo ser inválido
    console.log("intervalo invalido")
}

console.log("fim do programa")

