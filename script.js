let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')

function updateClock(){
    let now = new Date();
    let hour = String(now.getHours()).padStart(2, '0');
    let minute = String(now.getMinutes()).padStart(2, '0');
    let second = String(now.getSeconds()).padStart(2, '0');


    digitalElement.innerHTML = `${hour}:${minute}:${second}`;
}

setInterval(updateClock, 1000);