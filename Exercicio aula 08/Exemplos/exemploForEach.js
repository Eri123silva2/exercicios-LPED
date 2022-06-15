/**
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Código de Domínio Público, sinta-se livre para usá-lo, modificá-lo e redistribuí-lo.
 *
 */

// cria e inicializa um array de caracteres com 4 elementos
var valores = ['i', '-', '*', '3'];

// imprime todos os elementos do array
// a cada iteração do laço, é a atribuída
// elemento o valor de um dos índices de valores
//...
// leia como "para cada elemento em valores"

valores.forEach((elemento) => {
	// todos os elementos são impressos
	console.log('@', elemento);
});

for (var i = 0; i < valores.length; i++) {
	var elemento = valores[i];
	// todos os elementos são impressos
	console.log('#', elemento);
}
