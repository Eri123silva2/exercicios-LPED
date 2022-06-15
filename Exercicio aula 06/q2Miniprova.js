/*a = -10
b = 6
c = 0

while (a < c) {
    if (a < b) {
        c = - (b + a) + 2
        a = a + 4
        b = b * (-2)
    } else if (a > b) {
        a = a - 1
        b = b * (-1)
    } else {
        a = a + a
    }
    console.log(a, b, c)
}

while (a < c) {
    if (a < b) {
        c = -(b + a) + 2
        a = a + 4
        b = b * -2
    } else if (a > b) {
        a = a - 1
        b = b * (-1)
    } else {
        a = a + a
    }
    console.log(a, b, c)
}*/
/*
a = 2; b = 3; c = -1;


while (c < b) {
    if (a > b) {
        a = b * 2 - c
        b = b - 2
        c = a  + b + 2
    } else if (a == b) {
        a = -a
    } else {
        b = b - 1
        c = c * c
    }
    console.log(a, b, c)
}*/

var num = 12; var divisores = 1;

while (divisores <= num) {
    if (num % divisores == 0) {
        console.log(divisores)
    } divisores++
   
}


