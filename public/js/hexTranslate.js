import * as dom from './ref.js';
import { pipe } from './util.js';
import { hexArr2decArr, decArr2str }  from './convertData.js';


const setTranslationEvt = () => {
    dom.$transBtn.addEventListener('click', hexTranslate);
    dom.$transBtn.addEventListener('click', initContent);
}

// 16진수 해석해주는 이벤트 핸들러
const hexTranslate = () => {
    if(dom.$transBtn.classList.contains('inactive')) return;
    const result = pipe(getHexArr, getDecArr, getStr)();
    dom.$transResult.innerText = result;
}

const getHexArr = () => dom.$receptionBox.innerText.split(' ');
const getDecArr = hexArr => hexArr2decArr(hexArr);
const getStr = decArr => decArr2str(decArr)

const initPrevRender = () => {
    if(dom.$arrow.getAttribute('style') === null) return;

    dom.$arrow.removeAttribute('style');
    const info =  dom.$receptionBox.innerText;
    const lastChar =  info[info.length -1];
    dom.$txt[lastChar].removeAttribute('style');
    dom.$transBtn.classList.add('inactive');
}
const initPrevHex = () => { dom.$receptionBox.innerText = '' }

const initContent = pipe(initPrevRender, initPrevHex);

export {
    setTranslationEvt,
    initPrevRender
}