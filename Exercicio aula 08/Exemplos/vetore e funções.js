// funções x vetores

function x(numero) {
	numero = 10
}

let valor = 15

console.log("antes da funcao: ", valor)

x(valor) // passagem por cópia

console.log("depois da funcao: ", valor)

function z(dados) {
	dados[5] = 'bola' // efeito colateral
}

vetor = [5, 3, -1, 0, '6', 'ab', 3]

console.log("antes da funcao: ", vetor[5])

z(vetor) // passagem por referência

console.log("depois da funcao: ", vetor[5])