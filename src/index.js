// import './styles.css';
import colors from './colors';

const body = document.querySelector('body');
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
let intervalId = null;
let isActive = false;

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);

function onBtnStart() {
    if (isActive) {
        return;
    }
    isActive = true;
   intervalId = setInterval(() => {
       changeColor(colors);
       console.log('clicks');
   }, 1000);
    
}

function onBtnStop() {
    clearInterval(intervalId);
    isActive = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor(colorsArray) {
    const index = randomIntegerFromInterval(0, 5);
    return body.style.backgroundColor = colorsArray[index];
}
