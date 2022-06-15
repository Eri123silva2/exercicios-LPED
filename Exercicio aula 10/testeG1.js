// Implemente no node.js, ao menos, uma operação (função) sobre Quadrado:

class Quadrado {
    constructor(base, altura) {
        this.base = base
        this.altura = altura
    }
}

function area(quad) {
    return (quad.base * quad.altura)
}

let resultado = new Quadrado(2, 4)
let area1 = area(resultado)

console.log("perimetro de r1:", area1)
