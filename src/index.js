import './styles.css';
import colors from './colors';

// let intervalId = null;
// let isActive = false;
export const body = document.querySelector('body');
export const btnStart = document.querySelector('[data-action="start"]');
export const btnStop = document.querySelector('[data-action="stop"]');

btnStart.addEventListener('click', () => {
    colorPicker.onBtnStart()
});
btnStop.addEventListener('click', () => {
    colorPicker.onBtnStop()
});

class ColorPicker {
    constructor({colors, onChangeColor}) {
        this.intervalId = null;
        this.isActive = false;
        this.onChangeColor = onChangeColor;
        this.colors = colors;
    }

    onBtnStart() {
    if (this.isActive) {
        return;
    }

        this.isActive = true;
        
    this.intervalId = setInterval(() => {
        this.onChangeColor(colors);
    //    changeColor(colors);
    //    console.log('clicks');
    }, 1000);
    }
    
    onBtnStop() {
    clearInterval(this.intervalId);
    this.isActive = false;
}
}

const colorPicker = new ColorPicker({onChangeColor: changeColor});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor(colorsArray) {
    const index = randomIntegerFromInterval(0, 5);
    return body.style.backgroundColor = colorsArray[index];
}
