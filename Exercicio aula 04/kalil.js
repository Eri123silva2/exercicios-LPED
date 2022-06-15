/*var a = -15;
var b = 27;

if( a % 5 == 0 && b % 5 == 0 ) {
     console.log( "São divisível por 5");

} else if (a %  5 == 0 && b % 5 != 0) {
     console.log(a , " Não é divisível por 5");
     //se o resto da divisão de A ==0, logo, A é divisível 

} else if (a %  5 != 0 && b % 5 == 0){
     console.log(b , " Não é divisível por 5");
     //se o resto da divisão de A ==0, logo, B é divisível 

} else  {
    console.log ("Não são divisíveis por 5");
}
*/
var a = 0; 
var b = 8; 
var c = 27;

if (a!=0){

    console.log(a,"=a é diferente de 0")
}

delta = (b*b) - (4*a*c)

console.log("D:",delta)

if (delta < 0){
    
    console.log(delta)
}

x1 = (-b + Math.sqrt(delta)) / (2*a)
x2 = (-b - Math.sqrt(delta)) / (2*a)

console.log("x1:", x1)
console.log("x2:", x2)