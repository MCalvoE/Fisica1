let v0 = null;
let angle = null;
let g = -9.81;
let t = 0;
let isSimulating = false;

function setup() {
    createCanvas(600, 500);

    let angle_rad = radians(angle);

    v0x = v0 * cos(angle_rad);
    v0y = v0 * sin(angle_rad);

    t_total = (2 * v0y) / g;

    x = 0;
    y = 10;

    document.getElementById('startButton').addEventListener('click', startSimulation);
    document.getElementById('resetButton').addEventListener('click', resetSimulation);
}

function startSimulation() {
    let v0Input = document.getElementById('v0').value;
    let angleInput = document.getElementById('angle').value;

    if (v0Input === "" || angleInput === "") {
        alert("Error: Ambos valores deben ser ingresados.");
        return;
    }

    let v0Value = parseFloat(v0Input);
    let angleValue = parseFloat(angleInput);

    if (v0Value <= 0) {
        alert("Error: La velocidad inicial debe ser mayor a 0.");
        return;
    }

    if (angleValue < 0 || angleValue >= 90) {
        alert("Error: El ángulo debe estar entre 0° y 90°.");
        return;
    }

    v0 = v0Value;
    angle = radians(angleValue) * -1;
    t = 0;
    isSimulating = true;
    loop();
}

function draw() {
    background(220);
    drawAxes();

    let x = v0x * t_total;
    let y = v0y * t_total - 0.5 * g * t_total * t_total;
    ellipse(x, height - y, 10, 10);

    if (isSimulating) {
        let dt = deltaTime / 1000;
        t += dt;

        let xPos = v0 * cos(angle) * t;
        let yPos = y - (v0 * sin(angle) * t - 0.5 * g * t * t);

        let vX = v0 * cos(angle);
        let vY = v0 * sin(angle) - g * t;
        let v = sqrt(vX * vX + vY * vY);

        if (yPos <= 0) {
            t = (2 * v0 * sin(angle)) / g;
            xPos = v0 * cos(angle) * t;
            yPos = 0;
            v = 0;

            isSimulating = false;
            noLoop();
        }

        fill(0);
        noStroke();
        ellipse(xPos, height - yPos, 10, 10);

        document.getElementById('posX').textContent = xPos.toFixed(2);
        document.getElementById('posY').textContent = yPos.toFixed(2);
        document.getElementById('displayT').textContent = t.toFixed(2);
        document.getElementById('displayV').textContent = v.toFixed(2);
    }
}

function drawAxes() {
    stroke(0);
    strokeWeight(2);
    line(0, height - 1, width, height - 1);
    line(0, 0, 0, height);

    fill(0);
    textSize(16);
    textAlign(CENTER);
    text("X", width - 20, height - 20);
    text("Y", 20, 20);
}
function resetSimulation() {
    v0 = null;
    angle = null;
    t = 0;
    isSimulating = false;
    document.getElementById('v0').value = "";
    document.getElementById('angle').value = "";
    loop();
}