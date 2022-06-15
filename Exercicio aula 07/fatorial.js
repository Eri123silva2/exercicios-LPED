
function fatorial(num) {
    for(var resultado = 1; num > 1; num--){
        resultado *=  num
    }
    return resultado
}

console.log(fatorial(3))