function autenticar(usuario, senha) {
    if (usuario === "gerente" && senha === "admin99") {
        console.log("Acesso Concedido.");
    } else {
        console.log("Acesso Negado.");
    }
}
autenticar("gerente", "admin99");