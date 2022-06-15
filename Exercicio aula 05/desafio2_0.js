//Dados três números, encontrar qual deles é o mais próximo da média aritmética deles (já foi questão de prova).

n1 = 40;
n2 = 40;
n3 = 10;
media_aritmetica = (n1 + n2 + n3) / 3;
console.log("A média aritmética é =", media_aritmetica);

subN1 = media_aritmetica - n1;
subN2 = media_aritmetica - n2;
subN3 = media_aritmetica - n3;

if (subN1 < 0) {
    subN1 = subN1 * -1;
}
if (subN2 < 0) {
    subN2 = subN2 * -1;
}
if (subN3 < 0) {
    subN3 = subN3 * -1;
}
if ((subN1 <= subN2) && (subN1 <= subN3)) {
    console.log(n1, "É o mais próximo da média aritmética");
} else if ((subN2 <= subN1) && (subN2 <= subN3)) {
    console.log(n2, "É o mais próximo da média aritmética");
} else {
    console.log(n3, "É o mais próximo da média aritmética");
}
