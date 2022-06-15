//1.	Implemente um programa capaz de identificar se um número é divisível por 3 e 2

n = 11;

if (n % 3 == 0 && n % 2 == 0) {
    console.log(n, " é divisível por 3 e por 2");
} else if (n % 3 == 0) {
    console.log(n, "É divisível por 3, mas não é divisível por 2");
} else if (n % 2 == 0) {
    console.log(n, "É divisível por 2, mas não é divisível por 3");
} else {
    console.log(n, "não é divisível nem por 3 nem por 2");
} console.log("Fim do Programa");