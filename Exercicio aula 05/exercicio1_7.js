//7.	Implemente um programa capaz de Identificar quando duas variáveis são positivas ao mesmo tempo;

n1 = -10;
n2 = -7;

if (n1 > 0 && n2 > 0) {
    console.log("Ambas são positivas");
} else if (n1 > 0 ) {
    console.log("Apenas a variavel", n1, "é positiva");
} else if (n2 > 0) {
    console.log("Apenas a variavel", n2, "é positiva");
} else {
    console.log("Ambas não são positivas");
} console.log("Fim do Programa");