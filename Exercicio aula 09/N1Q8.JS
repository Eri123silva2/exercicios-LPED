    //8.	Implementar um subprograma que dados um array bidimensional de booleans, imprime true se ao menos um dos elementos do array forem verdadeiros ou false, caso contrário.

function justOneTrue(array) {

    for(linha in array) {
        for(coluna in array[linha]) {
            if(array[linha][coluna] ==  true) {
                return true
            }
        }
    }
    return false
}

const array = [
     [false, false],
     [false, true]
]

console.log(justOneTrue(array))
