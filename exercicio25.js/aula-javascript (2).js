function calcularPrecoFidelidade(valorCompra, tipoCartao) {
    let desconto = 0;
    
    switch (tipoCartao.toLowerCase()) {
        case "ouro": desconto = 0.20; break;
        case "prata": desconto = 0.10; break;
        case "bronze": desconto = 0.05; break;
        default: desconto = 0;
    }
    
    const precoFinal = valorCompra * (1 - desconto);
    console.log(`Cartão: ${tipoCartao} | Preço Final: R$ ${precoFinal.toFixed(2)}`);
}
calcularPrecoFidelidade(100, "Ouro");