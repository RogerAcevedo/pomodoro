let start = document.getElementById('start');
let stop  = document.getElementById('stop');
let reset= document.getElementById('reset');

let workMinutes  = document.getElementById('work_minutes');
let workSeconds = document.getElementById('work_seconds');


let breakMinutes  = document.getElementById('break_minutes');
let breakSeconds = document.getElementById('break_seconds');

// STORE REFERENCE TO A TIMER VARIABLE
let startTimer; //originally set as undefined

// * START BUTTON
start.addEventListener('click', function() {
    if(startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    } else {
        alert('TIME HAS BEGUN, YOUNG ONE')
    }
})

// * RESET BUTTON
reset.addEventListener('click', function() {
    workMinutes.innerText = 25;
    workSeconds.innerText = "00";

    breakMinutes.innerText = 5;
    breakSeconds.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopTimer()
    startTimer = undefined
})

// * STOP BUTTON
stop.addEventListener('click', function() {
    stopTimer()
    startTimer = undefined
})

//Start Timer Function
function timer(){
    //WORK TIMER COUNTDOWN
    if(workSeconds.innerText != 0){
        workSeconds.innerText--;
    } else if(workMinutes.innerText != 0 && workSeconds.innerText == 0){
        workSeconds.innerText = 59;
        workMinutes.innerText--;
    }

    //BREAK TIMER COUNTDOWN
    if(workMinutes.innerText == 0 && workSeconds.innerText == 0){
        if(breakSeconds.innerText != 0){
            breakSeconds.innerText--;
        } else if(breakMinutes.innerText != 0 && breakSeconds.innerText == 0){
            breakSeconds.innerText = 59;
            breakMinutes.innerText--;
        }
    }

    //INCREMENT CYCLE BY 1
    if(workMinutes.innerText == 0 && workSeconds.innerText == 0 && breakMinutes.innerText == 0 && breakSeconds.innerText == 0){
        workMinutes.innerText = 25;
        workSeconds.innerText = "00";

        breakMinutes.innerText = 5;
        breakSeconds.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

// STOP FUNCTION
function stopTimer() {
    clearInterval(startTimer);
}



