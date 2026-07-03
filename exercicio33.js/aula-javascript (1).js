function calcularFatorial(n) {
    if (n < 0) return console.log("Apenas inteiros positivos.");
    let fatorial = 1;
    for (let i = n; i > 1; i--) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${n} é: ${fatorial}`);
}
calcularFatorial(5);