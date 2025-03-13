const relogio = document.querySelector('.relogio')
let seconds = 0;
let timer;

const getTimeFromSeconds = (seconds) => {
    const date = new Date (seconds * 1000)
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const startTimer = () => {
    timer = setInterval(function() {
        seconds++;
        relogio.innerHTML = `${getTimeFromSeconds(seconds)}`
    }, 1000);
}

const pauseTimer = () => {
    clearInterval(timer)
}

const stopTimer = () => {
    clearInterval(timer)
    seconds = 0
    relogio.innerHTML = `00:00:00`
}

document.addEventListener('click', function(e) {
    const elemento = e.target
    
    if (elemento.classList.contains('zerar')) {
        relogio.style.color = "rgb(0, 0, 0)";
    stopTimer();
    } if (elemento.classList.contains('pausar')) {
        relogio.style.color = "rgb(255, 0, 0)";
    pauseTimer()
    } if (elemento.classList.contains('iniciar')) {
        relogio.style.color = "rgb(0, 0, 0)";
        clearInterval(timer)
        startTimer();
    }
});
