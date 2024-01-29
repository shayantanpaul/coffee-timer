// Timer functionality
let timerInterval;
const display = $('#realtimeTimer');

function startTimer(duration) {
    clearInterval(timerInterval);
    let timer = duration, minutes, seconds;
    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            clearInterval(timerInterval);
            display.text("Your coffee is ready!");
            alarmSound.play();
        }
    }, 1000);
}

function stopTimer(duration) {
    clearInterval(timerInterval);
    display.text("00:00");
}

$('#lightCoffee').click(function () {
    startTimer(5 * 60);
});

$('#darkCoffee').click(function () {
    startTimer(0.125 * 60);
});

$('#Custom').click(function () {
    let input = prompt("Enter the desired time in minutes and seconds (e.g., 3 minutes 30 seconds = 3.5):");
    let parts = input.split('.');
    let minutes = parseInt(parts[0], 10);
    let seconds = 0;
    if (parts.length > 1) {
        seconds = parseInt(parts[1], 10);
    }
    let totalMinutes = minutes + (seconds / 60);
    startTimer(totalMinutes * 60);
});

$('#stop').click(function () {
    stopTimer(0);
    alarmSound.pause();
});