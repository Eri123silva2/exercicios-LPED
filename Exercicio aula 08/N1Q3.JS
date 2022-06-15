//3.	Implementar um subprograma que dados dois vetores, copia o conteúdo do primeiro para segundo vetor (elemento por elemento)

function copia(vetor1, vetor2) {

    console.log("Vetor 2 inicialmente: ", vetor2)

    while (vetor2.length > vetor1.length) {
        vetor2.pop()//retira o ultimo elemento do vetor
    }

    for (let i = 0; i < vetor1.length; i++) {
        vetor2[i] = vetor1[i]
    }

    console.log("Vetor 2 ao final do programa:", vetor2)
}
let vetor1 = [5, 7, 3, 4, 80]
let vetor2 = [5, 7, 3, 4, 80, 6, 9, 7, 2, 4, 7, 8, 9, 7, 41, 6, 1, 4, 4]
copia(vetor1, vetor2)