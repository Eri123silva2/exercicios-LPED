//4.	Implementar um subprograma que retorna a quantidade de elementos ímpares em um vetor

function quantImpares(vetor) {
    let impares = 0
    for (let i = 0; i <vetor.length; i++) {
        if (vetor[i] % 2 == 1) {
            impares++
        }
    }
   return impares
}
console.log(quantImpares([3, 7, 9, 2, 11]))
