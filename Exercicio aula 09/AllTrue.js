// Implementar um subprograma que dados um array bidimensional de booleans, imprime true se todos  os elementos do array forem verdadeiros ou false, caso contrário

function allTrue(array) {

    for (linha in array) {
        for (coluna in array[linha]) {
            if (array[linha][coluna] == false) {
                return false
            }
        }
    }

    return true

}

let array = [
    [true, true, true],
    [true, false, true],
    [true, true, true]
]

console.log(allTrue(array))