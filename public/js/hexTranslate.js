import * as dom from './ref.js';
import { pipe } from './util.js';
import { hexArr2decArr, decArr2str }  from './convertData.js';


const setTranslationEvt = () => {
    dom.$transBtn.addEventListener('click', hexTranslate);
    dom.$transBtn.addEventListener('click', initContent);
}

// pipe함수에 쓰일 함수들
const getHexArr = () => dom.$receptionBox.innerText.split(' ');
const getDecArr = hexArr => hexArr2decArr(hexArr);
const getStr = decArr => decArr2str(decArr)

// 16진수 해석해주는 이벤트 핸들러
const hexTranslate = () => {
    if(dom.$transBtn.classList.contains('inactive')) return;
    const result = pipe(
        getHexArr, 
        getDecArr, 
        getStr)();
    dom.$transResult.innerText = result;
}

// 화살표 방향, 글자색, 송수신정보, 버튼 초기화하는 이벤트 핸들러
const initContent = () => {
    dom.$arrow.removeAttribute('style');
    const info =  dom.$receptionBox.innerText;
    const lastChar =  info[info.length -1];
    dom.$txt[lastChar].removeAttribute('style');
    dom.$receptionBox.innerText = '';
    dom.$transBtn.classList.add('inactive');
}

export default setTranslationEvt;