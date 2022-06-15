console.log("Usando do... while")  
var num = 6
var divisores = 1
var i = 0

do {
    if (num %  divisores == 0){
        i++
    }
    divisores++
} while ((i <= 2) && (divisores <= num))

if (i == 2) {
    console.log(num, "é primo")
} else {
    console.log(num, "não é primo")
}

