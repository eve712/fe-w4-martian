import { $receptionBox, $transBtn, $txt } from './ref.js';
import rotateArrow from './rotateArrow.js';

const afterMs = ms => new Promise((resolve) => setTimeout(() => resolve(), ms)) 

// 전달 받은 16진수배열 → 화살표 돌리고, 송수신정보에 출력
const renderReception = async function (hexArr) {
    let curr = '4';
    for(let i = 0; i < hexArr.length; i++) {
        const hex = hexArr[i];
        render(hex, true)
        curr = hex[0]
        await afterMs(1000);  // ======= 1초 쉬고
        render(hex, false)
        curr = hex[1]
        if (i < hexArr.length - 1) {
            await afterMs(2000);  // ======= 넘어가기 전 2초 쉬고
            $txt[curr].removeAttribute('style');
        }
    }
    $transBtn.classList.remove('inactive');
}

const render = (hex, isFirst) => {
    if(!isFirst) $txt[hex[0]].removeAttribute('style');
    const next = isFirst ? hex[0] : hex[1];
    rotateArrow(next);
    printInfo(next, isFirst)
}

const printInfo = async function (curr, isFirst) {
    await afterMs(400);
    if(isFirst) $receptionBox.innerHTML += `${curr}`;
    else $receptionBox.innerHTML += `${curr} `;
    $txt[curr].style.color = 'rgb(245, 108, 53)';
}


export default renderReception;