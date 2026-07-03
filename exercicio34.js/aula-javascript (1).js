function contarPares(arrayDeSete) {
    let pares = 0;
    for (let i = 0; i < arrayDeSete.length; i++) {
        if (arrayDeSete[i] % 2 === 0) {
            pares++;
        }
    }
    console.log(`Quantidade de números pares: ${pares}`);
}
contarPares([1, 2, 3, 4, 5, 6, 7]);