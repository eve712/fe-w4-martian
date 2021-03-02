import str2hex from './str2hexArr.js';

const promise = str2hex.receiveStr('HOW');

promise
    .then(str2hex.str2arr)
    .then(str2hex.char2dec)
    .then(str2hex.dec2hex)