//6.	Implementar um subprograma que dado um vetor de booleans, retorna true se todos os elementos do vetor forem verdadeiros ou false, caso contrário

function justTrue(vetor) {

    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] == false) {
            return false
        }
    }
    return true
}
let vetor = [true, true, true, false, true]

console.log(justTrue(vetor))


/*
function justTrue(vetor) {

    let quantTrue = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] == true) {
            quantTrue++
        }
    }

    if ((quantTrue == vetor.length) && (i != 0)) {
        return true
    }
     return false
}

console.log(justTrue([false]))*/



