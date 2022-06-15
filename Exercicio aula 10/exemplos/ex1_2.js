//Exemplo 1.2 - Implementação da classe Retangulo e suas operações.

class Retangulo { // início da declaração da classe Retangulo
    constructor(base, altura) { // define quais são os atributos
        this.base = base // base = a base passada como parâmetro
        this.altura = altura // base = a altura passada como parâmetro
    }
}

function perimetro(ret) { // computa o perímetro de um Retangulo
    return  2 * (ret.base + ret.altura)
}

function area(ret) { // computa a área de um Retangulo
    return (ret.base * ret.altura)
}

var r1 = new Retangulo(10, 20) // variável do tipo Retangulo

var perimetro = perimetro(r1) // computa o perímetro de r1
console.log("perimetro de r1:", perimetro) // imprime o perímetro

var area = area(r1) // computa a aŕea de r1

console.log("area de r2:", area) // imprime a área de r1
