import { $sendingMsg, $sendBtn, $receptionBox } from './ref.js';
import { pipe } from './util.js';
import { strToHexArr } from './renderReception.js';

const setSendingMsgEvt = () => {
    $sendingMsg.addEventListener("keyup", printSendingHex);
}

const getMsg = () => $sendingMsg.value;
const getHexStr = hexArr => hexArr.join(' ');
const printHexStr = str => $receptionBox.innerHTML = str;

const printSendingHex = pipe(getMsg, strToHexArr, getHexStr, printHexStr);

export default setSendingMsgEvt;