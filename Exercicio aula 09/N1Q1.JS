// 1.	Implementar um subprograma que dado um array bidimensional e um número, multiplica cada elemento do array pelo número;

function multiplicar(array, numero) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length[i]; j++) {
            array[i][j] *= numero
        }
    }
    return array
}

 array = [
        [1,2,3,4],
        [4,3,2,1],
        [1,4,3,2]
    
]
let numero = 6

console.log(multiplicar(array, numero))