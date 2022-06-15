// 4.	Implementar um subprograma que retorna  a quantidade de elementos pares em um array de duas dimensões

function pares(array) {

    let quantPares = 0
    for (linha in array) {
        for (coluna in array[linha]) {
            if (array[linha][coluna] % 2 == 0) {
                quantPares++
            }
        }
    }
    return quantPares
}

const array = [
    [2, 4, 6, 8],
    [8, 8, 6, 2]
]

console.log(pares(array))