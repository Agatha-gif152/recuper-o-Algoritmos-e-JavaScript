const matrizAuditoria = [
    [10, 20, 30], // Índice 0 (Primeira Linha)
    [40, 50, 60],
    [70, 80, 90]
];
let somaPrimeiraLinha = 0;

for (let j = 0; j < matrizAuditoria[0].length; j++) {
    somaPrimeiraLinha += matrizAuditoria[0][j];
}
console.log(`Somatório exclusivo da primeira linha: ${somaPrimeiraLinha}`);