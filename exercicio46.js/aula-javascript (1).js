function calcularDesconto(precoOriginal, porcentagemDesconto) {
    return precoOriginal * (1 - porcentagemDesconto / 100);
}
console.log(`Preço reduzido: R$ ${calcularDesconto(200, 15).toFixed(2)}`);