import str2hex from './str2hexArr.js';

const promise = str2hex.receiveStr('HOW');

promise
    .then(str2hex.str2arr)
    .then(str2hex.charArr2decArr)
    .then(str2hex.decArr2hexArr)