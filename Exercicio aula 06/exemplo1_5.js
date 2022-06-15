var inicio = -1
var fim = -20

if (inicio <= fim) { // testa se o intervalo é válido
    console.log("intervalo de", inicio, "ate", fim)
    var numeroAtual = inicio
    while (numeroAtual <= fim) {
        console.log(numeroAtual)
        numeroAtual = numeroAtual + 1
    }

} else {// trata o caso do intervalo ser inválido
    console.log("intervalo invalido")

}
console.log("fim do programa")

