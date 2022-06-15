/* 
 * 
 * Instituto Federal de Educação, Ciência e Tecnologia – IFPE, Campus IGARASSU 
 * Projeto de extensão: Democratização do acesso aos cursos de Tecnologia da Informação: 
 * Uma ponte entre o IFPE – Campus Igarassu e a sociedade 
 * Curso: IPI - Informática para Internet  
 * TSI – Sistema para Internet 
 *  
 * Coordenador do Projeto: Allan Diego Silva Lima  
 * Estudantes Bolsistas: Arthur Vinicius dos Santos Barbosa e Ingrid Sthefanny Gomes de Farias  
 * Aula: Aula 04 – Operadores Lógicos – Atividade  
 * Licença: Creative Commons CC BY - https://creativecommons.org/licenses/by/4.0/deed.pt_BR 
 * Questão 1: Nivel 2 - Implemente um programa capaz de, dados três números, encontrar o maior entre eles
 * 
 */



// SUGESTÃO de casos para testar com os 3 números: a, b e c
// 1) quando a é o maior
// 2) quando b é o maior
// 3) quanto c é o maior
// 4) quando não há maior? (números iguais)


var a = 8
var b = 10
var c = 10

if (a > b && a > c) {
	console.log("maior:", a)
} else if (b > c) {
	console.log("maior:", b)
} else {
	console.log("maior:", c)
}