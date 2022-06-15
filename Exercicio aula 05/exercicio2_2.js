//2.	Implemente um programa capaz de, dados três números, encontrar o menor entre eles;

a = 1
b = 1
c = 1

if (a < b && a < c) {
    console.log("menor:", a)
} else if (b < c) {
    console.log("menor:", b)
} else if (a == b && a == c && b == c) {
    console.log("não há um numero maior pois todos os números  são iguais")
} else {
    console.log("menor:", c)
}
