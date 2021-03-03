import {receiveStr, str2arr, charArr2decArr, decArr2hexArr} from './convertData.js';
import renderReception from './renderReception.js';
import setTranslationEvt from './hexTranslate.js';

const promise = receiveStr('OW');

setTranslationEvt();

promise
    .then(str2arr)
    .then(charArr2decArr)
    .then(decArr2hexArr)
    .then(renderReception)
