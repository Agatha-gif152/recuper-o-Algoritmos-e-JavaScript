let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));

if (n1 > n2) {
    console.log(`O primeiro valor (${n1}) é o maior.`);
} else if (n2 > n1) {
    console.log(`O segundo valor (${n2}) é o maior.`);
} else {
    console.log("Ambos os números são exatamente iguais.");
}