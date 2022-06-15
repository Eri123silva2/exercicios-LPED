//6.	Implementar um subprograma que dado um vetor e um número, subtraí o número de todos os elementos do vetor

function subtração(vetor, numero) {

    for (let i = 0; i < vetor.length; i++) {
        let result = numero - vetor[i] 
        console.log(vetor[i], "-", numero, "=", result)
    }
}
var vetor = [7, 14, 21, 35, 28]
var numero = 7

subtração(vetor, numero)