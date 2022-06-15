// implemente um subprograma capaz de, dado um array como parâmetro, imprime o primeiro (e só o primeiro) elemento impar do array 

function firstImapar(array) {

    let achou = false
    for (let linha = 0; linha < array.length && !achou; linha++) {
        for (let coluna = 0; coluna < array[linha].length && !achou; coluna++) {
            if (array[linha][coluna] % 2 != 0) {
                console.log(array[linha][coluna] + " é o primeiro elemento impar do array! ")
                achou = true
            }
        }
    }

    if(achou == false) {
        console.log("não há elemento impar no array")
    }
}

let array = [
    [8, 6, 10],
    [4, 5, 2, 3]
]


firstImapar(array)