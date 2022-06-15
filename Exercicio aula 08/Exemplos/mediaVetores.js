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

// array com todas as médias
var notas = [ 5.6, 6.2, 7.8, 3.8, 1.0, 10.0, 5.5, 6.5, 8.9, 3.1]
// resultado da média
var media = 0.0

// computação da soma das notas com um laço
for (var i = 0; i < notas.length; i++) {
    media = media + notas[i]
}

// divisão da soma pela quantidade de todas
// gerando assim a média
media = media / notas.length

console.log(media)
