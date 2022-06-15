//10.	Implemente um programa capaz de identificar se duas variáveis são pares e negativas ao mesmo tempo;

n1 = 7;
n2  = -13;

if ((n1 < 0  && n1 % 2 == 0) && (n2 < 0 && n2 % 2 ==0)) {
    console.log("Ambas as variáveis são negativas e pares");
} else if ((n1 < 0 && n1 % 2 == 0) || (n2 < 0 && n2 % 2 ==0 )) {
    console.log("Apenas umas das variáveis é negativa e par ao mesmo tempo");
} else {
    console.log("Nenhumas das variáveis são negativas e pares ao memo tempo");
}

console.log("Fim do Programa");