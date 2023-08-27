const hora = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const second = document.querySelector("#seconds");

const relogio = setInterval(function time() {

    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    hora.textContent = hr;
    minutos.textContent = min;
    second.textContent = s;
}) 

