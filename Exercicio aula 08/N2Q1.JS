//1.	Implementar um subprograma que dado um vetor, retorna true se a soma dos seus elementos for positiva ou false, caso contrário

function somar(vetor) {
    let soma = 0

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    if (soma > 0) {
        return true
    } else {
        return false
    }
}

console.log(somar([8, 7, 9, 1, 6, 3, 4, 88]))