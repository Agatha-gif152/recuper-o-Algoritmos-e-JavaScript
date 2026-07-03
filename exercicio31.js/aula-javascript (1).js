function calcularMediaCincoNumeros(n1, n2, n3, n4, n5) {
    const numeros = [n1, n2, n3, n4, n5];
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    console.log(`Média: ${soma / numeros.length}`);
}
calcularMediaCincoNumeros(10, 20, 30, 40, 50);