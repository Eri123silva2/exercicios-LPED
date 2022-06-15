//Implementar uma função que recebe dois parâmetros e retorna true se o primeiro ou o segundo forem negativos, e false, caso contrário

function negativos(n1, n2) {
    if ((n1 < 0) || (n2 < 0)) {
        return true
    } else {
        return false
    }
}

console.log(negativos(-2, 4))