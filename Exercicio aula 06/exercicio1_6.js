//6.	Implemente um programa capaz de imprimir os 10 primeiros números divisíveis por 10

console.log("Usando while com if")
numero = 0
while (numero < 100) {
    numero++ // poderia ser + 10, dessa forma o programa rodaria mais rápido
    if (numero % 10 == 0)
        console.log(numero)
}

///////////////////////////
console.log("Usando while sem if:")

var i = 10

while(i <= 100) {
    console.log(i)
    i = i + 10
}

////////////////////////////
console.log("Usando For")
for (i = 10; i <= 100; i = i + 10)
        console.log(i)

///////////////////////////////