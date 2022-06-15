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

/**
 *
 * Classe que representa um Conta.
 *
 */
 class ContaBanco {
    constructor(numero, saldo) {
        this.numero = numero // número da Conta
        this.saldo = saldo // saldo da Conta
    }
}

/**
 * Credita um valor no saldo de uma conta
 *
 * @param Conta c a Conta onde o valor será creditado
 * @param double valor o valor a ser creditado
 *
 */
function creditar(c, valor) {
	c.saldo = c.saldo + valor
}

/**
 * Debita um valor no saldo de uma conta, caso haja saldo
 *
 * @param Conta c a Conta onde o valor será debitado
 * @param double valor o valor a ser debitado
 *
 */
function debitar(c, valor) {
	// se a conta não tiver saldo, nada será feito
	if (c.saldo < valor) {
		return
	}

	c.saldo = c.saldo - valor
}

// Caso apenas a classe ContaBanco fosse exportada:
//module.exports = ContaBanco
// Em POO, como as funções ficam dentro da classe, só precisaríamos exportar a classe

// Como vamos exportar a classe e as  funções
exports.ContaBanco = ContaBanco
exports.creditar = creditar
exports.debitar = debitar