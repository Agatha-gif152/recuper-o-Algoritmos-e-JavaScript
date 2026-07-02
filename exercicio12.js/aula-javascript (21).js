let anoNascimento = Number(prompt("Digite o ano do seu nascimento:"));
let anoAtual = Number(prompt("Digite o ano atual:"));
let idade = anoAtual - anoNascimento;

console.log(`Idade calculada: ${idade} anos.`);

if (idade >= 18) {
    console.log("Status: Você já atingiu a maioridade legal.");
} else {
    console.log("Status: Você ainda é menor de idade.");
}