function imprimirAsteriscos(k) {
    let linha = "";
    for (let i = 0; i < k; i++) {
        linha += "*";
    }
    console.log(linha);
}
imprimirAsteriscos(8);