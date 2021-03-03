import * as convert from './convertData.js';
import renderReception from './renderReception.js';

const promise = convert.receiveStr('HOW');

promise
    // 위에서 파라미터로 넘겨준 문자열 → 16진수
    .then(convert.str2arr)
    .then(convert.charArr2decArr)
    .then(convert.decArr2hexArr)
    
    // ===여기서 16진수 수신, 화살표 rotate, 송수신정보 출력===
    .then(renderReception)

    // 송수신정보로 받은 16진수 → 문자열
    // 송수신정보 내용을 공백없이 배열로 만든 후 
    .then(convert.hexArr2decArr)
    .then(convert.decArr2str)
    .then(arr => console.log(arr));