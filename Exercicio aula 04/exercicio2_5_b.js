5.	//Implemente um programa capaz de computar o Índice de Massa Corporal (peso dividido pelo quadrado da altura) e classificar o resultado entre magreza (inferior a 18.5), saudável (entre 18.5 e 25), sobrepeso (acima de 25);

var altura = 1.70;
var peso = 70;
var IMC = peso / (altura**2);

if ( IMC < 18.5) {
    console.log("Seu IMC:", IMC.toFixed(2), "\nVocê está abaixo do peso");
} else if (IMC < 25){
    console.log("Seu IMC:", IMC.toFixed(2), "\nVocê está no peso normal");
} else {
    console.log("Seu IMC:", IMC.toFixed(2), "\nVocê está acima do peso.");
}

console.log("Fim do programa!")