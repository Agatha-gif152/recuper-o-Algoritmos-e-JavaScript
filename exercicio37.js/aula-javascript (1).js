function processarSentinela(entradas) {
    let totalDigitados = 0;
    for (let i = 0; i < entradas.length; i++) {
        if (entradas[i] === -1) {
            break;
        }
        totalDigitados++;
    }
    console.log(`Foram digitados ${totalDigitados} números antes do sentinela.`);
}
processarSentinela([10.5, 4.2, 9.9, -1, 5.0]);