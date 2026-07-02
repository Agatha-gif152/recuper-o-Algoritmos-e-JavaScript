let num1 = Number(prompt("Digite o primeiro número inteiro:"));
let num2 = Number(prompt("Digite o segundo número inteiro:"));

// Math.trunc extrai a parte inteira do resultado da divisão
let quociente = Math.trunc(num1 / num2); 
let resto = num1 % num2;

console.log(`Quociente da divisão inteira: ${quociente}`);
console.log(`Resto da divisão (%): ${resto}`);