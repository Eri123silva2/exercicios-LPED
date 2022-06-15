//9.	Implementar um subprograma que dado um vetor, computa a média dos seus elementos e retorna quantos elementos acima da média ele possui


function acimaMedia(vetor) {
    var soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    let media = soma / vetor.length
    let quantAcimMedia = 0
    for (let j = 0; j < vetor.length; j++) {
        if (vetor[j] > media) {
            quantAcimMedia++
        }
    }
    return quantAcimMedia
}

console.log(acimaMedia([4, 7, 5, 6, 10, 17, 20]))