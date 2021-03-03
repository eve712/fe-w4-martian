import { pipe } from './util.js';
import {receiveStr, str2arr, charArr2decArr, decArr2hexArr} from './convertData.js';
import renderReception from './renderReception.js';
import setTranslationEvt from './hexTranslate.js';

const promise = receiveStr('OH!');

setTranslationEvt();

promise
    .then(str => pipe(str2arr, charArr2decArr, decArr2hexArr)(str))
    .then(renderReception)
