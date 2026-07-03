const dezNumeros = [23, 45, 89, 12, 56, 78, 92, 4, 67, 31];
let maior = dezNumeros[0];

for (let i = 1; i < dezNumeros.length; i++) {
    if (dezNumeros[i] > maior) {
        maior = dezNumeros[i];
    }
}
console.log(`O maior número armazenado é: ${maior}`);