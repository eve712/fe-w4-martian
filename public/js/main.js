import { pipe } from './util.js';
import {receiveStr, str2arr, charArr2decArr, decArr2hexArr} from './convertData.js';
import renderReception from './renderReception.js';
import setTranslationEvt from './hexTranslate.js';

// 파라미터로 화성에 송신할 문자열 받아 프라미스 객체 생성해서 반환.
const promise = receiveStr('OH!');

setTranslationEvt();

promise
    .then(str => pipe(
        str2arr, 
        charArr2decArr, 
        decArr2hexArr)(str))
    .then(renderReception)
