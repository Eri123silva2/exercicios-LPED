//7.	Implementar um subprograma que dado um vetor de booleans, retorna true se ao menos um dos elementos do vetor for verdadeiro ou false, caso contrário

function trueOrFalse (vetor) {
   
    for (let i = 0; i <vetor.length; i++) {
        if (vetor[i] == true) {
            return true
        }
    }
    return false
}
console.log(trueOrFalse([ false, true, false, true]))

