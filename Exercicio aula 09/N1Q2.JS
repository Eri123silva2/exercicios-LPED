//2.	Implementar um subprograma que dado um array bidimensional retorna true se a soma dos seus elementos for positiva ou false, caso contrário;

function soma(array) {

    let soma = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length[i]; j++) {
            soma += array[i][j]
        }
    }
    
    if (soma > 0) {
        return true
    }

    return false

}

const array = [
    [5, 5, -5, -5],
    [5, 5, -5, -5]
]

console.log(soma(array))