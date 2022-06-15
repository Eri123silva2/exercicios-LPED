//5.	Implementar um subprograma que dados um array bidimensional e um número, subtrai o número de todos os elementos do array


function subtrair(array, numero) {

    for (linha in array) {
        for (coluna in array[linha]) {
            array[linha][coluna] -= numero
        }
    }
    return (array)
}

const array = [
    [2, 4, 6, 8],
    [8, 8, 6, 2]
]

console.log(subtrair(array, 2))