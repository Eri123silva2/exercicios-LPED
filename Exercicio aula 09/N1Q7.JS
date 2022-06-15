//7.	Implementar um subprograma que dados dois arrays bidimensionais, retorna true se ambos forem iguais ou false caso contrário;

function iguais(array1, array2) {

    let TotalElementosA1 = 0
    let TotalElementosA2 = 0
    let quantIguais = 0

    //calcular o total de elementos do array1
    for (linhaArray1 in array1) {
        for (colunaArray1 in array1[linhaArray1]) {
            TotalElementosA1++
        }
    }

    //calcular o total de elementos do array2
    for (linhaArray2 in array2) {
        for (colunaArray2 in array2[linhaArray2]) {
            TotalElementosA2++
        }
    }

    //se a quantidade de elementos de cada array for diferente, significa q n são iguais, logo, o programa retorna falso
    if (TotalElementosA1 != TotalElementosA2) {
        return false
    }

    for (linha1 in array1) {
        for (linha2 in array2) {
            for (coluna1 in array1) {
                for (coluna2 in array2) {
                    if (array1[linha1][coluna1] == array2[linha2][coluna2]) {
                        quantIguais++
                    }
                }
            }
        }
    }

    if (quantIguais == TotalElementosA1) {
        return true
    }

    return false

}

const array1 = [
    [1, 2, 3, 7],
    [3, 2, 1, 7],
    [7, 8, 9, 7],
    [7, 8, 9, 7]
]

const array2 = [
    [1, 2, 3],
    [3, 1]
]

console.log(iguais(array1, array2))

