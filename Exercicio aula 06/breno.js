//Reescreva corretamente o programa abaixo para que ele possa computar corretamente o resto da divisão inteira de a por b sem utilizar o operador % (para cada alteração feita no código escreva uma frase justificando a mesma como comentário no código-fonte)

var a = 10
var b = 4
var resultado = 0

while (a >= resultado * b) {
    resultado++
    a - b
   
    if ((resultado * b) > a) {
        resultado--
        if (a > (resultado * b) ) {
            console.log("O resto da divisão vale: ", ((resultado * b) - a)*-1)
            b = 1000
        } else {
            console.log("Não há resto da divisão")
            b = 1000
        }
    }

}

console.log("Fim do Programa")
