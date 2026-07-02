let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let mediaPonderada = ((nota1 * 3) + (nota2 * 7)) / 10;

console.log(`A média ponderada do aluno é: ${mediaPonderada.toFixed(1)}`);