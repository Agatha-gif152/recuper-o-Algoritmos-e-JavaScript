function simularEntradaPositiva(entradas) {
    let i = 0;
    while (i < entradas.length) {
        if (entradas[i] <= 0) {
            console.log(`Erro: ${entradas[i]} não é estritamente positivo. Tente de novo.`);
        } else {
            console.log(`Sucesso! Número positivo aceito: ${entradas[i]}`);
            break;
        }
        i++;
    }
}
simularEntradaPositiva([-5, 0, 12]);