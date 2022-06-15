//exemplo 1.4 - Tamanhos de um vetor.

var arrayDeNumeros = [ 
    [1,  8,  2,  0],
    [7,  3, -2],  // esta linha foi alterada para conter 3 elementos
    [4,  1,  4, -8]
]


var linhas = arrayDeNumeros.length // = 3
var colunasDaLinhaZero = arrayDeNumeros[0].length // linhas = 4
var colunasDaLinhaUm = arrayDeNumeros[1].length // linhas = 3
var colunasDaLinhaDois = arrayDeNumeros[2].length // linhas = 4
var totalDeElementos = colunasDaLinhaZero + colunasDaLinhaUm + colunasDaLinhaDois // número total de elementos

