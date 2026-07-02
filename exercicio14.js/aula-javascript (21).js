let idadeJogador = Number(prompt("Digite a idade do jogador de futebol:"));

if (idadeJogador <= 15) {
    console.log("Categoria: Sub-15");
} else if (idadeJogador >= 16 && idadeJogador <= 20) {
    console.log("Categoria: Sub-20");
} else {
    console.log("Categoria: Profissional");
}