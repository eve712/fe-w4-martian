import rotateArrow from './rotateArrow.js';

const after2sec = () => new Promise((resolve) => setTimeout(() => resolve('result'), 2000)) 
const after5sec = () => new Promise((resolve) => setTimeout(() => resolve('result'), 5000)) 

const renderReception = async function (hexArr) {
    let curr = 4;
    for(let i = 0; i < hexArr.length; i++) {
        const hex = hexArr[i];
        rotateArrow(curr, hex[0]);
        curr = hex[0]
        await after2sec();
        rotateArrow(curr, hex[1]);
        curr = hex[1]
        await after5sec();
    }
}
export default renderReception;