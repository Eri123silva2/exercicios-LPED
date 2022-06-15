//2.	Implemente um programa capaz de identificar se um número é divisível por 5 e 4;

n = 25;

if (n % 4 == 0 && n % 5 == 0) {
    console.log(n, " é divisível por 4 e por 5");
} else if (n % 4 == 0) {
    console.log(n, "É divisível por 4, mas não é divisível por 5");
} else if (n % 5 == 0) {
    console.log(n, "É divisível por 5, mas não é divisível por 4");
} else {
    console.log(n, "não é divisível nem por 4 nem por 5");
} console.log("Fim do Programa");