const matriz2x4 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
];
let somaTotalMatriz = 0;

for (let i = 0; i < matriz2x4.length; i++) {
    for (let j = 0; j < matriz2x4[i].length; j++) {
        somaTotalMatriz += matriz2x4[i][j];
    }
}
console.log(`Soma de todas as células: ${somaTotalMatriz}`);