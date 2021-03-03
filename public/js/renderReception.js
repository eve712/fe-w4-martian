import rotateArrow from './rotateArrow.js';

const $receptionBox = document.querySelector('.reception');
const $txt = {
    '0' : document.querySelector('.txt_0'),
    '1' : document.querySelector('.txt_1'),
    '2' : document.querySelector('.txt_2'),
    '3' : document.querySelector('.txt_3'),
    '4' : document.querySelector('.txt_4'),
    '5' : document.querySelector('.txt_5'),
    '6' : document.querySelector('.txt_6'),
    '7' : document.querySelector('.txt_7'),
    '8' : document.querySelector('.txt_8'),
    '9' : document.querySelector('.txt_9'),
    'A' : document.querySelector('.txt_A'),
    'B' : document.querySelector('.txt_B'),
    'C' : document.querySelector('.txt_C'),
    'D' : document.querySelector('.txt_D'),
    'E' : document.querySelector('.txt_E'),
    'F' : document.querySelector('.txt_F')
}

const after2sec = () => new Promise((resolve) => setTimeout(() => resolve(), 2000)) 
const after5sec = () => new Promise((resolve) => setTimeout(() => resolve(), 5000)) 
const after400ms = () => new Promise((resolve) => setTimeout(() => resolve(), 400)) 

const renderReception = async function (hexArr) {
    let curr = 4;
    for(let i = 0; i < hexArr.length; i++) {
        const hex = hexArr[i];
        render(curr, hex, true)
        curr = hex[0]
        await after2sec();  // ======= 2초 쉬고
        render(curr, hex, false)
        curr = hex[1]
        await after5sec();  // ======= 넘어가기 전 5초 쉬고
        $txt[hex[1]].removeAttribute('style');
    }
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