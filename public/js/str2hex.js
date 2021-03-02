
const receiveStr = str => new Promise((resolve, reject) => {resolve(str)});

const str2arr = str => str.replace(' ', '').split('');

const char2dec = charArr => charArr.map(char => char.charCodeAt(0));

const dec2hex = decArr => decArr.map(dec => dec.toString(16)); 

export default {
    receiveStr,
    str2arr,
    char2dec,
    dec2hex
}