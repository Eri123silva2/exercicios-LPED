// 5.	Implementar subprograma que dados dois inteiros a e b cria um vetor contendo todos os elementos entre a e b Exemplo: entrada: 2 e 6, saída: [3, 4, 5]

function intervalo (a, b) {
    var vetor = []

     if (a > b) {
         let reserva = a
         a = b
         b = reserva
     }

     let indice = 0
     for(i = a + 1; i < b; i++) {
         vetor[indice] = i 
         indice++
     }

     return (vetor)

}

console.log(intervalo(2, 6))

