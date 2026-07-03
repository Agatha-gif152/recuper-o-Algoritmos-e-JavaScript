function inspecionarLetra(letra) {
    letra = letra.toLowerCase();
    if ("aeiou".includes(letra)) {
        console.log(`${letra.toUpperCase()} é uma Vogal`);
    } else if (letra >= "a" && letra <= "z") {
        console.log(`${letra.toUpperCase()} é uma Consoante`);
    } else {
        console.log("Entrada inválida.");
    }
}
inspecionarLetra("b");