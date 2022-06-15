// Exemplo 1.1 - Declaração do tipo Retangulo.

class Retangulo { // início da declaração da classe Retangulo
    constructor(base, altura) { // define quais são os atributos
        rathis.base = base // base = a base passada como parâmetro
        this.altura = altura // base = a altura passada como parâmetro
    }
}


var r1 = new Retangulo(10, 20) // variável do tipo Retangulo
var r2 = new Retangulo(3, 4) // outra variável do tipo Retangulo


console.log(r1.base, r1.altura) // imprime os dados de r1

r1.base = 15 // altera a base de r1
console.log(r1.base, r1.altura) // imprime os dados de r1 novamente


console.log(r2.base, r2.altura) // imprime os dados de r2
r2.altura = 5 // altera a base de r2
console.log(r2.base, r2.altura) // imprime os dados de r2 novamente


