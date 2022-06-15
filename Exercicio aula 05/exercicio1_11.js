//11.	Implemente um programa capaz de identificar se duas variáveis são ímpares e positivas ao mesmo tempo.

n1 = 11;
n2 = 4;

if ((n1 > 0 && n1 % 2 != 0) && (n2 > 0 && n2 % 2 != 0 )) {
    console.log("Ambas as variáveis são ímpares e positivas");
} else if ((n1 > 0 && n1 % 2 != 0) || (n2 > 0 && n2 % 2 != 0  )) {
    console.log("Apenas uma das variáveis é positiva e impar");
} else {
    console.log("Nenhuma das variáveis são positivas e impares ao mesmo tempo");
}

console.log("Fim do Programa!");