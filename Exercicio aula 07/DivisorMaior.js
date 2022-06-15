// Implemente um subprograma que, dado um número como parâmetro, retorna o maior dos seus divisores inteiros que não seja 0, 1 ou o próprio número.

function maiorDivisor(num) {
    for(divisores = 2; divisores < num; divisores++){
        if(num % divisores == 0) {
            maiorDivisor = divisores
        }
    }
    return maiorDivisor
}

console.log(maiorDivisor(21))