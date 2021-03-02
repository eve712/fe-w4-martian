const receiveStr = str => new Promise((resolve, reject) => {resolve(str)});

const str2arr = str => str.replace(' ', '').split('');

const charArr2decArr = charArr => charArr.map(char => char.charCodeAt(0));

const decArr2hexArr = decArr => decArr.map(dec => dec.toString(16)); 

export default {
    receiveStr,
    str2arr,
    charArr2decArr,
    decArr2hexArr
}