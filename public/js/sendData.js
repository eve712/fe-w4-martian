import { $sendingMsg, $sendBtn, $receptionBox, $transResult } from './ref.js';
import { pipe } from './util.js';
import { strToHexArr } from './renderReception.js';

const setSendingMsgEvt = () => {
    $sendingMsg.addEventListener("keyup", printSendingHex);
    $sendingMsg.addEventListener("keyup", clearTransResult);
}

const getMsg = () => $sendingMsg.value;
const getHexStr = hexArr => hexArr.join(' ');
const printHexStr = str => $receptionBox.innerHTML = str;

const printSendingHex = pipe(getMsg, strToHexArr, getHexStr, printHexStr);

const clearTransResult = () => { $transResult.innerHTML = '' }

export default setSendingMsgEvt;