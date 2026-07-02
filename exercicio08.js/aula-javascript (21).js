let valorCompra = Number(prompt("Digite o valor total da compra (R$):"));
let cupom = Number(prompt("Digite o valor do cupom de desconto (R$):"));
let valorFinal = valorCompra - cupom;

console.log(`Valor original: R$ ${valorCompra.toFixed(2)}`);
console.log(`Desconto aplicado: R$ ${cupom.toFixed(2)}`);
console.log(`Total a pagar: R$ ${valorFinal.toFixed(2)}`);