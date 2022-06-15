// 1.	Implementar subprograma que retorna a soma todos os elementos de um vetor

function somador(vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma +=  vetor[i]
    }
     return soma
}
console.log(somador([2, 5, -3, 4, 8, 15, -20]))