import colors from './colors';
import { body, nameColor } from './selectors';
export default class {
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
