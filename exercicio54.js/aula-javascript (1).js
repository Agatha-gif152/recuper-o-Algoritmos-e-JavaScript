function buscarCodigo(codigoBuscado) {
    const produtos = ["P01", "P02", "P03", "P04", "P05", "P06", "P07", "P08"];
    let encontradoIndice = -1;

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i] === codigoBuscado) {
            encontradoIndice = i;
            break;
        }
    }

    if (encontradoIndice !== -1) {
        console.log(`Código ${codigoBuscado} encontrado no índice: ${encontradoIndice}`);
    } else {
        console.log(`Código ${codigoBuscado} não existe no vetor.`);
    }
}
buscarCodigo("P05");