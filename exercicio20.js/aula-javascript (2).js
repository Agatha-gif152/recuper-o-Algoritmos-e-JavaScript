function verificarIntervalo(numero) {
    if (numero >= 10 && numero <= 50) {
        console.log(`O número ${numero} está ESTRITAMENTE dentro do intervalo [10, 50].`);
    } else {
        console.log(`O número ${numero} está fora do intervalo.`);
    }
}
verificarIntervalo(25);