//5.	Implemente um programa capaz de computar o Índice de Massa Corporal (peso dividido pelo quadrado da altura) e classificar o resultado entre magreza (inferior a 18.5), 

function calcularIMC () {
    var inNome = document.getElementById("inNome");
    var inAltura = document.getElementById("inAltura");
    var inPeso = document.getElementById("inPeso");
    var outIMC = document.getElementById("outIMC");

    var nome = inNome.value;
    var altura = Number(inAltura.value);
    var peso = Number(inPeso.value);

    IMC = peso / (altura**2);

    if(altura == "" || peso =="" || isNaN (altura) || isNaN (peso ));
    alert("Informe os dados corretamente");
    return;

    if (IMC < 18.5) {
        console.log(nome, "você está abaixo do peso");
    }  //else if (IMC <24.9)


}

var btCalcularIMC = document.getElementById("btCalcularIMC");
btCalcularIMC.addEventListener("click", calcularIMC);
