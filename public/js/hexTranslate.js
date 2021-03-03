import {hexArr2decArr, decArr2str}  from './convertData.js';
import {$transBtn, $receptionBox, $transResult} from './ref.js';

const setTranslationEvt = () => {
    $transBtn.addEventListener('click', hexTranslate);
    $transBtn.addEventListener('click', hexTranslate);
}

// pipe 함수로 리팩토링 필요!!!!!!!!
const hexTranslate = () => {
    if($transBtn.classList.contains('inactive')) return;
    const hexArr = $receptionBox.innerText.split(' ');
    const decArr = hexArr2decArr(hexArr)
    const str = decArr2str(decArr)
    $transResult.innerText = str;
}

const initContent = () => {
    
}

export default setTranslationEvt;