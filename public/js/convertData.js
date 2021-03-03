// ======= 문자열 → 16진수 =======
const receiveStr = str => new Promise((resolve, reject) => {resolve(str)});

const str2arr = str => str.replace(' ', '').split('');

const charArr2decArr = charArr => charArr.map(char => char.charCodeAt(0));

const decArr2hexArr = decArr => decArr.map(dec => dec.toString(16)); 

// ======= 16진수 → 문자열 =======
const hexArr2decArr = hexArr => hexArr.map(hex => parseInt(hex, 16));

const decArr2str = decArr => String.fromCharCode(...decArr);

export {
    receiveStr,
    str2arr,
    charArr2decArr,
    decArr2hexArr,
    hexArr2decArr,
    decArr2str
}