//Exemplo 1.6 - Computa a média dos elementos de um array com o foreach.

var arrayDeNumeros = [ 
    [1,  8,  2,  0],
    [7,  3, -2],  // qual o impacto dessa linha nos laços abaixo?
    [4,  1,  4, -8]
]


var media = 0 // guardará a média ao final do código
var totalDeElementos = 0 // por que precisamos desta variável?


for (linha in arrayDeNumeros) { // para cada linha no array
    for (coluna in arrayDeNumeros[linha]) { // para cada elemento
        media = media + arrayDeNumeros[linha][coluna]
        totalDeElementos++ // não haveria uma forma mais simples?
    }
}


media = media / totalDeElementos

