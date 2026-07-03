const identidade = [];

for (let i = 0; i < 4; i++) {
    identidade[i] = [];
    for (let j = 0; j < 4; j++) {
        if (i === j) {
            identidade[i][j] = 1;
        } else {
            identidade[i][j] = 0;
        }
    }
}

// Exibindo a matriz formatada
for (let i = 0; i < 4; i++) {
    console.log(identidade[i].join(" "));
}