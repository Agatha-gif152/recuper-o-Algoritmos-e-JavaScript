function multiplicarPorSoma(a, b) {
    let resultado = 0;
    for (let i = 0; i < b; i++) {
        resultado += a;
    }
    console.log(`${a} x ${b} usando somas = ${resultado}`);
}
multiplicarPorSoma(5, 4);