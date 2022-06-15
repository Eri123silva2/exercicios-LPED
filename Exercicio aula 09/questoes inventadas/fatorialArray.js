//Implemente um subprograma capaz de, dado um array de duas dimensões, atualiza o valor do elemento com o fatorial do  respectivo elemento, apos isso, o programa deve RETORNAR o array com os novos valores do elemento

/*
EXEMPLO DE ENTRADA: 

const array = [
    [6,7],
    [5]
]

//SAIDA CORRESPONDENTE: 

array = [
    [720, 5.040],
    [120]
]
*/

function fatorialArray(array) {

    let fatorial = 1
    let achouFatorial = false
    let i = 0

    for (let linha = 0; linha < array.length; linha++) {
        for (let coluna = 0; coluna < array[linha].length; coluna++) {
            let comparadorDeI = array[linha][coluna] - 1
            achouFatorial = false

            for (let elemento = array[linha][coluna]; elemento > 1 && !achouFatorial; elemento--) {

                fatorial *= elemento
                array[linha][coluna] = fatorial
                i++

                if (i == comparadorDeI) {
                    achouFatorial = true
                    i = 0
                    fatorial = 1
                }
            }
        }
    }

    return array

}

const array = [
    [1, 2, 3, 4],
    [5, 6, 7]
]

console.log(fatorialArray(array))