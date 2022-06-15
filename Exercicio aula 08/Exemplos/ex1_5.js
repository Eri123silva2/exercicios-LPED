//Exemplo 1.5 - Computa a média dos estudantes.

var notas = [3.6, 4.5, 2, 9, 7.5] // as notas dos estudantes
var media = 0 // guardará o valor da média

for (var i = 0; i < notas.length; i++) {
    media = media + notas[i] // soma das notas, elemento a elemento
}

media = media / notas.length // a soma torna-se a média pela divisão

console.log(media)


