//8.	Implementar um subprograma que dados dois vetores, retorna qual deles possui a maior soma de seus elementos

function somaVetores(vetor1, vetor2) {
    let somaVetor1 = 0; let somaVetor2 = 0;

    for (let i = 0; i < vetor1.length; i++) {
        somaVetor1 += vetor1[i]
    }

    for (let j = 0; j < vetor2.length; j++) {
        somaVetor2 += vetor2[j]
    }

    if (somaVetor1 == somaVetor2) {
        return "A soma dos dois vetores são iguais"
    } else if (somaVetor1 > somaVetor2) {
        return vetor1
    } else {
        return vetor2
    }
}

var vetor1 = [10]
var vetor2 = [1]

console.log(somaVetores(vetor1, vetor2));