const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function iniciar(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(rodar, 10);
        isRunning = true;
    }
}
function parar(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function resetar(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}
function rodar(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let horas = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutos = Math.floor(elapsedTime / (1000 * 60) % 60);
    let segundos = Math.floor(elapsedTime / 1000 % 60);
    let milisegundos = Math.floor(elapsedTime % 1000 / 10);

    horas = String(horas).padStart(2, "0");
    minutos = String(minutos).padStart(2, "0");
    segundos = String(segundos).padStart(2, "0");
    milisegundos = String(milisegundos).padStart(2, "0");

    display.textContent = `${horas}:${minutos}:${segundos}:${milisegundos}`;
}