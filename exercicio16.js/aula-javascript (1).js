function statusAcademico(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    if (media >= 7.0) {
        console.log("Aprovado");
    } else if (media >= 5.0 && media <= 6.9) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
}
statusAcademico(6.5, 5.8);