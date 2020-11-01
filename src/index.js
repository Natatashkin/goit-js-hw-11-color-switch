import './styles.css';
import colors from './colors';

// let intervalId = null;
// let isActive = false;
export const body = document.querySelector('body');
export const btnStart = document.querySelector('[data-action="start"]');
export const btnStop = document.querySelector('[data-action="stop"]');
export const nameColor = document.querySelector('.js-color');

btnStart.addEventListener('click', () => {
    colorPicker.onBtnStart()
});
btnStop.addEventListener('click', () => {
    colorPicker.onBtnStop()
});

class ColorPicker {
    constructor() {
        this.intervalId = null;
        this.isActive = false;
        this.colors = colors;
    }

    onBtnStart() {
    if (this.isActive) {
        return;
    }

        this.isActive = true;
        
    this.intervalId = setInterval(() => {
        this.onChangeColor();
    
    }, 1000);
    }
    
    onBtnStop() {
    clearInterval(this.intervalId);
        this.isActive = false;
    }

    randomIntegerFromInterval(min, max) {
        const index = this.colors[Math.floor(Math.random() * (max - min + 1) + min)];
        if (index === this.index) {
            this.randomIntegerFromInterval(min, max);
        } else {
            this.index = index;
        }
    }
    
    onChangeColor() {
        this.randomIntegerFromInterval(0, this.colors.length - 1);
        body.style.backgroundColor = this.index;
        nameColor.style.backgroundColor = this.index;
        nameColor.textContent = this.index;
}   
}

const colorPicker = new ColorPicker();




