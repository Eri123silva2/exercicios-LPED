//6.	Implementar um subprograma que dado um array bidimensional e um número, divide todos os elementos do array pelo número;

function divisor(array, numero) {

    for (linha in array) {
        for (coluna in array[linha]) {
            array[linha][coluna] /= numero
        }
    }
    return array
}

let array = [
    [8, 4, 16, 24],
    [26, 2, 18, 6]
]

console.log(divisor(array, 2))