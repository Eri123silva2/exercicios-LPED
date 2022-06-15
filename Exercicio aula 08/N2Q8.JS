//8.	Implementar um subprograma que dados dois vetores, retorna true caso todos os elementos de ambos sejam iguais, ou false, caso contrário

function iguais(vetor1, vetor2) {

    let quantIguais = 0
    if (vetor1.length != vetor2.length) {
        return false
    }

    for (i = 0; i < vetor1.length; i++)
        if (vetor1[i] == vetor2[i]) {
            quantIguais++
        }

    if (quantIguais == vetor1.length) {
        return true
    }
    return false
}

let vetor1 = [5, 10]
let vetor2 = [5, 10]

console.log(iguais(vetor1, vetor2))