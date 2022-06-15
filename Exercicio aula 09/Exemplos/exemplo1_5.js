//Exemplo 1.5 - Computa a média dos elementos de um array de duas dimensões.

var arrayDeNumeros = [ 
    [1,  8,  2,  0],
    [7,  3, -2],  // qual o impacto dessa linha nos laços abaixo?
    [4,  1,  4, -8]
]


var media = 0 // guardará a média ao final do código
var totalDeElementos = 0 // por que precisamos desta variável?


for (var i = 0; i < arrayDeNumeros.length; i++) {
    for (var j = 0; j < arrayDeNumeros[i].length; j++) {
        media = media + arrayDeNumeros[i][j]
        totalDeElementos++ // não haveria uma forma mais simples?
    }
}


media = media / totalDeElementos

