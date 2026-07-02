let reais = Number(prompt("Digite a quantia em Reais (R$):"));
const cotacaoEuro = 6.00;
let euros = reais / cotacaoEuro;

console.log(`R$ ${reais.toFixed(2)} equivalem a € ${euros.toFixed(2)} (Cotação: R$ 6,00)`);