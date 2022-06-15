//9.	Implemente um programa capaz de traduzir os pronomes I, you, he, she, it, we e they do Inglês para o Português;

var pronome = "IT";

console.log("Escreva o pronome apenas em letras MAIÚSCULA");

switch (pronome) {
    case "I":
        console.log("Eu");
        break
    case "YOU":
        console.log("Você");
        break
    case "HE":
        console.log("Ele");
        break
    case "SHE":
        console.log("Ela");
        break
    case "IT":
        console.log("Ele/ela referindo-se a animais ou objetos");
        break
    case "WE":
        console.log("Nós");
        break
    case "THEY":
        console.log("Eles");
        break
    default:
        console.log("Pronome inválido");
        break
}