//2.	Quadrado

class Quadrado {
    constructor(lado) {
        this.lado = lado
    }
}


function calcularArea(q1) {
    return `O quadrado que tem o  lado = ${q1.lado},  tem a área = ${q1.lado **2} `
}

function calcularPerimetro(q1) {
   return `O quadrado que tem o  lado = ${q1.lado},  tem o perímetro = ${q1.lado * 4} `

}

var quadrado1 = new Quadrado(5)

var area = calcularArea(quadrado1)
var perimetro = calcularPerimetro(quadrado1)

console.log(area)
console.log(perimetro)