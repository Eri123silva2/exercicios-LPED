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
 class Conta {
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


// cria um Conta
c1 = new Conta()
// altera o seu número
c1.numero = "11013-5"
// altera o seu saldo
c1.saldo = 500

// imprimindo o saldo da conta
console.log("Saldo de c1: ", c1.saldo)

creditar(c1, 100)

// imprimindo o saldo da conta
console.log("Saldo de c1: ", c1.saldo)

debitar(c1, 250)

// imprimindo o saldo da conta
console.log("Saldo de c1: ", c1.saldo)

// Note agora como é possível criar mais de um Conta utilizando o mesmo molde (ou seja a mesma classe Conta).

// cria um Conta utilizando o construtor que nos criamos
c2 = new Conta("1234-5", 300)

// imprimindo o saldo da conta
console.log("Saldo de c2: ", c2.saldo)

creditar(c2, 100)

// imprimindo o saldo da conta
console.log("Saldo de c2: ", c2.saldo)

// note como esta operação não será realizada
debitar(c2, 1000)

// imprimindo o saldo da conta