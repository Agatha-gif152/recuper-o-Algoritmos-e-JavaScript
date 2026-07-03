function saudacaoPersonalizada(nome, periodo) {
    let cumprimento = "Olá";
    if (periodo.toLowerCase() === "manhã") cumprimento = "Bom dia";
    else if (periodo.toLowerCase() === "tarde") cumprimento = "Boa tarde";
    else if (periodo.toLowerCase() === "noite") cumprimento = "Boa noite";
    
    console.log(`${cumprimento}, ${nome}!`);
}
saudacaoPersonalizada("Fulano", "Manhã");