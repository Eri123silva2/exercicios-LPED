/*
class Filme {

	constructor(nome, duracao) {
		this.nome = nome
		this.duracao = duracao
	}

}

function filmesIguais(f1, f2) {
	if (f1.nome == f2.nome && f1.duracao == f2.duracao) {
		return true
	} else {
		return false
	}
}

var ghost = new Filme('Ghost', 120)
var matrix = new Filme('Matrix', 130) 

console.log(ghost)
console.log(matrix)

var iguais = filmesIguais(ghost, matrix)

console.log('os filmes sao iguais:', iguais)

var iguais = filmesIguais(ghost, ghost)

console.log('os filmes sao iguais:', iguais)*/

/////////////////////////////////////////////

//RETORNAR O FILME DE MAIOR DURAÇÃO

class Filmes {

	constructor (nome, duracao) {
		this.nome = nome
		this.duracao = duracao
	}
}

function retornarFilmeDeMaiorDuração (filme1, filme2) {

	if(filme1.duracao== filme2.duracao) {
		return "Ambos os filmes têm a mesma duração"
	} else if (filme1.duracao > filme2.duracao) {
		return `O filme: "${filme1.nome}" tem a maior duração`
	} else {
		return  `O filme: "${filme2.nome}" tem a maior duração`
	}
}

var filme1 = new Filmes("A volta dos que não foram", 160)
var filme2 = new Filmes("A trança do rei careca", 120)

console.log(retornarFilmeDeMaiorDuração(filme1, filme2))