let distancia = Number(prompt("Digite a distância percorrida (em km):"));
let combustivel = Number(prompt("Digite o total de combustível gasto (em litros):"));
let consumoMedio = distancia / combustivel;

console.log(`O consumo médio do veículo é de: ${consumoMedio.toFixed(2)} km/l`);