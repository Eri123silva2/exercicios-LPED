//.	Implemente um programa capaz de testar se um número é divisível por 3 e por 4 (tente fazer usando apenas if’s)
n = 8;

if( n % 3 == 0 && n % 4 == 0 ) {
    console.log(n + " É divisível por 3 e 4");
} else if (n %  3 == 0 && n % 4 != 0) {
    console.log(n + " É divisível apenas por 3");
} else if (n %  3 != 0 && n % 4 == 0){
    console.log(n + " É divisível apenas por 4");
} else  {
    console.log ("Não é divisível nem por 3 nem por 4");
}

console.log("Fim do programa");