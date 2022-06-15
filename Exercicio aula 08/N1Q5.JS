//5.	Implementar um subprograma que retorna a quantidade de elementos pares em um vetor

function quantPares(vetor) {
    let pares = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            pares++
        }
    }
   return pares
}
console.log(quantPares([5, 6, 7, 8, 12, 14]))