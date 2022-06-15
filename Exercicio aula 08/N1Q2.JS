//2.	Implementar um subprograma que dados um vetor e um número, multiplica cada elemento do vetor pelo número recebido como parâmetro

function multiplicação(vetor, num) {
    for (let i = 0; i < vetor.length; i++) {
        let resultado = num * vetor[i]
        console.log( num + " x " + vetor[i] + " = " + resultado)
    }
}

var vetor = [1, 3, 5, 7, 9, 10, 100, 0]
var num = 3
multiplicação(vetor, num)


