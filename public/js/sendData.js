import { $sendingMsg, $sendBtn, $receptionBox, $transResult } from './ref.js';
import { pipe } from './util.js';
import { strToHexArr, renderReception } from './renderReception.js';
import { initPrevRender } from './hexTranslate.js';

const setSendingMsgEvt = () => {
    $sendingMsg.addEventListener('keyup', printSendingHex);
    $sendingMsg.addEventListener('keydown', clearTransResult);
    $sendingMsg.addEventListener('keydown', initPrevRender);
    $sendBtn.addEventListener('click', renderSendingHex);
}

const getSendingMsg = () => $sendingMsg.value;
const getHexStr = hexArr => hexArr.join(' ');
const printHexStr = str => $receptionBox.innerHTML = str;
const getHexArr = () => $receptionBox.innerText.split(' ');
const clearReceptionBox = hexArr => {
    $receptionBox.innerText = '';
    return hexArr;
}

// ===== 이벤트 핸들러 =====
const printSendingHex = pipe(getSendingMsg, strToHexArr, getHexStr, printHexStr);
const clearTransResult = () => { $transResult.innerHTML = '' }
const renderSendingHex = pipe(getHexArr, clearReceptionBox, renderReception);

export default setSendingMsgEvt;