const matrizA = [
    [1, 2],
    [3, 4]
];

const matrizB = [
    [5, 6],
    [7, 8]
];

const matrizC = [];

for (let i = 0; i < 2; i++) {
    matrizC[i] = [];
    for (let j = 0; j < 2; j++) {
        matrizC[i][j] = matrizA[i][j] + matrizB[i][j];
    }
}

console.log("Matriz C (Resultado da Soma):");
for (let i = 0; i < 2; i++) {
    console.log(matrizC[i].join(" "));
}