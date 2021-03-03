import {hexArr2decArr, decArr2str}  from './convertData.js';
import * as dom from './ref.js';

const setTranslationEvt = () => {
    dom.$transBtn.addEventListener('click', hexTranslate);
    dom.$transBtn.addEventListener('click', initContent);
}

// pipe 함수로 리팩토링 필요!!!!!!!!
const hexTranslate = () => {
    if(dom.$transBtn.classList.contains('inactive')) return;
    const hexArr = dom.$receptionBox.innerText.split(' ');
    const decArr = hexArr2decArr(hexArr)
    const str = decArr2str(decArr)
    dom.$transResult.innerText = str;
}

const initContent = () => {
    dom.$arrow.removeAttribute('style');
    const info =  dom.$receptionBox.innerText;
    const lastChar =  info[info.length -1];
    dom.$txt[lastChar].removeAttribute('style');
    dom.$receptionBox.innerText = '';
    dom.$transBtn.classList.add('inactive');
}

export default setTranslationEvt;