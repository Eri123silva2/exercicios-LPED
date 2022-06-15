//6.	Implemente um programa capaz de identificar quando duas variáveis são negativas ao mesmo tempo;

n1 = 5;
n2 = 9;

if (n1 < 0 && n2 < 0) {
    console.log("Ambas são negativas");
} else if (n1 < 0 ) {
    console.log("Apenas a variavel", n1, "é negativa");
} else if (n2 < 0) {
    console.log("Apenas a variavel", n2, "é negativa");
} else {
    console.log("Ambas não são negativas");
} console.log("Fim do Programa");