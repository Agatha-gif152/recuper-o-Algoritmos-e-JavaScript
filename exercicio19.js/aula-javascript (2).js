function verificarTriangulo(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        console.log("Os comprimentos formam um Triângulo Válido.");
    } else {
        console.log("Não é possível formar um Triângulo.");
    }
}
verificarTriangulo(3, 4, 5);