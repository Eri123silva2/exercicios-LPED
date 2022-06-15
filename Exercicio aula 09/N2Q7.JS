//7.	Implementar um subprograma que dado um array bidimensional, computa a média dos seus elementos, conta e retorna quantos elementos acima da média ele possui;

const array = [
    [1, 2, 3, 4, 5],
    [9, 1, 8, 6]
]

function media(array) {

    let media = 0
    let totalElementos = 0
    let somarElem = 0
    let contAcima = 0

    for (let linha = 0; linha < array.length; linha++) {
        for (let coluna = 0; coluna < array[linha].length; coluna++) {
            somarElem += array[linha][coluna]
            totalElementos++
        }
    }
    media = somarElem / totalElementos
    for (let linha2 = 0; linha2 < array.length; linha2++) {
        for (let coluna2 = 0; coluna2 < array[linha2].length; coluna2++) {
            if(array[linha2][coluna2] > media) {
                contAcima++
            }
        }
    }
    return contAcima
}

console.log(media(array))