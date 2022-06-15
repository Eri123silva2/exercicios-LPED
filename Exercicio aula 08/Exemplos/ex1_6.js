//Exemplo 1.6 - Computa a média dos estudantes com um laço foreach.

var notas = [3.6, 4.5, 2, 9, 7.5] // as notas dos estudantes
var media = 0 // guardará o valor da média

// para cada elemento no vetor notas
for (indice in notas) { // notem como não há contador nem condição
    media = media + notas[indice] // indice muda a cada iteração
}

media = media / notas.length // a soma torna-se a média pela divisão

console.log(media)

