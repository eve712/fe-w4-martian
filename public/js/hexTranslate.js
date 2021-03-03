import {hexArr2decArr, decArr2str}  from './convertData.js';

const $translation = document.querySelector('.translation');
const $receptionBox = document.querySelector('.reception');

const setTranslationEvt = () => {
    $translation.addEventListener('click', hexTranslate);
}

// pipe 함수로 리팩토링 필요!!!!!!!!
const hexTranslate = () => {
    if($translation.classList.contains('inactive')) return;
    const hexArr = $receptionBox.innerText.split(' ');
    const decArr = hexArr2decArr(hexArr)
    const str = decArr2str(decArr)
    $receptionBox.innerText = str;
}

export default setTranslationEvt;