/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Código de Domínio Público, sinta-se livre para usá-lo, modificá-lo e redistribuí-lo.
 *
 */

class Produto {
	constructor(nome, preco, estoque) {
		this.nome = nome
		this.preco = preco
		this.estoque = estoque
	}
}

function imprimirProduto(p) {
	console.log("Nome - ", p.nome)
	console.log("Preco - ", p.preco)
	console.log("Estoque - ", p.estoque)
}

function disponivelNoEstoque(p) {
	if (p.estoque > 0) {
		return true
	} else {
		return false
	}
}

p1 = new Produto()
p1.nome = "Churro"
p1.preco = 1
p1.estoque = 10

imprimirProduto(p1)

if (disponivelNoEstoque(p1)) {
	console.log(`${p1.nome} disponivel no estoque`)
} else {
	console.log(`${p1.nome} nao disponivel no estoque`)
}

p2 = new Produto("Fuba", 1.20, 0)

imprimirProduto(p2)

if (disponivelNoEstoque(p2)) {
	console.log(`${p2.nome} disponivel no estoque`)
} else {
	console.log(`${p2.nome} nao disponivel no estoque`)
}