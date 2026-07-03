function simularSaque(valor) {
    if (valor > 0 && valor % 10 === 0) {
        console.log("Saque possível.");
    } else {
        console.log("Saque inválido. O caixa opera apenas com múltiplos de R$ 10,00.");
    }
}
simularSaque(150);