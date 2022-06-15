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
* JavaScript tambem possui uma sintaxe alternativa chamada de "prototype"
*
*/


// note como a classes e definida como uma funcao
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque
}

// metodos são adicionados a classe fora da classe
// há uma vantagem importante nisto: a classe pode
// ser definida em diversos arquivos

// note também como os metodos na verdade sao como
// atributos da classe como sao os proprios valores
// ja presentes, neste caso nome, produto e estoque.

// O que isto implica sobre a forma que o imterpretador
// executa nossos codidos?

Produto.prototype.imprimirProduto = function() {
console.log("Nome - ", this.nome)
console.log("Preco - ", this.preco)
console.log("Estoque - ", this.estoque)
}

Produto.prototype.disponivelNoEstoque = function() {
if (this.estoque > 0) {
    return true
} else {
    return false
}
}

// definicao de nome como uma propriedade
Object.defineProperties(Produto.prototype, {
nome: {
get() {
  return this._nome
},
set(nome) {
  this._nome = nome
}
}
})

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