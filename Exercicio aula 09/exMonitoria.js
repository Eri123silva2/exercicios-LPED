//Objetivo: crie um subprograma que, dado um array como parâmetro, encontre e retorne o menor número positivo dentro dele.

function menor(array) {

    let menor = array[0][0]
    if (menor < 0) {
        menor *= -1
    }
    for (linha in array) {
        for (coluna in array) {
            if ((array[linha][coluna] > 0) && (array[linha][coluna] < menor)) {
                menor = array[linha][coluna]
            }
        }
    }
    return menor
}

let array = [
    [-1, 7, 0],
    [1, 3, -4]
]

console.log(menor(array))