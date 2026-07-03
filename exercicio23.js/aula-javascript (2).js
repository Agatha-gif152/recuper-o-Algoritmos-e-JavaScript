function verificarBissexto(ano) {
    if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) {
        console.log(`O ano ${ano} é BISSEXTO.`);
    } else {
        console.log(`O ano ${ano} NÃO é bissexto.`);
    }
}
verificarBissexto(2024);