let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;
let isRunning = false;

const timeDisplay = document.getElementById("time");
const lapsList = document.getElementById("laps");

document.getElementById("startBtn").onclick = start;
document.getElementById("pauseBtn").onclick = pauseResume;
document.getElementById("resetBtn").onclick = reset;
document.getElementById("toggleTheme").onclick = toggleTheme;

// Update UI
function updateDisplay(){
let h = hours < 10 ? "0" + hours : hours;
let m = minutes < 10 ? "0" + minutes : minutes;
let s = seconds < 10 ? "0" + seconds : seconds;

timeDisplay.innerText = `${h}:${m}:${s}`;
}

// Start
function start(){
if(isRunning) return;

timer = setInterval(() => {
seconds++;

if(seconds === 60){
seconds = 0;
minutes++;
}

if(minutes === 60){
minutes = 0;
hours++;
}

updateDisplay();
},1000);

isRunning = true;
}

// Pause + Resume + Lap
function pauseResume(){
if(isRunning){
    // Pause + store lap
    clearInterval(timer);
    isRunning = false;

    let li = document.createElement("li");
    li.innerText = timeDisplay.innerText;
    lapsList.appendChild(li);

    document.getElementById("pauseBtn").innerText = "Resume";
}
else{
    // Resume
    start();
    document.getElementById("pauseBtn").innerText = "Pause";
}
}

// Reset
function reset(){
clearInterval(timer);
timer = null;
isRunning = false;

seconds = 0;
minutes = 0;
hours = 0;

updateDisplay();
lapsList.innerHTML = "";

document.getElementById("pauseBtn").innerText = "Pause";
}

// Dark / Light Mode
function toggleTheme(){
document.body.classList.toggle("light");

let btn = document.getElementById("toggleTheme");
btn.innerText = document.body.classList.contains("light") ? "🌞" : "🌙";
}