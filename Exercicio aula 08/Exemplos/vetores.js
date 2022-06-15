// << VETORES >>

// Índice	->	Valor
// 0		->	5
// 1		->	3
// 2		->	-1
// 3		->	0
// 4		->	'6'
// 5		->	'ab'
// 6		->	3

// declaração
vetor = [5, 3, -1, 0, '6', 'ab', 3]

// acesso
// console.log(vetor[5])

// atualização
vetor[5] = 'cd'
// console.log(vetor[5])


// visitação
for (let i = 0; i < vetor.length; i++) {
	console.log(i, "->", vetor[i])
}

console.log()

let j = 0 
while (j < vetor.length) {
	console.log(j, "->", vetor[j])
	j++
}