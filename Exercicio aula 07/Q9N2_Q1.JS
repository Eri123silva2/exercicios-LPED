//Implementar uma função que recebe três números como parâmetro e imprime aqueles que são múltiplos de 2 e de 3 ao mesmo tempo

function testeDivisao(n) {
    if ((n % 2 == 0) && (n % 3 == 0)) {
      console.log(n)
    }
  }

  function testeDivisaoTresNumeros(a, b, c) {
    testeDivisao(a)
    testeDivisao(b)
    testeDivisao(c)
  }

testeDivisaoTresNumeros(6, 24, 12)