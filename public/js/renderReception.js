import { $receptionBox, $transBtn, $txt } from './ref.js';
import rotateArrow from './rotateArrow.js';

const after1sec = () => new Promise((resolve) => setTimeout(() => resolve(), 1000)) 
const after2sec = () => new Promise((resolve) => setTimeout(() => resolve(), 2000)) 
const after400ms = () => new Promise((resolve) => setTimeout(() => resolve(), 400)) 

const renderReception = async function (hexArr) {
    let curr = '4';
    for(let i = 0; i < hexArr.length; i++) {
        const hex = hexArr[i];
        render(curr, hex, true)
        curr = hex[0]
        await after1sec();  // ======= 1초 쉬고
        render(curr, hex, false)
        curr = hex[1]
        if (i < hexArr.length - 1) {
            await after2sec();  // ======= 넘어가기 전 2초 쉬고
            $txt[curr].removeAttribute('style');
        }
    }
    $transBtn.classList.remove('inactive');
}

const render = (curr, hex, isFirst) => {
    if(!isFirst) $txt[hex[0]].removeAttribute('style');
    const destination = isFirst ? hex[0] : hex[1];
    rotateArrow(curr, destination);
    printInfo(destination, isFirst)
}

const printInfo = async function (curr, isFirst) {
    await after400ms();
    if(isFirst) $receptionBox.innerHTML += `${curr}`;
    else $receptionBox.innerHTML += `${curr} `;
    $txt[curr].style.color = 'rgb(245, 108, 53)';
}


export default renderReception;