function calcularTiempo() {

    var altura = parseFloat(document.getElementById("altura").value);

    var velocidad = 100;

    if (isNaN(altura) || altura <= 0) {
        document.getElementById("resultado").innerText = "Por favor, ingrese una estatura válida.";
        return;
    }

    var tiempo = altura / velocidad;

    document.getElementById("resultado").innerText = "El tiempo estimado es: " + tiempo.toFixed(5) + " segundos.";
}