//3.	Implementar um subprograma que retorna a quantidade de elementos ímpares em um array de duas dimensões;

console.log("Usando ForEach")
function impares(array) {

    let quantImpares = 0
    for (linha in array) {
        for (coluna in array[linha]) {
            if (array[linha][coluna] % 2 == 1) {
                quantImpares++
            }
        }
    }
    return quantImpares
}

const array = [
    [10, 12, 14],
    [2, 4, 7, 10]
]

console.log(impares(array))

/////////////////////////////

console.log("Usando for Normal:")

function impares(array1) {

    let quantImpares = 0
    for (let linha = 0; linha < array1.length; linha++) {
        for (let coluna = 0; coluna < array1[linha].length; coluna++) {
            if (array1[linha][coluna] % 2 != 0) {
                quantImpares++
            }
        }
    }
    return quantImpares
}

const array1 = [
    [1, 7, 14,15],
    [2, 4, 7, 10]
]
console.log(impares(array1))
