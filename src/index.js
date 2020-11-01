import './styles.css';
import colors from './js/colors';
import { btnStart, btnStop } from './js/selectors';
import ColorPicker from './js/plagin';

btnStart.addEventListener('click', () => {
    colorPicker.onBtnStart()
});
btnStop.addEventListener('click', () => {
    colorPicker.onBtnStop()
});


const colorPicker = new ColorPicker();




