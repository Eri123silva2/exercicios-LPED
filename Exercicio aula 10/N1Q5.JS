//5.	Carro

class Carro {
    constructor(fabricante, modelo, anoLancamento) {
        this.fabricante = fabricante
        this.modelo = modelo
        this.anoLancamento = anoLancamento
    }
}

function retornarOLancmnetoMaisRecente(carro1, carro2) {
    if (carro1.anoLancamento > carro2.anoLancamento) {
        return `o carro ${carro1.modelo} foi lançado mais recentemente`
    } else if (carro1.anoLancamento < carro2.anoLancamento) {
        return `o carro ${carro2.modelo} foi lançado mais recentemente`
    } else {
        return `O carro ${carro1.modelo} e o carro ${carro2.modelo} foram lançados no mesmo ano`
    }
}

function retornarTrueSeForDoMesmoFabricante (carro1, carro2) {
    return carro1.fabricante == carro2.fabricante
}

var carro1 = new Carro ("chevrolet", "Onix", 2020)
var carro2 = new Carro ("chevrolet", "Onix Plus", 2022)

console.log(retornarOLancmnetoMaisRecente(carro1, carro2))
console.log(retornarTrueSeForDoMesmoFabricante(carro1, carro2))