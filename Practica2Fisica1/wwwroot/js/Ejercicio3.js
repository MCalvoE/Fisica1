function calcularSeparacion() {

    var distanciaInicial = parseFloat(document.getElementById("distanciaInicial").value);
    var aceleracion1 = parseFloat(document.getElementById("aceleracion1").value);
    var aceleracion2 = parseFloat(document.getElementById("aceleracion2").value);

    var tiempo = 3.0;

    var distancia1 = (0.5 * aceleracion1 * Math.pow(tiempo, 2));
    var distancia2 = (0.5 * aceleracion2 * Math.pow(tiempo, 2));

    var separacionFinal = distanciaInicial + distancia1 + distancia2;

    document.getElementById("resultadoSeparacion").innerText =
        "La separación final después de 3 segundos es de: " + separacionFinal.toFixed(2) + " metros.";
}

function calcularEncuentro() {
    var distanciaInicial = parseFloat(document.getElementById("distanciaInicial").value);
    var aceleracion1 = parseFloat(document.getElementById("aceleracion1").value);
    var aceleracion2 = parseFloat(document.getElementById("aceleracion2").value);

    var tiempoEncuentro = Math.sqrt(distanciaInicial / (0.5 * (aceleracion1 + aceleracion2)));

    document.getElementById("resultadoEncuentro").innerText =
        "Los carritos se encontrarán en: " + tiempoEncuentro.toFixed(2) + " segundos.";
}