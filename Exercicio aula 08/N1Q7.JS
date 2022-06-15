//7.	Implementar um subprograma que dado um vetor e um número, divide todos os elementos do vetor pelo número


function divisão(vetor, numero) {
    
    for (let i = 0; i < vetor.length; i++) {
        let result = vetor[i] / numero
        console.log(vetor[i], "/", numero, "=", result)
    }
}
var vetor = [7, 14, 21, 35, 28]
var numero = 7

divisão(vetor, numero)

