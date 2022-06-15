//1.	Implemente um programa capaz de testar se o quadrado de um número é maior do que ele multiplicado por 10;

n  = 5;
quadrado = n**2;
x10 = n*10;
if (quadrado > x10) {
    console.log("O quadrado é maior");
}else if ( quadrado < x10) {
    console.log("A multiplicação é maior");
}else {
    console.log("Ambos são iguais");
}
console.log("Fim do programa");
