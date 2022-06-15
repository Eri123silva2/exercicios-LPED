//Implemente um programa capaz de elevar um número ao quadrado e informar se o resultado é maior do que 100;

n = 10;
//quando a variavel for receber um número não precisa de parenteses 

if ((n**2) > 100) {
//nesse caso foi preciso os parenteses pois dentro do if será realizado um calculo, mas caso contrário não precisaria 
    console.log(n, "x",  n, "É maior que 100.")
//o alert existe em javaScript, mas ai nos programas da gente, por enquanto, não vamos usar ele
} else if ( (n**2) < 100) {
    console.log(n, "x", n, "É menor que 100")
} else {
    console.log("Ambos são iguais");
}

console.log("Fim do programa");
