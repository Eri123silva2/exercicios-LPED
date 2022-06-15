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

/*
*
* B-A-BA da Programação OO
*
* 1) Toda funcao dentro de uma classe é chamada de metodo
*
* 2) Todo metodo possui um parametro implicito o this
*
* 3) O this e o objeto do tipo na classes na qual o medo foi chamado, exemplo:
*
*	p = new Produto("Bola", 5.00, 15)
*	p.imprimirProduto() // nesta chama o this dentro da funcao torna-se o p
*
*/


class Produto {

	constructor(nome, preco, estoque) {
		this.nome = nome
		this.preco = preco
		this.estoque = estoque
	}

	// aqui é definida a propriedade nome para o objeto Produto
	//
	// toda vez que uma leitura da propriedade for feita, ex.:
	// console.log(p1.nome)
	// sera chamada a funcao get
	//
	// toda vez que uma escrita da propriedade for feita, ex.:
	// p1.nome = 'carro'
	// sera chamada a funcao set

	get nome() {
		return this._nome
	}

	set nome(nome) {
		this._nome = nome
	}

	imprimirProduto() {
		console.log("Nome - ", this.nome)
		console.log("Preco - ", this.preco)
		console.log("Estoque - ", this.estoque)
	}

	disponivelNoEstoque() {
		if (this.estoque > 0) {
			return true
		} else {
			return false
		}
	}

}


p1 = new Produto("Churro", 1, 10)

p1.imprimirProduto()

if (p1.disponivelNoEstoque()) {
	console.log(`${p1.nome} disponivel no estoque`)
} else {
	console.log(`${p1.nome} nao disponivel no estoque`)
}

p2 = new Produto("Fuba", 1.20, 0)

p2.imprimirProduto()

if (p2.disponivelNoEstoque()) {
	console.log(`${p2.nome} disponivel no estoque`)
} else {
	console.log(`${p2.nome} nao disponivel no estoque`)
}