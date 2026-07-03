function alertaTemperatura(temp) {
    if (temp < 15) {
        console.log("Clima Frio");
    } else if (temp >= 15 && temp <= 28) {
        console.log("Clima Agradável");
    } else {
        console.log("Clima Quente");
    }
}
alertaTemperatura(22);