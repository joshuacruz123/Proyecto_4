const deg = 6;

const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');
const relojdijital = document.querySelector('.digital'); 

setInterval(() => {
    let tiempo = new Date();
    let hr = tiempo.getHours();
    let min = tiempo.getMinutes();
    let seg = tiempo.getSeconds();

    
    let ampm = (hr >= 12) ? "PM" : "AM";
    hr = (hr % 12) || 12; 

    let hrDeg = (hr * 30) + (min * 0.5); 
    let minDeg = (min * deg) + (seg * 0.1); 
    let segDeg = seg * deg; 

    horas.style.transform = `rotate(${hrDeg}deg)`;
    minutos.style.transform = `rotate(${minDeg}deg)`;
    segundos.style.transform = `rotate(${segDeg}deg`;

    
    let horaFormateada = (hr < 10 ? "0" + hr : hr) + ":" + (min < 10 ? "0" + min : min) + ":" + (seg < 10 ? "0" + seg : seg) + " " + ampm;

    relojdijital.innerHTML = horaFormateada;
}, 1000);
