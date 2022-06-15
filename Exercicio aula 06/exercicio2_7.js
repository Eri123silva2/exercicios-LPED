//7.	Implemente um programa capaz de imprimir os números negativos múltiplos de 5 até -100

console.log("Usando for:")
for (i = 0; i >= -100; i = i -5){
    console.log(i)
}

//////////////////////////////

console.log("Usando while:")
var i = 0

while( i >= -100) {
    console.log(i)
    i = i - 5
}
//////////////////////////////////
/*
var quantDivisores = 1
i = 0

for(num = 5 ; i <=2 && quantDivisores <= num; num--){
    if(num % divisores == 0){
        i++
    }
}

if (i != 2){
    console.log("não é primo")
} else {
    console.log("é primo")
}
*/

console.log("Fim do programa")