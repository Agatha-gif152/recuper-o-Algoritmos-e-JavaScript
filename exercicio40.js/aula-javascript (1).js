function verificarPrimo(numero) {
    if (numero <= 1) return console.log(`${numero} não é primo.`);
    let divisores = 0;
    
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++;
        }
    }
    
    if (divisores === 2) {
        console.log(`${numero} é um Número Primo.`);
    } else {
        console.log(`${numero} NÃO é um Número Primo (possui ${divisores} divisores).`);
    }
}
verificarPrimo(17);