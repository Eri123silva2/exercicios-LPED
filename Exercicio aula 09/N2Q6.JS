//6.	Implementar um subprograma que dados dois arrays bidimensionais, retorna qual deles possui a maior soma de seus elementos
function maior(array1, arra2) {

    let soma1 = 0
    let soma2 = 0

    for (let linha1 = 0; linha1 < array1.length; linha1++) {
        for (let coluna1 = 0; coluna1 < array1[linha1].length; coluna1++) {
            soma1 += array1[linha1][coluna1]
        }
    }

    for (let linha2 = 0; linha2 < arra2.length; linha2++) {
        for (let coluna2 = 0; coluna2 < arra2[linha2].length; coluna2++) {
            soma2 += arra2[linha2][coluna2]
        }
    }

    if (soma1 == soma2) {
        return ("As somas têm os mesmos valores")
    } else if (soma1 > soma2) {
        return array1
    }
    return arra2

}

const array1 = [
    [1, 2, 3, 4, 5],
    [7, 9, 1, 2, 3]
]

const arra2 = [
    [7, 87, 9, 1],
    [8, 3, 1, 22]

]

console.log(maior(array1, arra2))