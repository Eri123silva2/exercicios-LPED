//Implementar uma função que recebe como parâmetro quatro números e retorna quantos números pares há entre ele
var i = 0
function pares(num) {
    if (num % 2 == 0) {
        i++
    }
}

function quantPares(num1, num2, num3, num4) {
    pares(num1)
    pares(num2)
    pares(num3)
    pares(num4)
}
quantPares(2, 3, 17, 18)
 console.log(i)