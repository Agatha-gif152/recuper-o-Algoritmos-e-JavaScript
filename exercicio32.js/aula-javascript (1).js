function simularAdivinhacaoSenha(tentativas) {
    const senhaSecreta = 1234;
    let i = 0;
    
    while (i < tentativas.length) {
        console.log(`Digitado: ${tentativas[i]}`);
        if (tentativas[i] === senhaSecreta) {
            console.log("Acesso Permitido! Senha Correta.");
            break;
        } else {
            console.log("Senha Incorreta. Tente novamente.");
        }
        i++;
    }
}
simularAdivinhacaoSenha([1111, 2222, 1234]); 