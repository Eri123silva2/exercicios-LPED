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


// importa as classe ContaBanco e as funções creditar e debitar
const {ContaBanco, creditar, debitar} = require('./ContaBanco.js')


/**
 *
 * Classe que representa um usuário do banco.
 *
 */
class UsuarioBanco {
	constructor(nome, conta) {
		this.nome = nome // nome do usuário
		this.conta = conta // conta do usuário
	}
}

/** Cedita um valor no saldo de uma conta
 *
 * @param UsuarioBanco usuario o usuario que terá o valor credita na conta
 * @param double valor o valor a ser creditado
 *
 */
function creditarContaUsuario(usuario, valor) {
	creditar(usuario.conta, valor)
}

/**
 * Debita um valor no saldo de uma conta, caso haja saldo
 *
 * @param UsuarioBanco usuario o usuário que terá o valor será debitado na conta
 * @param double valor o valor a ser debitado
 *
 */
function debitarContaUsuario(usuario, valor) {
	debitar(usuario.conta, valor)
}


// cria uma conta
var contaDeCarlos = new ContaBanco('123', 100.0)
// cria o usuário com sua conta
var carlos = new UsuarioBanco('Carlos', contaDeCarlos)

console.log('saldo original: ', carlos.conta.saldo)

// realiza a operação de crédito
creditarContaUsuario(carlos, 200.0)

// realiza a operação de débito
debitarContaUsuario(carlos, 100.0)

console.log('saldo final', carlos.conta.saldo)