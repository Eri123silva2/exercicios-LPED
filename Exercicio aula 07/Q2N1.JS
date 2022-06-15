//Implementar uma função que recebe um número como parâmetro e retorna true se ele for divisível 7 e false caso contrário

 function divisivel (numero) {
          if (numero % 7 == 0) {
               return true
          } else{
               return false
          }
      }   

 let resultado =  divisivel (14)
 console.log(resultado)