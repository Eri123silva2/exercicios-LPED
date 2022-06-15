//4.	Implemente um programa capaz de imprimir os 10 primeiros números ímpares

console.log("Usando for:")
for (i = 1; i < 20; i = i + 2) /*i = i +2 para o programa não ficar testando números desnecessários*/ {
        console.log(i)
}

//////////////////////

console.log("Usando while:")

i = 1

while (i <= 20) {
        console.log(i)
        i = i + 2
}

console.log("Fim do programa")