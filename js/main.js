// Selecciona los elementos del DOM
const habilidadInput = document.getElementById("habilidad-input");
const moduloInput = document.getElementById("modulo-input");
const horasInput = document.getElementById("horas-input");
const minutosInput = document.getElementById("minutos-input");
const segundosInput = document.getElementById("segundos-input");
const startButton = document.getElementById("startButton");
const countDown = document.getElementById("count-down");
const nombreHabilidad = document.getElementById("nombre-habilidad");
const nombreModulo = document.getElementById("nombre-modulo");
const horasDisplay = document.getElementById("horas");
const minutosDisplay = document.getElementById("minutos");
const segundosDisplay = document.getElementById("segundos");

startButton.addEventListener("click", function() {
    // Obtén los valores de los campos de entrada
    const habilidad = habilidadInput.value;
    const modulo = moduloInput.value;
    const horas = parseInt(horasInput.value) || 0;
    const minutos = parseInt(minutosInput.value) || 0;
    const segundos = parseInt(segundosInput.value) || 0;
    
    // Establece los valores en la página de cuenta regresiva
    nombreHabilidad.innerText = habilidad;
    nombreModulo.innerText = modulo;
    horasDisplay.innerText = formatTime(horas);
    minutosDisplay.innerText = formatTime(minutos);
    segundosDisplay.innerText = formatTime(segundos);
    
    // Muestra la página de cuenta regresiva y oculta los datos de entrada
    countDown.classList.remove("disabled");
    document.getElementById("datos").classList.add("disabled");
    
    // Inicia el cronómetro
    let totalSegundos = horas * 3600 + minutos * 60 + segundos;
    
    const interval = setInterval(function() {
        if (totalSegundos <= 0) {
            clearInterval(interval);
            alert("¡Tiempo agotado!");
        } else {
            totalSegundos--;
            const horasRestantes = Math.floor(totalSegundos / 3600);
            const minutosRestantes = Math.floor((totalSegundos % 3600) / 60);
            const segundosRestantes = totalSegundos % 60;
            horasDisplay.innerText = formatTime(horasRestantes);
            minutosDisplay.innerText = formatTime(minutosRestantes);
            segundosDisplay.innerText = formatTime(segundosRestantes);
        }
    }, 1000);
});

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}