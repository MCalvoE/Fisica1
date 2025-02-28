function calcularTiempo() {

    var longitudInicial = parseFloat(document.getElementById("longitudInicial").value);
    var longitudFinal = parseFloat(document.getElementById("longitudFinal").value);
    var unidad = document.getElementById("unidadTiempo").value;

    var tasaCrecimiento = 2;

    if (isNaN(longitudInicial) || isNaN(longitudFinal) || longitudInicial <= 0 || longitudFinal <= 0 || longitudFinal <= longitudInicial) {
        document.getElementById("resultado").innerText = "Por favor, ingrese longitudes válidas.";
        return;
    }

    var distancia = longitudFinal - longitudInicial;

    var tiempoMeses = distancia / tasaCrecimiento;

    var tiempoConvertido;
    if (unidad === "semanas") {
        tiempoConvertido = tiempoMeses * 4;
    } else if (unidad === "dias") {
        tiempoConvertido = tiempoMeses * 30;
    } else {
        tiempoConvertido = tiempoMeses;
    }

    document.getElementById("resultado").innerText = "El tiempo estimado es: " + tiempoConvertido.toFixed(2) + " " + unidad + ".";
}