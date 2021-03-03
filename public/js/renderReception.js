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

const after2sec = () => new Promise((resolve) => setTimeout(() => resolve('result'), 2000)) 
const after5sec = () => new Promise((resolve) => setTimeout(() => resolve('result'), 5000)) 
const after400ms = () => new Promise((resolve) => setTimeout(() => resolve('result'), 400)) 

const renderReception = async function (hexArr) {
    let curr = 4;
    for(let i = 0; i < hexArr.length; i++) {
        const hex = hexArr[i];
        rotateArrow(curr, hex[0]);
        curr = hex[0]
        await after400ms();
        $receptionBox.innerHTML += `${curr}`;
        $txt[hex[0]].style.color = 'rgb(245, 108, 53)';
        await after2sec();
        $txt[hex[0]].removeAttribute('style');
        rotateArrow(curr, hex[1]);
        curr = hex[1]
        await after400ms();
        $receptionBox.innerHTML += `${curr} `;
        $txt[hex[1]].style.color = 'rgb(245, 108, 53)';
        await after5sec();
        $txt[hex[1]].removeAttribute('style');
    }
}


export default renderReception;