//4.	Implementar um subprograma que dados três vetores, guarda no terceiro a soma dos índices equivalentes no dois primeiros //Exemplo: c[0] = a[0] + b[0] // e assim por diante

function guardarSoma(vetor1, vetor2, vetor3) {

    for (let i = 0; i < vetor1.length; i++) {
        vetor3[i] = vetor1[i] + vetor2[i]
    }
    return (vetor3)
}

var vetor1 = [-5]
var vetor2 = [-2]
var vetor3 = []

console.log(guardarSoma(vetor1, vetor2, vetor3))