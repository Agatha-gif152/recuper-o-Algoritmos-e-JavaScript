let numero = Number(prompt("Digite um número inteiro:"));

if (numero > 0) {
    console.log(`O número ${numero} é Positivo.`);
} else if (numero < 0) {
    console.log(`O número ${numero} é Negativo.`);
} else {
    console.log("O número digitado é exatamente Zero.");
}