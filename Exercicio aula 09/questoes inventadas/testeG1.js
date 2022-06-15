//Implementar um subprograma que imprime todos os elementos pares e suas respectivas posição dentro um array de duas dimensões;

function allPares(array) {

    for (let linha = 0; linha < array.length; linha++) {
        for (let coluna = 0; coluna < array[linha].length; coluna++) {
            if (array[linha][coluna] % 2 == 0) {
                console.log("O elemento:", array[linha][coluna], "é par e está na linha:", linha, "e na coluna:", coluna)
            }
        }
    }
}

const array = [
    [2, 5, 8, 9],
    [3, 4, 6]
]

allPares(array)