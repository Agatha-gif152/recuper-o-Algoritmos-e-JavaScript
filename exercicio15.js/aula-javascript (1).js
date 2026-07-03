function analisarEmprestimo(salarioBruto, parcelaMensal) {
    const limite = salarioBruto * 0.30;
    if (parcelaMensal <= limite) {
        console.log("Parecer: Aprovado");
    } else {
        console.log("Parecer: Negado");
    }
}
analisarEmprestimo(3000, 800); 
