//9.	Implementar um subprograma que dado um vetor, inverte a ordem do seu conteúdo

console.log("Sem usar método:")

function inveVetor(vetor) {

    let vetor2 = []
    let j = 0
    for (i = vetor.length - 1; i >= 0; i--) {
        vetor2[j] = vetor[i]
        j++
    }
    return vetor2
}
let vetor = [5, 4, 3, 2, 1]
console.log(inveVetor(vetor))

///////////////////////////////////////

console.log("Usando método:")

function inverVetor(vetor5) {

    return (vetor5.reverse())
}
let vetor5 = [5, 4, 3, 2, 1]
console.log(inverVetor(vetor5)) 