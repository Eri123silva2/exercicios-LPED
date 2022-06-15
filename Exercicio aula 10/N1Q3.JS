// cubo

class Cubo {

    constructor (aresta) {
        this.aresta = aresta
    }
}

function volumeCubo (cubo) {
    return ` O volume do cubo é = ${cubo.aresta**3}`
}

function areaCubo (cubo) {
    return `A área do cubo é = ${cubo.aresta**2}`
}


var cubo1 = new Cubo(9)
console.log(volumeCubo(cubo1)) 
console.log(areaCubo(cubo1))