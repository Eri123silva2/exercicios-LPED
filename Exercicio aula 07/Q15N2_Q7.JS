//mplementar uma função que recebe como parâmetro quatro números e retorna quantos números ímpares há entre eles
var i = 0
function quantImpares(n) {
    if(n % 2 == 1) {
        i++
    }
}

function testeImpares(n1, n2,n3,n4) {
    quantImpares(n1)
    quantImpares(n2)
    quantImpares(n3)
    quantImpares(n4)
}
testeImpares(32,7,16,11)
console.log(i)