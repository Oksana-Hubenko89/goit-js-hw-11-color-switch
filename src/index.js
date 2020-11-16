import './styles.css';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    startBtn:document.querySelector('[data-action="start"]'),
    stopBtn:document.querySelector('[data-action="stop"]'),
};

class ColorTimer {
    constructor() {
        this.randomColorId = null;
        this.isActive = false;
        //this.disabled = false;
    }
    
    start() {
        if (this.isActive) {
            return;
        } 
        //this.disabled = true;
        this.isActive = true;
        this.randomColorId = setInterval(() => {
            document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
        }, 1000);
    }
    stop() {
        clearInterval(this.randomColorId);
        this.isActive = false;
        //this.disabled = false;
    }
};

const colorT = new ColorTimer();

refs.startBtn.addEventListener('click', colorT.start.bind(colorT));
refs.stopBtn.addEventListener('click', colorT.stop.bind(colorT));