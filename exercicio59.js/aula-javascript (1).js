const mValores = [
    [5, 12, 7],
    [3, 45, 9],
    [14, 21, 8]
];

let maiorValor = mValores[0][0];
let linhaMaior = 0;
let colunaMaior = 0;

for (let i = 0; i < mValores.length; i++) {
    for (let j = 0; j < mValores[i].length; j++) {
        if (mValores[i][j] > maiorValor) {
            maiorValor = mValores[i][j];
            linhaMaior = i;
            colunaMaior = j;
        }
    }
}
console.log(`Maior valor: ${maiorValor} encontrado na Linha [${linhaMaior}], Coluna [${colunaMaior}]`);