//2.	Implementar um subprograma que dados dois vetores, copia o conteúdo do primeiro no segundo vetor (elemento por elemento) na ordem inversa Exemplo – Entrada: [1, 3, 5, -2], Saída: [-2, 5, 3, 1]

function inverter(vetor1, vetor2) {

    let indVetor1 = 0
    for (let i = vetor1.length -1; i >= 0; i--) {
        vetor2[i] = vetor1[indVetor1]
        indVetor1++
    }
    
    console.log("Vetor1:", vetor1)
    console.log("Vetor2 ao final do programa:", vetor2)
}

let vetor1 = [1, 4, 9, 7]
let vetor2 = [8, 9, 7, 1]

inverter(vetor1, vetor2)